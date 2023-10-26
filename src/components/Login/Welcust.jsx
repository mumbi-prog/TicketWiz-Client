import React from 'react';
import { useLocation } from 'react-router-dom';

const WelCust = () => {
  const location = useLocation();
  const firstName = location.state.firstName;

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">Welcome, {firstName}!</h2>
        <p>You have successfully logged in.</p>
      </div>
    </div>
  );
};

export default WelCust;
