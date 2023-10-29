import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './components/Events/EventList'; 
import EventDetails from './components/Events/EventDetails';
import Payment from './components/Events/Payment';
import { Suspense } from "react";
import AllRoutes from "./Routes/Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <FontAwesomeIcon icon={faSpinner} spin size="3x" />
  </div>
);
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/events" element={<EventList />} /> 
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/events/:eventId/checkout" element={<Payment />} />
        </Routes>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <AllRoutes />
      </Suspense>
    </Router>
  );
}

export default App;

// import React from 'react'
// import WelOrg from './components/Organizer/WelOrg'



// function App() {
//   return (
//     <div><WelOrg /></div>
//   )
// }

// export default App
