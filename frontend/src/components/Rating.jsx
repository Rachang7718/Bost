import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating() {
  return (
    <>
      <div className="flex items-center mb-5 justify-center">
        <div className="mr-6">
          <FontAwesomeIcon icon={faStar} color="#FFD600" />
          <FontAwesomeIcon icon={faStar} color="#FFD600" />
          <FontAwesomeIcon icon={faStar} color="#FFD600" />
          <FontAwesomeIcon icon={faStar} color="#FFD600" />
          <FontAwesomeIcon icon={faStar} color="#FFD600" />
        </div>
        <p className="text-sm">4.9</p>
      </div>
    </>
  );
}

export default Rating;
