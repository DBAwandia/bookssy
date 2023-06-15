// import React from "react";
import Logo from "../assets/BooksyLogo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { FLAGS } from "../../utitlities/iconsAndImages";
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"


export default function Navbar2() {

  return (
    <section className="w-full bg-transparent grid grid-col-1 gap-[1rem] lg:flex lg:justify-between items-center">

      {/* list your business for mobile */}
      <div
        className="lg:hidden border-b-[0.5px] py-[0.7rem] w-full text-[#fff] font-bold justify-center flex items-center gap-[0.5rem]"
      >
        <h1>List Your Business</h1>
        <BsArrowRight
          className="text-[1.3rem]"
        />
      </div>

      {/* LOGO*/}
      <div className="w-full grid justify-center items-center lg:justify-start lg:w-[20%]">
        <Link to="/">
          <img
            src={Logo}
            alt="Booksy Logo"
            className="justify-center w-[100px] h-[22px]"
          />
        </Link>
      </div>

      {/* OTHERS */}
      <div className="hidden  lg:w-[70%] lg:flex lg:flex-row justify-end items-center gap-7 text-white">
        {/* login */}
        <div className="flex gap-1 items-center">
          <HiOutlineUserCircle size={35} />
          <p className="text-[0.75rem] font-semibold">Login / Sign Up</p>
        </div>

        {/* language */}
        <div className="flex flex-row gap-1 items-center">
          <img
            src={FLAGS.usaFlag}
            alt="USA"
            style={{ width: "25px", height: "20px " }}
          />
          <p className="text-[0.75rem] font-semibold">KE</p>
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
