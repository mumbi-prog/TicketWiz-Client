import React, {useEffect, useState} from 'react'
import { FaLocationDot, FaRegClock } from 'react-icons/fa6';
import './Events.css';

function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleDateString(undefined, { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear(); 
  return (
    <div className="event-date font-sans font-bold flex flex-col items-center justify-left mt-[2px] border border-black px-[15px] py-[5px] mr-[15px]">
      <p className="month text-main-blue font-medium text-sm">{month}</p>
      <p className="day text-3xl mt-[-2px] font-medium">{day}</p>
      <p className="year text-main-blue font-medium text-sm">{year}</p> 
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

  if (!event) {
    return <div>Loading event details...</div>;
  }

  return (
    <div className="event-details-container">
      <div className="event-details">
        <div className="event-image">
          <img src={event.image_url} alt={event.title}/>
        </div>
        <div className="event-info">
          <div className="date-and-title mb-[15px]">
            <p>{formatDate(event.date)}</p>
            <h2 className="e-title text-xl font-bold mb-3 uppercase">{event.title}</h2>
          </div>
          <div className="venue1 flex items-center">
            <p className="text-black text-md mr-[10px] mt-[5px]"><FaLocationDot className="location-icon1" /></p>
            <p className='local'>{event.venue_name}, {event.event_location}</p>
          </div>
          <div className="venue1 flex items-center">
            <p className="text-black text-md mr-[10px] mt-[5px]"><FaRegClock className="location-icon1" /></p>
            <p>{event.start_time} to {event.end_time}</p>
          </div>
          <p className='event-desc'>{event.description}</p>
        </div>
      </div>
      <div className="event-actions">
        <button className="btn btn-primary">Get Ticket</button>
        <button className="btn btn-secondary">Add to Calendar</button>
      </div>
    </div>
  )
}

export default EventDetails