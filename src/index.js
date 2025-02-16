import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Using React 18's createRoot API
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
