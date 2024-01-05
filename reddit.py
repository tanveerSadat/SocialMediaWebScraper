from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time

def scrape_reddit(query):

    options = Options()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_experimental_option("detach", True)

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

    # Construct the search URL
    search_url = f"https://www.reddit.com/search/?q={query.replace(' ', '%20')}"

    # Navigate to the search URL
    driver.get(search_url)
    time.sleep(5) 

    # Find links on the search results page
    links = driver.find_elements("css selector", "a[href]")

    # Filter links to only include individual Reddit posts
    reddit_post_links = [link.get_attribute("href") for link in links if "/r/" in link.get_attribute("href") and "/comments/" in link.get_attribute("href")]

    for href in reddit_post_links:
        print(href)

    time.sleep(2)
    driver.quit()

# Get user input for the search query
user_query = input("Enter your search query for Reddit: ")
scrape_reddit(user_query.lower())