import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../components/Login/login";
import CustomerLoginPage from "../components/Login/customerLogin";
import OrganizerSignupPage from "../components/Login/organiserSignup";
import HomePage from '../Pages./Home';
import SignUpPage from "../components/Login/signup";
import OrganizerDashboard from "../components/Organizer/Dashboard";
import CustomerDashboard from "../components/Client/Dashboard";

const AllRoutes = () => {
  const [userRole, setUserRole] = useState(""); 
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/customerlogin" element={<CustomerLoginPage/>} />
      <Route path="/login" element={<LoginPage setUserRole={setUserRole} />} />
      <Route path="/customersignup" element={<SignUpPage />} />
      <Route path="/organisersignup" element={<OrganizerSignupPage />} />
      {userRole === "organizer" && (
        <Route path="/dashboard" element={<OrganizerDashboard />} />
      )}
      {userRole === "customer" && (
        <Route path="/dashboard" element={<CustomerDashboard />} />
      )} 
    </Routes>
  );
};

export default AllRoutes;
