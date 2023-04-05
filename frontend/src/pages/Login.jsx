import React from "react";
import Navbar from "../components/Navbar";
import { faUser, faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import background from "../assets/background.png"

function Login() {
  return (
    <>
      <Navbar />
      <div
        className="flex justify-center h-screen bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="border-2 bg-[#2A2A2A] rounded-lg border-black w-[394px] h-[467px] mt-36">
          <h1 className="title text-3xl text-center mt-14 mb-12 text-white">
            Login
          </h1>
          <form action="" className="text-center text-[#D9D9D9]">
            <div className="inline-block w-72 text-sm text-start pb-3">
              <p className="font-medium">Username</p>
              <div className="flex items-center gap-2 my-1">
                <FontAwesomeIcon icon={faUser} color="#D9D9D9" />
                <input
                  type="text"
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
                  className="bg-transparent w-72 outline-none"
                />
              </div>
              <div className="border-b border-[#B1B1B1]"></div>
            </div>
            <NavLink to={"#"} className="text-sm px-12 text-end block">
              Forget Password?
            </NavLink>
            <NavLink to={"/home"}>
              <input
                type="submit"
                value="Login"
                className="bg-[#FBBC04] text-black text-sm py-[10px] px-32 rounded-lg font-semibold mt-8 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#d6e327] duration-300"
              />
            </NavLink>
          </form>
          <NavLink
            to={"/register"}
            className="text-sm text-center block text-[#D9D9D9]"
          >
            Dont have an account?
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Login;
