import React from "react";
import logo from './../../images/logo.png';
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left side with company name and logo */}
      {/* <div className="flex flex-col justify-center items-center bg-blue-500 text-white w-[10%]"></div> */}

      {/* Right side with login form */}
      <div className="flex justify-center items-center w-[100%] bg-gradient-to-r from-gradient-color1 to-gradient-color2 p-[5px] pr-[30px ">
        <div className="w-80 h-[80%] mr-20 p-8 rounded shadow">
          <h1 className="text-3xl font-bold mb-14 mt-[50%] text-center text-white">
            TicketWiz
          </h1>
          <img
           src={logo} alt="Logo" 
            className="w-24 h-24 rounded-full ml-[30%]"
          />
        </div>
        <div className="w-96 p-8 rounded shadow ml-20 mt-10">
          <h2 className="text-4xl font-bold mb-4 text-center text-black">
            Login
          </h2>{" "}
          <h2 className="text-2xl font-bold mb-4 text-center text-black">
            Welcome Back
          </h2>{" "}
          <h2 className="text-1xl font-bold mb-4 text-center text-black">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-purple-500 underline">Signup</span>
            </Link>{" "}
            instead.
          </h2>{" "}
          {/* Add text-white for the title */}
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
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                PASSWORD
              </label>
              <input
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md bg-white"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-md hover-bg-blue-800 w-full mt-7"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
