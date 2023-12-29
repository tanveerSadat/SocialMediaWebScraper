
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

const Content = ({isOpen}) => {
  const [words,setWords] = useState([]);
  useEffect(() => {
    const text = "Empowering students to shape their future careers through the lens of data";
    setWords(text.split(/[ ]+/));
  }, []);

  useEffect(() => {
    const paragraph = document.getElementById('fadeInParagraph');
    paragraph.innerHTML = ''; // Clear the paragraph

    // Iterate over the words and create spans with individual words
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' '; // Add a space between words
        span.style.opacity = '0';
        span.style.transition = `opacity 0.6s ease ${index * 0.06}s`; // Apply transition with delay
        paragraph.appendChild(span);

        // Insert a line break after every 4 words
        if ((index + 1) % 4 === 0) {
            paragraph.appendChild(document.createElement('br'));
        }
    });

    setTimeout(() => {
      paragraph.childNodes.forEach(node => {
        node.style.opacity = '1';
      });
    }, 500); // Adjust the delay as needed
  }, [words]);

  return (
    <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
      <p id="fadeInParagraph" />
      <div id="frontGraphic">
        <img src="../assets/9612167.png" style={{width: '550px', height: 'auto'}}/>  
      </div>
    </div>
  );
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleMenuButton = document.getElementById('toggleMenuButton');
    toggleMenuButton.addEventListener('click', function() {
    });
  }, []);

  return (
    <>
      <button id="toggleMenuButton" className={isOpen ? styles.pressed : styles.toggleMenu } onClick={() => setIsOpen(!isOpen)}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" width="46" height="45" />
      </button>

      <Menu isOpen={isOpen} />
      <Content isOpen={isOpen} />
    </>
  );
};

export default Home;