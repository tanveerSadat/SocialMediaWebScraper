import tweepy
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# consumer key + secret and Access token + secret in order to use twitter API
consumer_key = " "
consumer_secret = " "
access_token = " "
access_token_secret = " "

# using tweepy imported library for python and twitter API connection
auth = tweepy.OAuth1UserHandler(consumer_key, consumer_secret, access_token, access_token_secret)
api = tweepy.API(auth, wait_on_rate_limit = True)

search_query = "'ref''Engineer'-filter:retweets AND -filter:replies AND -filter:links"
numberTweets = 10

tweets_df = pd.DataFrame()

try:
    # the number of tweets we want to retrieved from the search
    tweets = api.search_tweets(q=search_query, lang="en", count= numberTweets, tweet_mode ='extended')
    
    # choosing certain attributes relating to the tweet
    attributes_container = [[tweet.user.name, tweet.source, tweet.full_text] for tweet in tweets]
    columns = ["User", "Source of Tweet", "Tweet"]
    
    # create a dataframe with the tweet data
    tweets_df = pd.DataFrame(attributes_container, columns=columns)

except BaseException as e:
    print('Status Failed On,',str(e))
     
print(tweets_df)
