[<img src="images/Banner.jpeg" width="100%" height="auto"/>](images/Banner.jpeg)
# Social Media Web Scraper
The `Social Media Web Scraper` was designed with a clear objective: to help high school graduates easily discover career paths that align with their personalities. As recent high school graduates ourselves, we understand the anxiety that students face. Many are uncertain about their future careers and apply to post-secondary institutions with the primary goal of obtaining a degree, rather than pursuing a career they are passionate about.

Throughout middle school and high school, our school boards provided us with myBlueprint, a website designed to help students plan for their future. However, we found it ineffective as it failed to provide insight into how careers shape our lives. This is where the `Social Media Web Scraper` comes in. By providing live social media posts from various sources such as YouTube, Reddit, and TikTok, as well as connecting users to professionals in their desired career paths through LinkedIn, we have created a space for students to get a glimpse into the lives of professionals.

<p>
  <img src="images/jobnewsgif.gif" alt="Job News GIF" width="98.5%">
</p

[<img src="images/HomeNoMenu.jpeg" width="405" height="auto"/>](images/HomeNoMenu.jpeg) [<img src="images/HomeMenu.jpeg" width="405" height="auto"/>](images/HomeMenu.jpeg)
[<img src="images/Table.jpeg" width="405" height="auto"/>](images/Table.jpeg) [<img src="images/JobNews.jpeg" width="405" height="auto"/>](images/JobNews.jpeg)
[<img src="images/Quizzes.jpeg" width="405" height="auto"/>](images/Quizzes.jpeg) [<img src="images/QuzzesSelect.jpeg" width="405" height="auto"/>](images/QuzzesSelect.jpeg)


## How to Use

1. Install Required Packages: Open a terminal or command prompt and install the necessary packages using the following command:

   #### Backend
   ```shell
    pip install django
    pip install djangorestframework
    pip install selenium
    pip install webdriver_manager
    pip install corsheaders
    pip install google
    ```
    #### Frontend
    ```shell
    npm install
    ```
    

2. Open two terminals in project location and run the commands below:
    #### First terminal

    ```shell
    cd SocialMediaWebScraper
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```
    #### Second terminal
    ```shell 
    cd SocialMediaWebScraper
    cd reactversion
    npm run dev
    ```
    #### In the second terminal enter 'o' and return to open webpage. To exit enter 'q'.
    #### Return back to the first terminal and enter 'ctrl + c' to end backend processes if you wish to quit.



## Learnings from the Project

- **HTML, CSS, and JavaScript**: This project was our first comprehensive project involving  web development. We learned how to structure web pages using HTML, style them with CSS, and add interactivity using JavaScript.

- **Web Scraping**:  All four of us had very little to no experience with web scraping.  We learned how to extract data from websites, which involved understanding the structure of web pages and how to navigate them to find the information we needed.

- **React and Django**: We learned how to use React, a popular JavaScript library for building user interfaces, and Django, a high-level Python web framework that helped us learn the workings of web scraping. These tools allowed us to build a robust and scalable application, and learning them has equipped us with useful skills.

## Future Goals and Ideas

- **Quiz Section**: We plan to introduce a quiz section that will help students identify suitable career paths based on their interests, skills, and personality traits. This feature will provide personalized recommendations, making the career exploration process more targeted and efficient.

- **Expand Social Media Sources**: We aim to expand our social media sources to include Twitter and Instagram. These platforms are rich sources of information and will provide a more comprehensive view of different careers.

- **Connections with Local Universities**: We plan to establish connections with local universities. This will allow us to provide information about relevant courses and programs that can help students pursue their chosen career paths.

- **Personalized Results**: We aim to personalize results based on the user's IP address or inputted location. This will enable us to provide information that is more relevant and useful to the user, such as local job opportunities or educational programs.


## Summary
The `Social Media Web Scraper`  is a bridge connecting students to their potential futures. By offering a real-world glimpse into various professions, we aim to alleviate the anxiety and uncertainty that many students face when choosing a career path. Our project is a testament to our learning journey, and we're excited about the potential enhancements that will make this tool even more valuable to students. We believe that with the right information and insights, every student can find and pursue a career they're passionate about.
