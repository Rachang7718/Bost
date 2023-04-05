import React from "react";
import YellowButton from "./YellowButton";
import GreenButton from "./GreenButton";
import { NavLink } from "react-router-dom";

function BookPayment() {
  return (
    <>
      <div className="border-[#DCDCDC] border-2 flex justify-center items-center mr-7 h-[280px] rounded-[20px]">
        <div className="w-[230px] px-5">
          <div className="mb-10">
            <p className="text-sm">
              Price : <span className="text-lg">Rp 45.000</span>
            </p>
            <p className="text-sm">
              List Price : <span className=" text-lg">Rp 65.000</span>
            </p>
            <p className="text-sm">
              Save : <span className="text-lg">Rp 20.000</span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <NavLink to={"/cart"}>
              <YellowButton title="Add to Cart" />
            </NavLink>
            <GreenButton title="Buy Now" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookPayment;
