import React, { useEffect, useState } from 'react';
import './LoaderStyling.css';
import api from '../api/Api';

function TicketWallet() {
  const [ticketWallet, setTicketWallet] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/ticket_wallet')
      .then((response) => response.data)
      .then((data) => {
        setTicketWallet(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching ticket wallet:', error);
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

  const totalTickets = ticketWallet.reduce((total, ticket) => total + ticket.quantity, 0);

  return (
    <div className="ticket-wallet mx-[20px] font-sans my-[30px]">
      <h2 className='text-2xl font-bold mb-[10px] text-left mx-[50px]'>My Ticket Wallet</h2>

      <div className="ticket-wallet-table-container rounded-md bg-gray-100 py-[20px] px-[50px] mx-[50px] inline-block mt-[25px]">
          <p className='mb-[10px] text-left text-acc-blue font-medium text-lg'>Total Tickets: {totalTickets}</p>
          <div className="ticket-wallet-table ">
            <table className="">
            <thead>
              <tr>
                <th className="w-1/4 py-2 px-10 bg-gray-500 text-white text-center border-r-[10px]">Event Name</th>
                <th className="w-1/4 py-2 px-10 bg-gray-500 text-white text-center border-r-[10px]">Event Category</th>
                <th className="w-1/4 py-2 px-10 bg-gray-500 text-white text-center border-r-[10px]">Ticket Type</th>
                <th className="w-1/4 py-2 px-10 bg-gray-500 text-white text-center">Quantity</th>
              </tr>
            </thead>
              <tbody>
                {ticketWallet.map((ticket, index) => (
                  <tr key={index} className='border-l-4 border-transparent hover:border-blue-500 p-[20px] text-center'>
                    <td className="py-2 px-4 ">{ticket.event_name}</td>
                    <td className="py-2 px-4 ">{ticket.event_category}</td>
                    <td className="py-2 px-4 ">{ticket.ticket_type}</td>
                    <td className="py-2 px-4 ">{ticket.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

    </div>
);
}



export default TicketWallet;