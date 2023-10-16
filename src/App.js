// import React from 'react';
// import { Element } from 'react-scroll';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import './App.css';
// import Navbar from './components/LandingPage/Navbar';
// import HeroSection from './components/LandingPage/heroSection';
// import FeaturedEvents from './components/LandingPage/FeaturedEvents';
// import Clients from './components/LandingPage/Clients';
// import Newevents from './components/LandingPage/Newevents';
// import Footer from './components/LandingPage/Footer';
// import EventList from './components/Events/EventList';
// // import EventList from './components/Events/EventList';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Element name="home">
//           <HeroSection />
//         </Element>
//         <Element name="featured-events">
//           <FeaturedEvents />
//         </Element>
//         <Element name="create-events">
//           <Newevents />
//         </Element>
//         <Element name="our-clients">
//           <Clients />
//         </Element>
//         <Element name="contact">
//           <Footer />
//         </Element>

//         <Route path="/events" element={<EventList />} />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar';
import HeroSection from './components/LandingPage/heroSection';
import FeaturedEvents from './components/LandingPage/FeaturedEvents';
import Clients from './components/LandingPage/Clients';
import Newevents from './components/LandingPage/Newevents';
import Footer from './components/LandingPage/Footer';
import EventList from './components/Events/EventList';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventList />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedEvents />
      <Newevents />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
