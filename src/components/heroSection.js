import React from "react";

const HeroSection = ({ children }) => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-24"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80")', // Replace with your background image URL
      }}
    >
      <div className="absolute inset-0 bg-sky-400/90 opacity-50"></div>
      <div className="container mx-auto pl-1">
        <div className="max-w-xs">
          {/* {/* } */}
          <h1 className="text-4xl font-bold mb-4">
            Unleash the Power of events - From concept to experience
          </h1>
          <p className="text-italic text-xl mb-8 font-custom italic">
            Where Every Idea Blossoms into a Spectacular Event, Creating
            Memories that Last a Lifetime
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
            Find Your Next Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
