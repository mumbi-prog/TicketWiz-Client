import React from 'react';
// import { Element } from 'react-scroll';

import './App.css';
import EventList from './components/Events/EventList';
// import Navbar from './components/LandingPage/Navbar';
// import HeroSection from './components/LandingPage/heroSection';
// import FeaturedEvents from './components/LandingPage/FeaturedEvents';
// import Clients from './components/LandingPage/Clients';
// import Newevents from './components/LandingPage/Newevents';
// import Footer from './components/LandingPage/Footer';

function App() {
  return (
    <div>
      <h1>a</h1>
      <EventList />
      {/* <Element name="home">
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
      </Element> */}
    </div>
  );
}

export default App;
