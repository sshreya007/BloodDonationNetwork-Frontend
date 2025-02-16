import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import RequestBlood from './components/RequestBlood/RequestBlood';
import BloodStock from './components/RealTimeBloodStock/RealTimeBloodStock';
import Search from './components/Search/Search';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import EditProfile from './components/Profile/EditProfile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {/* Render Navbar only if authenticated */}
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/request-blood" element={<RequestBlood />} />
        <Route path="/blood-stock" element={<BloodStock />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/admin/login" element={<AdminLogin setIsAdminAuthenticated={setIsAdminAuthenticated} />} />

        </Routes>
    </Router>
  );
}

export default App;
