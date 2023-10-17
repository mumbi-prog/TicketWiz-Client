import React from "react";
import logo from './../../images/logo.png';
import { Link } from "react-router-dom";
import PasswordInput from "../passwordInput";

const SignUp = () => {

  
  const handleCreateAccount = (e) => {
    e.preventDefault();
    window.alert("Your account has been created!");
  };

  
  return (
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
          </h2>

          <form>
            <div className="mb-2">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                NAME
              </label>
              <input
                placeholder="Your full name"
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md bg-white"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                USERNAME
              </label>
              <input
                placeholder="Username"
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border rounded-md bg-white"
                required
              />
            </div>
            <div className="mb-2">
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
            <div className="mb-2">
  
              <div className="relative">
              <PasswordInput name="password" title="PASSWORD" placeholder="Password"/>
              </div>
            </div>
            <div className="mb-2">
            <PasswordInput name="password" title="CONFIRM PASSWORD" placeholder="Confirm Password" />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-800 w-full mt-7"
                onClick={handleCreateAccount}
              >
                CREATE ACCOUNT
              </button>
            </div>
          </form>
          <h2 className="text-1xl font-bold mb-4 text-center text-black">
            Already have an account?{" "}
            <Link to="/login">
              <span className="font-bold mb-4 text-black underline">Login</span>
            </Link>{" "}
            instead.
          </h2>{" "}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
