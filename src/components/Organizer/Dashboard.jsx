import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalTicketsSold, setTotalTicketsSold] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [organizerEvents, setOrganizerEvents] = useState([]);

  // Fetch data from API
  useEffect(() => {
    //Fetch organizer's events
    fetch('http://localhost:4000/api/events')
    .then((response) => response.json())
    .then((data) => {
      setOrganizerEvents(data);
    })
    .catch((error) => {
      console.error('Error fetching organizer events', error)
    });

    //fetch for organiser metrics
    fetch('http://localhost:4000/api/metrics')
    .then((response) => response.json())
    .then((data) => {
      setTotalEvents(data.totalEvents);
      setTotalTicketsSold(data.totalTicketsSold);
      setTotalRevenue(data.totalRevenue);
    })
    .catch((error) => {
      console.error('Error fetching organiser metrics', error);
    });
  }, []);

  const handleUpdateEvent = (eventId) => {
    const updatedEventDetails = {
      title: "New Title",
      description: "New Description",
      category: 'New category', 
      image_url: 'New img poster',
      date: 'New date',
      start_time: 'New start time',
      end_time: 'New end time',
      venue_name: 'New venue',
      event_location: 'New event location',
      available_tickets_count: 0,
    };
    fetch (`http://localhost:8000/api/event/${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEventDetails),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Event updated successfully');
    })
    .catch((error) => {
      console.error('Error updating event', error);
    });
  };

  const handleDeleteEvent = (eventId) => {
    
    if (window.confirm('Are you sure you want to delete this event?')) {
      fetch (`http://localhost:8000/api/event/${eventId}`, {
        method: 'DELETE',
      })
      .then((response) => {
        if (response.status === 204) {
          // display success message
          console.log('Event deleted successfully');
        } else {
          // handle errors
          console.error('error deleting event');
        }
      })
      .catch((error) => {
        console.error('Error deleting event', error);
      });
    }
  };


  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <div>
          <p>Total Events: {totalEvents}</p>
        </div>
        <div>
          <p>Total Tickets Sold: {totalTicketsSold}</p>
        </div>
        <div>
          <p>Total Revenue: ${totalRevenue}</p>
        </div>
    </div>

    <h3>Organizer's Created Events:</h3>
      <div className="event-cards">
        {organizerEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <h4>{event.title}</h4>
            <p>Date: {event.date}</p>
            <button onClick={() => handleUpdateEvent(event.id)}>Edit</button>
            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard