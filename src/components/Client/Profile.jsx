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
    </div>
  );
}

export default Profile;
