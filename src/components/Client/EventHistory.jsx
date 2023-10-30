import React, { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa';

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

  return (
    <div>
        <h1>EventHistory</h1>
    </div>
  )
}

export default EventHistory