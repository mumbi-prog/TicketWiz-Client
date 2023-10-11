import React from 'react'
import OrganiserSidebar from './OrganiserSidebar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import CreateEvent from './CreateEvent';
import TicketSales from './Ticketsales';
import OrganizerProfile from './OrganizerProfile';

function MainOrgApp() {
  return (
    <BrowserRouter>
        <OrganiserSidebar>
            <Routes>
                <Route path='/' element={<Dashboard/>}></Route>
                <Route path='/create-event' element={<CreateEvent/>}></Route>
                <Route path='/ticketsales' element={<TicketSales/>}></Route>
                <Route path='/organiserprofile' element={<OrganizerProfile/>}></Route>
            </Routes>
        </OrganiserSidebar>
    </BrowserRouter>
  )
}

export default MainOrgApp