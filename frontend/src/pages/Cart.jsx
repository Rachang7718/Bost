import React from "react";
import { NavLink } from "react-router-dom";
import CartContent from "../components/CartContent";
import Navbar from "../components/Navbar";

function Cart() {
  return (
    <>
      <Navbar />
      <div className="flex border-x border-[#D7D7D7] mx-52 h-full relative">
        <div className="mt-28">
          <h1 className="text-2xl font-medium text-start ml-14 mb-6">Cart</h1>
          <div className="flex">
            <div className="flex flex-col">
              <CartContent />
              <CartContent />
              <CartContent />
            </div>
            <div className="border-[#DCDCDC] border px-8 py-6 fixed right-60 bottom-5">
              <p className="font-semibold text-sm">Total</p>
              <p className="font-semibold text-sm">Rp 135.000</p>
              <NavLink to={"/payment"}>
                <button
                  type="button"
                  className="bg-[#FBBC04] rounded-[10px] px-16 text-sm py-1 font-medium mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#35A433] hover:text-white duration-300"
                >
                  Order
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
