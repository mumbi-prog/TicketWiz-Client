// import React, { useEffect, useState } from "react";


// const Greetings = ({ username }) => {
//   return (
//     <div className="ml-10 mb-10 mt-10">
//       <h2 className="text-3xl font-semibold text-navy-blue">
//         Welcome, {username}
//       </h2>
      
//     </div>
//   );
// };

// const TicketSales = () => {
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         // API call to get data
//         fetch('/api/organizer/events')
//             .then((response) => response.json())
//             .then((data) => setEvents(data))
//             .catch((error) => console.error('Error fetching events', error));
//     }, []);

//     return (
//         <div>
//           <Greetings username="YourUsername" />
//           <h2>Ticket Sales and Revenue</h2>
//           <table className="border-collapse border border-gray-400">
//             <thead>
//               <tr>
//                 <th className="border border-gray-400 p-2">Event Name</th>
//                 <th className="border border-gray-400 p-2">Date</th>
//                 <th className="border border-gray-400 p-2">Tickets Sold</th>
//                 <th className="border border-gray-400 p-2">Total Revenue</th>
//               </tr>
//             </thead>
//             <tbody>
//               {events.map((event) => (
//                 <tr key={event.id}>
//                   <td className="border border-gray-400 p-2">{event.title}</td>
//                   <td className="border border-gray-400 p-2">{event.date}</td>
//                   <td className="border border-gray-400 p-2">{event.ticketsSold}</td>
//                   <td className="border border-gray-400 p-2">{event.totalRevenue}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//     );
// };


// export default TicketSales;

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
        // API call to get data
        fetch('/api/organizer/events')
            .then((response) => response.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error('Error fetching events', error));
    }, []);

    return (
        <div>
          <Greetings username="YourUsername" />
          <h2>Ticket Sales and Revenue</h2>
          <div className="flex flex-row">
            <div className="border border-gray-400 p-2 flex-grow">
              <h3 className="text-lg font-semibold">Event Name</h3>
              {events.map((event) => (
                <p key={event.id}>{event.title}</p>
              ))}
            </div>
            <div className="border border-gray-400 p-2 flex-grow">
              <h3 className="text-lg font-semibold">Date</h3>
              {events.map((event) => (
                <p key={event.id}>{event.date}</p>
              ))}
            </div>
            <div className="border border-gray-400 p-2 flex-grow">
              <h3 className="text-lg font-semibold">Tickets Sold</h3>
              {events.map((event) => (
                <p key={event.id}>{event.ticketsSold}</p>
              ))}
            </div>
            <div className="border border-gray-400 p-2 flex-grow">
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
