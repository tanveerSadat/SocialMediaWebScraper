from googlesearch import search
import time

def search_linkedin_with_filters(job_title, location, num_results=10):
    # Set up the WebDriver (make sure you have chromedriver or geckodriver installed and in your PATH)
    query = f'site:linkedin.com/in/ "{job_title}" "{location}"'
    print(query)


    # Extract LinkedIn links from the search results
    linkedin_links = []
    for result in search(query,tld="com",num=20,stop=20,pause=2):
        linkedin_links.append(result)
    return linkedin_links

search_job_title = "Software Developer"  # Replace with your specific job title
search_location = "New York"  # Replace with your specific location
linkedin_results = search_linkedin_with_filters(search_job_title, search_location)

# Display the results
print("Dispaying the Results")
for i, link in enumerate(linkedin_results, start=1):
    print(f"{i}. {link}")