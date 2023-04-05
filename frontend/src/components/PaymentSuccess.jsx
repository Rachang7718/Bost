import React from "react";
import GreenButton from "./GreenButton";
import { NavLink } from "react-router-dom";

function PaymentSuccess() {
  return (
    <>
      <div className="bg-[#4C5CAA] w-[550px] h-[450px] text-white rounded-[40px] mt-20">
        <div className="px-20 pt-36 pb-28">
          <p className="font-base text-xl mb-5">Pembayaran anda berhasil,</p>

          <p className="font-base text-xl mb-5">
            Terima kasih sudah berbelanja!!!
          </p>
        </div>
        <div className="flex justify-end items-end mr-7">
          <NavLink to={'/home'}>

          <GreenButton title="Back" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default PaymentSuccess;
