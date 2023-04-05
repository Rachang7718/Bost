import React from 'react'

function SaveButton(props) {
  return (
    <>
      <button
        type="button"
        className="text-white bg-[#35A433] border-white border-2 px-12 py-2 rounded-xl"
      >
        {props.title}
      </button>
    </>
  );
}

export default SaveButton