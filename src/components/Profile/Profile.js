import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  // Example profile data (you'd typically fetch this from an API or context)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bloodType: 'O+',
    location: 'New York',
  });

  const handleLogout = () => {
    // Clear the session or token (e.g., from localStorage or context)
    localStorage.removeItem('userToken'); // Adjust according to your auth flow
    navigate('/login');
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Blood Type:</strong> {user.bloodType}</p>
        <p><strong>Location:</strong> {user.location}</p>
      </div>
      <button onClick={() => navigate('/edit-profile')}>Edit Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
