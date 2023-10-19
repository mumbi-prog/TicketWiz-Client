import React, { useState } from 'react'
import {FaUserAlt, FaBars} from 'react-icons/fa';
import {RiDashboardFill} from 'react-icons/ri'
import {BsCalendar2EventFill, BsFillTicketPerforatedFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import logo from './../../images/logo.png'

function SideBar({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const navItem = [
        {path:'/', name:'Dashboard', icon: <RiDashboardFill/>},
        {path:'/create-event', name:'Create Event',icon: <BsCalendar2EventFill/>},
        {path:'/ticketsales', name:'Ticket Sales', icon: <BsFillTicketPerforatedFill/>},
        {path:'/organiserprofile', name:'Profile', icon: <FaUserAlt/>}
    ]
  return (
    <div className='main-container font-dm-sans'>
        <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="" style={{display: isOpen ? "block" : "none"}} className="logo"/>
                <h3 style={{display: isOpen ? "block" : "none"}}>TicketWiz</h3>
                <div style={{marginLeft: isOpen ? "20px" : "30px", paddingTop: isOpen ? "5px" : "20px"}} className="menu-bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                navItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div style={{marginLeft: isOpen ? "20px" : "-13px"}} className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  );
};

export default SideBar