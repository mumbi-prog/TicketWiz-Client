import React, { useState } from 'react';

const CreateEvent = () => {
    const [eventDetails, setEventDetails] = useState({
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
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventDetails({
            ...eventDetails,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/events',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventDetails),
            });
            if (!response.ok) {
                // event created successfully
                console.log('Event created successfully!');
                // redirect to event details page
            } else {
                //handle error cases
                console.log('Failed to create event.')
            }
        }   catch (error) {
            console.error('Error creating event:', error);
        }
    };


    re
}