import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <Link to="/home" className={location.pathname === "/home" ? styles.active : ""}>Home</Link>
      <Link to="/request-blood" className={location.pathname === "/request-blood" ? styles.active : ""}>Request Blood</Link>
      <Link to="/blood-stock" className={location.pathname === "/blood-stock" ? styles.active : ""}>Real-time Blood Stock</Link>
      <Link to="/search" className={location.pathname === "/search" ? styles.active : ""}>Search</Link>
      <Link to="/profile" className={location.pathname === "/profile" ? styles.active : ""}>Profile</Link>
    </nav>
  );
};

export default Navbar;
