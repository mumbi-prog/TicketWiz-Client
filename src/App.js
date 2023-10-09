// import './App.css';
// import Navbar from './components/LandingPage/Navbar';
// import HeroSection from './components/LandingPage/heroSection';
// import FeaturedEvents from './components/LandingPage/FeaturedEvents';
// import Clients from './components/LandingPage/Clients';
// import Newevents from './components/LandingPage/Newevents';
// import Footer from './components/LandingPage/Footer';

// function App() {
//   return (
//    <div>
//       <Navbar/>
//       <HeroSection/>
//       <FeaturedEvents/>
//       <Newevents />
//       <Clients />
//       <Footer />
//    </div>
//   );
//   }
// export default App;

import React from 'react';
import { Element } from 'react-scroll';

import './App.css';
import Navbar from './components/LandingPage/Navbar';
import HeroSection from './components/LandingPage/heroSection';
import FeaturedEvents from './components/LandingPage/FeaturedEvents';
import Clients from './components/LandingPage/Clients';
import Newevents from './components/LandingPage/Newevents';
import Footer from './components/LandingPage/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="featured-events">
        <FeaturedEvents />
      </Element>
      <Element name="our-clients">
        <Clients />
      </Element>
      <Element name="new-events">
        <Newevents />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
