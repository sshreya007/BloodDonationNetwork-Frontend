import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    
    <div 
  className={styles.container}
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/bg/welcome.png)`,
    backgroundSize: 'cover',  // Fills the screen while maintaining aspect ratio
    backgroundPosition: 'center',  // Centers the image within the container
    backgroundAttachment: 'fixed',  // Keeps the background fixed as you scroll (optional)
    height: '100vh',  // Ensures the container takes up full height of the viewport
    width: '100%',  // Makes sure the width is 100% of the parent container
  }}
>

      <div className={styles.buttonContainer}>
        <button onClick={() => navigate('/login')} className={styles.button}>
          Login
        </button>
        <button onClick={() => navigate('/signup')} className={styles.button}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Welcome;