import React, { useEffect, useState } from "react";

const Greetings = ({ username }) => {
  return (
    <div className="ml-10 mb-10 mt-10">
      <h2 className="text-3xl font-semibold text-navy-blue">
        Welcome, {username}
      </h2>
    </div>
  );
};

const TicketSales = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/organizer/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events', error));
  }, []);

  return (
    <div className="gray-background">
  <Greetings username="YourUsername" />
  <h2 className="text-2xl font-semibold">Ticket Sales and Revenue</h2>
  <div className="flex flex-row">
    <div className="gray-section flex-grow">
      <h3 className="text-lg font-semibold">Event Name</h3>
      {events.map((event) => (
        <p key={event.id}>{event.title}</p>
      ))}
    </div>
    <div className="gray-section flex-grow">
      <h3 className="text-lg font-semibold">Date</h3>
      {events.map((event) => (
        <p key={event.id}>{event.date}</p>
      ))}
    </div>
    <div className="gray-section flex-grow">
      <h3 className="text-lg font-semibold">Tickets Sold</h3>
      {events.map((event) => (
        <p key={event.id}>{event.ticketsSold}</p>
      ))}
    </div>
    <div className="gray-section flex-grow">
      <h3 className="text-lg font-semibold">Total Revenue</h3>
      {events.map((event) => (
        <p key={event.id}>{event.totalRevenue}</p>
      ))}
    </div>
  </div>
</div>

  );
};

export default TicketSales;
