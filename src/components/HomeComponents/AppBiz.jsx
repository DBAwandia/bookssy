import React, { useState } from "react";

import IconGreen from "../../assets/BooksyIconGreen.png";
import IconGrey from "../../assets/BooksyIconGrey.jpg";
import BooksyCustomerApp from "../../assets/BooksyCustomerApp.webp";
import BooksyBizApp from "../../assets/BooksyBizApp.webp";

import { FLAGS } from "../../../utitlities/iconsAndImages";
import { BsChevronDown } from "react-icons/bs";

export default function AppBiz() {
  const [number, setNumber] = useState("");

  return (
    <section className="w-full lg:p-10 p-3 grid grid-cols-1 lg:flex lg:flex-row gap-3">
      {/* App */}
      <div className="lg:w-1/2 w-full px-14 pt-10 rounded-2xl bg-[#e6f6f6] justify-between items-center flex flex-col">
        <div className="flex flex-row lg:gap-5 gap-2 justify-center items-center ">
          <img 
            src={IconGreen} 
            alt="" 
            className="lg:w-[2rem] lg:h-[2rem] w-[1.3rem] h-[1.3rem]"
          />

          <p className="text-booksyGray">Booksy App • iOS, Android</p>
        </div>

        <h1 className="lg:text-2xl text-[1rem] text-booksyGray font-semibold my-10">
          Find & Book An Apartment
        </h1>

        <p className="text-center lg:text-xl text-[0.95rem]">
          Cut the phone tag. Find your next appointment and{" "}
          <b>book instantly</b>
        </p>

        <div className="bg-booksyWhite hidden lg:block py-3 px-3 rounded-lg mt-10 mb-20 w-full lg:flex lg:flex-row gap-1">
          <div className="flex flex-row gap-2 items-center ">
            <img
              src={FLAGS.usaFlag}
              alt="USA"
              style={{ width: "25px", height: "20px " }}
            />
            <p className="text-[0.75rem] font-semibold">+1</p>
            <BsChevronDown size={10} />
          </div>

          <form onSubmit={() => {}} className="w-full">
            {/* Phone numebr*/}
            <div className="flex flex-row gap-2 w-full">
              <input
                onChange={(event) => setNumber(event.target.value)}
                value={number}
                required
                className="w-1/2 h-14 p-5 text-[0.85rem] rounded-lg bg-booksyWhite border-none focus:border-none"
                type="text"
                id="number"
                name="number"
                placeholder="Your Phone Number"
              />

              {/* button */}
              <button className="w-1/2 bg-booksyGreen text-booksyWhite font-semibold uppercase text-[0.9rem] py-3 px-4 rounded-lg">
                DOWNLOAD
              </button>
            </div>
          </form>
        </div>

        <div className="mt-5">
          <img
            src={BooksyCustomerApp}
            alt=""
            className="w-[15rem] h-[13rem] lg:w-[23rem] lg:h-[18rem] object-cover"
          />
        </div>
      </div>

      {/* Biz */}
      <div className="lg:w-1/2 w-full px-10 pt-10 rounded-2xl bg-[#f5f5f5] justify-between items-center flex flex-col">
        <div className="flex flex-row lg:gap-5 gap-2 justify-center items-center ">
          <img 
            src={IconGrey} 
            alt="" 
            className="lg:w-[2rem] lg:h-[2rem] w-[1.3rem] h-[1.3rem]"
          />

          <p className="text-booksyGray">Booksy App • iOS, Android</p>
        </div>

        <h1 className="lg:text-3xl text-[1rem] text-booksyGray font-semibold my-10">
          Booksy For Your Business
        </h1>

        <p className="text-center lg:text-xl text-[0.95rem]">
          Get started with Booksy to run your business, <b>better</b> .
          Calendar, Booking, Marketing, and Payments all in one.
        </p>

        {/* button */}
        <button className="lg:w-1/2 w-auto mt-3 lg:mt-0 bg-booksyGray text-booksyWhite font-semibold uppercase text-[0.9rem] py-3 px-4 rounded-lg">
          Grow My Business
        </button>

        <div className="mt-5">
          <img 
            src={BooksyBizApp} 
            alt="" 
            className="w-[15rem] h-[13rem] lg:w-[23rem] lg:h-[18rem] object-cover "
          />
        </div>
      </div>
    </section>
  );
}
