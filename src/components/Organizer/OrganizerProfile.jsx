import React, { useEffect, useState } from 'react';

const OrganizerProfile = () => {
    const [organizerInfo, setOrganizerInfo] = useState(null);

    // API call to fetch organizer's contact info
    useEffect(() => {
        fetch('/api/v1.0/users')
        
    })
}