import React, { useEffect, useState } from 'react';
import './Events.css';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import EventDetails from './EventDetails';

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

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const navigate = useNavigate(); 


  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  const handleBookTicketClick = (event) => {
    navigate(`/events/${event.id}`);
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="event mb-[30px]">
      <div className="event-container font-sans flex flex-col items-center ">
        <h2 className="font-sans text-head-color font-bold text-4xl pt-[20px]">
          All events
        </h2>
        <div className="search-bar border border-black p-[5px] rounded-md mt-[15px] mb-[-15px] w-[300px] h-[35px]">
          <input
            className="search-input w-full border-none outline-none py-[1px] px-[5px] font-light font-playfair text-sm"
            type="text"
            placeholder="Search event"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

         <div className="event-list grid grid-cols-4 gap-[30px] mx-[20px] my-[60px]">
           {paginatedEvents.map((event) => (
            <div key={event.id} className="event-card border border-gray-300 rounded-lg shadow-md">
              <div className="event-img">
                <img src={event.image_url} alt={event.title} className="h-[150px] w-[260px] object-cover rounded-t-lg" />
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
              
              <button className="bg-button-color text-white h-[35px] w-[130px] rounded-full mt-0 align-center ml-[80px] mb-[15px]" onClick={() => handleBookTicketClick(event)}>
                Book Ticket
              </button >
             
            </div>
          ))}
        </div>
       
        <div className="pagination flex justify-center items-center my-[5px]">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="prev-next "
          >
            Previous
          </button>
          {Array.from(
            { length: Math.ceil(filteredEvents.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`page-button-num mx-[5px] ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            onClick={goToNextPage}
            disabled={currentPage === Math.ceil(filteredEvents.length / itemsPerPage)}
            className="prev-next"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventList;

       

