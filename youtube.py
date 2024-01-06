from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import re

def scrape_youtube(input):

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
    inputs = [" ", "Civil Engineering", "Plumber", "Astronaut"]
    input_addOns = [" ", "#DayInTheLife", " #OfficeLife", " #BehindTheDesk", " #OnTheJob", " #MyWorkDay"]
    input_location = [" ", " Canada", " Saudi Arabia", " USA"]
    input_gender = [" ", " Male", " Female"]

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
            match_link = re.match(r'(https://(www|m)\.youtube\.com/watch\?v=[^&]+)', href)

            if match_link:
                base_href = match_link.group()

                if base_href not in unique_links:
                    unique_links.add(base_href)
                    youtube_links = youtube_links + base_href + " "
                    print(base_href)
            else:
            # if re.match returns None, add the link directly to unique_links
                if href not in unique_links:
                    unique_links.add(href)
                    youtube_links = youtube_links + href + " "
                    print(href)

    return youtube_links
    driver.quit()

input = "Software Tester"
result_links = scrape_youtube(input)
print(result_links)