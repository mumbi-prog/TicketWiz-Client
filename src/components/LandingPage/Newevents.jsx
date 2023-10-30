import React from 'react';
import ticketimg from './../../images/ticket-pic.png';
import "./landingpage.css";
import { Link } from 'react-router-dom';

function Newevents() {
  return (
    <section className="new-event bg-gray-300 mt-[20px] flex flex-row justify-between gap-40 font-sans relative h-[340px]">
      <div className="new-event-container w-full">
        <img src={ticketimg} alt="" className="event-image w-[470px] h-auto absolute top-[-35px] left-[80px]" />
      </div>
      <div className="new-event-content pt-3 ml-[50px]">
       <h2 className="font-sans text-head-color font-bold text-4xl pt-[20px] mb-[15px]">Create your own events</h2>
        <p className="text-sm text-justify pr-40 pt-[10px] mb-[15px]">
        Embark on an exhilarating journey into the realm of event design and creativity, where every concept finds its
         unique canvas, and every gathering transforms into a timeless, unforgettable story. Join us in the art of crafting moments that resonate with hearts, inspire spirits, and stand the test of time, creating memories that will be cherished for a lifetime.
        </p>
        <Link to="/organiserlogin">
          <button className="bg-button-color text-white h-[50px] w-[250px] rounded-full mt-5">Create event</button>
        </Link>
      </div>
    </section>
  )
}

export default Newevents;
