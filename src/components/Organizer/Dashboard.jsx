// import React, { useEffect, useState } from 'react'

// const Dashboard = () => {
//   const [totalEvents, setTotalEvents] = useState(0);
//   const [totalTicketsSold, setTotalTicketsSold] = useState(0);
//   const [totalRevenue, setTotalRevenue] = useState(0);
//   const [organizerEvents, setOrganizerEvents] = useState([]);

//   // Fetch data from API
//   useEffect(() => {
//     //Fetch organizer's events
//     fetch('http://localhost:4000/api/events')
//     .then((response) => response.json())
//     .then((data) => {
//       setOrganizerEvents(data);
//     })
//     .catch((error) => {
//       console.error('Error fetching organizer events', error)
//     });

//     //fetch for organiser metrics
//     fetch('http://localhost:4000/api/metrics')
//     .then((response) => response.json())
//     .then((data) => {
//       setTotalEvents(data.totalEvents);
//       setTotalTicketsSold(data.totalTicketsSold);
//       setTotalRevenue(data.totalRevenue);
//     })
//     .catch((error) => {
//       console.error('Error fetching organiser metrics', error);
//     });
//   }, []);

//   const handleUpdateEvent = (eventId) => {
//     const updatedEventDetails = {
//       title: "New Title",
//       description: "New Description",
//       category: 'New category', 
//       image_url: 'New img poster',
//       date: 'New date',
//       start_time: 'New start time',
//       end_time: 'New end time',
//       venue_name: 'New venue',
//       event_location: 'New event location',
//       available_tickets_count: 0,
//     };
//     fetch (`http://localhost:8000/api/event/${eventId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedEventDetails),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Event updated successfully');
//     })
//     .catch((error) => {
//       console.error('Error updating event', error);
//     });
//   };

//   const handleDeleteEvent = (eventId) => {
    
//     if (window.confirm('Are you sure you want to delete this event?')) {
//       fetch (`http://localhost:8000/api/event/${eventId}`, {
//         method: 'DELETE',
//       })
//       .then((response) => {
//         if (response.status === 204) {
//           // display success message
//           console.log('Event deleted successfully');
//         } else {
//           // handle errors
//           console.error('error deleting event');
//         }
//       })
//       .catch((error) => {
//         console.error('Error deleting event', error);
//       });
//     }
//   };


//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div>
//         <div>
//           <p>Total Events: {totalEvents}</p>
//         </div>
//         <div>
//           <p>Total Tickets Sold: {totalTicketsSold}</p>
//         </div>
//         <div>
//           <p>Total Revenue: ${totalRevenue}</p>
//         </div>
//     </div>

