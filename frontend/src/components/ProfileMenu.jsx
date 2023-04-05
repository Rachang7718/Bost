import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import profile from "../assets/profile.png";
import {
  faArrowRightFromBracket,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function ProfileMenu() {
  return (
    <>
      <div className="w-[278px] h-[207px] border-[#D9D9D9] bg-white border-2 rounded-md">
        <div className="mx-5 my-4">
          <div className="flex gap-4">
            <img src={profile} alt="" className="w-[60px] rounded-full" />
            <div className="my-auto text-left">
              <h5 className="font-semibold text-base">Uncle Grandpa</h5>
              <p className="font-semibold text-sm text-[#909090]">
                moms@gmail.com
              </p>
            </div>
          </div>
          <div className="border-b-2 border-[#D9D9D9] mt-3 mb-1"></div>
          <h3 className="font-medium text-base">Balance : Rp 150.000</h3>
          <NavLink to={'/settings'}>

          <div className="mt-3">
            <div className="flex items-center gap-3 mb-3 cursor-pointer">
              <FontAwesomeIcon icon={faGear} size="xl" />
              <h1 className="font-semibold text-base text-[#696969]">Setting</h1>
            </div>
          </div>
          </NavLink>
          <div>
            <div className="flex items-center gap-3 cursor-pointer">
              <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" />
              <h1 className="font-semibold text-base text-[#696969]">Logout</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileMenu;
