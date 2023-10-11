import React, { useState } from 'react'
import {FaUserAlt, FaBars, FaHistory} from 'react-icons/fa';
import {RiDashboardFill} from 'react-icons/ri'
import {BsCalendar2EventFill, BsFillTicketPerforatedFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import logo from './../../images/logo.png'

function SideBar({children}) {
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
        </div>
        <main>{children}</main>
    </div>
  );
}

export default SideBar