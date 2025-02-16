import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AdminHome from '../components/Admin/AdminHome';
import AdminLogin from '../components/Admin/AdminLogin';
import Dashboard from '../components/Admin/Dashboard';
import ManageRequests from '../components/Admin/ManageRequests';
import ManageBloodStock from '../components/Admin/ManageBloodStock';
import ManageUsers from '../components/Admin/ManageUsers';
import AdminEvents from '../components/Admin/AdminEvents';
import AdminProfile from '../components/Admin/AdminProfile';
import AdminNavbar from '../components/Admin/AdminNavbar';

const AdminRoutes = () => {
  const location = useLocation();

  // Hide navbar on Admin Login page
  const hideNavbarRoutes = ['/admin/login'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <AdminNavbar />} {/* Show Admin Navbar except on login page */}
      <Routes>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/manage-requests" element={<ManageRequests />} />
        <Route path="/admin/manage-blood-stock" element={<ManageBloodStock />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
