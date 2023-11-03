import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../components/Login/login";
import OrganizerSignupPage from "../components/Login/organiserSignup";
import CustomerSignupPage from '../components/Login/signup';
import CustomerLoginPage from "../components/Login/customerLogin";
import HomePage from '../Pages./Home';
// import OrganizerDashboard from "../components/Organizer/Dashboard";
// import CustomerDashboard from "../components/Client/Dashboard";
// import ProfilePage from "../components/Client/Profile";
// import OrganizerProfile from "../components/Organizer/OrganizerProfile";
// import EventHistory from "../components/Client/EventHistory";
// import CreateEvent from "../components/Organizer/CreateEvent";
// import Dashboard from "../components/Organizer/Dashboard";
import MainOrgApp from "../components/Organizer/MainOrgApp";
import MainClientApp from "../components/Client/MainClientApp";

const AllRoutes = () => {
  // const [ setUserRole] = useState(""); 
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




// import OrganizerProfile from "../components/Organizer/OrganizerProfile";

// const AllRoutes = () => {
//   const [ setUserRole] = useState(""); 
//   return (
//     <Routes>
//       <Route path="/home" element={<HomePage />}></Route>
//       <Route path="/customerlogin" element={<CustomerLoginPage />} />
//       <Route path="/customersignup" element={<CustomerSignupPage />} />
//       <Route path="/organiserlogin" element={<LoginPage setUserRole={setUserRole} />} />
//       <Route path="/organisersignup" element={<OrganizerSignupPage />} />
//       <Route path="/organizerdashboard" element={<OrganizerDashboard />} />
//       <Route path="/dashboard" element={<CustomerDashboard />} />
     
//     </Routes>
//   );
// };

// export default AllRoutes;
