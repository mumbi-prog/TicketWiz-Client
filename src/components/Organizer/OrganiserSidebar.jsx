import React, { useState } from 'react';
import { FaUserAlt, FaBars } from 'react-icons/fa';
import { RiDashboardFill, RiLogoutCircleRLine } from 'react-icons/ri';
import { BsCalendar2EventFill, BsFillTicketPerforatedFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import logo from './../../images/logo.png';
import './../Client/MainClientApp.css';
import api from '../api/Api';

function OrganiserSidebar({ children, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navItem = [
    { id: 'dashboard', name: 'Dashboard', icon: <RiDashboardFill /> },
    { id: 'createEvent', name: 'Create Event', icon: <BsCalendar2EventFill /> },
    { id: 'ticketSales', name: 'Ticket Sales', icon: <BsFillTicketPerforatedFill /> },
    { id: 'organizerProfile', name: 'Profile', icon: <FaUserAlt /> },
    { id: 'organizerLogout', name: 'Logout', icon: <RiLogoutCircleRLine /> },
  ];

  const handleLogout = async () => {
    try {
      const response = await api.delete('/logoutOrg');
      if (response.status === 204) {
        window.location.href = '/organiserlogin'; 
      } else {
        console.error('Failed to log out customer');
      }
    } catch (error) {
      console.error('Error while logging out customer:', error);
    }
  }

  return (
    <div className='main-container font-dm-sans h-full'>
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar sidebar h-full fixed">
        <div className="logo-container flex">
          <img src={logo} alt="" style={{ display: isOpen ? "block" : "none" }} className="logo" />
          <h3 style={{ display: isOpen ? "block" : "none" }} className='font-dm-sans text-lg mt-[1px]'>TicketWiz</h3>
          <div style={{ marginLeft: isOpen ? "20px" : "35px", paddingTop: isOpen ? "5px" : "20px" }} className="menu-bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {navItem.map((item) => (
          <Link  key={item.id} to={item.id} className='link'
            onClick={() => {
              if (item.id === 'organizerLogout') {
                handleLogout();
              } else {
                setSelectedOption(item.id);
              }
            }}
            activeClassName="active"
          >
            <div style={{ marginLeft: isOpen ? "20px" : "-11px" }} className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link-text">{item.name}</div>
          </Link>
        ))}
      </div>
      <main style={{ marginLeft: isOpen ? '230px' : '50px' }}>{children}</main>
    </div>
  );
}

export default OrganiserSidebar;
