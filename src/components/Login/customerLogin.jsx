import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../passwordInput";
import logo from './../../images/logo.png';


  const CustomerLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("")
  
  
  const handleLogin = async () => {
    console.log(email, password, "here are the information");
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        
        const data = await response.json();
        const receivedUsername = data.username;
        localStorage.setItem("username", receivedUsername);
        setSuccessMsg("Login successful!");


        
        navigate("/dashboard");
      } else {
       
        setErrMsg("An error occurred while logging in");
        setTimeout(() => {
          setErrMsg("");
        }, 3000); 
      }
    } catch (error) {
     
      setErrMsg("An error occurred while logging in");
      setTimeout(() => {
        setErrMsg("");
      }, 3000); 
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex justify-center items-center w-[100%] bg-gradient-to-r from-gradient-color1 to-gradient-color2 p-[5px] pr-[30px]">
        <div className="w-80 h-[80%] mr-20 p-8 rounded shadow">
          <h1 className="text-3xl font-bold mb-14 mt-[75%] text-center text-white">
            <Link to="/">TicketWiz</Link>
          </h1>
          <img
            src={logo}
            alt="Logo"
            className="w-48 h-48 rounded-full ml-[15%]"
          />
        </div>
        <div className="w-96 p-8 rounded shadow ml-20 mt-10">
          <h2 className="text-4xl font-bold mb-4 text-center text-black">
            Login
          </h2>
          <h2 className="text-2xl font-bold mb-4 text-center text-black">
            Welcome Back
          </h2>
          <h2 className="text-1xl font-bold mb-4 text-center text-black">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="font-bold mb-4 text-black underline">Signup</span>
            </Link>{" "}
            instead.
          </h2>

          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                EMAIL
              </label>
              <input
                placeholder="Email address"
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md bg-white"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                PASSWORD
              </label>
              <PasswordInput
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-md hover-bg-blue-800 w-full mt-7"
                onClick={handleLogin}
              >
                Log In
              </button>
            </div>
          </form>
          <p>{successMsg}</p> 
          <p>{errorMsg}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerLoginPage;


