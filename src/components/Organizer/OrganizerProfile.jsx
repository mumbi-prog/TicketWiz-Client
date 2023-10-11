import React, { useEffect, useState } from 'react';

const OrganizerProfile = () => {
    const [organizerInfo, setOrganizerInfo] = useState(null);

    // API call to fetch organizer's contact info
    useEffect(() => {
        fetch('/api/v1.0/users')
            .then((response) => response.json())
            .then((data) => {
                setOrganizerInfo(data);
            })
            .catch((error) => {
                console.log('Error fetching organizer information')
            });
    }, []);



  return (
    <div>
      <h2>Organizer Profile</h2>
      {organizerInfo ? (
        <div>
          <p>First Name: {organizerInfo.first_name}</p>
          <p>Last Name: {organizerInfo.last_name}</p>
          <p>Email: {organizerInfo.email}</p>
          <p>Age: {organizerInfo.age}</p>
        </div>
      ) : (
        <p>Loading organizer information...</p>
      )}
    </div>
  );
};

export default OrganizerProfile;
