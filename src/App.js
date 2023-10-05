import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/heroSection";
import FeaturedEvents from "./components/FeaturedEvents";
// import Navbar from "./components/navbar";
// import HeroSection from "./components/heroSection";
// import FeaturedEvents from "./components/featuredEvents";

export default function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FeaturedEvents/>
      
    </>
  );
}
