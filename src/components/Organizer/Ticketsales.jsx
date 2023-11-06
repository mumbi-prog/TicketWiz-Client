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
   
  );
}

export default TicketSales;
