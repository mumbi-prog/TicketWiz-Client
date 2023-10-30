import React, { useState, useEffect }  from 'react';
import "./LoaderStyling.css"

function Profile() {
  const [customerData, setCustomerData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/me')
      .then((response) => response.json())
      .then((data) => {
        setCustomerData(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching customer profile:', error));
  }, []);

  if (loading) {
    return (
      <section class="dots-container mt-[15%]">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </section>
    );
  }

  return (
    <div className='profile-container pl-[30%] mt-[80px]'>
     <h1 className='profile-head mt-[50px] uppercase px-[50px] py-[7px] font-bold bg-acc-blue text-text-color text-lg w-[400px] text-center'>Contact information</h1>
      <form className='profile-form flex flex-col items-left mt-[20px]'>
        <div className="form-group align-left">
          <label htmlFor="first_name" className='label font-dm-serif-text font-medium'>First Name:</label>
          <p id="first_name" className='user-data rounded-md px-[20px] py-[5px] my-[5px] bg-payment-modal-color w-[400px]'> {customerData.first_name}</p>
          {customerData.first_name}
        </div>
        <div className="form-group">
          <label htmlFor="last_name" className='label font-dm-serif-text font-medium'>Last Name:</label>
          <p id="last_name" className='user-data rounded-md px-[20px] py-[5px] my-[5px] bg-payment-modal-color w-[400px]'> {customerData.last_name}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email" className='label font-dm-serif-text font-medium'>Email:</label>
          <p id="email" className='user-data rounded-md px-[20px] py-[5px] my-[5px] bg-payment-modal-color w-[400px]'> {customerData.email}</p>
        </div>
        <div className="form-group">
          <label htmlFor="age" className='label font-dm-serif-text font-medium'>Phone Number:</label>
          <p id="age" className='user-data rounded-md px-[20px] py-[5px] my-[5px] bg-payment-modal-color w-[400px]'> {customerData.phone_number}</p>
        </div>
      </form>
    </div>

  );
}

export default Profile;
