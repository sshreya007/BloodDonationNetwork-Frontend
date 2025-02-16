import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditProfile.module.css';

const EditProfile = () => {
  const navigate = useNavigate();
  // Simulate current user profile data (in a real app, this would come from an API or context)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bloodType: 'O+',
    location: 'New York',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the updated profile
    console.log('Updated Profile:', user);
    // Navigate back to the profile page after saving
    navigate('/profile');
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSave}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Blood Type</label>
          <input
            type="text"
            name="bloodType"
            value={user.bloodType}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={user.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
