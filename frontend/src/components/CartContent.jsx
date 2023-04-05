import React, { useState } from "react";
import Book from "../assets/BookImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

function CartContent() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="mx-14">
        <h1 className="text-[17px] font-semibold mb-2">Kang Asep</h1>
        <div className="flex items-center">
          <img src={Book} className="w-[90px] h-[112px]" alt="book" />
          <div className="ml-8">
            <h1 className="text-[17px] font-semibold mb-1">
              Tetanggaku iri denganku
            </h1>
            <div className="flex items-center mb-5">
              <div className="mr-6">
                <FontAwesomeIcon icon={faStar} color="#FFD600" />
                <FontAwesomeIcon icon={faStar} color="#FFD600" />
                <FontAwesomeIcon icon={faStar} color="#FFD600" />
                <FontAwesomeIcon icon={faStar} color="#FFD600" />
                <FontAwesomeIcon icon={faStar} color="#FFD600" />
              </div>
              <p className="text-sm">4.9</p>
            </div>
            <div className="flex items-center gap-72">
              <p className="text-lg font-semibold">RP 45.000</p>
              <div className="flex items-center gap-10">
                <FontAwesomeIcon icon={faTrashAlt} />
                <div className="flex items-center gap-6">
                  <button>
                    <FontAwesomeIcon
                      onClick={() =>
                        setCount(count - 1) || (count === 0 && setCount(0))
                      }
                      icon={faMinusCircle}
                      color="#D9D9D9"
                      className="w-5 h-5"
                    />
                  </button>
                  <p>{count}</p>
                  <button>
                    <FontAwesomeIcon
                      onClick={() => setCount(count + 1)}
                      icon={faPlusCircle}
                      color="#D9D9D9"
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="border-b-4 border-[#D9D9D9] mt-3 mb-5 mx-6 rounded-xl"></div>
    </>
  );
}

export default CartContent;
