import React, { useState } from 'react';
import OrganiserSidebar from './OrganiserSidebar';
import Dashboard from './Dashboard';
import CreateEvent from './CreateEvent';
import TicketSales from './Ticketsales';
import OrganizerProfile from './OrganizerProfile';
import './../Client/MainClientApp.css';

function MainOrgApp() {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  const renderContent = () => {
    switch (selectedOption) {
      case 'dashboard':
        return <Dashboard />;
      case 'createEvent':
        return <CreateEvent />;
      case 'ticketSales':
        return <TicketSales />;
      case 'organizerProfile':
        return <OrganizerProfile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="main-wrapper">
      <OrganiserSidebar setSelectedOption={setSelectedOption} />
      <div className="content-wrapper">
        {renderContent()}
      </div>
    </div>
  );
}

export default MainOrgApp;

