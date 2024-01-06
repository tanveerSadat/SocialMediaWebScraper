from googlesearch import search
import time

def search_tiktok_with_filters(job_title, location, num_results=10):
    # Set up the WebDriver (make sure you have chromedriver or geckodriver installed and in your PATH)
    query = f'site:tiktok.com "{job_title}" "{location}"'
    print(query)


    # Extract LinkedIn links from the search results
    tiktok_links = []
    for result in search(query,tld="com",num=20,stop=20,pause=2):
        if "https://www.tiktok.com/@" in result:
            tiktok_links.append(result)
    return tiktok_links

search_job_title = "Software Developer"  # Replace with your specific job title
search_location = "New York"  # Replace with your specific location
tiktok_results = search_tiktok_with_filters(search_job_title, search_location)

# Display the results
print("Dispaying the Results")
for i, link in enumerate(tiktok_results, start=1):
    print(f"{i}. {link}")