import React, { useState } from 'react';

const CreateEvent = () => {
    const [eventDetails, setEventDeatails] = useState({
        title: '',
        description: '',
        category: '', // Add other event details fields here
        image_url: '',
        date: '',
        start_time: '',
        end_time: '',
        venue_name: '',
        event_location: '',
        available_tickets_count: 0,
    })
}