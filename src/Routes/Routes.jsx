
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../components/Login/login";
import CustomerLoginPage from "../components/Login/customerLogin";
import OrganizerSignupPage from "../components/Login/organiserSignup";
import CustomerSignupPage from '../components/Login/signup';
import OrganizerDashboard from "../components/Organizer/Dashboard";
import CustomerDashboard from "../components/Client/Dashboard";
import EventHistory from "../components/Client/EventHistory";
import MainClientApp from "../components/Client/MainClientApp";
import BookTicket from "../components/Client/BookTicket";
import SideBar from "../components/Client/SideBar";
import Profile from "../components/Client/Profile";
import TicketWallet from "../components/Client/TicketWallet";
import OrganiserSidebar from "../components/Organizer/OrganiserSidebar";
import TicketSales from "../components/Organizer/Ticketsales";
import MainOrgApp from "../components/Organizer/MainOrgApp";
import OrganizerProfile from "../components/Organizer/OrganizerProfile";
import CreateEvent from "../components/Organizer/CreateEvent";



const AllRoutes = () => {
  const [ setUserRole] = useState(""); 
  return (
    <Routes>
      <Route path="/customerLogin" element={<CustomerLoginPage />} />
      <Route path="/customersignup" element={<CustomerSignupPage />} />
      <Route path="/login" element={<LoginPage setUserRole={setUserRole} />} />
      <Route path="/organizersignup" element={<OrganizerSignupPage />} />
      <Route path="/organizerdashboard" element={<OrganizerDashboard />} />
      <Route path="/organizersignup" element={<OrganizerSignupPage />} />
      <Route path="/dashboard" element={<CustomerDashboard />} />
     <Route path="/sidebar" element={<SideBar />} />
     <Route path="/mainclientapp" element={<MainClientApp />} />
     <Route path="/bookticket" element={<BookTicket />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/ticketwallet" element={<TicketWallet />} />
     <Route path="/Eventhistory" element={<EventHistory />} />
     <Route path="/create-event" element={<CreateEvent />} />
     <Route path="/mainorgapp" element={<MainOrgApp />} />
     <Route path="/organizerprofile" element={<OrganizerProfile />} />
     <Route path="/ticketsales" element={<TicketSales />} />
     <Route path="/organisersidebar" element={<OrganiserSidebar />} />
      
     
    </Routes>
  );
};

export default AllRoutes;
