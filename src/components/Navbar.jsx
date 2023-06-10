// import React from "react";
import Logo from "../assets/BooksyLogo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { FLAGS } from "../../utitlities/iconsAndImages";
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <section className="w-full bg-transparent flex justify-between items-center">
      {/* LOGO*/}
      <div className="w-[30%]">
        <Link to="/">
          <img
            src={Logo}
            alt="Booksy Logo"
            style={{ width: "100px", height: "22px " }}
          />
        </Link>
      </div>

      {/* OTHERS */}
      <div className="w-[70%] flex flex-row justify-end items-center gap-7 text-white">
        {/* login */}
        <div className="flex gap-2 items-center">
          <HiOutlineUserCircle size={35} />
          <p className="text-[0.75rem] font-semibold">Login / Sign Up</p>
        </div>

        {/* language */}
        <div className="flex flex-row gap-2 items-center">
          <img
            src={FLAGS.usaFlag}
            alt="USA"
            style={{ width: "25px", height: "20px " }}
          />
          <p className="text-[0.75rem] font-semibold">US</p>
          <BsChevronDown size={10} />
        </div>

        {/* list your business button */}
        <button className=" uppercase bg-white text-black text-[0.65rem] font-medium px-4 py-2 rounded-lg">
          List your business
        </button>
      </div>
    </section>
  );
}
