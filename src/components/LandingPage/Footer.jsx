import React from 'react'
import logo from './../../images/logo.png';
import {FaEnvelope} from "react-icons/fa";
import {FaMapMarkerAlt} from "react-icons/fa";
import {BiSolidPhone} from "react-icons/bi";
import "./landingpage.css";

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="abt">
                <div>
                    <div className="logo-title">
                        <img src={logo} alt="TicketWiz logo" />
                        <h2>TicketWiz</h2>
                    </div>
                    <p>Connecting You to Exciting Events with Fast and Hassle-Free Ticketing, Making Every Experience Memorable, One Click at a Time.</p>
                </div>
                <div className="social-links">
                    
                </div>
            </div>
            <div className="links1">
                <h3>Quick links</h3>
                <ul>
                    <li><a href="#Featuredevents">Home</a></li>
                    <li><a href="#Featuredevents">Featured events</a></li>
                    <li><a href="#Featuredevents">Create event</a></li>
                    <li><a href="#Featuredevents">Our Clients</a></li>
                    <li><a href="#Featuredevents">Contact</a></li>
                </ul>
            </div>
            <div className="links2">
                <h3>Quick links</h3>
                <ul>
                    <li><a href="#Featuredevents">Home</a></li>
                    <li><a href="#Featuredevents">Featured events</a></li>
                    <li><a href="#Featuredevents">Create event</a></li>
                    <li><a href="#Featuredevents">Our Clients</a></li>
                    <li><a href="#Featuredevents">Contact</a></li>
                </ul>
            </div>
            <div className="contact-details">
                <h3>Get in Touch</h3>
                <p><FaMapMarkerAlt className='contact-icon'/> 123 Mwia Lane, Nairobi</p>
                <p><BiSolidPhone className='contact-icon'/> +254 719642456 | +254 728510900</p>
                <p><FaEnvelope className='contact-icon'/> abc.email.com</p>
            </div>
        </div>
        <div className="copyright-notice">
            <p>&copy; 2023 TicketWiz. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer