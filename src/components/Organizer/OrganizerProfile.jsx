// import React, { useEffect, useState } from 'react';

// const OrganizerProfile = () => {
//     const [organizerInfo, setOrganizerInfo] = useState(null);

//     // API call to fetch organizer's contact info
//     useEffect(() => {
//         fetch('/api/v1.0/users')
//             .then((response) => response.json())
//             .then((data) => {
//                 setOrganizerInfo(data);
//             })
//             .catch((error) => {
//                 console.log('Error fetching organizer information')
//             });
//     }, []);



//   return (
//     <div>
//       <h2>Organizer Profile</h2>
//       {organizerInfo ? (
//         <div>
//           <p>First Name: {organizerInfo.first_name}</p>
//           <p>Last Name: {organizerInfo.last_name}</p>
//           <p>Email: {organizerInfo.email}</p>
//           <p>Age: {organizerInfo.age}</p>
//         </div>
//       ) : (
//         <p>Loading organizer information...</p>
//       )}
//     </div>
//   );
// };

// export default OrganizerProfile;

import React, { useEffect, useState } from 'react';

const OrganizerProfile = () => {
    const [organizerInfo, setOrganizerInfo] = useState(null);
    const [editedInfo, setEditedInfo] = useState({}); // To store the edited information

    // Function to handle changes in the input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedInfo({ ...editedInfo, [name]: value });
    };

    // API call to fetch organizer's contact info
    useEffect(() => {
        fetch('/api/v1.0/users')
            .then((response) => response.json())
            .then((data) => {
                setOrganizerInfo(data);
            })
            .catch((error) => {
                console.log('Error fetching organizer information');
            });
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Organizer Profile</h2>
            {organizerInfo ? (
                <div className="mb-4">
                  
                </div>
            ) : (
                <p>Loading organizer information...</p>
            )}

            {/* Input fields for editing */}
            <div className="mt-4">
                <label className="block text-gray-600 text-sm font-bold mb-2"> First Name:</label>
                <input
                    type="text"
                    name="first_name"
                    value={editedInfo.first_name || ''}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                />
            </div>

            <div className="mt-4">
                <label className="block text-gray-600 text-sm font-bold mb-2"> Last Name:</label>
                <input
                    type="text"
                    name="last_name"
                    value={editedInfo.last_name || ''}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                />
            </div>

            <div className="mt-4">
                <label className="block text-gray-600 text-sm font-bold mb-2"> Email:</label>
                <input
                    type="email"
                    name="email"
                    value={editedInfo.email || ''}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                />
            </div>

            <div className="mt-4">
                <label className="block text-gray-600 text-sm font-bold mb-2"> Age:</label>
                <input
                    type="number"
                    name="age"
                    value={editedInfo.age || ''}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md bg-gray-200"
                />
            </div>
        </div>
    );
};

export default OrganizerProfile;
