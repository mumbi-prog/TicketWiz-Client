import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/Api';

function OrganiserLogout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await api.delete('/logoutOrg');
      if (response.status === 204) {
        navigate('/organiserlogin'); 
      } else {
        console.error('Failed to log out customer');
      }
    } catch (error) {
      console.error('Error while logging out customer:', error);
    }
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default OrganiserLogout;
