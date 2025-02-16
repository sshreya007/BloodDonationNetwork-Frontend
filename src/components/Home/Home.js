import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Home.css';

const Home = () => {
  return (

    
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1>Welcome to Blood Bank</h1>
        <p>Find blood donors instantly and save lives</p>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3>Emergency Request</h3>
            <p>Post urgent blood requirements</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Blood Availability</h3>
            <p>Check real-time blood stock</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Find Donors</h3>
            <p>Search nearby blood donors</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;