import React from "react";
import image from "../assets/BookImage.png";

function SearchList() {
  return (
    <>
      <div className="w-[411px] rounded-lg bg-white border-2 border-[#D9D9D9] px-5 pb-3 pt-9">
        <div className="mb-4">
          <div className="flex mb-3 gap-5">
            <img src={image} alt="" className="w-[77px] h-[97px]" />
            <div className="text-sm w-[250px]">
              <h4 className="font-bold  ">Clover ( Tetsuhiro Hirakawa )</h4>
              <p className="font-medium">
                Ongoing <span className="text-[#959595]">●</span> Chapter 91
              </p>
              <p className="font-medium w-[195px]">
                Action, Comedy, School Life, Slice of Life
              </p>
            </div>
          </div>
          <div className="border-b-[3px] w-[365px] border-[#D9D9D9]"></div>
        </div>
        <div className="mb-4">
          <div className="flex mb-3 gap-5">
            <img src={image} alt="" className="w-[77px] h-[97px]" />
            <div className="text-sm w-[250px]">
              <h4 className="font-bold  ">Clover ( Tetsuhiro Hirakawa )</h4>
              <p className="font-medium">
                Ongoing <span className="text-[#959595]">●</span> Chapter 91
              </p>
              <p className="font-medium w-[195px]">
                Action, Comedy, School Life, Slice of Life
              </p>
            </div>
          </div>
          <div className="border-b-[3px] w-[365px] border-[#D9D9D9]"></div>
        </div>
        <div className="mb-4">
          <div className="flex mb-3 gap-5">
            <img src={image} alt="" className="w-[77px] h-[97px]" />
            <div className="text-sm w-[250px]">
              <h4 className="font-bold  ">Clover ( Tetsuhiro Hirakawa )</h4>
              <p className="font-medium">
                Ongoing <span className="text-[#959595]">●</span> Chapter 91
              </p>
              <p className="font-medium w-[195px]">
                Action, Comedy, School Life, Slice of Life
              </p>
            </div>
          </div>
          <div className="border-b-[3px] w-[365px] border-[#D9D9D9]"></div>
        </div>
      </div>
    </>
  );
}

export default SearchList;
