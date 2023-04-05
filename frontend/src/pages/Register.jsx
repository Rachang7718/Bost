import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { faUser, faEye, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import background from "../assets/background.png";
import axios from "axios";

function Register() {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password1: "",
  //   password2: "",
  // });
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/registration", {
        username,
        email,
        password1,
        password2,
      })
      .then((respone) => console.log(respone))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <div
        className="flex justify-center h-screen bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="border-2 bg-[#2A2A2A] rounded-lg border-black w-[394px] h-[527px] mt-36">
          <h1 className="title text-3xl text-center mt-14 mb-12 text-white">
            Register
          </h1>
          <form onSubmit={handleSubmit} className="text-center text-[#D9D9D9]">
            <div className="inline-block w-72 text-sm text-start pb-3">
              <p className="font-medium">Username</p>
              <div className="flex items-center gap-2 my-1">
                <FontAwesomeIcon icon={faUser} color="#D9D9D9" />
                <input
                  type="text"
                  value={username}
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-transparent w-72 outline-none"
                />
              </div>
              <div className="border-b border-[#B1B1B1]"></div>
            </div>
            <div className="inline-block w-72 text-sm text-start pb-3">
              <p className="font-medium">Email</p>
              <div className="flex items-center gap-2 my-1">
                <FontAwesomeIcon icon={faEnvelope} color="#D9D9D9" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="bg-transparent w-72 outline-none"
                />
              </div>
              <div className="border-b border-[#B1B1B1]"></div>
            </div>
            <div className="inline-block w-72 text-sm text-start pb-3">
              <p className="font-medium">Password</p>
              <div className="flex items-center gap-2 my-1">
                <FontAwesomeIcon icon={faEye} color="#D9D9D9" />
                <input
                  type="password"
                  value={password1}
                  name="password1"
                  onChange={(e) => setPassword1(e.target.value)}
                  className="bg-transparent w-72 outline-none"
                />
              </div>
              <div className="border-b border-[#B1B1B1]"></div>
            </div>
            <div className="inline-block w-72 text-sm text-start pb-3">
              <p className="font-medium">Password</p>
              <div className="flex items-center gap-2 my-1">
                <FontAwesomeIcon icon={faEye} color="#D9D9D9" />
                <input
                  type="password"
                  value={password2}
                  name="password2"
                  onChange={(e) => setPassword2(e.target.value)}
                  className="bg-transparent w-72 outline-none"
                />
              </div>
              <div className="border-b border-[#B1B1B1]"></div>
            </div>
            <input
              type="submit"
              value="Register"
              className="bg-[#FBBC04] text-black text-sm py-[10px] px-32 rounded-lg font-semibold mt-8 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#d6e327] duration-300"
            />
          </form>
          <NavLink
            to={"/login"}
            className="text-sm text-center block text-[#D9D9D9]"
          >
            Already have an account? Login
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Register;
