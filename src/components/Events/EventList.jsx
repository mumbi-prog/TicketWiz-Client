import React, { useEffect, useState } from 'react';
import './Events.css';
import {FaLocationDot} from "react-icons/fa6";
import Navbar from '../LandingPage/Navbar';

function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleDateString(undefined, { month: 'short' });
  const day = date.getDate();
  return (
    <div className="event-date">
      <p className="month">{month}</p>
      <p className="day">{day}</p>
    </div>
  );
}

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch('http://localhost:3000/events')
    .then((response) => response.json())
    .then((data) => setEvents(data))
    .catch((error) => console.error('Error fetching events:', error));
  }, []);

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
    <section>
      <Navbar/>
    <div className='event-container font-sans flex flex-col items-center '>
      <h2 className="font-sans text-head-color font-bold text-4xl pt-[20px]">All events</h2>
      <div className="search-bar">
        <input className='search-input' type="text" placeholder="Search by title" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <div className="event-list">
        {paginatedEvents.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-img">
              <img src={event.image_url} alt={event.title} />
            </div> 
            <div className="event-selected-details">
              <div className="event-date">
                <p>{formatDate(event.date)}</p>
              </div>
              <div className="eve-nue">
                <h3>{event.title}</h3>
                <div className="venue1">
                  <p><FaLocationDot className='location-icon1'/></p>
                  <p className='local1'>{event.venue_name}, {event.event_location}</p>
                </div>
              </div>
            </div>
            <button className="bg-button-color text-white h-[35px] w-[120px] rounded-full mt-0 align-center ml-[75px] mb-[15px]">Book Ticket</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from(
          { length: Math.ceil(filteredEvents.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          )
        )}
        <button
          onClick={goToNextPage}
          disabled={currentPage === Math.ceil(filteredEvents.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
    </section>
  );
};

export default EventList;
