import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Add this line to import axios

const FlightStatus = () => {
  const [flightStatus, setFlightStatus] = useState(null);

  useEffect(() => {
    axios.get('/api/flight-status')
      .then(response => {
        setFlightStatus(response.data);
      })
      .catch(error => {
        console.error('Error fetching flight status:', error);
      });
  }, []);

  return (
    <div>
      {flightStatus ? (
        <div>
          <h1>Flight Status</h1>
          <p>{flightStatus.status}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FlightStatus;
