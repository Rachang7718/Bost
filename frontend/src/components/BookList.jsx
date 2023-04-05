import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import BookSlide from "./BookSlide";
import { NavLink } from "react-router-dom";

function BookList(props) {
  return (
    <>
      <div className="relative flex items-center mb-10  border-t border-[#D7D7D7]">
        <h1 className=" border-x border-t ml-20 bg-white absolute top-[-52px] px-7 py-3 font-semibold text-lg rounded-x-[7px] rounded-t-[7px]">
          {props.title}
        </h1>
        <div className="flex items-center justify-start mx-[67px]">
          <button className="bg-[#FBBC04] rounded-full px-4 py-[10px]">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <BookSlide />

          <button className="bg-[#FBBC04] rounded-full px-4 py-[10px]">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
}

export default BookList;
