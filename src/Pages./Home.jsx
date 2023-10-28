// import React from "react";
// import { Element } from 'react-scroll';
// import Navbar from '../components/LandingPage/Navbar';
// import HeroSection from '../components/LandingPage/heroSection';
// import FeaturedEvents from '../components/LandingPage/FeaturedEvents';
// import Clients from '../components/LandingPage/Clients';
// import Newevents from '../components/LandingPage/Newevents';
// import Footer from "../components/LandingPage/Footer";
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
// // import HeroSection from './components/LandingPage/heroSection';
// // import FeaturedEvents from './components/LandingPage/FeaturedEvents';
// // import Clients from './components/LandingPage/Clients';
// // import Newevents from './components/LandingPage/Newevents';
// // import Footer from './components/LandingPage/Footer';
// import EventList from '../components/Events/EventList'; 
// import EventDetails from '../components/Events/EventDetails';
// import Payment from '../components/Events/Payment';


// const HomePage = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//           <Route path="/events" element={<EventList />} /> 
//           <Route path="/events/:eventId" element={<EventDetails />} />
//           <Route path="/events/:eventId/checkout" element={<Payment />} />
//         </Routes>
//       <Element name="home">
//         <HeroSection />
//       </Element>
//       <Element name="featured-events">
//         <FeaturedEvents />
//       </Element>
//       <Element name="create-events">
//         <Newevents />
//       </Element>
//       <Element name="our-clients">
//         <Clients />
//       </Element>
//       <Element name="contacts">
//         <Footer />
//       </Element>
//     </div>
//   );
// }

// export default HomePage;

import React from "react";
import { Element } from 'react-scroll';
import Navbar from '../components/LandingPage/Navbar';
import HeroSection from '../components/LandingPage/heroSection';
import FeaturedEvents from '../components/LandingPage/FeaturedEvents';
import Clients from '../components/LandingPage/Clients';
import Newevents from '../components/LandingPage/Newevents';
import Footer from "../components/LandingPage/Footer";
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import EventList from '../components/Events/EventList'; 
// import EventDetails from '../components/Events/EventDetails';
// import Payment from '../components/Events/Payment';

const HomePage = () => {
  return (
    <div>
      <Navbar />
        {/* <Routes>
          <Route path="/events" element={<EventList />} /> 
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/events/:eventId/checkout" element={<Payment />} />
        </Routes> */}
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
      <Element name="contacts">
        <Footer />
      </Element>
    </div>
  );
}

export default HomePage;

