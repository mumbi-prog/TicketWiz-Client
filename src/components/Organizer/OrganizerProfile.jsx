import React, { useState, useEffect } from 'react';
import "../Client/LoaderStyling.css"

function OrganizerProfile() {
  const [organiserData, setOrganiserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/meOrg') 
      .then((response) => response.json())
      .then((data) => {
        setOrganiserData(data);
        setLoading(false);
        
        const authToken = data.authToken;
        console.log("Authentication Token:", authToken);
      })
      .catch((error) => console.error('Error fetching organiser profile:', error));
  }, []);

  if (loading) {
    return (
      <section className="dots-container mt-[15%]">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    );
  }

  return (
    <div className="profile-container pl-[30%] mt-[80px]">
      <h1 className="profile-head mt-[50px] uppercase px-[50px] py-[7px] font-bold bg-acc-blue text-text-color text-lg w-[400px] text-center">
        Contact Information
      </h1>
      <form className="profile-form flex flex-col items-left mt-[20px]">
        <div className="form-group align-left">
          <label htmlFor="first_name" className="label font-dm-serif-text font-medium">
            First Name:
          </label>
          <p id="first_name" className="user-data rounded-md px-[20px] py-[5px] my-[5px] bg-payment-modal-color w-[400px]">
            {organiserData.first_name}
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="last_name" className="label font-dm-serif-text font-medium">
            Last Name:
          </label>
          <p id="last_name" className="user-data rounded-md px-[20px] py-[5px] my-[5px] bg-payment-modal-color w-[400px]">
            {organiserData.last_name}
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label font-dm-serif-text font-medium">
            Email:
          </label>
          <p id="email" className="user-data rounded-md px-[20px] py-[5px] my-[5px] bg-payment-modal-color w-[400px]">
            {organiserData.email}
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="phone_number" className="label font-dm-serif-text font-medium">
            Phone Number:
          </label>
          <p id="phone_number" className="user-data rounded-md px-[20px] py-[5px] my-[5px] bg-payment-modal-color w-[400px]">
            {organiserData.phone_number}
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="age" className="label font-dm-serif-text font-medium">
            Age:
          </label>
          <p id="age" className="user-data rounded-md px-[20px] py-[5px] my-[5px] bg-payment-modal-color w-[400px]">
            {organiserData.age}
          </p>
        </div>
      </form>
    </div>
  );
}

export default OrganizerProfile;
