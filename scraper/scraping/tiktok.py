from googlesearch import search

def scrape_tiktok(job_title):
    # Set up the WebDriver (make sure you have chromedriver or geckodriver installed and in your PATH)
    query = f'site:tiktok.com "{job_title}"'
    print(query)

    # Extract TikTok embed links from the search results
    tiktok_links = ""
    for result in search(query, tld="com", num=10, stop=10, pause=5):
        if "https://www.tiktok.com/@" in result:
            # Modify the TikTok link to the embed format
            username = result.split("/")[-1]
            embed_link = f'https://www.tiktok.com/embed/{username}'
            tiktok_links += (embed_link) + " "
            
    return tiktok_links

# # Example usage:
# input_query = 'Web Developer'
# tiktok_links = scrape_tiktok(input_query)
# print(tiktok_links)
