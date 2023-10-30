import React from 'react';

function formatEventDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}${month}${day}`;
}

function formatEventTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}${minutes}00`;
}

function AddToCalendar({ event }) {
  const eventTitle = event.title;
  const eventStart = formatEventDate(event.start_time);
  const eventEnd = formatEventDate(event.end_time);
  const eventLocation = `${event.venue_name}, ${event.event_location}`;
  const eventDescription = event.description;

  const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStart}T${formatEventTime(event.start_time)}/${eventEnd}T${formatEventTime(event.end_time)}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;

  return (
    <a href={googleCalendarLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary rounded-md text-sm italic bg-lighter-blue text-text-color font-sans font-bold uppercase px-[30px] py-[10px] cursor-pointer">
      Add to Google Calendar
    </a>
  );
}

export default AddToCalendar;

