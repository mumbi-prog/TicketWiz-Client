// import React from 'react';

// function AddToCalendar({ event }) {
//   var gapi = window.gapi;
//   var CLIENT_ID = "985329526084-njirq449h3as451ek3a0apocmif6n3s8.apps.googleusercontent.com";
//   var API_KEY = "AIzaSyDGVy3u5_Ah5dQpiwEH87Ix9NvnRkAOEIw";
//   var DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
//   var SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

//   const handleAddToCalendar = () => {
//     gapi.load('client:auth2', () => {
//       gapi.client.init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         discoveryDocs: DISCOVERY_DOC,
//         scope: SCOPES,
//       });

//       gapi.client.load('calendar', 'v3', () => {
//         gapi.auth2.getAuthInstance().signIn().then(() => {
//           var eventDetails = {
//             'summary': event.title,
//             'location': `${event.venue_name}, ${event.event_location}`,
//             'description': event.description,
//             'start': {
//               'dateTime': event.start_time,
//               'timeZone': 'Africa/Nairobi',
//             },
//             'end': {
//               'dateTime': event.end_time,
//               'timeZone': 'Africa/Nairobi',
//             },
//           };

//           var request = gapi.client.calendar.events.insert({
//             calendarId: 'primary',
//             resource: eventDetails,
//           });

//           request.execute((event) => {
//             window.open(event.htmlLink);
//           });
//         });
//       });
//     });
//   };

//   return (
//     <button
//       onClick={handleAddToCalendar}
//       className="btn btn-secondary rounded-md text-sm italic bg-lighter-blue text-text-color font-sans font-bold uppercase px-[30px] py-[10px]"
//     >
//       Add to Calendar
//     </button>
//   );
// }

// export default AddToCalendar;

import React from 'react';

function AddToCalendar({ event }) {
  const eventTitle = event.title;
  const eventStart = event.start_time; 
  const eventEnd = event.end_time; 
  const eventLocation = `${event.venue_name}, ${event.event_location}`;
  const eventDescription = event.description;

  const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStart}/${eventEnd}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;

  return (
    <a href={googleCalendarLink} target="_blank" rel="noopener noreferrer">
      Add to Google Calendar
    </a>
  );
}

export default AddToCalendar;

