import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';

const Signup = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    bloodType: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if all fields are filled
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.bloodType
    ) {
      alert("All fields are required.");
      return; // Stop the form submission if any field is empty
    }
  
    console.log(formData);
    setIsAuthenticated(true);
    navigate("/home");
  };
  

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className={styles.inputGroup}>
          <select
            value={formData.bloodType}
            onChange={(e) =>
              setFormData({ ...formData, bloodType: e.target.value })
            }
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
