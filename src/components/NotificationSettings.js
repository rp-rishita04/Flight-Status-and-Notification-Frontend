import React, { useState } from 'react';

const NotificationSettings = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit email and phone to backend for notifications
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>Phone:
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default NotificationSettings;
