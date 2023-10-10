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
            if (response.ok) {
                // event created successfully
                console.log('Event created successfully!');
                // redirect to event details page
            } else {
                //handle error cases
                console.log('Failed to create event.');
            }
        }   catch (error) {
            console.error('Error creating event:', error);
        }
    };


    return (
        <div>
          <h2>Create Event</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={eventDetails.title}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={eventDetails.description}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={eventDetails.category}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Image URL:
              <input
                type="text"
                name="image_url"
                value={eventDetails.image_url}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={eventDetails.date}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Start Time:
              <input
                type="time"
                name="start_time"
                value={eventDetails.start_time}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              End Time:
              <input
                type="time"
                name="end_time"
                value={eventDetails.end_time}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Venue Name:
              <input
                type="text"
                name="venue_name"
                value={eventDetails.venue_name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Event Location:
              <input
                type="text"
                name="event_location"
                value={eventDetails.event_location}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Available Tickets Count:
              <input
                type="number"
                name="available_tickets_count"
                value={eventDetails.available_tickets_count}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Create Event</button>
          </form>
        </div>
    );
};

export default CreateEvent;