//     <h3>My Events:</h3>
//       <div className="event-cards">
//         {organizerEvents.map((event) => (
//           <div className="event-card" key={event.id}>
//             <h4>{event.title}</h4>
//             <p>Date: {event.date}</p>
//             <button onClick={() => handleUpdateEvent(event.id)}>Edit</button>
//             <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
//             <button>Edit</button>
//             <button>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleDateString(undefined, { month: 'short' });
  const day = date.getDate();
  return (
    <div className="event-date font-bold flex flex-col items-center justify-center mt-2">
      <p className="month text-main-blue font-medium text-sm">{month}</p>
      <p className="day text-3xl mt-2 font-bold">{day}</p>
    </div>
  );
}

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [eventCount, setEventCount] = useState(0);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [eventToUpdate, setEventToUpdate] = useState(null);

  const [updatedEventTitle, setUpdatedEventTitle] = useState('');
  const [updatedEventDesc, setUpdatedEventDesc] = useState('');
  const [updatedEventCategory, setUpdatedEventCategory] = useState('');
  const [updatedEventPoster, setUpdatedEventPoster] = useState('');
  const [updatedEventDate, setUpdatedEventDate] = useState('');
  const [updatedEventStartTime, setUpdatedEventStartTime] = useState('');
  const [updatedEventEndTime, setUpdatedEventEndTime] = useState('');
  const [updatedEventVenue, setUpdatedEventVenue] = useState('');
  const [updatedEventLocation, setUpdatedEventLocation] = useState('');
  const [updatedEventPrice, setUpdatedEventPrice] = useState('');
  const [updatedEventTicketCount, setUpdatedEventTicketCount] = useState('');

  const openUpdateModal = (event) => {
    setIsUpdateModalOpen(true);
    setEventToUpdate(event);
    setUpdatedEventTitle(event.title);
    setUpdatedEventDesc(event.description);
    setUpdatedEventCategory(event.category);
    setUpdatedEventPoster(event.image_url);
    setUpdatedEventDate(event.date);
    setUpdatedEventStartTime(event.start_time);
    setUpdatedEventEndTime(event.end_time);
    setUpdatedEventVenue(event.venue_name);
    setUpdatedEventLocation(event.event_location);
    setUpdatedEventPrice(event.price);
    setUpdatedEventTicketCount(event.available_tickets_count);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setEventToUpdate(null);
  };

  const handleDeleteEvent = (event) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      fetch(`http://localhost:3000/events/${event.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Cannot delete');
          }
          setEvents((prevEvents) => prevEvents.filter((e) => e.id !== event.id));
        })
        .catch((err) => {
          setError(err);
        });
    }
  };

  const handleUpdateEvent = () => {
    const updatedEventData = {
      title: updatedEventTitle,
      description: updatedEventDesc,
      category: updatedEventCategory,
      image_url: updatedEventPoster,
      date: updatedEventDate,
      start_time: updatedEventStartTime,
      end_time: updatedEventEndTime,
      venue_name: updatedEventVenue,
      event_location: updatedEventLocation,
      price: updatedEventPrice,
      available_tickets_count: updatedEventTicketCount,
    };

    fetch(`/events/${eventToUpdate.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEventData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Cannot update');
        }
        return response.json();
      })
      .then((updatedEvent) => {
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event
          )
        );

        closeUpdateModal();
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    fetch('http://localhost:3000/organiser_dashboard')
      .then((response) => {
        if (!response.ok) {
          throw new Error(' Cannot fetch your events');
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data);
        setEventCount(data.length);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="organizer-dashboard">
      <div className="dashboard-container">
        <h2 className="dashboard-title">Organizer Dashboard</h2>
        <p className="event-count">Total Events Created: {eventCount}</p>
        <div className="event-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-12">
          {events.map((event) => (
            <div key={event.id} className="event-card border border-gray-300 rounded-lg shadow-md">
              <div className="event-img">
                <img src={event.image_url} alt={event.title} className="h-40 w-full object-cover rounded-t-lg" />
              </div>
              <div className="event-selected-details flex p-5">
                <div className="event-date">{formatDate(event.date)}</div>
                <div className="eve-nue pl-6">
                  <h3 className="e-title font-sans mt-0 text-lg font-bold uppercase text-black ml-2">
                    {event.title}
                  </h3>
                  <div className="venue1 flex items-center">
                    <p className="text-black text-md mr-5 mt-5">
                      <FaLocationDot className="location-icon1" />
                    </p>
                    <p className="local1 text-sm mt-5">
                      {event.venue_name}, {event.event_location}
                    </p>
                  </div>
                  <div className="update-and-delete flex">
                    <FaTrash onClick={() => handleDeleteEvent(event)} />
                    <FaEdit onClick={() => openUpdateModal(event)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isUpdateModalOpen && (
        <Modal onClose={closeUpdateModal}>
          <h3>Edit Event</h3>
          <input type="text" placeholder="Event Title" value={updatedEventTitle}  onChange={(e) => setUpdatedEventTitle(e.target.value)} />
          <input type="text" placeholder="Event Description" value={updatedEventDesc} onChange={(e) => setUpdatedEventDesc(e.target.value)}  />
          <input type="text" placeholder="Event Category" value={updatedEventCategory} onChange={(e) => setUpdatedEventCategory(e.target.value)} />
          <input type="text" placeholder="Event Poster" value={updatedEventPoster} onChange={(e) => setUpdatedEventPoster(e.target.value)} />
          <input type="text" placeholder="Event Date" value={updatedEventDate} onChange={(e) => setUpdatedEventDate(e.target.value)} />
          <input type="text" placeholder="Event Start Time" value={updatedEventStartTime} onChange={(e) => setUpdatedEventStartTime(e.target.value)} />
          <input type="text" placeholder="Event End Time" value={updatedEventEndTime} onChange={(e) => setUpdatedEventEndTime(e.target.value)} />
          <input type="text" placeholder="Event Venue Name" value={updatedEventVenue} onChange={(e) => setUpdatedEventVenue(e.target.value)} />
          <input type="text" placeholder="Event Location" value={updatedEventLocation} onChange={(e) => setUpdatedEventLocation(e.target.value)} />
          <input type="text" placeholder="Event Price" value={updatedEventPrice} onChange={(e) => setUpdatedEventPrice(e.target.value)} />
          <input type="text" placeholder="Event Ticket Count" value={updatedEventTicketCount} onChange={(e) => setUpdatedEventTicketCount(e.target.value)} />

          <div className="confirm-buttons flex flex-row gap-15">
            <button onClick={handleUpdateEvent}>Update</button>
            <button onClick={closeUpdateModal}>Cancel</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;
