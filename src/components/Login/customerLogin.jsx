         
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import PasswordInput from "../passwordInput";
// import logo from './../../images/logo.png';
// import axios from 'axios';


//   const LoginPage = ({ setUserRole }) => {
//     console.log("hello world")
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   const [errorMsg, setErrMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("")

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData)
//     // alert("hello",email,password)
//     try {
//       const response = await axios.post('http://localhost:3000/login', formData);
//       console.log(response,"++++++++===>")

//       if (response) {
//         const data = response?.data;
//         const receivedUsername = data.username;
//         localStorage.setItem("username", receivedUsername);
//         setSuccessMsg("Login successful!");
         
    
//         navigate("/customerdashboard");
//       } else {
      
//         setErrMsg("An error occurred while logging in");
//         setTimeout(() => {
//           setErrMsg("");
//         }, 3000); 
//       }
//     } catch (error) {
      
//      console.log(error)
//       setErrMsg("An error occurred while logging in");
//       setTimeout(() => {
//         setErrMsg("");
//       }, 3000); 
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="flex justify-center items-center w-[100%] bg-gradient-to-r from-gradient-color1 to-gradient-color2 p-[5px] pr-[30px]">
//         <div className="w-80 h-[80%] mr-20 p-8 rounded shadow">
//           <h1 className="text-3xl font-bold mb-14 mt-[75%] text-center text-white">
//             <Link to="/home">TicketWiz</Link>
//           </h1>
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-48 h-48 rounded-full ml-[15%]"
//           />
//         </div>
//         <div className="w-96 p-8 rounded shadow ml-20 mt-10">
//           <h2 className="text-4xl font-bold mb-4 text-center text-black">
//             Login
//           </h2>
//           <h2 className="text-2xl font-bold mb-4 text-center text-black">
//             Welcome Back
//           </h2>
//           <h2 className="text-1xl font-bold mb-4 text-center text-black">
//             Don't have an account?{" "}
//             <Link to="/customersignup">
//               <span className="font-bold mb-4 text-black underline">Signup</span>
//             </Link>{" "}
//             instead.
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 EMAIL
//               </label>
//               <input
//                 placeholder="Email address"
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="mt-1 p-2 w-full border rounded-md bg-white"
//                 required
//                 value={formData.email}
//             onChange={handleChange}
//                 // value={email}
//                 // onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 PASSWORD
//               </label>
//               <PasswordInput
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}

//             onChange={handleChange}
//               />
//             </div>
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-md hover-bg-blue-800 w-full mt-7"
                
//               >
//                 Log In
//               </button>
//             </div>
//           </form>
//           <p>{successMsg}</p> 
//           <p>{errorMsg}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = ({ setUserRole }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", formData, {
      withCredentials: true,
    });
      if (response.status === 200) {
        const data = response?.data;
        setSuccessMsg("Login successful!");
        localStorage.setItem("userID", data.id);
        navigate("/customerdashboard");
      } else {
        setErrMsg("An error occurred while logging in");
        setTimeout(() => {
          setErrMsg("");
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      setErrMsg("An error occurred while logging in");
      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-700 to-purple-500 h-screen flex justify-center items-center">
      <div className="signup-container flex justify-center items-center w-[1000px] h-[90vh] p-20 bg-gradient-to-tr from-[rgba(255,255,255,0.1)] via-transparent via-transparent to-[rgba(255,255,255,0)] backdrop-blur-10xl border-1 border-[rgba(255,255,255,0.18)] shadow-md rounded-lg">

                <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit">Log In</button>
              </div>
            </form>
            <p>{successMsg}</p>
            <p>{errorMsg}</p>
            <p>
              Don't have an account? <Link to="/signup">Signup</Link> instead.
            </p>
      </div>

      
    </div>
  );
};

export default LoginPage;
