from googlesearch import search

def scrape_linkedin(job_title):
    # Set up the WebDriver (make sure you have chromedriver or geckodriver installed and in your PATH)
    query = f'site:linkedin.com/in/ "{job_title}"'
    print(query)

    # Extract LinkedIn embed links from the search results
    linkedin_links = ""

    for result in search(query, tld="com", num=2, stop=2, pause=5):
        # Convert regular LinkedIn profile URLs to embed URLs
        embed_url = result.replace('/in/', '/embed/in/')
        linkedin_links += embed_url + " "

    return linkedin_links

# Example usage:
job_title = "software engineer"
linkedin_embed_links = scrape_linkedin(job_title)
print(linkedin_embed_links)