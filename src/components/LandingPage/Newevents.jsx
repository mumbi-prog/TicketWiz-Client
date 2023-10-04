import React from 'react';
import ticketimg from './../../images/ticket-pic.png';
import "./landingpage.css";

function Newevents() {
  return (
    <section className="new-event bg-gray-300 mt-[40px] flex flex-row justify-between gap-40 font-sans relative h-72">
      <div className="new-event-container w-full">
        <img src={ticketimg} alt="" className="event-image w-[420px] h-auto absolute top-[-50px] left-[130px]" />
      </div>
      <div className="new-event-content pt-3">
        <h2 className="font-sans text-head-color font-bold text-4xl pt-[20px]">Create your own events</h2>
        <p className="text-sm text-justify pr-40 pt-[10px]">
          With TicketWiz, you have the chance to craft your own events. Begin an adventure of event design and creativity, where every concept discovers a platform, and every assembly evolves into a memorable tale. Come join us in crafting moments that resonate, inspire, and endure for a lifetime.
        </p>
        <button className="bg-button-color text-white h-[50px] w-[250px] rounded-full mt-5">Create event</button>
      </div>
    </section>
  )
}

export default Newevents;
