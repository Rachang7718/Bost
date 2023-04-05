import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

function BookContent() {
  return (
    <>
      <Navbar />
      <div className="flex border-x border-[#D7D7D7] mx-52 h-full">
        <div className="mt-28">
          <div className="w-9 ml-14">
            <NavLink to={"/book"} className="text-[#0E788C] font-semibold">
              Back
            </NavLink>
            <div className="border-b-2 rounded-xl border-[#0E788C]"></div>
          </div>
          <div className="my-8 ml-14">
            <h1 className="font-semibold text-3xl">Tetanggaku iri denganku</h1>
            <h2 className="font-semibold text-xl">
              By <span className="text-[#0E788C]">Kang Asep (Author)</span>
            </h2>
            <div className="flex font-semibold items-center gap-10 mt-6">
              <h4 className="text-xl">Chapter 1</h4>
              <NavLink to={"#"}>
                <button className="py-1 px-4 bg-[#D9D9D9] text-xl rounded-lg">
                  Next
                </button>
              </NavLink>
            </div>

            <div className="border-b border-black w-[970px] mt-2"></div>

            <p className="font-semibold text-xl my-10">
              Tinggal di perumahan atau kompleks saat ini menjadi pilihan tempat
              tinggal. Karena dengan cara mencicil dan DP tertentu dengan mudah
              kita dapatkan. Terdapat kelebihan dan kelemahan yang akan kita
              dapat. Variasi sifat antar tetangga akan kita dapatkan. Kali ini
              akan aku ceritakan sekelumit kehidupan kompleks F. Berada tepat
              dibawah kaki gunung.
              <br />
              <br />
              Kompleks ini berdiri diawal tahun 2005 dan aku menempatinya tahun
              2007. Alasan aku memilih kompleks ini karena dekat dengan tempat
              kerjaku.
              <br />
              <br />
              Saat awal aku datang, baru sekian blok yang telah terisi. Tepat
              didepan rumahku ada orang sebut saja ibu B. Dengan ramah
              memperkenalkan dirinya, sekilas aku lihat ibu ini sangat ramah.
              Seiring berjalannya waktu, ibu B suka mengajak ngobrol dan kadang
              suka ngomongin tetangga lainnya. Hal ini membuatku tidak nyaman,
              karena aku berpikir jangan-jangan ibu B ini akan ngomongin aku
              juga ke orang lain.
              <br />
              <br />
              Saat itu aku melihat tetangga sebelah rumahku menjauhiku dan
              berbicara sinis ga jelas. Aku berusaha sabar dan menahan diri. Dan
              entah apa yang di bicarakan oleh ibu B sehingga tetangga
              disampingku berbicara sinis, padahal aku tidak pernah berselisih
              paham dengannya. Sampai aku berfikir mungkinkah aku korban fitnah.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookContent;
