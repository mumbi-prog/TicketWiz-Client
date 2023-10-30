import React, { useEffect, useState } from 'react';
import './LoaderStyling.css';

function TicketWallet() {
  const [ticketWallet, setTicketWallet] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/ticket_wallet')
      .then((response) => response.json())
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

  return (
    <div className="ticket-wallet">
      <h2>Ticket Wallet</h2>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Event Category</th>
            <th>Ticket Type</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {ticketWallet.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.event_name}</td>
              <td>{ticket.event_category}</td>
              <td>{ticket.ticket_type}</td>
              <td>{ticket.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketWallet;