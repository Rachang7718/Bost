import React from "react";
import profile from "./../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Comment() {
  return (
    <>
      <div className="flex mb-8 gap-4">
        <img
          src={profile}
          alt="profile"
          className="w-[64px] h-[64px] rounded-full"
        />
        <div>
          <h1 className="text-xl">Takemichi</h1>
          <div className="flex mb-1 items-center">
            <div className="flex items-center justify-center">
              <div className="mr-6">
                <FontAwesomeIcon icon={faStar} color="#FFD600" />
                <FontAwesomeIcon icon={faStar} color="#FFD600" />
                <FontAwesomeIcon icon={faStar} color="#FFD600" />
                <FontAwesomeIcon icon={faStar} color="#FFD600" />
                <FontAwesomeIcon icon={faStar} color="#FFD600" />
              </div>
            </div>
            <p className="text-sm text-[#0E788C] font-medium">24/01/2023</p>
          </div>
          <p className="text-sm max-w-[854px]">
            Lorem ipsum dolor sit amet consectetur. Fusce pulvinar arcu risus
            nulla dui sem. Neque eu pellentesque vel et ut mauris. Ornare
            dignissim quam aliquam eget tincidunt diam. Enim varius auctor elit
            tempor. Eu sed ipsum aliquet neque semper curabitur. Egestas tortor
            pharetra augue in. Purus dis dignissim venenatis vel convallis
            facilisis. Ac vel vel quisque mattis. Tincidunt ut vel turpis quam
            arcu morbi eget.
          </p>
        </div>
      </div>
    </>
  );
}

export default Comment;
