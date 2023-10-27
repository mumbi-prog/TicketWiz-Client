// import React from "react";
// import { Routes, Route } from "react-router-dom";


// const LoginPage = React.lazy(() => import("../components/Login/login"))
// const CustomerLoginPage = React.lazy(() => import("../components/Login/customerLogin"))
// const HomePage = React.lazy(() => import("../Pages./Home"))
// const SignUpPage = React.lazy(()=> import("../components/Login/signup"))

// const AllRoutes = () => {
//     return (
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="customerLogin" element={<CustomerLoginPage/>}/>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//       </Routes>
//     );
// }
// export default AllRoutes;
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../components/Login/login";
import CustomerLoginPage from "../components/Login/customerLogin";
import OrganizerSignupPage from "../components/Login/organiserSignup";
import HomePage from '../Pages/Home';
import SignUpPage from "../components/Login/signup";
import OrganizerDashboard from "../components/Organizer/Dashboard";
import CustomerDashboard from "../components/Client/Dashboard";

const AllRoutes = () => {
  const [userRole, setUserRole] = useState(""); 
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/customerLogin" element={<CustomerLoginPage />} />
      <Route path="/login" element={<LoginPage setUserRole={setUserRole} />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/organizersignup" element={<OrganizerSignupPage />} />
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



// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";

// import LoginPage from "../components/Login/login";
// import CustomerLoginPage from "../components/Login/customerLogin";
// import OrganizerSignupPage from "../components/Login/organiserSignup";
// import SignUpPage from "../components/Login/signup";
// import OrganizerDashboard from "../components/Organizer/Dashboard";
// import CustomerDashboard from "../components/Client/Dashboard";

// const AllRoutes = () => {
//   const [userRole, setUserRole] = useState(""); 
//   return (
//     <Routes>
//       <Route path="/customerLogin" element={<CustomerLoginPage />} />
//       <Route path="/login" element={<LoginPage setUserRole={setUserRole} />} />
//       <Route path="/signup" element={<SignUpPage />} />
//       <Route path="/organizersignup" element={<OrganizerSignupPage />} />
//       {userRole === "organizier" && (
//         <Route path="/dashboard" element={<OrganizerDashboard />} />
//       )}
//       {userRole === "customer" && (
//         <Route path="/dashboard" element={<CustomerDashboard />} />
//       )}
//     </Routes>
//   );
// };

// export default AllRoutes;