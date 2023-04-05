import React, { useState } from "react";
import Navbar from "../components/Navbar";
import coin from "../assets/coin.png";
import GreenButton from "../components/GreenButton";
import PaymentSuccess from "../components/PaymentSuccess";

function Payment() {
  const [isSuccess, setSuccess] = useState(false);
  return (
    <>
      <Navbar />
      <div className="flex border-x border-[#D7D7D7] mx-52 h-screen justify-center relative">
        <div className="mt-28">
          <h1 className="text-2xl font-medium text-start ml-14 absolute left-0">
            Payment
          </h1>

          {isSuccess ? (
            <PaymentSuccess />
          ) : (
            <div className="bg-[#4C5CAA] w-[550px] h-[450px] text-white rounded-[40px] mt-20">
              <div className="px-20 pt-20 pb-14">
                <div className="mb-10">
                  <p className="font-base text-xl mb-5">
                    Total belanjaan anda adalah :
                  </p>
                  <div className="flex items-center gap-3 bg-white w-52 py-2 rounded-md justify-center">
                    <img src={coin} alt="coin" className="w-6 h-6" />
                    <p className="font-medium  text-lg text-black">
                      Rp 135.000
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-base text-xl mb-5">
                    Sisa saldo anda adalah :
                  </p>
                  <div className="flex items-center gap-3 bg-white w-52 py-2 rounded-md justify-center">
                    <img src={coin} alt="coin" className="w-6 h-6" />
                    <p className="font-medium text-lg text-black">Rp 150.000</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mr-7">
                <button onClick={() => setSuccess(true)}>
                  <GreenButton title="Next" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Payment;
