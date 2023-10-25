import React from 'react'
import SideBar from "./SideBar";
import './MainClientApp.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import BookTicket from './BookTicket';
import TicketWallet from './TicketWallet';
import CustomerEventHistory from './CustomerEventHistory';
import Profile from './Profile';
import EventDetails from '../Events/EventDetails';
import Payment from '../Events/Payment';

function MainClientApp() {

  return (
    <BrowserRouter>
        <SideBar>
            <Routes>
                <Route path='/'element={<Dashboard/>} />
                <Route path='/dashboard'element={<Dashboard/>} /> 
                <Route path='/bookticket'element={<BookTicket/>} /> 
                <Route path="/events/:eventId" element={<EventDetails />} />
                <Route path="/events/:eventId/checkout" element={<Payment />} />
                <Route path='/ticketwallet'element={<TicketWallet/>} />
                <Route path='/eventhistory'element={<CustomerEventHistory/>} />
                <Route path='/customerprofile'element={<Profile/>} />
            </Routes>
        </SideBar>
    </BrowserRouter>
  )
}

export default MainClientApp