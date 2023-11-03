import React, { useState, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

const FeaturedEvents = () => {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/featured_events')
      .then((response) => response.json())
      .then((data) => setFeaturedEvents(data))
      .catch((error) => console.error('Error fetching featured events:', error));
  }, []);  

  const handleBookTicketClick = (event) => {
    navigate(`/events/${event.id}`);
  };

  return (
    <div className="container mx-auto py-12 pl-[30px] pr-[30px] z-1">
      <h2 className="font-sans text-head-color font-bold text-4xl pt-[5px] pb-[15px]">
        Featured Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredEvents.map((event, index) => (
           <div key={event.id} className="event-card border border-gray-300 rounded-lg shadow-md hover:shadow-blue w-[280px]">
           <div className="event-img">
             <img src={event.image_url} alt={event.title} className="h-[150px] w-[280px] object-cover rounded-t-lg" />
           </div>
           <div className="event-selected-details flex p-5">
             <div className="event-date">
               <p>{formatDate(event.date)}</p>
             </div>
             <div className="eve-nue pl-6">
               <h3 className="e-title font-sans mt-[0] text-lg font-bold uppercase text-black ml-[2px]">{event.title}</h3>
               <div className="venue1 flex items-center">
                 <p className="text-black text-md mr-[5px] mt-[5px]">
                   <FaLocationDot className="location-icon1" />
                 </p>
                 <p className="local1 text-sm mt-[5px]">{event.venue_name}, {event.event_location}</p>
               </div>
             </div>
           </div>
           
           <button className="bk-btn bg-button-color text-white h-[35px] w-[130px] rounded-full mt-0 align-center ml-[80px] mb-[15px] transition-transform transform hover:scale-105 z-1" onClick={() => handleBookTicketClick(event)}>
             Book Ticket
           </button >
          
         </div>
        ))}
      </div>
      <div className="text-center mt-[35px]">
        <Link
          to="/events"
          className="bg-white-500 text-sky-400/100 border border-sky-500 px-4 py-2 rounded-full hover:bg-blue-400 hover:text-white hover:font-medium"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedEvents;

