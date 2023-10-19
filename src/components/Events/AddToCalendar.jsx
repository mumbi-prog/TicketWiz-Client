import React from 'react';

function AddToCalendar({ event }) {
  const handleAddToCalendar = () => {
    const gapi = window.gapi;
    const CLIENT_ID = "789640415717-nj366h6ak6ii831tgaukfbjc6aca5mig.apps.googleusercontent.com";
    const API_KEY = "AIzaSyBlQGsfotOEILsvKGMj8nbL0_0NVpcZJAg";
    const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
    const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: [DISCOVERY_DOC],
        scope: SCOPES,
      });

      gapi.client.load('calendar', 'v3', () => {
        gapi.auth2.getAuthInstance().signIn().then(() => {
          const eventDetails = {
            summary: event.title,
            location: `${event.venue_name}, ${event.event_location}`,
            description: event.description,
            start: {
              dateTime: event.start_time,
              timeZone: 'Africa/Nairobi',
            },
            end: {
              dateTime: event.end_time,
              timeZone: 'Africa/Nairobi',
            },
          };

          const request = gapi.client.calendar.events.insert({
            calendarId: 'primary', // Use 'primary' to refer to the user's primary calendar
            resource: eventDetails,
          });

          request.execute((event) => {
            window.open(event.htmlLink);
          });
        });
      });
    });
  };

  return (
    <button onClick={handleAddToCalendar} className="btn btn-secondary rounded-md text-sm italic bg-lighter-blue text-text-color font-sans font-bold uppercase px-[30px] py-[10px]">Add to Calendar</button>
  );
}

export default AddToCalendar;
