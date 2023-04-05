import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import image from "../assets/BookImage.png";
import Rating from "../components/Rating";

function Browse() {
  return (
    <>
      <Navbar />
      <div className="flex border-x border-[#D7D7D7] mx-52 h-full justify-center relative">
        <div className="mt-44">
          <NavLink to={"/book"}>
            <div className="relative flex items-center mb-10  border-t border-[#D7D7D7]">
              <h1 className=" border-x border-t ml-20 bg-white absolute top-[-52px] px-7 py-3 font-semibold text-lg rounded-x-[7px] rounded-t-[7px]">
                Pertanian
              </h1>
              <div className="flex items-center justify-start mx-[67px] mt-8">
                <div className="gap-5 grid grid-cols-5 text-sm font-medium cursor-pointer">
                  <div className="text-center w-[175px]">
                    <img
                      className="w-[156px] h-[191px] my-3 mx-auto"
                      src={image}
                      alt=""
                    />
                    <p className="text-sm font-semibold">
                      Tetanggaku iri denganku
                    </p>
                    <p className="text-sm font-medium text-[#747474]">
                      Kang asep
                    </p>
                    <Rating />
                  </div>
                  <div className="text-center w-[175px]">
                    <img
                      className="w-[146px] h-[191px] my-3 mx-auto"
                      src={image}
                      alt=""
                    />
                    <p className="text-sm font-semibold">
                      Tetanggaku iri denganku
                    </p>
                    <p className="text-sm font-medium text-[#747474]">
                      Kang asep
                    </p>
                    <Rating />
                  </div>
                  <div className="text-center w-[175px]">
                    <img
                      className="w-[146px] h-[191px] my-3 mx-auto"
                      src={image}
                      alt=""
                    />
                    <p className="text-sm font-semibold">
                      Tetanggaku iri denganku
                    </p>
                    <p className="text-sm font-medium text-[#747474]">
                      Kang asep
                    </p>
                    <Rating />
                  </div>
                  <div className="text-center w-[175px]">
                    <img
                      className="w-[146px] h-[191px] my-3 mx-auto"
                      src={image}
                      alt=""
                    />
                    <p className="text-sm font-semibold">
                      Tetanggaku iri denganku
                    </p>
                    <p className="text-sm font-medium text-[#747474]">
                      Kang asep
                    </p>
                    <Rating />
                  </div>
                  <div className="text-center w-[175px]">
                    <img
                      className="w-[146px] h-[191px] my-3 mx-auto"
                      src={image}
                      alt=""
                    />
                    <p className="text-sm font-semibold">
                      Tetanggaku iri denganku
                    </p>
                    <p className="text-sm font-medium text-[#747474]">
                      Kang asep
                    </p>
                    <Rating />
                  </div>
                  <div className="text-center w-[175px]">
                    <img
                      className="w-[146px] h-[191px] my-3 mx-auto"
                      src={image}
                      alt="book"
                    />
                    <p className="text-sm font-semibold">
                      Tetanggaku iri denganku
                    </p>
                    <p className="text-sm font-medium text-[#747474]">
                      Kang asep
                    </p>
                    <Rating />
                  </div>
                  <div className="text-center w-[175px]">
                    <img
                      className="w-[146px] h-[191px] my-3 mx-auto"
                      src={image}
                      alt="book"
                    />
                    <p className="text-sm font-semibold">
                      Tetanggaku iri denganku
                    </p>
                    <p className="text-sm font-medium text-[#747474]">
                      Kang asep
                    </p>
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Browse;
