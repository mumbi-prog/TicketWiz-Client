import React, { useEffect, useState } from 'react';
import './LoaderStyling.css';

function TicketWallet() {
  const [ticketWallet, setTicketWallet] = useState([]);
  const [loading, setLoading] = useState(true);

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