import React from "react";
import { Routes, Route } from "react-router-dom";

// import other components here with lazy loading
const LoginPage = React.lazy(() => import("../components/Login/login"))
const CustomerLoginPage = React.lazy(() => import("../components/Login/customerLogin"))
const HomePage = React.lazy(() => import("../Pages./Home"))
const SignUpPage = React.lazy(()=> import("../components/Login/signup"))

const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="customerLogin" element={<CustomerLoginPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    );
}
export default AllRoutes;