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

    return 
}