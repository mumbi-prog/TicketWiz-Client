
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../components/Login/login";
import CustomerLoginPage from "../components/Login/customerLogin";
import OrganizerSignupPage from "../components/Login/organiserSignup";
import CustomerSignupPage from '../components/Login/signup';
import MainClientApp from "../components/Client/MainClientApp";
import OrganiserSidebar from "../components/Organizer/OrganiserSidebar";
import MainOrgApp from "../components/Organizer/MainOrgApp";
import { OrganizerDashboard } from "../Pages./OrganizerDashboard";
import { CustomerDashboard } from "../Pages./customerDashboard";
import { CreateEvents } from "../Pages./createevents";
import { TicketSale } from "../Pages./TicketSales";
import { Profiles } from "../Pages./profile";
import { CustomerEventHist } from "../Pages./CustomerEventHistory";
import { TicketWallets } from "../Pages./TicketWallet";
import { BookTickets } from "../Pages./BookTicket";
import { OrganizerProfiles } from "../Pages./OrganizerProfile";


const AllRoutes = () => {
  const [ userRole,setUserRole] = useState(""); 
  return (
    <Routes>
      <Route path="/customerlogin" element={<CustomerLoginPage setUserRole={setUserRole}/>} />
      <Route path="/customersignup" element={<CustomerSignupPage />} />
      <Route path="/login" element={<LoginPage setUserRole={setUserRole} />} />
      <Route path="/organizersignup" element={<OrganizerSignupPage />} />
      <Route path="/organizerdashboard" element={<OrganizerDashboard />} />
      <Route path="/organizersignup" element={<OrganizerSignupPage />} />
      <Route path="/dashboard" element={<CustomerDashboard />} />
     <Route path="/mainclientapp" element={<MainClientApp />} />
     <Route path="/booktickets" element={<BookTickets />} />
     <Route path="/profiles" element={<Profiles />} />
     <Route path="/ticketwallets" element={<TicketWallets />} />
     <Route path="/customerEventhist" element={<CustomerEventHist />} />
     <Route path="/createEvents" element={<CreateEvents />} />
     <Route path="/mainorgapp" element={<MainOrgApp />} />
     <Route path="/organizerprofiles" element={<OrganizerProfiles />} />
     <Route path="/ticketsale" element={<TicketSale />} />
     <Route path="/organisersidebar" element={<OrganiserSidebar />} />
     
      
     
    </Routes>
  );
};

export default AllRoutes;
