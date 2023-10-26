// import React, { useState } from 'react';

// const CreateEvent = () => {
//     const [eventDetails, setEventDetails] = useState({
//         title: '',
//         description: '',
//         category: '', 
//         image_url: '',
//         date: '',
//         start_time: '',
//         end_time: '',
//         venue_name: '',
//         event_location: '',
//         available_tickets_count: 0,
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setEventDetails({
//             ...eventDetails,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('/api/events',{
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(eventDetails),
//             });
//             if (response.ok) {
//                 // event created successfully
//                 console.log('Event created successfully!');
//                 // redirect to event details page
//             } else {
//                 //handle error cases
//                 console.log('Failed to create event.');
//             }
//         }   catch (error) {
//             console.error('Error creating event:', error);
//         }
//     };


//     return (
//         <div>
//           <h2 className="text-2xl font-bold mb-8">Create Event</h2>
//           <form onSubmit={handleSubmit}>
//             <label >
//               Event Title:
//               <input
//                 type="text"
//                 name="title"
//                 value={eventDetails.title}
//                 className="mt-1 p-2 w-full border rounded-md bg-grey"
//                 onChange={handleInputChange}
//                 required
//               />
//             </label>
//             <label>
//               Event Description:
//               <textarea
//                 name="description"
//                 value={eventDetails.description}
//                 onChange={handleInputChange}
//                 required
//               />
//             </label>
//             <label>
//               Event Category:
//               <input
//                 type="text"
//                 name="category"
//                 value={eventDetails.category}
//                 onChange={handleInputChange}
//                 required
//               />
//             </label>
//             <label>
//               Image URL:
//               <input
//                 type="text"
//                 name="image_url"
//                 value={eventDetails.image_url}
//                 onChange={handleInputChange}
//                 required
//               />
//             </label>
//             <label>
//               Event Date:
//               <input
//                 type="date"
//                 name="date"
//                 value={eventDetails.date}
//                 onChange={handleInputChange}
//                 required
//               />
//             </label>
//             <label>
//               Start Time:
//               <input
//                 type="time"
//                 name="start_time"
//                 value={eventDetails.start_time}
//                 onChange={handleInputChange}
//                 required
//               />
//             </label>
//             <label>
//               End Time:
//               <input
//                 type="time"
//                 name="end_time"
//                 value={eventDetails.end_time}
//                 onChange={handleInputChange}
//                 required
//               />
//             </label>
//             <label>
//               Venue Name:
//               <input
//                 type="text"
//                 name="venue_name"
//                 value={eventDetails.venue_name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </label>
//             <label>
//               Event Location:
//               <input
//                 type="text"
//                 name="event_location"
//                 value={eventDetails.event_location}
//                 onChange={handleInputChange}
//                 required
//               />
//             </label>
//             <label>
//               Available Tickets Count:
//               <input
//                 type="number"
//                 name="available_tickets_count"
//                 value={eventDetails.available_tickets_count}
//                 onChange={handleInputChange}
//                 required
//               />
//             </label>
//             <label>
//               Tickets Price:
//               <input
//                 type="number"

//                 onChange={handleInputChange}
//                 required
//               />
//             </label>


//             <button type="submit">Create Event</button>
//             <div>
//             <button type="submit">Cancel Event</button>
//             </div>

//           </form>
//         </div>
//     );
// };

// export default CreateEvent;

import React, { useState } from 'react';

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
        available_tickets_count: 0,
    });

    const Greetings = ({ username }) => {
        return (
            <div className="">
                <h2 className="text-3xl font-semibold text-navy-blue">
                    Welcome, {username}
                </h2>
            </div>
        );
    };

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
            const response = await fetch('/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventDetails),
            });
            if (response.ok) {
                // Event created successfully
                console.log('Event created successfully!');
                // Redirect to the event details page
            } else {
                // Handle error cases
                console.log('Failed to create the event.');
            }
        } catch (error) {
            console.error('Error creating the event:', error);
        }
    };

    return (
        <div className="">
          <div>
            <Greetings username="YourUsername" />
            </div>
            <h2 className="text-2xl font-bold mb-8">Create Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="title">
                        Title:
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={eventDetails.title}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
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
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="category">
                        Category:
                    </label>
                    <input
                        type="text"
                        name="category"
                        value={eventDetails.category}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="image_url">
                        Image URL:
                    </label>
                    <input
                        type="text"
                        name="image_url"
                        value={eventDetails.image_url}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="date">
                        Date:
                    </label>
                    <input
                        type="date"
                        name="date"
                        value={eventDetails.date}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        required
                    />
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
                        className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        required
                    />
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
                        className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="venue_name">
                        Venue Name:
                    </label>
                    <input
                        type="text"
                        name="venue_name"
                        value={eventDetails.venue_name}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        required
                    />
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
                        className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        required
                    />
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
                        className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-bold mb-2">
                        Tickets Price:
                    </label>
                    <input
                        type="number"
                        // onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
                >
                    Create Event
                </button>
                <div>
                    <button
                        type="button" // Change 'submit' to 'button' to prevent form submission
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700"
                    >
                        Cancel Event
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateEvent;
