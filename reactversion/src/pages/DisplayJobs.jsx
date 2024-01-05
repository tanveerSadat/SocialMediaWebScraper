import React, { useState } from "react";
import styles from '../assets/Home.module.css';
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
  <div>
    <h1>Posts about {jobTitle}</h1>
    {links && links.length > 0 ? (
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
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

        {/* Add TikTok video embed code here */}
        <iframe
          src="https://www.tiktok.com/embed/v2/7320357603266153761"
          style={{ width: '100%', height: '400px', border: 'none', maxWidth: '605px', minWidth: '50px' }}
          title="TikTok Video"
        ></iframe>
        {/* Add Youtube video embed code here */}
        <iframe
          src="https://www.youtube.com/embed/scACUi8waGQ?si=cAa8h0oOfbj3tEQv"
          style={{ width: '100%', height: '400px', border: 'none', maxWidth: '605px', minWidth: '50px' }}
          title="Youtube Video"
        ></iframe>

      </div>
    </>
  );
}

export default DisplayJobs;
