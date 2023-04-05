import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cart from "../assets/cartbag.svg";
import profile from "../assets/profile.png";
import ProfileMenu from "./ProfileMenu";

function IsLogin() {
  const [isMenu, setMenu] = useState(false);
  return (
    <>
      <div className="flex items-center gap-6 ml-5">
        <NavLink to={"/cart"}>
          <img src={cart} className="w-8" />
        </NavLink>
        <img
          src={profile}
          className="rounded-full w-12 cursor-pointer"
          onClick={() => setMenu(!isMenu)}
        />
        {isMenu && (
          <div className="fixed top-20">
            <ProfileMenu />
          </div>
        )}

     
      </div>
    </>
  );
}

export default IsLogin;
