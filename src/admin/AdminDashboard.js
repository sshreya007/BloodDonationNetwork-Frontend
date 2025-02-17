import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminLogin.module.css';

const AdminLogin = ({ setIsAdminAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy Admin Credentials (Replace with real authentication)
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      setIsAdminAuthenticated(true);
      navigate('/admin/dashboard'); // Redirect to Admin Dashboard
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
