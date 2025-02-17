import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AdminNavbar from '../admin/AdminNavbar';
import AdminLogin from '../admin/AdminLogin';
import AdminDashboard from '../admin/AdminDashboard';
import ManageRequests from '../admin/ManageRequests';
import ManageBloodStock from '../admin/ManageBloodStock';
import ManageEvents from '../admin/ManageEvents';


const AdminRoutes = () => {
  const location = useLocation();

  // Hide navbar on Admin Login page
  const hideNavbarRoutes = ['/admin/login'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <AdminNavbar />} {/* Show Admin Navbar except on login page */}
      <Routes>
        
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-requests" element={<ManageRequests />} />
        <Route path="/admin/manage-blood-stock" element={<ManageBloodStock />} />
        
        <Route path="/admin/navbar" element={<AdminNavbar />} />  // Remove if not needed
        <Route path="/admin/manage-events" element={<ManageEvents />} />  // Remove if not needed

        
      </Routes>
    </>
  );
};

export default AdminRoutes;
