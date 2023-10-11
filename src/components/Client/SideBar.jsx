import React, { useState } from 'react'
import {FaUserAlt, FaBars, FaHistory} from 'react-icons/fa';
import {RiDashboardFill} from 'react-icons/ri'
import {BsCalendar2EventFill, BsFillTicketPerforatedFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import logo from './../../images/logo.png'

function SideBar({children}) {

    const navItem = [
        {path:'/', name:'Dashboard', icon: <RiDashboardFill/>},
        {path:'/bookticket', name:'Book Ticket',icon: <BsCalendar2EventFill/>},
        {path:'/eventhistory', name: 'Event History', icon: <FaHistory/>},
        {path:'/ticketwallet', name:'Ticket Wallet', icon: <BsFillTicketPerforatedFill/>},
        {path:'/profile', name:'Profile', icon: <FaUserAlt/>}
    ]
  return (
    <div className='container'>
        <div className="sidebar">
            <div className="main-container">
                <img src={logo} alt="" className="logo"/>
                <h3>TicketWiz</h3>
                <div className="bars">
                    <FaBars/>
                </div>
            </div>
            {
                navItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link-text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  );
}

export default SideBar