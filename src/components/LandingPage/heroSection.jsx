import React from "react";
import bkg1 from './../../images/bkg1.jpg'
import bkg3 from './../../images/bkg3.png'
import { Link } from "react-router-dom";

const HeroSection = ({ children }) => {
  return (
    <div
      className="hero-cover relative bg-cover bg-center text-white pt-24 h-[84vh] mt-[0px] z-1"
      style={{
        backgroundImage: `url(${bkg1})`, 
      }}
    >
      <div className="gradient-container absolute inset-0 bg-gradient-to-r from-gradient-color1 to-gradient-color2 opacity-50"
        style={{ zIndex: 0 }}></div>
        <div className="content-container relative mx-auto pl-1 flex flex-row z-10">
          <div className="w-[500px] pl-[50px] pt-[40px]">
          
            <h1 className="font-sans text-4xl font-bold mb-4">
              Unleash the Power of events - From concept to experience
            </h1>
            <p className="font-playfair text-italic text-xl mb-8 font-custom italic">
              Where Every Idea Blossoms into a Spectacular Event, Creating
              Memories that Last a Lifetime
            </p>
             <Link to="/events" className="bg-button-color text-white px-[30px] py-[13px] h-[50px] w-[300px] mt-[5px] rounded-full">
                Find Your Next Event
            </Link>
          </div>
          <div className="bandimg ml-auto">
            <img src={bkg3} alt="" className="w-[500px] h-auto mb-0 justify-between mt-[-57px]" />
          </div>
      </div>
    </div>
  );
};

export default HeroSection;
