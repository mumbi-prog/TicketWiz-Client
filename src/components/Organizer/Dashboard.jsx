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

// import React, { useEffect, useState } from 'react';

// const Dashboard = () => {
//   const [totalEvents, setTotalEvents] = useState(0);
//   const [totalTicketsSold, setTotalTicketsSold] = useState(0);
//   const [totalRevenue, setTotalRevenue] = useState(0);
//   const [organizerEvents, setOrganizerEvents] = useState([]);

//   // Fetch data from API
//   useEffect(() => {
//     // Fetch organizer's events
//     fetch('http://localhost:4000/api/events')
//       .then((response) => response.json())
//       .then((data) => {
//         setOrganizerEvents(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching organizer events', error);
//       });

//     // Fetch organizer metrics
//     fetch('http://localhost:4000/api/metrics')
//       .then((response) => response.json())
//       .then((data) => {
//         setTotalEvents(data.totalEvents);
//         setTotalTicketsSold(data.totalTicketsSold);
//         setTotalRevenue(data.totalRevenue);
//       })
//       .catch((error) => {
//         console.error('Error fetching organizer metrics', error);
//       });
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
//     fetch(`http://localhost:8000/api/event/${eventId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedEventDetails),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Event updated successfully');
//       })
//       .catch((error) => {
//         console.error('Error updating event', error);
//       });
//   };

//   const handleDeleteEvent = (eventId) => {
//     if (window.confirm('Are you sure you want to delete this event?')) {
//       fetch(`http://localhost:8000/api/event/${eventId}`, {
//         method: 'DELETE',
//       })
//         .then((response) => {
//           if (response.status === 204) {
            
//             console.log('Event deleted successfully');
//           } else {
            
//             console.error('Error deleting event');
//           }
//         })
//         .catch((error) => {
//           console.error('Error deleting event', error);
//         });
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
//       <div className="flex flex-wrap justify-left ml-10">
//         <div className="max-w-xs mx-4 mb-8">
//           <div className="bg-gray-300 hover:bg-blue-500 rounded-lg shadow-lg transition duration-300 ease-in-out">
//             <div className="p-4">
//               <h2 className="text-2xl font-semibold mb-2 hover:text-white">
//                 Total Events
//                 </h2>
//               <p className="text-gray-600 hover:text-white">{totalEvents}</p>
//             </div>
//           </div>
//         </div>
//         <div className="max-w-xs mx-4 mb-8">
//           <div className="bg-gray-300 hover:bg-blue-500 rounded-lg shadow-lg transition duration-300 ease-in-out">
//             <div className="p-4">
//               <h2 className="text-2xl font-semibold mb-2 hover:text-white">
//                 Total Tickets Sold
//               </h2>
//               <p className="text-gray-600 hover:text-white">{totalTicketsSold}</p>
//             </div>
//           </div>
//         </div>
//         <div className="max-w-xs mx-4 mb-8">
//           <div className="bg-gray-300 hover:bg-blue-500 rounded-lg shadow-lg transition duration-300 ease-in-out">
//             <div className="p-4">
//               <h2 className="text-2xl font-semibold mb-2 hover:text-white">
//                 Total Revenue
//               </h2>
//               <p className="text-gray-600 hover-text-white">${totalRevenue}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <h3 className="text-3xl font-bold mb-4">Organizer's Created Events:</h3>
//       <div className="event-cards">
//         {organizerEvents.map((event) => (
//           <div className="event-card" key={event.id}>
//             <h4 className="text-2xl font-semibold mb-2">{event.title}</h4>
//             <p className="text-gray-600">Date: {event.date}</p>
//             <button className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-800" onClick={() => handleUpdateEvent(event.id)}>Edit</button>
//             <button className="bg-red-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-800" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import MyEvents from './MyEvents';
const Greetings = ({ username }) => {
  return (
    <div className="ml-10 mb-10 mt-10">
      <h2 className="text-3xl font-semibold text-navy-blue">
        Welcome, {username}

      </h2>
      <p className="text-xl mt-2 font-semibold">Organizer Dashboard</p>
      
    </div>
  );
};

const Dashboard = () => {
  const [totalEvents, setTotalEvents] = useState(14);
  const [totalTicketsSold, setTotalTicketsSold] = useState(223);
  const [totalRevenue, setTotalRevenue] = useState(61990);
  const [organizerEvents, setOrganizerEvents] = useState([]);

  
  useEffect(() => {
    
    fetch('http://localhost:4000/api/events')
      .then((response) => response.json())
      .then((data) => {
        setOrganizerEvents(data);
      })
      .catch((error) => {
        console.error('Error fetching organizer events', error);
      });

    
    fetch('http://localhost:4000/api/metrics')
      .then((response) => response.json())
      .then((data) => {
        setTotalEvents(data.totalEvents);
        setTotalTicketsSold(data.totalTicketsSold);
        setTotalRevenue(data.totalRevenue);
      })
      .catch((error) => {
        console.error('Error fetching organizer metrics', error);
      });
  }, []);

  const handleUpdateEvent = (eventId) => {
    const updatedEventDetails = {
      title: 'New Title',
      description: 'New Description',
      category: 'New category',
      image_url: 'New img poster',
      date: 'New date',
      start_time: 'New start time',
      end_time: 'New end time',
      venue_name: 'New venue',
      event_location: 'New event location',
      available_tickets_count: 0,
    };
    fetch(`http://localhost:8000/api/event/${eventId}`, {
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
      fetch(`http://localhost:8000/api/event/${eventId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.status === 204) {
            console.log('Event deleted successfully');
          } else {
            console.error('Error deleting event');
          }
        })
        .catch((error) => {
          console.error('Error deleting event', error);
        });
    }
  };

  return (
    <div>
      <Greetings username="YourUsername" />
      {/* <h2 className="text-3xl font-bold mb-4">Dashboard</h2> */}
      <div className="flex flex-wrap justify-left ml-10">
        <div className="max-w-xs mx-4 mb-8">
          <div className="bg-gray-300 hover:bg-blue-500 rounded-lg shadow-lg transition duration-300 ease-in-out">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 hover:text-white">
                Total Events
              </h2>
              <p className="text-gray-600 hover:text-white">{totalEvents}</p>
            </div>
          </div>
        </div>
        <div className="max-w-xs mx-4 mb-8">
          <div className="bg-gray-300 hover:bg-blue-500 rounded-lg shadow-lg transition duration-300 ease-in-out">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 hover:text-white">
                Total Tickets Sold
              </h2>
              <p className="text-gray-600 hover:text-white">{totalTicketsSold}</p>
            </div>
          </div>
        </div>
        <div className="max-w-xs mx-4 mb-8">
          <div className="bg-gray-300 hover:bg-blue-500 rounded-lg shadow-lg transition duration-300 ease-in-out">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 hover:text-white">
                Total Revenue
              </h2>
              <p className="text-gray-600 hover:text-white">${totalRevenue}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-left ml-10">
        <MyEvents /> 
        {organizerEvents.map((event, index) => (
          
          <div className="event-card" key={event.id}>
            <h4 className="text-2xl font-semibold mb-2">{event.title}</h4>
            <p className="text-gray-600">Date: {event.date}</p>
            <button className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-800" onClick={() => handleUpdateEvent(event.id)}>Edit</button>
            <button className="bg-red-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-800" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Dashboard;


