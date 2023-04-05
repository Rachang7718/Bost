import React, { useState } from "react";
import Navbar from "../components/Navbar";
import profile from "../assets/profile.png";
import YellowButton from "../components/YellowButton";
import RedButton from "../components/RedButton";
import GreenButton from "../components/GreenButton";

function Settings() {
  const [isEdit, setEdit] = useState(false);
  const [isUsername, setUsername] = useState("Uncle Grandpa");
  const [isEmail, setEmail] = useState("moms@gmail.com");
  const [isPassword, setPassword] = useState("test123");

  return (
    <>
      <Navbar />
      <div className="flex border-x border-[#D7D7D7] mx-52 h-screen relative justify-center">
        <div className="mt-28">
          <h1 className="text-2xl font-medium text-start absolute left-0 ml-14">
            Profile
          </h1>
          <div className="bg-[#4C5CAA] text-white pt-[102px] pb-[50px] relative px-[114px] rounded-[60px] text-center mt-24">
            <img
              src={profile}
              alt="profile-img"
              className="w-[118px] h-[118px] absolute top-[-60px] m-auto left-0 right-0 object-fill rounded-full outline-white outline outline-[7px]"
            />
            <input
              value={isUsername}
              className="bg-transparent text-xl text-center focus:outline-none focus:border-b-2 focus:border-[#5CCC7E]"
              onChange={(e) => setUsername(e.target.value)}
              maxLength="15"
              disabled={!isEdit && true}
            />
            <div className="mt-6 mb-16">
              <div className="flex mb-2">
                <p>Email</p>
                <p className="pl-24 pr-10">:</p>
                <input
                  value={isEmail}
                  className="bg-transparent focus:outline-none focus:border-b-2 focus:border-[#5CCC7E]"
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEdit && true}
                />
              </div>
              <div className="flex">
                <p>Password</p>
                <p className="pl-16 pr-10">:</p>
                <input
                  type="password"
                  value={isPassword}
                  className="bg-transparent focus:outline-none focus:border-b-2 focus:border-[#5CCC7E]"
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={!isEdit && true}
                />
              </div>
            </div>

            {isEdit ? (
              <div>
                <GreenButton title="Save" />{" "}
                <button className="ml-4" onClick={() => setEdit(false)}>
                  <RedButton title="Exit" />
                </button>
              </div>
            ) : (
              <button onClick={(e) => setEdit(true)}>
                <YellowButton title="Edit" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
