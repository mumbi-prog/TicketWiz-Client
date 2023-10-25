import React, { useState, useEffect } from 'react';

function Profile() {
  const [customerData, setCustomerData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/customer_profile')
      .then((response) => response.json())
      .then((data) => {
        setCustomerData(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching customer profile:', error));
  }, []);

  if (loading) {
    return <div>Loading customer profile...</div>;
  }

  return (
    <div>
      <h1>Customer Profile</h1>
      <form>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <p id="first_name">{customerData.first_name}</p>
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <p id="last_name">{customerData.last_name}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <p id="email">{customerData.email}</p>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <p id="age">{customerData.age}</p>
        </div>
      </form>
    </div>

  );
}

export default Profile;
