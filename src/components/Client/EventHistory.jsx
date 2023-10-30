import React, { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa';
import './LoaderStyling.css';

function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleDateString(undefined, { month: 'short' });
    const day = date.getDate();
    return (
      <div className="event-date font- font-bold flex flex-col items-center justify-center mt-[2px]">
        <p className="month text-main-blue font-medium text-sm">{month}</p>
        <p className="day text-3xl mt-[-2px] font-bold">{day}</p>
      </div>
    );
  }

function EventHistory() {

  const [eventHistory, setEventHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/event_history')
      .then((response) => response.json())
      .then((data) => {
        setEventHistory(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching event history:', error);
      });
  }, []);

  if (loading) {
    return (
      <section className="dots-container mt-[15%]">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    );
  }

  return (
    <div>
        <h1>EventHistory</h1>
    </div>
  )
}

export default EventHistory