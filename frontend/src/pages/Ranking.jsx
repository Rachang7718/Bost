import React from "react";
import BookList from "../components/BookList";
import Navbar from "../components/Navbar";

function Ranking() {
  return (
    <>
      <Navbar />
      <div className="flex border-x border-[#D7D7D7] mx-52 h-full justify-center relative">
        <div className="mt-28">
          <h1 className="text-2xl font-medium text-start ml-14 mb-24">
            Ranking List
          </h1>
          <BookList title="Komik" />
          <BookList title="Sastra" />
          <BookList title="Pendidikan" />
        </div>
      </div>
    </>
  );
}

export default Ranking;
