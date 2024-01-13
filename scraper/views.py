from django.http import JsonResponse
from .models import scrape
from .serializers import ScrapeSerializer
from rest_framework.decorators import api_view, permission_classes, renderer_classes
from rest_framework.response import Response
from rest_framework import status
from selenium.webdriver.support import expected_conditions as EC
from rest_framework.permissions import AllowAny
from rest_framework.renderers import JSONRenderer
from scraper.scraping.youtube import scrape_youtube
from scraper.scraping.tiktok import scrape_tiktok
from scraper.scraping.linkedin import scrape_linkedin
from scraper.scraping.reddit import scrape_reddit

import random

@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([AllowAny])  # Allow any origin to access this view
@renderer_classes([JSONRenderer])  # Use JSONRenderer with CORS headers
def scraped_links(request):

    if request.method == 'GET':
        links = scrape.objects.all()
        serializer = ScrapeSerializer(links, many=True)
        return JsonResponse({'links': serializer.data})

    elif request.method == 'POST':
        job_to_scrape = request.data.get('job_title')

        if not job_to_scrape:
            return Response({'error': 'job title not provided in the request'}, status=status.HTTP_400_BAD_REQUEST)

        combined_links = ""

        combined_links = combined_links + scrape_youtube(job_to_scrape).rstrip() + " "
        combined_links = combined_links + scrape_tiktok(job_to_scrape).rstrip() + " "
        combined_links = combined_links + scrape_linkedin(job_to_scrape).rstrip() + " "
        combined_links = combined_links + scrape_reddit(job_to_scrape).rstrip()

        links_list = combined_links.split(" ")
        random.shuffle(links_list)
        shuffled_links = ' '.join(links_list)

        # Save the scraped data to the database
        scrape_instance = scrape.objects.create(links=shuffled_links)

        # Serialize and return the saved data
        serializer = ScrapeSerializer(scrape_instance)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    elif request.method == 'DELETE':
        links = scrape.objects.all()
        links.delete()

        return Response({'message': 'All links deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

    return Response({'error': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)

# Json input:
# {
#     "job_title": "Civil Engineer"
# }