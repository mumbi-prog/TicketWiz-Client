import React, { useState } from 'react'
import {FaUserAlt, FaBars, FaHistory} from 'react-icons/fa';
import {RiDashboardFill} from 'react-icons/ri'
import {BsCalendar2EventFill, BsFillTicketPerforatedFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import logo from './../../images/logo.png'

function SideBar({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const navItem = [
        {path:'/', name:'Dashboard', icon: <RiDashboardFill/>},
        {path:'/bookticket', name:'Book Ticket',icon: <BsCalendar2EventFill/>},
        {path:'/eventhistory', name: 'Event History', icon: <FaHistory/>},
        {path:'/ticketwallet', name:'Ticket Wallet', icon: <BsFillTicketPerforatedFill/>},
        {path:'/customerprofile', name:'Profile', icon: <FaUserAlt/>}
    ]
  return (
    <div className='main-container font-dm-sans h-full'>
        <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar h-full fixed">
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
        <main style={{ marginLeft: isOpen ? '250px' : '60px' }}>{children}</main>
    </div>
  );
};

export default SideBar