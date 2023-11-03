// import React from 'react'
// import SideBar from "./SideBar";
// import './MainClientApp.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Dashboard from './Dashboard';
// import BookTicket from './BookTicket';
// import TicketWallet from './TicketWallet';
// import EventHistory from './EventHistory';
// import Profile from './Profile';
// import EventDetails from '../Events/EventDetails';
// import Payment from '../Events/Payment';

// function MainClientApp() {

//   return (
//     <BrowserRouter>
//         <SideBar>
//             <Routes>
//                 <Route path='/'element={<Dashboard/>} />
//                 <Route path='/dashboard'element={<Dashboard/>} /> 
//                 <Route path='/bookticket'element={<BookTicket/>} /> 
//                 <Route path="/events/:eventId" element={<EventDetails />} />
//                 <Route path="/events/:eventId/checkout" element={<Payment />} />
//                 <Route path='/ticketwallet'element={<TicketWallet/>} />
//                 <Route path='/eventhistory'element={<EventHistory/>} />
//                 <Route path='/customerprofile'element={<Profile/>} />
//             </Routes>
//         </SideBar>
//     </BrowserRouter>
//   )
// }

// export default MainClientApp;


import React, { useState } from 'react';
import SideBar from "./SideBar";
import './MainClientApp.css';
import { useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import BookTicket from './BookTicket';
import TicketWallet from './TicketWallet';
import EventHistory from './EventHistory';
import Profile from './Profile';
import EventDetails from '../Events/EventDetails';
import Payment from '../Events/Payment';

function MainClientApp() {
  const [selectedOption, setSelectedOption] = useState('dashboard');
  const location = useLocation();
  const pathname = location.pathname;

  const renderContent = () => {
    switch (selectedOption) {
      case 'dashboard':
        return <Dashboard />;
      case 'bookTicket':
        return <BookTicket />;
      case 'ticketWallet':
        return <TicketWallet />;
      case 'eventHistory':
        return <EventHistory />;
      case 'customerProfile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="main-wrapper">
      <SideBar setSelectedOption={setSelectedOption} />
      <div className="content-wrapper">
        {pathname === '/bookticket' && <BookTicket />}
        {pathname === '/events/:eventId' && <EventDetails />}
        {pathname === '/events/:eventId/checkout' && <Payment />}
        {renderContent()}
      </div>
    </div>
  );
}

export default MainClientApp;
