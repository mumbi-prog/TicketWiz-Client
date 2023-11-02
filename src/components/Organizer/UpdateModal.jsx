import React, { useState } from 'react';

function UpdateModal({ onClose, onUpdate, eventData }) {
  const [formData, setFormData] = useState(eventData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    onClose();
  };

  const CATEGORIES = [
    'Conferences', 'Workshops and Seminars', 'Networking Events', 'Trade Shows', 'Concerts', 'Sporting Events',
    'Art Shows', 'Feast Event', 'Performing Arts', 'Charity Events', 'Parties', 'Educational Events',
    'Tech and Hackathons', 'Adventure', 'Cultural', 'Virtual', 'Cosplay', 'Gaming',
  ];

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="modal-content bg-white border border-gray-300 rounded-md px-5 w-[615px] shadow-md text-left py-[10px]">
        <form onSubmit={handleSubmit}>
          <div className='flex gap-[30px]'>
            <div className="e-title">
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="title">
                Event Title:
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="e-title p-[5px] w-[270px] border rounded-md bg-gray-200"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="category">
                Event Category:
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleCategoryChange}
                className="e-category p-[5px] w-[270px] border rounded-md bg-gray-200"
                required
              >
                <option value="">Select a category</option>
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='flex gap-[30px]'>
            <div className="mb-2">
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="venue_name">
                Event Venue:
              </label>
              <input
                type="text"
                name="venue_name"
                value={formData.venue_name}
                onChange={handleInputChange}
                className="e-venue p-[5px] w-[270px] border rounded-md bg-gray-200"
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
                value={formData.event_location}
                onChange={handleInputChange}
                className="e-location p-[5px] w-[270px] border rounded-md bg-gray-200"
                required
              />
            </div>
          </div>

          <div className="mb-4 mt-[-10px]">
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="image_url">
              Event Poster:
            </label>
            <input
              type="text"
              name="image_url"
              value={formData.image_url}
              onChange={handleInputChange}
              className="e-poster p-[5px] w-[570px] border rounded-md bg-gray-200"
              required
            />
          </div>

          <div className='flex gap-[30px]'>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="date">
                Date:
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="e-date p-2 w-[150px] border rounded-md bg-gray-200"
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
                value={formData.start_time}
                onChange={handleInputChange}
                className="e-start-time p-2 w-[150px] border rounded-md bg-gray-200"
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
                value={formData.end_time}
                onChange={handleInputChange}
                className="e-end-time p-2 w-[150px] border rounded-md bg-gray-200"
                required
              />
            </div>
          </div>

          <div className="mb-4 w-[1030px]">
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="description">
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border rounded p-2 w-[570px] border rounded-md bg-gray-200"
              required
            />
          </div>

          <div className='flex gap-[30px]'>
            <div>
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="available_tickets_count">
                Price:
              </label>
              <input
                type="number"  
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="e.price p-2 w-[270px] border rounded-md bg-gray-200"
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
                value={formData.available_tickets_count}
                onChange={handleInputChange}
                className="e.ticket-count p-2 w-[270px] border rounded-md bg-gray-200"
                required
              />
            </div>
          </div>

          <div className="confirm-buttons flex flex-row justify-center gap-[50px]">
            <button type="submit" className="bg-main-blue text-white px-4 py-2 rounded px-[40px]">
              Update
            </button>
            <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded px-[40px]">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateModal;

