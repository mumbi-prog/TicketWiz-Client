import React from 'react'
import logo from './../../images/logo.png';
import {FaEnvelope} from "react-icons/fa6";
import {FaLocationDot} from "react-icons/fa6";
import {FaPhone} from "react-icons/fa6";
import {BiLogoFacebook} from "react-icons/bi";
import {FaXTwitter} from "react-icons/fa6";
import { BiLogoInstagram } from 'react-icons/bi';
import { BiLogoTiktok } from 'react-icons/bi';

import "./landingpage.css";

function Footer() {
  return (
    <section className='footer'>
        <div className="footer-content">
            <div className="abt">
                <div>
                    <div className="logo-title">
                        <img src={logo} alt="TicketWiz logo" />
                        <h2>TicketWiz</h2>
                    </div>
                    <p>Connecting You to Exciting Events with Fast and Hassle-Free Ticketing, Making Every Experience Memorable, One Click at a Time.</p>
                </div>
                <div className="social">
                    <a href="#socials"><BiLogoFacebook/></a>
                    <a href="#socials"><BiLogoInstagram/></a>
                    <a href="#socials"><FaXTwitter/></a>
                    <a href="#socials"><BiLogoTiktok/></a>
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
                <h3>Resources</h3>
                <ul>
                    <li><a href="#a">Event Planning Guides</a></li>
                    <li><a href="#a">Ticketing FAQs</a></li>
                    <li><a href="#a">Event Promotion Tips</a></li>
                    <li><a href="#a">Checklists and Templates</a></li>
                    <li><a href="#a">Local Event Resources</a></li>
                </ul>
            </div>
            <div className="contact-details">
                <h3 className='pb-[10px]'>Get in Touch</h3>
                <p><FaLocationDot className='contact-icon'/> 123 Mwia Lane, Nairobi</p>
                <p><FaPhone className='contact-icon'/> +254 719642456 | +254 728510900</p>
                <p><FaEnvelope className='contact-icon'/> abc.email.com</p>
            </div>
        </div>
        <div className="copyright-notice">
            <p>&copy; 2023 TicketWiz. All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer