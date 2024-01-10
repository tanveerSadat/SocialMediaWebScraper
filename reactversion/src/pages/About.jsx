import styles from '../assets/Home.module.css';
import '../assets/index.css'
import React, {useState, useEffect} from 'react';

const Menu = ({isOpen}) => (

    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <a href="home" id="home">Home</a>
      <a href="job-news" id="jobnews">Job News</a>
      <a href="#quizzes" id="quizzes">Quizzes</a>
      <a href="#about" id="about">About</a>
    </div>
  );

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        We are a team of four passionate individuals - Vedant, Carsten, Liran, and Tanveer - 
        united by our drive to make a difference in the lives of high school graduates. 
        Our journey began with a shared vision: to create a tool that not only eases the anxiety 
        of choosing a career but also provides real-world insights into various professions.
      </p>
      <p>
        Our project, the Social Media Web Scraper, was born from our personal experiences 
        and the inadequacies we found in existing tools like myBlueprint. We ventured into 
        the realms of web development, web scraping, and modern web frameworks like React 
        and Django, learning and growing every step of the way. This journey was not just about 
        building a tool; it was about crafting a pathway for students to discover careers that resonate 
        with their personalities.
      </p>
      <h2>Learnings from the Project</h2>
      <ul>
        <li>HTML, CSS, JavaScript: Building the foundation of our web application.</li>
        <li>Web Scraping: Extracting live data from social media platforms like YouTube, Reddit, and TikTok.</li>
        <li>React and Django: Creating dynamic and scalable web applications.</li>
      </ul>
      <h2>Our Future Vision</h2>
      <ul>
        <li>Quiz Section: To help students identify careers aligned with their interests and traits.</li>
        <li>Expand Social Media Sources: Incorporating platforms like Twitter and Instagram for broader insights.</li>
        <li>Connections with Local Universities: To provide relevant academic pathways.</li>
        <li>Personalized Results: Tailoring information based on user location for more relevant opportunities.</li>
      </ul>
      <p>
        Our goal is to bridge the gap between students and their potential futures, 
        alleviating the uncertainty surrounding career choices. We're excited to continue enhancing 
        the Social Media Web Scraper, empowering students to find careers they're truly passionate about.
      </p>
    </div>
  );
}

export default About;
