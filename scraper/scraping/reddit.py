from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

def scrape_reddit(query):

    options = Options()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_experimental_option("detach", True)

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

    # Construct and navigate to the search URL
    search_url = f"https://www.reddit.com/search/?q={query.replace(' ', '%20')}"
    driver.get(search_url)

    # Find links on the search results page
    links = driver.find_elements("css selector", "a[href]")

    # Filter links to only include individual Reddit posts
    reddit_post_links = [link.get_attribute("href") for link in links if "/r/" in link.get_attribute("href") and "/comments/" in link.get_attribute("href")]
    unique_links = set()
    reddit_links = ""
    counter = 0

    for href in reddit_post_links:
        if href not in unique_links:
            counter += 1
            unique_links.add(href)
            reddit_links += href + " "
            if (counter >= 10):
                break

    driver.quit()
    return reddit_links

# Get user input for the search query
# input = "Software Tester"
# result_links = scrape_reddit(input)
# print(result_links)