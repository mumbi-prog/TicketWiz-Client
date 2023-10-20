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

    return (
        <div>
          <h2>Event History</h2>
          <ul>
            {eventHistory.map((event) => (
              <li key={event.id}>
                <div>
                  <h3>{event.title}</h3>
                  <p>Date: {event.date}</p>
                  <p>Tickets Purchased: {event.ticketsPurchased}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
    );
};
    
    export default CustomerEventHistory;
