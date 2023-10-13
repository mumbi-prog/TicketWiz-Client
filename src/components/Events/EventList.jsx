import React, { useEffect, useState } from 'react';
import './Events.css';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/events')
    .then((response) => response.json())
    .then((data) => setEvents(data))
    .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <div className="event-img">
            <img src={event.image_url} alt={event.title} />
          </div> 
          <div className="event-selected-details">
            <div className="event-date">
              <p>{event.date}</p>
            </div>
            <div className="eve-nue">
              <h3>{event.title}</h3>
              <p>Venue: {event.venue_name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
