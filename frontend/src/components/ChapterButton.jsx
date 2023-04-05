import React from "react";
import { NavLink } from "react-router-dom";

function ChapterButton() {
  return (
    <>
      <NavLink to={'/bookcontent'}>
        <button className="mt-4">
          <div className="bg-[#5CCC7E] text-white px-11 rounded-2xl py-1">
            <p className="text-[13px]">Read</p>
            <h4>Chapter One</h4>
          </div>
        </button>
      </NavLink>
    </>
  );
}

export default ChapterButton;
