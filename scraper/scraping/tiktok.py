from googlesearch import search

def scrape_tiktok(job_title):
    # Set up the WebDriver (make sure you have chromedriver or geckodriver installed and in your PATH)
    query = f'site:tiktok.com "{job_title}"'
    print(query)

    # Extract TikTok embed links from the search results
    tiktok_links = []
    for result in search(query, tld="com", stop=None, pause=2):
        if "https://www.tiktok.com/@" in result:
            # Modify the TikTok link to the embed format
            username = result.split("/")[-1]
            embed_link = f'https://www.tiktok.com/embed/{username}'
            tiktok_links.append(embed_link)
        if len(tiktok_links) >= 10: #change 10 for num of posts wanted
            break

    return " ".join(tiktok_links)