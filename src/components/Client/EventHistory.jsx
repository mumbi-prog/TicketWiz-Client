import React, { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa';

function EventHistory() {

  const [eventHistory, setEventHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div>
        <h1>EventHistory</h1>
    </div>
  )
}

export default EventHistory