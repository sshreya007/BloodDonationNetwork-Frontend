import React, { useState } from "react";

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    name: "",
    bloodType: "",
    location: "",
    urgency: "Normal",
    contact: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blood request submitted:", formData);
    alert("Your blood request has been submitted!");
    // Here, you can send the data to the backend API
  };

  return (
    <div style={styles.container}>
      <h2>Request Blood</h2>
      <p>Fill in the details to request blood.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <select name="bloodType" value={formData.bloodType} onChange={handleChange} required style={styles.input}>
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

        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <select name="urgency" value={formData.urgency} onChange={handleChange} style={styles.input}>
          <option value="Normal">Normal</option>
          <option value="Urgent">Urgent</option>
        </select>

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Submit Request</button>
      </form>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#e63946",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default RequestBlood;
