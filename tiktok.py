from googlesearch import search
import time

def search_tiktok(job_title):
    # Set up the WebDriver (make sure you have chromedriver or geckodriver installed and in your PATH)
    query = f'site:tiktok.com "{job_title}"'
    print(query)

    # Extract TikTok embed links from the search results
    tiktok_links = ""
    for result in search(query, tld="com", num=20, stop=20, pause=2):
        if "https://www.tiktok.com/@" in result:
            # Modify the TikTok link to the embed format
            username = result.split("/")[-1]
            embed_link = f'https://www.tiktok.com/embed/{username}'
            tiktok_links += (embed_link) + " "
    return tiktok_links

input = "Software Tester"

# Display the results
print("Dispaying the Results")
result_links = search_tiktok(input)
print(result_links)