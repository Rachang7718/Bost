import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function BrowseMenu() {
  const [isBold, setBold] = useState(1);
  return (
    <>
      <div className="border-[#D9D9D9] bg-white w-[717px] border-2 rounded-md">
        <div className="flex mt-10 mb-6">
          <ul className="mx-20 cursor-pointer">
            <li
              onClick={() => setBold(1)}
              className="text-sm pb-5 w-10"
              style={isBold == 1 ? { fontWeight: 700 } : { fontWeight: 500 }}
            >
              Buku
            </li>
            <li
              onClick={() => setBold(2)}
              className="text-sm pb-5 w-10"
              style={isBold == 2 ? { fontWeight: 700 } : { fontWeight: 500 }}
            >
              Komik
            </li>
            <li
              onClick={() => setBold(3)}
              className="text-sm pb-5 w-10"
              style={isBold == 3 ? { fontWeight: 700 } : { fontWeight: 500 }}
            >
              Novel
            </li>
            <li
              onClick={() => setBold(4)}
              className="text-sm pb-5 w-10"
              style={isBold == 4 ? { fontWeight: 700 } : { fontWeight: 500 }}
            >
              Majalah
            </li>
          </ul>
          <div className="w-[556px] h-[367] border-[D9D9D9] border-l-2 px-10">
            {isBold == 1 && (
              <ul className="grid grid-cols-2 gap-x-24 gap-y-5 text-sm font-medium cursor-pointer">
                <NavLink to={"/browse/buku/pertanian"}>
                  <li className="w-44">Pertanian</li>
                </NavLink>
                <li className="w-44">Seni & Design</li>
                <li className="w-44">Bisnis dan ekonomi</li>
                <li className="w-44">Anak - Anak</li>
                <li className="w-44">Buku Masakan</li>
                <li className="w-44">Komputer & Teknologi</li>
                <li className="w-44">Pendidikan</li>
                <li className="w-44">Kamus</li>
                <li className="w-44">Keluarga</li>
                <li className="w-44">Teknik</li>
                <li className="w-44">Finansial</li>
                <li className="w-44">Sejarah</li>
                <li className="w-44">Gaya Hidup</li>
                <li className="w-44">Fiksi & Sastra</li>
                <li className="w-44">Psikologi</li>
                <li className="w-44">Sejarah</li>
                <li className="w-44">Sains</li>
                <li className="w-44">Hukum</li>
              </ul>
            )}
            {isBold == 2 && (
              <ul className="grid grid-cols-2 gap-x-24 gap-y-5 text-sm font-medium cursor-pointer">
                <NavLink to={"/browse/komik/action"}>
                  <li className="w-44">Action</li>
                </NavLink>
                <li className="w-44">Mature</li>
                <li className="w-44">Adventure</li>
                <li className="w-44">Mecha</li>
                <li className="w-44">Comedy</li>
                <li className="w-44">Mystery</li>
                <li className="w-44">Drama</li>
                <li className="w-44">Physicalogical</li>
                <li className="w-44">Fantasy</li>
                <li className="w-44">Romance</li>
                <li className="w-44">Fantasy - Romance</li>
                <li className="w-44">School Life</li>
                <li className="w-44">Historical</li>
                <li className="w-44">Sci-fi</li>
                <li className="w-44">Horror</li>
                <li className="w-44">Slice of Life</li>
                <li className="w-44">Magical Realism</li>
                <li className="w-44">Sport</li>
              </ul>
            )}
            {isBold == 3 && (
              <ul className="grid grid-cols-2 gap-x-24 gap-y-5 text-sm font-medium cursor-pointer">
                <NavLink to={"/browse/novel/action"}>
                  <li className="w-44">Action</li>
                </NavLink>
                <li className="w-44">Mature</li>
                <li className="w-44">Adventure</li>
                <li className="w-44">Mecha</li>
                <li className="w-44">Comedy</li>
                <li className="w-44">Mystery</li>
                <li className="w-44">Drama</li>
                <li className="w-44">Physicalogical</li>
                <li className="w-44">Fantasy</li>
                <li className="w-44">Romance</li>
                <li className="w-44">Fantasy - Romance</li>
                <li className="w-44">School Life</li>
                <li className="w-44">Historical</li>
                <li className="w-44">Sci-fi</li>
                <li className="w-44">Horror</li>
                <li className="w-44">Slice of Life</li>
                <li className="w-44">Magical Realism</li>
                <li className="w-44">Sport</li>
              </ul>
            )}
            {isBold == 4 && (
              <ul className="grid grid-cols-2 gap-x-24 gap-y-5 text-sm font-medium cursor-pointer">
                <NavLink to={"/browse/majalah/action"}>
                  <li className="w-44">Majalah Anak</li>
                </NavLink>
                <li className="w-44">Majalah Wanita</li>
                <li className="w-44">Majalah Pria</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BrowseMenu;
