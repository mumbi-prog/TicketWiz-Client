import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoaderStyling.css'

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/me');

        if (response.status === 201) { 
          setUserData(response.data);
        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-container h-screen flex flex-column justify-center relative left-[320px]">
      {userData ? (
        <div>
          <h1 className="profile-head mt-[50px] uppercase px-[50px] py-[10px] font-bold bg-acc-blue text-text-color text-lg w-[400px] text-center">
            Contact information
          </h1>
          <form className="profile-form flex flex-col items-left mt-[20px]">
            <div className="form-group align-left">
              <label htmlFor="first_name" className="label font-dm-serif-text font-medium">
                First Name:
              </label>
              <p id="first_name" className="user-data rounded-md px-[20px] py-[8px] my-[5px] bg-payment-modal-color w-[400px]">
                {userData.first_name}
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="last_name" className="label font-dm-serif-text font-medium">
                Last Name:
              </label>
              <p id="last_name" className="user-data rounded-md px-[20px] py-[8px] my-[5px] bg-payment-modal-color w-[400px]">
                {userData.last_name}
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label font-dm-serif-text font-medium">
                Email:
              </label>
              <p id="email" className="user-data rounded-md px-[20px] py-[8px] my-[5px] bg-payment-modal-color w-[400px]">
                {userData.email}
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="phone_number" className="label font-dm-serif-text font-medium">
                Phone Number:
              </label>
              <p id="age" className="user-data rounded-md px-[20px] py-[8px] my-[5px] bg-payment-modal-color w-[400px]">
                +{userData.phone_number}
              </p>
            </div>
          </form>
        </div>
      ) : (
        <section className="dots-container mt-[15%]">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </section>
      )}
    </div>
  );
};

export default ProfilePage;
