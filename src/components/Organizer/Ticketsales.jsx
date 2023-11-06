import React, { useEffect, useState } from 'react';
import './../Client/LoaderStyling.css';
import api from '../api/Api';

function TicketSales() {
  const [ticketSales, setTicketSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/remaining_tickets_info')
      .then((response) => response.data)
      .then((data) => {
        setTicketSales(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching ticket sales info:', error);
      });
  }, []);

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

  return (
    <div className="ticket-sales mx-[20px] font-sans my-[30px]">
      <h2 className='font-sans text-2xl font-medium mb-[15px]'>My Ticket Sales</h2>

      <div className="ticket-sales-table-container rounded-md bg-gray-100 py-[20px] px-[50px] inline-block mt-[25px]">
        <div className="ticket-sales-table ">
          <table className="">
            <thead>
              <tr>
                <th className="w-[200px] py-[10px] px-[20px] bg-gray-300 text-black font-medium text-center border-r-[20px]">Event name</th>
                <th className="w-[250px] py-[10px] px-[20px] bg-gray-300 text-black font-medium text-center border-r-[20px]">Remaining Tickets</th>
                <th className="w-1/4 py-[10px] px-[20px] bg-gray-300 text-black font-medium text-center border-r-[20px]">Tickets Sold</th>
                <th className="w-1/4 py-[10px] px-[20px] bg-gray-300 text-black font-medium text-center">Total Revenue</th>
              </tr>
            </thead>
            <tbody>
              {ticketSales.map((ticket, index) => (
                <tr key={index} className='border-l-4 border-transparent hover:border-blue-500 p-[20px] text-center'>
                  <td className="py-2 px-4 ">{ticket.event_name}</td>
                  <td className="py-2 px-4 ">{ticket.remaining_tickets_count}</td>
                  <td className="py-2 px-4 ">{ticket.total_tickets_sold}</td>
                  <td className="py-2 px-4 ">{ticket.total_revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TicketSales;
