import React, { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import './LoaderStyling.css';
import api from '../api/Api';

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

  function EventHistory({ isOpen, onTotalEvents }) {
    const [eventHistory, setEventHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      api.get('/event_history')
        .then((response) => response.data)
        .then((data) => {
          setEventHistory(data);
          setLoading(false);
          onTotalEvents(data.length);
        })
        .catch((error) => {
          console.error('Error fetching event history:', error);
        });
    }, [onTotalEvents]);

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

  const gridColumns = isOpen ? 'grid-cols-3' : 'grid-cols-4'; 

  return (
    <section className="event mx-[20px] font-sans my-[30px]">
      <div className="event-history-container font-sans flex flex-col ">
        <h2 className="font-sans text-2xl font-medium mb-[15px]">
          View Past and Upcoming Events You've Booked
        </h2>

        <div className={`event-history grid ${gridColumns} sm:grid-cols-2 md:grid-cols-3 gap-8 my-[10px]`}>
          {eventHistory.map((event) => (
            <div key={event.id} className="event-card border border-gray-300 rounded-lg shadow-md hover:shadow-blue w-[280px]">
              <div className="event-img">
                <img src={event.image_url} alt={event.title} className="h-[150px] w-[280px] object-cover rounded-t-lg" />
              </div>
              <div className="event-selected-details flex p-5">
                <div className="event-date">
                  <p>{formatDate(event.date)}</p>
                </div>
                <div className="event-venue pl-6">
                  <h3 className="event-title font-sans mt-[0] text-lg font-bold uppercase text-black ml-[2px]">
                    {event.title}
                  </h3>
                  <div className="venue1 flex items-center">
                    <p className="text-black text-md mr-[5px] mt-[5px]">
                      <FaLocationDot className="location-icon1" />
                    </p>
                    <p className="local1 text-sm mt-[5px]">
                      {event.venue_name}, {event.event_location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventHistory;
