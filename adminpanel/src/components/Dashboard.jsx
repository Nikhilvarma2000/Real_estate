// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make a GET request to your Express backend
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data);  // Update state with the response data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>{message}</p>
    </div>
  );
};

export default Dashboard;
