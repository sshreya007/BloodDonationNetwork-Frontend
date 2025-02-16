import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Home from '../components/Home/Home';
import RequestBlood from '../components/RequestBlood/RequestBlood';
import BloodStock from '../components/RealTimeBloodStock/RealTimeBloodStock';
import Search from '../components/Search/Search';
import Profile from '../components/Profile/Profile';
import EditProfile from '../components/Profile/EditProfile';
import Navbar from '../components/Navbar/Navbar';

const UserRoutes = () => {
  const location = useLocation();
  
  // Hide navbar on Welcome, Login, and Signup pages
  const hideNavbarRoutes = ['/', '/login', '/signup'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />} {/* Show Navbar only when not on these routes */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/request-blood" element={<RequestBlood />} />
        <Route path="/blood-stock" element={<BloodStock />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
    </>
  );
};

export default UserRoutes;
