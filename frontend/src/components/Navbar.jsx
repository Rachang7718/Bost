import React, { useState } from "react";
import logo from "../assets/bost.svg";
import { NavLink } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BrowseMenu from "./BrowseMenu";
import IsLogin from "./IsLogin";

function Navbar() {
  const [isBrowse, setBrowse] = useState(false);
  return (
    <>
      <div className="fixed bg-[#2B2B2B] w-screen overflow-hidden z-10">
        <header className="flex py-6 justify-center text-center border-[#D7D7D7] font-semibold gap-72">
          <div className="flex items-center text-white">
            <NavLink
              to={"#"}
              className="flex items-center mr-11 cursor-pointer"
            >
              <img src={logo} alt="bost-logo" />
            </NavLink>
            <ul className="flex items-center gap-10">
              <li>
                <NavLink className="cursor-pointer" to={"/home"}>
                  Home
                </NavLink>
              </li>
              <li>
                <button
                  className="cursor-pointer"
                  onClick={() => setBrowse(!isBrowse)}
                >
                  Browse
                </button>
              </li>
              <li>
                <NavLink className="cursor-pointer" to={"/ranking"}>
                  Ranking
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center bg-white rounded-[10px] w-56 h-10 px-4 py-2 m-auto">
              <FontAwesomeIcon icon={faSearch} className="pr-2" />
              <input
                type="text"
                placeholder="Search"
                className=" w-44 placeholder:text-black focus:outline-none "
              />
            </div>
            {/* <NavLink to={"/login"} className="bg-[#FBBC04] rounded-[10px] my-auto">
              <button type="button" className="px-6 py-2">
                Login
              </button>
            </NavLink> */}
            <IsLogin />
          </div>
        </header>
      </div>
      {isBrowse && (
        <div className="fixed z-50 left-64 top-20">
          <BrowseMenu />
        </div>
      )}
    </>
  );
}

export default Navbar;
