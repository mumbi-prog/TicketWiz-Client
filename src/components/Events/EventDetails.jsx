import React, {useEffect, useState} from 'react'
import { FaLocationDot, FaRegClock } from 'react-icons/fa6';
import './Events.css';

function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleDateString(undefined, { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear(); 
  return (
    <div className="event-date font-sans font-bold flex flex-col items-center justify-center mt-[2px]">
      <p className="month text-main-blue font-medium text-sm">{month}</p>
      <p className="day text-3xl mt-[-2px]">{day}</p>
      <p className="year text-sm text-gray-500 mt-1">{year}</p> 
    </div>
  );
}


function EventDetails({ eventId }) {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/events/${eventId}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error('Cannot fetch details:', error));
  }, [eventId]);

  return (
    <div className="event-details">
      <div className="event-image">
        <img src={event.image_url} alt={event.title} />
      </div>
      <div className="event-info">
        <div className="date-and-title">
          <p>Date: {formatDate(event.date)}</p>
          <h2 className="text-xl font-bold mb-3">{event.title}</h2>
        </div>
        <div className="venue1 flex items-center">
          <p className="text-black text-md mr-[5px] mt-[5px]"><FaLocationDot className="location-icon1" /></p>
          <p className='local'>Venue: {event.venue_name}, {event.event_location}</p>
        </div>
        <div className="venue1 flex items-center">
          <p className="text-black text-md mr-[5px] mt-[5px]"><FaRegClock className="location-icon1" /></p>
          <p>{event.start_time} to {event.end_time}</p>
        </div>
        <p className='event-desc'>{event.description}</p>
      </div>
      <div className="event-actions">
        <button className="btn btn-primary">Get Ticket</button>
        <button className="btn btn-secondary">Add to Calendar</button>
      </div>
    </div>
  )
}

export default EventDetails