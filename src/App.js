import React from 'react';
import { Element } from 'react-scroll';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/LandingPage/Navbar';
import HeroSection from './components/LandingPage/heroSection';
import FeaturedEvents from './components/LandingPage/FeaturedEvents';
import Clients from './components/LandingPage/Clients';
import Newevents from './components/LandingPage/Newevents';
import Footer from './components/LandingPage/Footer';
// import EventList from './components/Events/EventList';

function App() {
  return (
    // <Router>
      <div>
        <Navbar />
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

        {/* <Routes>
          <Route path="/events" element={<EventList />} />
        </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
