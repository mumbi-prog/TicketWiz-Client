import React from 'react'
import client1 from './../../images/client1.png';
import client2 from './../../images/client2.png';
import client3 from './../../images/client3.png';
import client4 from './../../images/client4.png';
import client5 from './../../images/client5.png';
import client6 from './../../images/client6.png';
import client7 from './../../images/client7.png';
import "./landingpage.css";

function Clients() {
  return (
    <section className="clients">
        <h2>Our Clients</h2>
        <p>Here are just a few of the organizations we've had the privilege of working with</p>
        <div className="clients-older">
            <img src={client1} alt="" />
            <img src={client2} alt="" />
            <img src={client3} alt="" />
            <img src={client4} alt="" />
            <img src={client5} alt="" />
            <img src={client6} alt="" />
            <img src={client7} alt="" />
        </div>
    </section>
  )
}

export default Clients