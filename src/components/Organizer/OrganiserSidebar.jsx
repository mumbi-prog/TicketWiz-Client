import React from 'react'
import SideBar from '../Client/SideBar';
import {FaUserAlt} from 'react-icons/fa';
import {RiDashboardFill} from 'react-icons/ri'
import {BsCalendar2EventFill, BsFillTicketPerforatedFill} from 'react-icons/bs'

function OrganiserSidebar({children}) {
    const orgNavItem = [
        {path:'/', name:'Dashboard', icon: <RiDashboardFill/>},
        {path:'/create-event', name:'Create Event',icon: <BsCalendar2EventFill/>},
        {path:'/ticketsales', name:'Ticket Sales', icon: <BsFillTicketPerforatedFill/>},
        {path:'/organiserprofile', name:'Profile', icon: <FaUserAlt/>}
    ]
  return (
    
    <div>
        <SideBar navItem={orgNavItem}>
            {children}
        </SideBar>
    </div>
  )
}

export default OrganiserSidebar