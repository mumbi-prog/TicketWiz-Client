import React from 'react'
import SideBar from "./SideBar";
import './MainClientApp.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import BookTicket from './BookTicket';
import TicketWallet from './TicketWallet';
import EventHistory from './EventHistory';
import Profile from './Profile';

function MainClientApp() {
  return (
    <BrowserRouter>
        <SideBar>
            <Routes>
                <Route path='/'element={<Dashboard/>} />
                <Route path='/dashboard'element={<Dashboard/>} /> 
                <Route path='/bookticket'element={<BookTicket/>} />
                <Route path='/ticketwallet'element={<TicketWallet/>} />
                <Route path='/eventhistory'element={<EventHistory/>} />
                <Route path='/profile'element={<Profile/>} />
            </Routes>
        </SideBar>
    </BrowserRouter>
  )
}

export default MainClientApp