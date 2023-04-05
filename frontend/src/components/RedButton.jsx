import React from "react";

function RedButton(props) {
  return (
    <>
      <button
        type="button"
        className="text-white bg-[#FF4242] border-white border-2  px-12 py-2 rounded-xl"
      >
        {props.title}
      </button>
    </>
  );
}

export default RedButton;
