import React from 'react';
import './App.css';
import Navbar from './components/LandingPage/Navbar';
import HeroSection from './components/LandingPage/heroSection';
import FeaturedEvents from './components/LandingPage/FeaturedEvents';
import Clients from './components/LandingPage/Clients';
import Newevents from './components/LandingPage/Newevents';
import Footer from './components/LandingPage/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import OrganizerRoutes from './OrganizerRoutes';

function App() {
  return (
    <Router>   {/* Wrap the entire application with Router */}
      <div>
        <Navbar/>
        <HeroSection/>
        <FeaturedEvents/>
        <Newevents />
        <Clients />
        <Footer />
        <OrganizerRoutes /> {/* Include OrganizerRoutes component */}
      </div>
    </Router>
  
  );
  }
export default App;
