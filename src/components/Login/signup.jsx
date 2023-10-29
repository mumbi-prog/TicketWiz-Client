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
import { PiEyeBold, PiEyeClosed} from 'react-icons/pi';
import './Login.css'

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState(""); 
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleAddAccount = async () => {
    try {
      const isPasswordValid = password === confirmPassword;
      const isPhoneNumberValid = /^254\d{9}$/.test(phoneNumber);
      const isAgeValid = age >= 18 && age <= 65;
      const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

      if (!isPasswordValid) {
        setErrMsg("Password Mismatch!");
      } else if (!isPhoneNumberValid) {
        setErrMsg("Invalid phone number format. It should start with 254 and be 12 digits long.");
      } else if (!isAgeValid) {
        setErrMsg("Age must be between 18 and 65.");
      } else if (!isEmailValid) {
        setErrMsg("Invalid email format.");
      } else {
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          mode: 'cors',
          body: JSON.stringify({
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            age,
            phone_number: phoneNumber
          }),          
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          navigate("/customerlogin");
        } else {
          const errorResponse = await response.json();
          setErrMsg(errorResponse.error || "Couldn't create the account. Try again.");
          setTimeout(() => {
            setErrMsg("");
          }, 3000);
        }
      }
    } catch (err) {
      setErrMsg("Try again.");
      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    }
  };

  return (
    <>
      <p>{errMsg}</p>

      <div className="bg-gradient-to-r from-blue-500 via-purple-700 to-purple-500 h-screen flex justify-center items-center">
        <div className="signup-container flex justify-center items-center w-[1000px] h-[90vh] p-20 bg-gradient-to-tr from-[rgba(255,255,255,0.1)] via-transparent via-transparent to-[rgba(255,255,255,0)] backdrop-blur-10xl border-1 border-[rgba(255,255,255,0.18)] shadow-md rounded-lg">
          <div className="w-80 h-[80%] mr-20 flex flex-col items-center mt-[200px]">
            <Link to={"/"} className="app-name font-bold text-3xl text-text-color">TicketWiz</Link>
            <img src={logo} alt="" className="w-[550px]"/>
          </div>
          <div className="w-96 p-8  ml-20 mt-[5px] w-[500px]">
              <h5 className="text-5xl font-medium mb-4 text-center text-black">
                Register
              </h5>
              <p className="text-center text-black mb-[10px]">Already a member? <Link to={"/login"} className="text-text-color font-medium underline">Sign in</Link> instead</p>
            <form className="user-signup">
              <div className="user-name flex gap-[20px]">
                <div className="mb-2">
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700" >
                    First Name
                  </label>
                  <input
                    placeholder="Your First Name" type="text" id="first_name" name="first_name"
                    className="mt-1 p-2 w-full rounded-md bg-white focus:outline-none" required value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700" >
                    Last Name
                  </label>
                  <input
                    placeholder="Your Last name" type="text" id="last_name" name="last_name"
                    className="mt-1 p-2 w-full rounded-md bg-white focus:outline-none" required  value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="contact-info flex gap-[20px]">
                <div className="mb-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    placeholder="email@example.com" type="email" id="email" name="email"
                    className="mt-1 p-2 w-full rounded-md bg-white focus:outline-none" required value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    placeholder="Phone Number" type="text" id="phone_number" name="phone_number"
                    className="mt-1 p-2 w-full rounded-md bg-white focus:outline-none" required value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-2 w-[420px]">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  placeholder="Age" type="text" id="age" name="age"
                  className="mt-1 p-2 w-full rounded-md bg-white focus:outline-none" required value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <div className="relative">
                  <PasswordInput
                    name="password"
                    title="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    showPassword={showPassword}
                    onTogglePassword={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>
              <div className="mb-2">
                <PasswordInput
                  name="confirmPassword"
                  title="Confirm Password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  showPassword={showPassword}
                  onTogglePassword={() => setShowPassword(!showPassword)}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="create-account uppercase bg-blue-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-800 w-full mt-7"
                  onClick={handleAddAccount}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const PasswordInput = ({ name, title, placeholder, value, onChange, showPassword, onTogglePassword }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          className="mt-1 p-2 w-full rounded-md  focus:outline-none"
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute flex flex-end ml-[380px] text-gray-600 hover:text-gray-800"
        >
          {showPassword ? <PiEyeBold /> : <PiEyeClosed />}
        </button>
      </div>
    </div>
  );
};

export default SignUp;

