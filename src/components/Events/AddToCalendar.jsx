import React from 'react';

function AddToCalendar({ event, start_time, end_time }) {
  const eventTitle = event.title;
  const eventStart = new Date(start_time).toISOString();
  const eventEnd = new Date(end_time).toISOString();
  const eventLocation = `${event.venue_name}, ${event.event_location}`;
  const eventDescription = event.description;

  const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStart}/${eventEnd}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;

  return (
    <a href={googleCalendarLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary rounded-md text-sm italic bg-lighter-blue text-text-color font-sans font-bold uppercase px-[30px] py-[10px] cursor-pointer">
      Add to Google Calendar
    </a>
  );
}

export default AddToCalendar;


