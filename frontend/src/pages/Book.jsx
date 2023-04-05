import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/BookImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ChapterButton from "../components/ChapterButton";
import Review from "../components/Review";
import Comment from "../components/Comment";
import { NavLink } from "react-router-dom";
import BookPayment from "../components/BookPayment";

function Book() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center border-x border-[#D7D7D7] mx-52 h-full">
        <div className="mt-28 ">
          <div className=" w-9 ml-14">
            <NavLink to={"/home"} className="text-[#0E788C] font-semibold">
              Back
            </NavLink>
            <div className="border-b-2 rounded-xl border-[#0E788C]"></div>
          </div>
          <div className="my-8 ml-14">
            <div className="flex">
              <img src={image} alt="book" className="w-[172px] h-[210px]" />
              <div className="mx-8">
                <h1 className="font-semibold text-3xl">
                  Tetanggaku iri denganku
                </h1>
                <h3 className="font-semibold text-xl mb-2">
                  By <span className="text-[#0E788C]">Kang Asep (Author)</span>
                </h3>
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
                  <p className="text-sm text-[#0E788C] font-medium">
                    4972 Rating
                  </p>
                </div>
                <p className="text-sm text-[#0E788C] font-medium mb-2">
                  #1 Best Seller in comic
                </p>
                <p className="text-sm font-medium min-w-[499px]">
                  Lorem ipsum dolor sit amet consectetur. Fusce pulvinar arcu
                  risus nulla dui sem. Neque eu pellentesque vel et ut mauris.
                  Ornare dignissim quam aliquam eget tincidunt diam. Enim varius
                  auctor elit tempor. Eu sed ipsum aliquet neque semper
                  curabitur. Egestas tortor pharetra augue in. Purus dis
                  dignissim venenatis vel convallis facilisis. Ac vel vel
                  quisque mattis. Tincidunt ut vel turpis quam arcu morbi eget.{" "}
                </p>
                <ChapterButton />
              </div>
              <BookPayment />
            </div>
            <Review />
            <div className="mt-24">
              <Comment />
              <Comment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
