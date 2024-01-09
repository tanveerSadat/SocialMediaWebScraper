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
      <div>
        {links.map((link, index) => (
          <div key={index}>
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
              <iframe
                src={link}
                style={{ width: '100%', height: '400px', border: 'none', maxWidth: '605px', minWidth: '50px' }}
                title={`Linkedin Profile ${index + 1}`}
              ></iframe>
              ) : link.includes('reddit.com') ? (
                // If the link is a Reddit post, render the Reddit embed code
                <div dangerouslySetInnerHTML={{ __html: link }} />
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
        {/* Add LinkedIn post here */}
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7128051935487692802"
          style={{ width: '100%', height: '400px', border: 'none', maxWidth: '605px', minWidth: '50px' }}
          title="LinkedIn Post"
        ></iframe>
        {/* Add Reddit post here */}
        <blockquote className="reddit-embed-bq" cite="https://www.reddit.com/r/computerscience/comments/kxinnm/red_black_tree_visualization/" style={{ height: '500px' }} data-embed-height="240">
          <a href="https://www.reddit.com/r/computerscience/comments/kxinnm/red_black_tree_visualization/">Red Black Tree Visualization</a><br/>
          by <a href="https://www.reddit.com/user/LegitGandalf/">u/LegitGandalf</a>
          in <a href="https://www.reddit.com/r/computerscience/">computerscience</a>
        </blockquote>
        <script async src="https://embed.reddit.com/widgets.js" charSet="UTF-8"></script>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">At dawn from the gateway to Mars, the launch of Starship’s second flight test <a href="https://t.co/ffKnsVKwG4">pic.twitter.com/ffKnsVKwG4</a></p>&mdash; SpaceX (@SpaceX) <a href="https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw">December 7, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </>
  );
}

export default DisplayJobs;
