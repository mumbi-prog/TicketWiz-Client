import React, { useState, useEffect } from 'react';

const CustomerEventHistory = () => {
    const [eventHistory, setEventHistory] = useState([]);

    // Fetch data from API
    useEffect(() => {
        fetch('/api/customer-events')
        .then(response => response.json())
        .then(data => setEventHistory(data))
        .catch((error) => console.error('Error fetching event history', error));
    }, []);
}