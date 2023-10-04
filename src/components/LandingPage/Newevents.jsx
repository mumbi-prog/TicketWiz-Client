import React from 'react';
import ticketimg from './../../images/ticket-pic.png';
import "./landingpage.css";

function Newevents() {
  return (
    <section className="new-event">
      <div className="new-event-container">
        <img src={ticketimg} alt="" className="event-image" />
      </div>
      <div className="new-event-content">
        <h2>Create your own events</h2>
        <p>With TicketWiz, you have the chance to craft your own events. Begin an adventure of event design and creativity, where every concept discovers a platform, 
            and every assembly evolves into a memorable tale. Come join us in crafting moments that resonate, inspire, and endure for a lifetime.</p>
        <button>Create event</button>
      </div>
    </section>
  )
}

export default Newevents;
