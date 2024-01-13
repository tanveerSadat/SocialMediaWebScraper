import styles from '../assets/Home.module.css';
import '../assets/index.css';
import React, {useState, useEffect} from "react";

const Menu = ({isOpen}) => (

  <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
    <a href="home" id="home">Home</a>
    <a href="job-news" id="jobnews">Job News</a>
    <a href="quizzes" id="quizzes">Quizzes</a>
    <a href="#about" id="about">About</a>
  </div>
);

const QuizPage = ({isOpen}) => {
    const quizzes = [
        {name: "Personality Quiz", photo: "https://img.freepik.com/premium-photo/online-education-smiling-black-female-student-with-backpack-headphones-holding-notebooks_116547-21201.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704672000&semt=ais"},
        {name: "Job Preference Quiz", photo: "https://th-i.thgim.com/public/incoming/5yuo5p/article65258327.ece/alternates/FREE_1200/28epbs_wideangle.jpg"},
        {name: "Future Career Quiz", photo: "https://blog.pearsoninternationalschools.com/wp-content/uploads/2021/09/AL1346447_1800x900.jpg"},
        {name: "Location Preference Quiz", photo: "https://s.yimg.com/ny/api/res/1.2/6Ty70XgJJbysyid4Kdh0tA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyOA--/https://media.zenfs.com/en/the_conversation_us_articles_815/66f7e6f4a89b0682a97b721a7f0340a1"},
        {name: "Study Habits Quiz", photo: "https://alltop.com/viral/wp-content/uploads/2013/03/foto-students.jpg"},
    ];

    return (  
        <div className={`${styles.QuizPage} ${isOpen ? styles.open : ''}`}>
          {quizzes.map((quiz, index) => (
            <div className={styles.box} key={index}>
              <img src={quiz.photo} className={styles.quizImage} />
              <span>{quiz.name}</span>
              <button className={`${styles.quizButton} ${isOpen ? styles.open : ''}`}>Take Quiz</button>
            </div>
          ))}
          <QuizChecklist quizzes={quizzes} isOpen={isOpen} />
        </div>
      );
};

const QuizChecklist = ({quizzes, isOpen}) => {
  const [checkedCount, setCheckedCount] = useState(0);
  
  const handleCheckboxChange = (event) => {
      setCheckedCount(prevCount => prevCount + (event.target.checked ? 1 : -1));
  };

  return (
      <>
        <h1 className={styles.quizHeading}>Quizzes</h1>
        <h1 className={`${styles.progressHeading} ${isOpen ? styles.open : ''}`}>Progress</h1> 
        <div className={`${styles.quizChecklist} ${isOpen ? styles.open : ''}`}>
          {quizzes.map((quiz, index) => (
            <div key={index}>
              <div>
                <input type="checkbox"  id={`quiz${index}`}  name={`quiz${index}`}  value={quiz.name}  onChange={handleCheckboxChange}/>
              </div>
            <div>
              <label htmlFor={`quiz${index}`}>{quiz.name}</label>
             </div>
        </div>
      ))}
    </div>
      <QuizProgress  completed={checkedCount / quizzes.length * 100}  total={quizzes.length}  completedCount={checkedCount}  isOpen={isOpen} />
      </>
  );
};


const QuizProgress = ({completed, total, completedCount, isOpen}) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {setIsPageLoaded(true);}, 300);
    return () => clearTimeout(delay);}, []);

  return (
    <div>
      <img src="https://www.pngall.com/wp-content/uploads/2016/07/Target-Free-Download-PNG.png" className={`${styles.targetPhoto} ${isPageLoaded ? styles.isPageLoaded : ''} ${isOpen ? styles.open : ''}`} />
        <div className={`${styles.quizProgress} ${isOpen ? styles.open : ''}`}>
          <h1 className={styles.progressText}> On Track!</h1>
          <progress value={completed} max="100" />
          <p> You have done {completedCount} quizzes and have{' '} <span style={{ marginLeft: '3em' }}> </span> {total - completedCount} left to complete! </p>
          <span className={styles.completedPercentage}>{completed}%</span>
        </div>
    </div>
  );
};

const Quizzes = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const toggleMenuButton = document.getElementById('toggleMenuButton');
        toggleMenuButton.addEventListener('click', function() {
        });
    }, []);

    return (
        <>
        <button id="toggleMenuButton" className={isOpen ? styles.pressed : styles.toggleMenu } onClick={() => setIsOpen(!isOpen)} style={{top: '0px', border: 'none', outline: 'none' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" width="46" height="45"/>
        </button>
        <Menu isOpen={isOpen} />
        <QuizPage isOpen={isOpen} />
        </>
    );
};

export default Quizzes;