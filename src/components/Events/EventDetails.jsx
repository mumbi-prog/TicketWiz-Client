import React, {useEffect, useState} from 'react'
import { FaLocationDot, FaRegClock } from 'react-icons/fa6';
import './Events.css';
import { useParams } from 'react-router-dom';
import AddToCalendar from './AddToCalendar';
import { Link } from 'react-scroll';
import Payment from './Payment';
import './Payment.css';
import {MdClose} from 'react-icons/md'

function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleDateString(undefined, { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear(); 
  return (
    <div className="event-date bg-lighter-blue text-text-color font-sans font-bold flex flex-col items-center justify-left mt-[2px] border rounded-md border-black px-[18px] py-[8px] mr-[15px]">
      <p className="month text-text-color text-main-blue font-medium text-sm">{month}</p>
      <p className="day text-text-color text-3xl mt-[-2px] font-medium">{day}</p>
      <p className="year text-text-color text-main-blue font-medium text-sm">{year}</p> 
    </div>
  );
}

function formatTime(timeString) {
  const time = new Date(timeString);
  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes();
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';

  return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}


function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/events/${eventId}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error('Cannot fetch details:', error));
  }, [eventId]);

  if (!event) {
    return <div>Loading event details...</div>;
  }

 
  const handleGetTicketClick = () => {
    setShowPaymentModal(true);
  };

  const handleModalClose = () => {
    setShowPaymentModal(false);
  };

  return (
    <div className="event-details-container my-[40px] mx-[150px] max-w-screen-lg ">
      <div className="event-details max-w-screen-lg flex flex-row gap-[-10px] font-sans">
        <div className="event-image style={{ flex: '1' }}">
          <img src={event.image_url} alt={event.title} className='w-[470px] h-[470px] ml-[-50px]'/>
        </div>
        <div className="event-info w-[470px]">
          <div className="date-and-title mb-[15px] flex items-center tracking-wider tracking-wider">
            <p>{formatDate(event.date)}</p>
            <h2 className="e-title text-[35px] font-bold mb-3 uppercase">{event.title}</h2>
          </div>
          <div className="venue1 flex items-center mt-[30px] tracking-wider tracking-wider">
            <p className="text-black text-md mr-[10px] mt-[5px]"><FaLocationDot className="location-icon1" /></p>
            <p className='local uppercase font-medium '>{event.venue_name}, {event.event_location}</p>
          </div>
          <div className="venue1 flex items-center mb-[30px] tracking-wider tracking-wider">
            <p className="text-black text-md mr-[10px] mt-[5px]"><FaRegClock className="location-icon1" /></p>
            <p className='font-medium'>{formatTime(event.start_time)} to {formatTime(event.end_time)}</p>
          </div>
          <p className='event-desc'>{event.description}</p>
          <div className="event-actions  flex justify-between items-end gap-[10px] mt-[83px]">
         
           <Link
              onClick={handleGetTicketClick}
              className="btn btn-primary rounded-md text-sm italic bg-lighter-blue text-text-color font-sans font-bold uppercase px-[30px] py-[10px] cursor-pointer"
            >
              Get Ticket
            </Link>
           <AddToCalendar event={event} />
          </div>
       
          {showPaymentModal && (
            <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="payment-modal bg-payment-modal-color border border-gray-300 p-5 w-[800px] shadow-md text-left relative">
                <button onClick={handleModalClose} className='close-button absolute top-2 right-2 cursor-pointer hover:border-[1px] hover:border-blue-500 hover:bg-blue-100 hover:rounded-full p-[5px]'>
                  <MdClose />
                </button>
                <Payment event={event} />
              </div>
            </div>
          )}

        </div>
      </div>
     
    </div>
  )
}

export default EventDetails

