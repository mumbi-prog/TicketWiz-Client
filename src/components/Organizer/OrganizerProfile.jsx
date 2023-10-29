// import React, { useEffect, useState } from 'react';

// const Greetings = ({ username }) => {
//   return (
//     <div className="ml-10 mb-10 mt-10">
//       <h2 className="text-3xl font-semibold text-navy-blue">
//         Welcome, {username}
//       </h2>
//     </div>
//   );
// };

// const OrganizerProfile = () => {
//   const [editedInfo, setEditedInfo] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     age: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedInfo({ ...editedInfo, [name]: value });
//   };

//   const handleSubmit = () => {
//     if (!editedInfo.first_name || !editedInfo.last_name || !editedInfo.email || !editedInfo.age) {
//       alert('Please fill in all required fields.');
//     } else {
//       console.log('Form submitted with data:', editedInfo);
//     }
//   };

//   useEffect(() => {
//     fetch('/api/v1.0/users')
//       .then((response) => response.json())
//       .then((data) => {
//         // You can handle the fetched data here if needed.
//       })
//       .catch((error) => {
//         console.log('Error fetching organizer information');
//       });
//   }, []);

//   return (
//     <div>
//       <Greetings username="YourUsername" />
//       <h3 className="text-xl font-semibold text-blue-800 bg-blue-200 p-4 rounded-md">
//         Contact Information
//       </h3>

//       <div className="mt-4">
//         <label className="block text-gray-600 text-sm font-bold mb-2"> First Name:</label>
//         <input
//           type="text"
//           name="first_name"
//           value={editedInfo.first_name}
//           onChange={handleInputChange}
//           className="mt-1 p-2 w-full border rounded-md bg-gray-200"
//           required 
//         />
//       </div>

//       <div className="mt-4">
//         <label className="block text-gray-600 text-sm font-bold mb-2"> Last Name:</label>
//         <input
//           type="text"
//           name="last_name"
//           value={editedInfo.last_name}
//           onChange={handleInputChange}
//           className="mt-1 p-2 w-full border rounded-md bg-gray-200"
//           required 
//         />
//       </div>

//       <div className="mt-4">
//         <label className="block text-gray-600 text-sm font-bold mb-2"> Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={editedInfo.email}
//           onChange={handleInputChange}
//           className="mt-1 p-2 w-full border rounded-md bg-gray-200"
//           required 
//         />
//       </div>

//       <div className="mt-4">
//         <label className="block text-gray-600 text-sm font-bold mb-2"> Age:</label>
//         <input
//           type="number"
//           name="age"
//           value={editedInfo.age}
//           onChange={handleInputChange}
//           className="mt-1 p-2 w-full border rounded-md bg-gray-200"
//           required 
//         />
//       </div>

//       <div className="mt-4">
//         <button
//           type="button"
//           className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrganizerProfile;
