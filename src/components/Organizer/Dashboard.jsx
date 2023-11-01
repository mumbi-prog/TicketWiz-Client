import React, { useEffect, useState } from 'react';
import Modal from './UpdateModal';
import { BiSolidEditAlt } from 'react-icons/bi';
import { BsTrash3 } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6';
import api from '../api/Api';
import DeleteConfirmationModal from './DeleteConfirmationModal';

function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleDateString(undefined, { month: 'short' });
  const day = date.getDate();
  return (
    <div className="event-date font-bold flex flex-col items-center justify-center mt-2">
      <p className="month text-main-blue font-medium text-sm">{month}</p>
      <p className="day text-3xl mt-2 font-bold">{day}</p>
    </div>
  );
}

function Dashboard() {
  const [organizerData, setOrganizerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [eventCount, setEventCount] = useState(0);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [eventToUpdate, setEventToUpdate] = useState(null);

  const [updatedEventTitle, setUpdatedEventTitle] = useState('');
  const [updatedEventDesc, setUpdatedEventDesc] = useState('');
  const [updatedEventCategory, setUpdatedEventCategory] = useState('');
  const [updatedEventPoster, setUpdatedEventPoster] = useState('');
  const [updatedEventDate, setUpdatedEventDate] = useState('');
  const [updatedEventStartTime, setUpdatedEventStartTime] = useState('');
  const [updatedEventEndTime, setUpdatedEventEndTime] = useState('');
  const [updatedEventVenue, setUpdatedEventVenue] = useState('');
  const [updatedEventLocation, setUpdatedEventLocation] = useState('');
  const [updatedEventPrice, setUpdatedEventPrice] = useState('');
  const [updatedEventTicketCount, setUpdatedEventTicketCount] = useState('');

  useEffect(() => {
    api.get('/organiser_dashboard')
      .then((response) => response.data)
      .then((data) => {
        setOrganizerData(data);
        setEventCount(data.length);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching organizer dashboard:', error);
      });
  }, []);

  const openUpdateModal = (event) => {
    setIsUpdateModalOpen(true);
    setEventToUpdate(event);
    setUpdatedEventTitle(event.title);
    setUpdatedEventDesc(event.description);
    setUpdatedEventCategory(event.category);
    setUpdatedEventPoster(event.image_url);
    setUpdatedEventDate(event.date);
    setUpdatedEventStartTime(event.start_time);
    setUpdatedEventEndTime(event.end_time);
    setUpdatedEventVenue(event.venue_name);
    setUpdatedEventLocation(event.event_location);
    setUpdatedEventPrice(event.price);
    setUpdatedEventTicketCount(event.available_tickets_count);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setEventToUpdate(null);
  };

  const openDeleteModal = (event) => {
    setIsDeleteModalOpen(true);
    setEventToDelete(event);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setEventToDelete(null);
  };

  const confirmDeleteEvent = (event) => {
    closeDeleteModal();
  
    api
      .delete(`/events/${event.id}`)
      .then((response) => {
        if (response.status === 204) {
          setOrganizerData((prevEvents) => prevEvents.filter((e) => e.id !== event.id));
          setEventCount((prevCount) => prevCount - 1);
        } else {
          console.error('Failed to delete event');
        }
      })
      .catch((err) => {
        console.error('Error while deleting event:', err);
      });
  };
  

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

  const handleUpdateEvent = () => {
    const updatedEventData = {
      title: updatedEventTitle,
      description: updatedEventDesc,
      category: updatedEventCategory,
      image_url: updatedEventPoster,
      date: updatedEventDate,
      start_time: updatedEventStartTime,
      end_time: updatedEventEndTime,
      venue_name: updatedEventVenue,
      event_location: updatedEventLocation,
      price: updatedEventPrice,
      available_tickets_count: updatedEventTicketCount,
    };

    api
      .patch(`/events/${eventToUpdate.id}`, updatedEventData)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Cannot update');
        }
        return response.json();
      })
      .then((updatedEvent) => {
        setOrganizerData((prevEvents) =>
          prevEvents.map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event
          )
        );
        closeUpdateModal();
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="organizer-dashboard m-[20px]">
      <div className="dashboard-container">
        <h2 className="dashboard-title">Organizer Dashboard</h2>

        <div className="stats-container bg-gray-500 px-[30px] py-[30px] font-bold inline-block mt-[20px] text-lg rounded-md transition-transform transform hover:scale-105 hover:bg-acc-color">
          <p className="event-count font-bold">Total Events</p>
          <p className='font-bold'>{eventCount}</p>
        </div>

        <div className="event-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-12">
          {organizerData.map((event) => (
            <div key={event.id} className="event-card border border-gray-300 rounded-lg shadow-md">
              <div className="event-img">
                <img src={event.image_url} alt={event.title} className="h-40 w-full object-cover rounded-t-lg" />
              </div>
              <div className="event-selected-details flex p-5">
                <div className="event-date">
                  <p>{formatDate(event.date)}</p>
                </div>
                <div className="event-venue pl-6">
                  <h3 className="event-title font-sans mt-0 text-lg font-bold uppercase text-black ml-2">
                    {event.title}
                  </h3>
                  <div className="venue-info flex items-center mt-3">
                    <p className="text-black text-md mr-2">
                      <FaLocationDot className="location-icon" />
                    </p>
                    <p className="venue-details text-sm">
                      {event.venue_name}, {event.event_location}
                    </p>
                  </div>
                  <div className="event-actions flex mt-4">
                    <BsTrash3 onClick={() => openDeleteModal(event)} className="cursor-pointer mr-4" />
                    <BiSolidEditAlt onClick={() => openUpdateModal(event)} className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isUpdateModalOpen && (
        <Modal onClose={closeUpdateModal}>
          <h3>Edit Event</h3>
          <input type="text" placeholder="Event Title" value={updatedEventTitle} onChange={(e) => setUpdatedEventTitle(e.target.value)} />
          <input type="text" placeholder="Event Description" value={updatedEventDesc} onChange={(e) => setUpdatedEventDesc(e.target.value)} />
          <input type="text" placeholder="Event Category" value={updatedEventCategory} onChange={(e) => setUpdatedEventCategory(e.target.value)} />
          <input type="text" placeholder="Event Poster" value={updatedEventPoster} onChange={(e) => setUpdatedEventPoster(e.target.value)} />
          <input type="text" placeholder="Event Date" value={updatedEventDate} onChange={(e) => setUpdatedEventDate(e.target.value)} />
          <input type="text" placeholder="Event Start Time" value={updatedEventStartTime} onChange={(e) => setUpdatedEventStartTime(e.target.value)} />
          <input type="text" placeholder="Event End Time" value={updatedEventEndTime} onChange={(e) => setUpdatedEventEndTime(e.target.value)} />
          <input type="text" placeholder="Event Venue Name" value={updatedEventVenue} onChange={(e) => setUpdatedEventVenue(e.target.value)} />
          <input type="text" placeholder="Event Location" value={updatedEventLocation} onChange={(e) => setUpdatedEventLocation(e.target.value)} />
          <input type="text" placeholder="Event Price" value={updatedEventPrice} onChange={(e) => setUpdatedEventPrice(e.target.value)} />
          <input type="text" placeholder="Event Ticket Count" value={updatedEventTicketCount} onChange={(e) => setUpdatedEventTicketCount(e.target.value)} />
          <div className="confirm-buttons flex flex-row gap-15">
            <button onClick={handleUpdateEvent} className="bg-main-blue text-white px-4 py-2 rounded">
              Update
            </button>
            <button onClick={closeUpdateModal} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </Modal>
      )}

      {isDeleteModalOpen && (
        <DeleteConfirmationModal 
          onCancel={closeDeleteModal}
          onConfirm={() => confirmDeleteEvent(eventToDelete)}
        />
      )}
    </div>
  );
}

export default Dashboard;

