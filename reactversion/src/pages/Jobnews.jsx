import styles from '../assets/Home.module.css';
import '../assets/index.css';
import React, {useState, useEffect} from 'react';
import Table from '../assets/table.jsx'

const Menu = ({isOpen}) => (

  <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
    <a href="home" id="home">Home</a>
    <a href="job-news" id="jobnews">Job News</a>
    <a href="quizzes" id="quizzes">Quizzes</a>
    <a href="#about" id="about">About</a>
  </div>
);

const Jobnews = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const toggleMenuButton = document.getElementById('toggleMenuButton');
        toggleMenuButton.addEventListener('click', function() {
        });
    }, []);

    return (
        <>
          <button id="toggleMenuButton" className={isOpen ? styles.pressed : styles.toggleMenu } onClick={() => setIsOpen(!isOpen)} style={{ border: 'none', outline: 'none' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" width="46" height="45"/>
          </button>
    
          <Menu isOpen={isOpen} />
          <Table />
        </>
        
    );
};

export default Jobnews;