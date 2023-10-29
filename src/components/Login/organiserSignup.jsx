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
        const response = await fetch("http://localhost:3000/signupOrg", {
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
          navigate("/login");
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
            <Link to={"/home"} className="app-name font-bold text-3xl text-text-color">TicketWiz</Link>
            <img src={logo} alt="" className="w-[550px]"/>
          </div>
          <div className="w-96 p-8  ml-20 mt-[5px] w-[500px]">
              <h5 className="text-5xl font-medium mb-4 text-center text-black">
                Register
              </h5>
              <p className="text-center text-black mb-[10px]">Already a member? <Link to={"/organiserlogin"} className="text-text-color font-medium underline">Sign in</Link> instead</p>
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

