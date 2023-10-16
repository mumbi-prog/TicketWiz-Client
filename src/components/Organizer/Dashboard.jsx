import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalTicketsSold, setTotalTicketsSold] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [organizerEvents, setOrganizerEvents] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch('http://localhost:8001/api/events')
    .then((response) => response.json())
   
  }, []);


  return (
    <div>
    <h2>Organizer Dashboard</h2>
    <div>
      <div>
        <p>Total Events: {totalEvents}</p>
      </div>
      <div>
        <p>Total Tickets Sold: {totalTicketsSold}</p>
      </div>
      <div>
        <p>Total Revenue: ${totalRevenue}</p>
      </div>
    </div>
  )
}

export default Dashboard