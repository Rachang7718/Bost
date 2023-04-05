import React from "react";

function YellowButton(props) {
  return (
    <>
      <button
        type="button"
        className="text-white bg-[#FFD600] border-white border-2  px-12 py-2 rounded-xl"
      >
        {props.title}
      </button>
    </>
  );
}

export default YellowButton;
