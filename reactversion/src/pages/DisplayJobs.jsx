import React, { useState, useEffect } from "react";
import styles from '../assets/Home.module.css';
import RedditEmbed from "../assets/redditEmbed";
import LinkedInBadge from "../assets/LinkedinEmbed";
import '../assets/index.css';
import { useLocation } from "react-router-dom";

// Menu component
const Menu = ({ isOpen }) => (
  <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
    <a href="home" id="home">Home</a>
    <a href="job-news" id="jobnews">Job News</a>
    <a href="#quizzes" id="quizzes">Quizzes</a>
    <a href="#about" id="about">About</a>
  </div>
);

// JobInfo component
const JobInfo = ({ jobTitle, links }) => (
  <div className={styles.DisplayJobsContent}>
    <h1 className={styles.CenteredHeading}>Posts about {jobTitle}</h1>
    {links && links.length > 0 ? (
      <div className={styles.DisplayJobsContent}>
        {links.map((link, index) => (
          <div key={index} className={styles.JobInfo}>
            {/* Check if the link is a YouTube link or a TikTok link and render the appropriate iframe */}
            {link.includes('youtube.com') ? (
              <iframe
                src={link}
                style={{ width: '100%', height: '400px', border: 'none', maxWidth: '605px', minWidth: '50px' }}
                title={`YouTube Video ${index + 1}`}
              ></iframe>
            ) : link.includes('tiktok.com') ? (
              <iframe
                src={link}
                style={{ width: '100%', height: '760px', border: 'none', maxWidth: '350px', minWidth: '50px' }}
                title={`TikTok Video ${index + 1}`}
              ></iframe>
            ) : link.includes('linkedin.com') ? (
                // If the link is a LinkedIn Profile, render the LinkedInBadge component
                <LinkedInBadge profile={{ permalink: link }} />
              ) : link.includes('reddit.com') ? (
                // If the link is a Reddit post, render the RedditEmbed component
                <RedditEmbed post={{ permalink: link }} />
              ) : (
                
              // If the link isn't a social media, render it as a regular link
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            )}
          </div>
        ))}
      </div>
    ) : (
      <p>No posts found for {jobTitle}.</p>
    )}
  </div>
);

// DisplayJobs component
function DisplayJobs() {
  const location = useLocation();
  const { state } = location;
  const { links, jobTitle } = state;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Function to delete links after displaying everything
    const deleteLinks = async () => {
      try {
        // Make a request to the backend to delete the links
        const response = await fetch('http://127.0.0.1:8000/scraped/', {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('Links deleted successfully');
        } else {
          console.error('Failed to delete links');
        }
      } catch (error) {
        console.error('Network error', error);
      }
    };

    // Call the deleteLinks function after rendering the posts
    deleteLinks();
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  // Return null if links are being deleted to avoid rendering the component with incomplete data
  if (links === undefined) {
    return null;
  }

  return (
    <>
      {/* Add the button to toggle the menu */}
      <button className={isOpen ? styles.pressed : styles.toggleMenu} onClick={() => setIsOpen(!isOpen)} style={{ border: 'none', outline: 'none' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" width="46" height="45" />
      </button>

      {/* Include the Menu component */}
      <Menu isOpen={isOpen} />

      {/* Display job information using the JobInfo component */}
      <div className={`${styles.DisplayJobsContent}`}>
        <JobInfo jobTitle={jobTitle} links={links} />
        {/* <RedditEmbed post={{ permalink: '/r/VirtualAssistant/comments/18p8uhn/for_hire_digital_marketing_specialist/' }} /> */}
      </div>
    </>
  );
}

export default DisplayJobs;
