// import React, { useState } from "react";
// import logo from './../../images/logo.png';
// import { useNavigate, Link } from "react-router-dom"; 
// import PasswordInput from "../passwordInput";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errMsg, setErrMsg] = useState("");


//   const handleAddAccount = async () => { 
//     try {
//       const isPasswordValid = password === confirmPassword;
//       if (!isPasswordValid) {
//         setErrMsg("Password Mismatch!");
//       } else {
//         const response = await fetch("http://localhost:3000/signup", {
//           method: "POST",
//           mode: 'cors', 
//           body: JSON.stringify({
//             email,
//             password,
//             username,
//             name,
//             confirmPassword,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         console.log ({response})
//         if (response.ok) {
          
//           navigate("/login");
//         } else {
          
//           setErrMsg("An error occurred while creating an account");
//           setTimeout(() => {
//             setErrMsg("");
//           }, 3000);
//         }
//       }
//     } catch (err) {
//       setErrMsg("An error occurred");
//       setTimeout(() => {
//         setErrMsg("");
//       }, 3000); 
//     }
//   };

//   return (
//     <>
//      <p>{errMsg}</p>

//       <div className="flex h-screen">
        
//         <div className="flex justify-center items-center w-[100%] bg-gradient-to-r from-gradient-color1 to-gradient-color2 p-[5px] pr-[30px]">
//           <div className="w-80 h-[80%] mr-20 p-8 rounded shadow">
//             <h1 className="text-3xl font-bold mb-14 mt-[50%] text-center text-white">
//               <Link to="/">TicketWiz</Link>
//             </h1>
//             <img
//               src={logo} alt="Logo"
//               className="w-48 h-48 rounded-full ml-[15%]"
//             />
//           </div>
//           <div className="w-96 p-8 rounded shadow ml-20 mt-10">
//             <h2 className="text-5xl font-bold mb-4 text-center text-black">
//               Register
//             </h2>
//             <h2 className="text-3xl font-bold mb-2 text-center text-black">
//               It's completely free.
//             </h2>{" "}
//             <form>
//               <div className="mb-2">
//                 <label
//                   htmlFor="text"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   placeholder="Your First Name"
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="mt-1 p-2 w-full border rounded-md bg-white"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="mb-2">
//                 <label
//                   htmlFor="text"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   placeholder="Your Last name"
//                   type="text"
//                   id="username"
//                   name="username"
//                   className="mt-1 p-2 w-full border rounded-md bg-white"
//                   required
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="mb-2">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   EMAIL
//                 </label>
//                 <input
//                   placeholder="Email address"
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="mt-1 p-2 w-full border rounded-md bg-white"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="mb-2">
//                 <div className="relative">
//                   <PasswordInput
//                     name="password"
//                     title="PASSWORD"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="mb-2">
//                 <PasswordInput
//                   name="password"
//                   title="CONFIRM PASSWORD"
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//               </div>
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-800 w-full mt-7"
//                   onClick={handleAddAccount}
//                 >
//                   <Link to="/customerlogin">CREATE ACCOUNT</Link>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import logo from './../../images/logo.png';
import { useNavigate, Link } from "react-router-dom";
import PasswordInput from "../passwordInput";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleAddAccount = async () => {
    try {
      const isPasswordValid = password === confirmPassword;
      if (!isPasswordValid) {
        setErrMsg("Password Mismatch!");
      } else {
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          mode: 'cors',
          body: JSON.stringify({
            phoneNumber,
            password,
            username,
            name,
            age, 
            confirmPassword,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log({ response });
        if (response.ok) {
          navigate("/customerlogin");
        } else {
          setErrMsg("An error occurred while creating an account");
          setTimeout(() => {
            setErrMsg("");
          }, 3000);
        }
      }
    } catch (err) {
      setErrMsg("An error occurred");
      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    }
  };

  return (
    <>
      <p>{errMsg}</p>

      <div className="flex h-screen">
        <div className="flex justify-center items-center w-[100%] bg-gradient-to-r from-gradient-color1 to-gradient-color2 p-[5px] pr-[30px]">
          <div className="w-80 h-[80%] mr-20 p-8 rounded shadow">
            <h1 className="text-3xl font-bold mb-14 mt-[50%] text-center text-white">
              <Link to="/">TicketWiz</Link>
            </h1>
            <img
              src={logo} alt="Logo"
              className="w-48 h-48 rounded-full ml-[15%]"
            />
          </div>
          <div className="w-96 p-8 rounded shadow ml-20 mt-10">
            <h2 className="text-5xl font-bold mb-4 text-center text-black">
              Register
            </h2>
            <h2 className="text-3xl font-bold mb-2 text-center text-black">
              It's completely free.
            </h2>{" "}
            <form>
              <div className="mb-2">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  placeholder="Your First Name"
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  placeholder="Your Last name"
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  placeholder="Phone Number"
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700"
                >
                  Age
                </label>
                <input
                  placeholder="Age"
                  type="text"
                  id="age"
                  name="age"
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <div className="relative">
                  <PasswordInput
                    name="password"
                    title="PASSWORD"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-2">
                <PasswordInput
                  name="password"
                  title="CONFIRM PASSWORD"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-800 w-full mt-7"
                  onClick={handleAddAccount}
                >
                  <Link to="/customerlogin">CREATE ACCOUNT</Link>

                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
