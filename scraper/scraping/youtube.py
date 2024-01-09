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
    input_addOns = ["#DayInTheLife", " #OfficeLife", " #BehindTheDesk", " #OnTheJob", " #MyWorkDay"]

    # use a set to store unique links to avoid duplicates
    unique_links = set()
    youtube_links = ""

    for a in range(1):
        search_input.clear()  # Delete the current stuff in search input field
        search_input.send_keys('site:youtube.com/ "' + input + '" "' + input_addOns[0] + '"')
        
        # Wait until the input field has a non-empty value
        WebDriverWait(driver, 10).until(EC.text_to_be_present_in_element(("xpath", "//*[@id='APjFqb']"), ''))
        search_input.send_keys(Keys.RETURN)

        links = driver.find_elements("xpath", "//a[@href and contains(@href, '/watch?v=') and not(contains(@href, 'googleads'))]")

        for link in links:
            # get the link and then use regular expression to 'match' the base link (removing time stamps and duplicate links)
            href = link.get_attribute("href")
            match_link = re.match(r'https://www\.youtube\.com/watch\?v=([a-zA-Z0-9_-]+)', href)

            if match_link:
                video_id = match_link.group(1)
                embed_link = f'https://www.youtube.com/embed/{video_id}'

                if embed_link not in unique_links:
                    unique_links.add(embed_link)
                    # print(embed_link)
                    youtube_links += embed_link + " "
            else:
                # if re.match returns None, add the link directly to unique_links
                if href not in unique_links:
                    unique_links.add(href)
                    # print(href)
                    # youtube_links += href + " "

    driver.quit()
    return youtube_links