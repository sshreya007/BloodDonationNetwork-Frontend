// src/components/Admin/ManageEvents.js
import React, { useState } from "react";

const ManageEvents = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [events, setEvents] = useState([]);

  const handleAddEvent = () => {
    if (eventName.trim() === "" || eventDescription.trim() === "") {
      alert("Please enter both event name and description");
      return;
    }

    const newEvent = {
      id: events.length + 1,
      name: eventName,
      description: eventDescription,
    };

    setEvents([...events, newEvent]);
    setEventName("");
    setEventDescription("");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Events</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Event Name"
          className="border p-2 w-full mb-2 rounded"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <textarea
          placeholder="Event Description"
          className="border p-2 w-full mb-2 rounded"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAddEvent}
        >
          Add Event
        </button>
      </div>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="border p-2 rounded mb-2">
            <strong>{event.name}</strong>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageEvents;

