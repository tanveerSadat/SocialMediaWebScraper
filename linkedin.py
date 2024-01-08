from googlesearch import search

def search_linkedin(job_title):
    # Set up the WebDriver (make sure you have chromedriver or geckodriver installed and in your PATH)
    query = f'site:linkedin.com/in/ "{job_title}"'
    print(query)

    # Extract LinkedIn links from the search results
    linkedin_links = ""

    for result in search(query,tld="com",num=20,stop=20,pause=2):
        linkedin_links += result + " "

    return linkedin_links

input = "Software Tester"

# Display the results
print("Displaying the Results")
result_links = search_linkedin(input)
print(result_links)