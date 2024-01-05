from django.http import JsonResponse
from .models import scrape
from .serializers import ScrapeSerializer
from rest_framework.decorators import api_view, permission_classes, renderer_classes
from rest_framework.response import Response
from rest_framework import status
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from rest_framework.permissions import AllowAny
from rest_framework.renderers import JSONRenderer
import re

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])  # Allow any origin to access this view
@renderer_classes([JSONRenderer])  # Use JSONRenderer with CORS headers
def scraped_links(request):

    if request.method == 'GET':
        links = scrape.objects.all()
        serializer = ScrapeSerializer(links, many=True)
        return JsonResponse({'links': serializer.data})

    if request.method == 'POST':
        job_to_scrape = request.data.get('job_title')

        if not job_to_scrape:
            return Response({'error': 'job title not provided in the request'}, status=status.HTTP_400_BAD_REQUEST)

        options = Options()
        options.add_argument("--headless")
        options.add_argument("--disable-gpu")
        options.add_experimental_option("detach", True)

        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

        driver.get("https://www.google.com/")

        # search input xpath for youtube
        # search_input = driver.find_element("xpath", "//input[@id='search']")

        # search input xpath for google
        search_input = driver.find_element("xpath", "//*[@id='APjFqb']")

        # various search filters
        input = job_to_scrape
        input_addOns = [" ", "#DayInTheLife", " #OfficeLife", " #BehindTheDesk", " #OnTheJob", " #MyWorkDay"]

        # use a set to store unique links to avoid duplicates
        unique_links = set()
        youtube_links = ""

        for a in range(1):
            search_input.clear()  # Delete the current stuff in search input field
            search_input.send_keys('site:youtube.com/ "' + input + '" "' + input_addOns[1] + '"')
            
            # Wait until the input field has a non-empty value
            WebDriverWait(driver, 10).until(EC.text_to_be_present_in_element(("xpath", "//*[@id='APjFqb']"), ''))
            search_input.send_keys(Keys.RETURN)

            links = driver.find_elements("xpath", "//a[@href and contains(@href, '/watch?v=') and not(contains(@href, 'googleads'))]")

            for link in links:
            # get the link and then use regular expression to 'match' the base link (removing time stamps and duplicate links)
                href = link.get_attribute("href")
                match_link = re.match(r'https://www\.youtube\.com/watch\?v=[^&]+', href)

                if match_link:
                    base_href = match_link.group()

                    if base_href not in unique_links:
                        unique_links.add(base_href)
                        print(base_href)
                        youtube_links = youtube_links + base_href + " "
                else:
                # if re.match returns None, add the link directly to unique_links
                    if href not in unique_links:
                        unique_links.add(href)
                        print(href)
                        youtube_links = youtube_links + href + " "


        # Save the scraped data to the database
        scrape_instance = scrape.objects.create(links=youtube_links)

        # Serialize and return the saved data
        serializer = ScrapeSerializer(scrape_instance)

        driver.quit()  # Close the browser
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response({'error': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)

# Json input:
# {
#     "job_title": "Civil Engineer"
# }