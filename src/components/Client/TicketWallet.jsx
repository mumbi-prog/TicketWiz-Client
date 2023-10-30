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
    <div>
        <h1>TicketWallet</h1>
    </div>
  )
}

export default TicketWallet