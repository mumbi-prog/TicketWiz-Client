import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from './../../images/logo.png';
import { PiEyeBold, PiEyeClosed} from 'react-icons/pi';
import './Login.css'

const LoginPage = ({ setUserRole }) => {
  const [showPassword, setShowPassword] = useState(false);
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
      const response = await axios.post("/login", formData);
      if (response.status === 200) {
        const data = response?.data;
        setSuccessMsg("Login successful!");
        localStorage.setItem("userID", data.id);
        navigate("/customeraccount");
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
          
          <div className="w-80 h-[80%] mr-20 flex flex-col items-center mt-[200px]">
            <Link to={"/home"} className="app-name font-bold text-3xl text-text-color">TicketWiz</Link>
            <img src={logo} alt="" className="w-[550px]"/>
          </div>
          <div className="w-96 p-8  ml-20 mt-[5px] w-[500px]">
              <h5 className="text-5xl font-medium mb-4 text-center text-black">
                Log In
              </h5>
              <p className="text-center text-black mb-[10px]">Not member? <Link to={"/customersignup"} className="text-text-color font-medium underline">Sign up</Link> instead</p>

              <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        placeholder="email@example.com" type="email" id="email" name="email"
                        className="mt-1 p-2 w-full rounded-md bg-white focus:outline-none" required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                  </div>
                  <div className="mb-2">
                      <div className="relative">
                        <PasswordInput
                          name="password"
                          title="Password"
                          placeholder="Password"
                          type="password"
                          id="password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                          showPassword={showPassword}
                          onTogglePassword={() => setShowPassword(!showPassword)}
                        />
                      </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="create-account uppercase bg-blue-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-800 w-full mt-7"
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
                className="absolute flex flex-end ml-[320px] text-gray-600 hover:text-gray-800"
              >
                {showPassword ? <PiEyeBold /> : <PiEyeClosed />}
              </button>
            </div>
          </div>
        );
      };

export default LoginPage;
