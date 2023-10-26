import React, { useState } from "react";
import logo from './../../images/logo.png';
import { useNavigate, Link } from "react-router-dom"; 
import PasswordInput from "../passwordInput";

const SignUp = () => {
  const navigate = useNavigate();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleAddAccount = async () => { 
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        mode: 'cors', 
        body: JSON.stringify({
          first_name: fname,
          last_name: lname,
          age: age,
          phone_number: phone,
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.ok) {
        navigate("/customerLogin");
      } else {
        setErrMsg("An error occurred while creating an account");
        setTimeout(() => {
          setErrMsg("");
        }, 3000);
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
              <Link to="/home">TicketWiz</Link>
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
                  FIRST NAME
                </label>
                <input
                  placeholder="First name"
                  type="text"
                  id="fname"
                  name="fname"
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                  required
                  value={fname}
                  onChange={(e) => setFName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  LAST NAME
                </label>
                <input
                  placeholder="Last name"
                  type="text"
                  id="lname"
                  name="lname"
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                  required
                  value={lname}
                  onChange={(e) => setLName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  AGE
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
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  PHONE NUMBER
                </label>
                <input
                  placeholder="Phone number"
                  type="text"
                  id="phone"
                  name="phone"
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-800 w-full mt-7"
                  onClick={handleAddAccount}
                >
                  CREATE ACCOUNT
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

