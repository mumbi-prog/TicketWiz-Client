import React, { useState, useEffect } from 'react';

const WelCust = () => {
//   const location = useLocation();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    // Fetch customer data from the /me route
    fetch('http://localhost:3000/me')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.first_name) {
          setFirstName(data.first_name);
        }
      })
      .catch((error) => console.error(error));
  }, []);

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
