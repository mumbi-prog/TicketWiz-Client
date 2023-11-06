import React, { useEffect, useState } from 'react';
import './../Client/LoaderStyling.css';
import api from '../api/Api';

function TicketSales() {
  const [ticketSales, setTicketSales] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
      <div>TicketSales</div>
  );
}

export default TicketSales;
