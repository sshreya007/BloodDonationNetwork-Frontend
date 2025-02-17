// src/components/Admin/ManageRequests.js
import React, { useState, useEffect } from 'react';

const ManageRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Example data fetching for blood requests
  useEffect(() => {
    // Simulate an API call to get blood requests
    const fetchRequests = async () => {
      // Replace with real API call
      const response = await fetch('/api/requests'); // Adjust the URL accordingly
      const data = await response.json();
      setRequests(data);
      setLoading(false);
    };
    fetchRequests();
  }, []);

  // Handle request approval or rejection
  const handleApproval = (id) => {
    // Update request status to approved
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: 'Approved' } : request
      )
    );
  };

  const handleRejection = (id) => {
    // Update request status to rejected
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: 'Rejected' } : request
      )
    );
  };

  return (
    <div>
      <h2>Manage Blood Requests</h2>

      {loading ? (
        <p>Loading requests...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Donor Name</th>
              <th>Blood Type</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.donorName}</td>
                <td>{request.bloodType}</td>
                <td>{request.location}</td>
                <td>{request.status}</td>
                <td>
                  {/* Buttons to approve or reject the request */}
                  <button onClick={() => handleApproval(request.id)}>Approve</button>
                  <button onClick={() => handleRejection(request.id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageRequests;
