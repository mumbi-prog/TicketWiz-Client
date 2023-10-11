import React from 'react';
import { Element } from 'react-scroll';

import './App.css';
import Navbar from './components/LandingPage/Navbar';
import HeroSection from './components/LandingPage/heroSection';
import FeaturedEvents from './components/LandingPage/FeaturedEvents';
import Clients from './components/LandingPage/Clients';
import Newevents from './components/LandingPage/Newevents';
import Footer from './components/LandingPage/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import OrganizerRoutes from './components/Organizer/OrganizerRoutes';

function App() {
  return (
   <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedEvents/>
      <Newevents />
      <Clients />
      <Footer />
   </div>
  );
}

export default App;
