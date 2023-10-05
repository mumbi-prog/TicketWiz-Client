import './App.css';
import Navbar from "./components/Navbar";
import HeroSection from "./components/heroSection";
import FeaturedEvents from "./components/FeaturedEvents";
import Clients from './components/LandingPage/Clients';
import Newevents from './components/LandingPage/Newevents';
import Footer from './components/LandingPage/Footer';

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
