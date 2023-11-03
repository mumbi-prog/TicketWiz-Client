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
      <h2 className='font-sans text-2xl font-medium mb-[15px]'>My Ticket Wallet</h2>

      <div className="ticket-wallet-table-container rounded-md bg-gray-100 py-[20px] px-[50px] inline-block mt-[25px]">
          <p className='mb-[15px] text-left text-acc-blue font-medium text-lg'>Total Tickets : {totalTickets}</p>
          <div className="ticket-wallet-table ">
            <table className="">
            <thead>
              <tr>
                <th className="w-[200px]  py-[10px] px-[20px] bg-gray-300 text-black font-medium text-center border-r-[20px]">Event name</th>
                <th className="w-[230px]   py-[10px] px-[20px] bg-gray-300 text-black font-medium text-center border-r-[20px]">Event category</th>
                <th className="w-1/4   py-[10px] px-[20px] bg-gray-300 text-black font-medium text-center border-r-[20px]">Ticket Type</th>
                <th className="w-1/4  py-[10px] px-[20px] bg-gray-300 text-black font-medium text-center">Quantity</th>
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