from selenium import webdriver
from selenium.webdriver.common.keys import Keys

def get_links(query):
    driver = webdriver.Chrome('path_to_chromedriver')  # Specify the path to Chromedriver

    driver.get('https://www.bing.com')
    search_box = driver.find_element_by_name('q')
    search_box.send_keys(query)
    search_box.send_keys(Keys.RETURN)

    for i, link in enumerate(links[:10]):    links = driver.find_elements_by_xpath('//a[@href]')

        print(f"Link {i+1}: {link.get_attribute('href')}")

    driver.quit()

get_links('cat')