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
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      height: '100vh',
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