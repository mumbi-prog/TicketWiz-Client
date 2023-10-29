import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../components/Login/login";
import CustomerLoginPage from "../components/Login/customerLogin";
import OrganizerSignupPage from "../components/Login/organiserSignup";
import CustomerSignupPage from '../components/Login/signup';
import HomePage from '../Pages./Home';
import SignUpPage from "../components/Login/signup";
import OrganizerDashboard from "../components/Organizer/Dashboard";
import CustomerDashboard from "../components/Client/Dashboard";
// import OrganizerProfile from "../components/Organizer/OrganizerProfile";

const AllRoutes = () => {
  const [ setUserRole] = useState(""); 
  return (
    <Routes>
      <Route path="/customerLogin" element={<CustomerLoginPage />} />
      <Route path="/customersignup" element={<CustomerSignupPage />} />
      <Route path="/login" element={<LoginPage setUserRole={setUserRole} />} />
      <Route path="/organisersignup" element={<OrganizerSignupPage />} />
      <Route path="/organizerdashboard" element={<OrganizerDashboard />} />
      <Route path="/dashboard" element={<CustomerDashboard />} />
     
    </Routes>
  );
};

export default AllRoutes;
