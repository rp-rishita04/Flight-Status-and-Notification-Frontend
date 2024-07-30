import React from 'react';
import FlightStatus from './FlightStatus';
import NotificationSettings from './NotificationSettings';

const Dashboard = () => (
    <div>
        <h1>Flight Dashboard</h1>
        <FlightStatus />
        <NotificationSettings />
    </div>
);

export default Dashboard;
