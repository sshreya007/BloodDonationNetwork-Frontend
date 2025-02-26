import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/admin/dashboard" className="hover:underline">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/manage-requests" className="hover:underline">Manage Requests</Link>
        </li>
        <li>
          <Link to="/admin/manage-bloodstock" className="hover:underline">Manage Blood Stock</Link>
        </li>
        <li>
          <Link to="/admin/manage-events" className="hover:underline">Manage Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
