import React, { useState } from 'react';
import api from '../api/Api'; 

        const CreateEvent = () => {
        const [eventDetails, setEventDetails] = useState({
            title: '',
            description: '',
            category: '',
            image_url: '',
            date: '',
            start_time: '',
            end_time: '',
            venue_name: '',
            event_location: '',
            price: '',
            available_tickets_count: 0,
        });
        const [errors, setErrors] = useState({});
        const [successMessage, setSuccessMessage] = useState('');

        const CATEGORIES = [
            'Conferences', 'Workshops and Seminars', 'Networking Events', 'Trade Shows', 'Concerts', 'Sporting Events', 'Art Shows', 'Feast Event', 'Performing Arts', 'Charity Events', 'Parties', 'Educational Events', 'Tech and Hackathons', 'Adventure', 'Cultural', 'Virtual', 'Cosplay', 'Gaming',
        ];

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            if (value.trim() === '') {
            setErrors({ ...errors, [name]: 'Field is required' });
            } else {
            setErrors({ ...errors, [name]: '' });
            }

            setEventDetails({
            ...eventDetails,
            [name]: value,
            });
        };

        const handleCategoryChange = (e) => {
            const { name, value } = e.target;
            setEventDetails({
            ...eventDetails,
            [name]: value,
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            const hasErrors = Object.values(errors).some((error) => error !== '');
            if (hasErrors) {
            return;
            }

            try {
            const response = await api.post('/events', eventDetails);
            if (response.status === 201) {
                setSuccessMessage('Event created successfully!');
                setEventDetails({
                title: '',
                description: '',
                category: '',
                image_url: '',
                date: '',
                start_time: '',
                end_time: '',
                venue_name: '',
                event_location: '',
                price: '',
                available_tickets_count: 0,
                });
                setErrors({});
            } else {
                console.log('Failed to create the event.');
            }
            } catch (error) {
            console.error('Error creating the event:', error);
            }
        };

        return (
            <div className="mx-[50px] w-[1030px]">
                <h2 className="font-sans text-head-color font-bold text-4xl pt-[20px] mb-[20px]">
                     Create events
                </h2>
                {successMessage && <p className="text-green-500">{successMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="top-part flex gap-[30px]">
                            <div className="basic-event-deets w-[500px] flex flex-col gap-[10px]">
                                <div className="e-title">
                                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="title">
                                        Event Title:
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={eventDetails.title}
                                        onChange={handleInputChange}
                                        className="e-title p-2 w-full border rounded-md bg-gray-200"
                                        required
                                    />
                                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                                </div>
                            
                                <div className="mb-4">
                                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="category">
                                        Event Category:
                                    </label>
                                    <select
                                        name="category"
                                        value={eventDetails.category}
                                        onChange={handleCategoryChange}
                                        className="e-category p-2 w-full border rounded-md bg-gray-200"
                                        required
                                    >
                                        <option value="">Select a category</option>
                                        {CATEGORIES.map((category) => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category && <p className="text-red-500">{errors.category}</p>}
                                </div>
                                <div className="mb-4 mt-[-10px]">
                                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="image_url">
                                        Event Poster:
                                    </label>
                                    <input
                                        type="text"
                                        name="image_url"
                                        value={eventDetails.image_url}
                                        onChange={handleInputChange}
                                        className="e-poster p-2 w-[500px] border rounded-md bg-gray-200"
                                        required
                                    />
                                    {errors.image_url && <p className="text-red-500">{errors.image_url}</p>}
                                </div>
                            </div>

                            <div className="local-and-time">
                                    <div className="mb-2">
                                        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="venue_name">
                                            Event Venue:
                                        </label>
                                        <input
                                            type="text"
                                            name="venue_name"
                                            value={eventDetails.venue_name}
                                            onChange={handleInputChange}
                                            className="e-venue p-2 w-[500px] border rounded-md bg-gray-200"
                                            required
                                        />
                                        {errors.venue_name && <p className="text-red-500">{errors.venue_name}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="event_location">
                                            Event Location:
                                        </label>
                                        <input
                                            type="text"
                                            name="event_location"
                                            value={eventDetails.event_location}
                                            onChange={handleInputChange}
                                            className="e-location p-2 w-[500px] border rounded-md bg-gray-200"
                                            required
                                        />
                                        {errors.event_location && <p className="text-red-500">{errors.event_location}</p>}
                                    </div>

                                    <div className="date-and-time flex gap-[25px]">
                                            <div className="mb-4">
                                                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="date">
                                                    Date:
                                                </label>
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={eventDetails.date}
                                                    onChange={handleInputChange}
                                                    className="e-date p-2 w-[150px] border rounded-md bg-gray-200"
                                                    required
                                                />
                                                {errors.date && <p className="text-red-500">{errors.date}</p>}
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="start_time">
                                                    Start Time:
                                                </label>
                                                <input
                                                    type="time"
                                                    name="start_time"
                                                    value={eventDetails.start_time}
                                                    onChange={handleInputChange}
                                                    className="e-start-time p-2 w-[150px] border rounded-md bg-gray-200"
                                                    required
                                                />
                                                {errors.start_time && <p className="text-red-500">{errors.start_time}</p>}
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="end_time">
                                                    End Time:
                                                </label>
                                                <input
                                                    type="time"
                                                    name="end_time"
                                                    value={eventDetails.end_time}
                                                    onChange={handleInputChange}
                                                    className="e-end-time p-2 w-[150px] border rounded-md bg-gray-200"
                                                    required
                                                />
                                                {errors.end_time && <p className="text-red-500">{errors.end_time}</p>}
                                            </div>
                                    </div>

                            </div>

                    </div>
                 

                                    <div className="mb-4 w-[1030px]">
                                        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="description">
                                            Description:
                                        </label>
                                        <textarea
                                            name="description"
                                            value={eventDetails.description}
                                            onChange={handleInputChange}
                                            className="border rounded w-full p-2 bg-gray-200"
                                            required
                                        />
                                        {errors.description && <p className="text-red-500">{errors.description}</p>}
                                    </div>
                
                                    <div className="ticket-specifics flex gap-[30px]">
                                            <div>
                                                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="available_tickets_count">
                                                    Price:
                                                </label>
                                                <input
                                                    type="number"  
                                                    name="price"
                                                    value={eventDetails.price}
                                                    onChange={handleInputChange}
                                                    className="e.price p-2 w-[500px] border rounded-md bg-gray-200"
                                                    required
                                                />
                                                {errors.price && <p className="text-red-500">{errors.price}</p>}
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="available_tickets_count">
                                                    Available Tickets Count:
                                                </label>
                                                <input
                                                    type="number"
                                                    name="available_tickets_count"
                                                    value={eventDetails.available_tickets_count}
                                                    onChange={handleInputChange}
                                                    className="e.ticket-count p-2 w-[500px] border rounded-md bg-gray-200"
                                                    required
                                                />
                                                {errors.available_tickets_count && <p className="text-red-500">{errors.available_tickets_count}</p>}
                                            </div>
                                    </div>
                


                    <div className="create-and-cancel-btns flex pt-[20px] mx-[20px]" style={{ justifyContent: 'space-between' }}>
                        <button
                            type="submit"
                            className="bg-acc-blue text-white font-semibold py-2 px-[100px] rounded hover:bg-blue-700"
                        >
                            Create Event
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setEventDetails({
                                    title: '', description: '', category: '', image_url: '', date: '', start_time: '', end_time: '', venue_name: '', event_location: '',  price: '',  available_tickets_count: 0,
                                });
                                setErrors({});
                            }}
                            className="bg-acc-blue text-white font-semibold py-2 px-[100px] rounded hover:bg-blue-700"
                        >
                            Clear Form
                        </button>
                    </div>
                
            </form>
        </div>
    );
};

export default CreateEvent;
