import React, {useState} from 'react'
import WelCust from './WelCust'
import EventHistory from './EventHistory'

function Dashboard() {
  const [totalEvents, setTotalEvents] = useState(0);

  const updateTotalEvents = (count) => {
    setTotalEvents(count);
  };

  return (
    <div className=''>
      <div className="welcome-cust mx-[20px] font-sans my-[30px]">
        <WelCust />
      </div>
      <div className="event-stats bg-gray-400 inline-block px-[50px] py-[30px] rounded-md hover:bg-acc-blue mx-[20px]">
          <p className='font-bold text-lg'>Total Events Booked:</p>
          <p className='font-bold text-lg'>{totalEvents}</p>
        </div>
      <EventHistory onTotalEvents={updateTotalEvents} />
      
    </div>
  );
}


export default Dashboard