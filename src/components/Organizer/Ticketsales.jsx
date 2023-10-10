import React, { useEffect, useState } from "react";

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
          <h2>Ticket Sales</h2>
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Tickets Sold</th>
                <th>Total Revenue</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{event.date}</td>
                  <td>{event.ticketsSold}</td> 
                  {/* // to replace with correct property name */}
                  <td>{event.totalRevenue}</td> 
                   {/* // to replace with correct property name */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
};


export default TicketSales;