import React, {useEffect, useState} from 'react'

function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleDateString(undefined, { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear(); 
  return (
    <div className="event-date font-sans font-bold flex flex-col items-center justify-center mt-[2px]">
      <p className="month text-main-blue font-medium text-sm">{month}</p>
      <p className="day text-3xl mt-[-2px]">{day}</p>
      <p className="year text-sm text-gray-500 mt-1">{year}</p> 
    </div>
  );
}


function EventDetails({ eventId }) {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/events/${eventId}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error('Cannot fetch details:', error));
  }, [eventId]);

  return (
    <div>EventDetails</div>
  )
}

export default EventDetails