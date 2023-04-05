import React from "react";
import image from "../assets/BookImage.png";
import Rating from "./Rating";
import { NavLink } from "react-router-dom";

function BookSlide() {
  return (
    <>
      <div className="flex justify-start my-9 mx-9 overflow-x-scroll w-[770px] scrollbar">
        <div className="flex gap-5">
          <NavLink to={"/book"}>
            <div className="text-center w-[175px]">
              <img
                className="w-[156px] h-[191px] my-3 mx-auto"
                src={image}
                alt=""
              />
              <p className="text-sm font-semibold">Tetanggaku iri denganku</p>
              <p className="text-sm font-medium text-[#747474]">Kang asep</p>
              <Rating />
            </div>
          </NavLink>
          <div className="text-center w-[175px]">
            <img
              className="w-[146px] h-[191px] my-3 mx-auto"
              src={image}
              alt=""
            />
            <p className="text-sm font-semibold">Tetanggaku iri denganku</p>
            <p className="text-sm font-medium text-[#747474]">Kang asep</p>
            <Rating />
          </div>
          <div className="text-center w-[175px]">
            <img
              className="w-[146px] h-[191px] my-3 mx-auto"
              src={image}
              alt=""
            />
            <p className="text-sm font-semibold">Tetanggaku iri denganku</p>
            <p className="text-sm font-medium text-[#747474]">Kang asep</p>
            <Rating />
          </div>
          <div className="text-center w-[175px]">
            <img
              className="w-[146px] h-[191px] my-3 mx-auto"
              src={image}
              alt=""
            />
            <p className="text-sm font-semibold">Tetanggaku iri denganku</p>
            <p className="text-sm font-medium text-[#747474]">Kang asep</p>
            <Rating />
          </div>
          <div className="text-center w-[175px]">
            <img
              className="w-[146px] h-[191px] my-3 mx-auto"
              src={image}
              alt=""
            />
            <p className="text-sm font-semibold">Tetanggaku iri denganku</p>
            <p className="text-sm font-medium text-[#747474]">Kang asep</p>
            <Rating />
          </div>
          <div className="text-center w-[175px]">
            <img
              className="w-[146px] h-[191px] my-3 mx-auto"
              src={image}
              alt="book"
            />
            <p className="text-sm font-semibold">Tetanggaku iri denganku</p>
            <p className="text-sm font-medium text-[#747474]">Kang asep</p>
            <Rating />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookSlide;
