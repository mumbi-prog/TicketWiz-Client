import React from 'react';
import { Element } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar';
import HeroSection from './components/LandingPage/heroSection';
import FeaturedEvents from './components/LandingPage/FeaturedEvents';
import Clients from './components/LandingPage/Clients';
import Newevents from './components/LandingPage/Newevents';
import Footer from './components/LandingPage/Footer';
import EventList from './components/Events/EventList'; 
import EventDetails from './components/Events/EventDetails';
import Payment from './components/Events/Payment';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/events" element={<EventList />} /> 
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/events/:eventId/checkout" element={<Payment />} />
          <Route
            path="/"
            element={
              <>
                <Element name="home">
                  <HeroSection />
                </Element>
                <Element name="featured-events">
                  <FeaturedEvents />
                </Element>
                <Element name="create-events">
                  <Newevents />
                </Element>
                <Element name="our-clients">
                  <Clients />
                </Element>
                <Element name="contact">
                  <Footer />
                </Element>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// import React from 'react'
// import MainClientApp from './components/Client/MainClientApp';

// function App() {
//   return (
//     <div><MainClientApp /></div>
//   )
// }

// export default App