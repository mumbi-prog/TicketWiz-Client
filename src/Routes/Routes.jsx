import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../components/Login/login";
import OrganizerSignupPage from "../components/Login/organiserSignup";
import CustomerSignupPage from '../components/Login/signup';
import CustomerLoginPage from "../components/Login/customerLogin";
import HomePage from '../Pages./Home';
import MainOrgApp from "../components/Organizer/MainOrgApp";
import MainClientApp from "../components/Client/MainClientApp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/customersignup" element={<CustomerSignupPage />} />
      <Route path="/customerlogin" element={<CustomerLoginPage/>} />
      <Route path="/organiserlogin" element={<LoginPage />} />
      <Route path="/organisersignup" element={<OrganizerSignupPage />} />
      <Route path="/organiseraccount" element={<MainOrgApp/>} />
      <Route path="/customeraccount" element={<MainClientApp/>} />
     
    </Routes>
  );
};

export default AllRoutes;
