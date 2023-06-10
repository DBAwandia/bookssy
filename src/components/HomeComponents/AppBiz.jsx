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
    <section className="w-full p-10 flex flex-row gap-2">
      {/* App */}
      <div className="w-1/2 px-14 pt-10 rounded-2xl bg-[#e6f6f6] justify-between items-center flex flex-col">
        <div className="flex flex-row gap-5 justify-center items-center ">
          <img src={IconGreen} alt="" style={{ width: 40, height: 40 }} />

          <p className="text-booksyGray">Booksy App • iOS, Android</p>
        </div>

        <h1 className="text-3xl text-booksyGray font-semibold my-10">
          Find & Book An Apartment
        </h1>

        <p className="text-center text-xl">
          Cut the phone tag. Find your next appointment and{" "}
          <b>book instantly</b>
        </p>

        <div className="bg-booksyWhite py-3 px-3 rounded-lg mt-10 mb-20 w-full flex flex-row gap-1">
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
            style={{ width: 450, height: 350 }}
          />
        </div>
      </div>

      {/* Biz */}
      <div className="w-1/2 px-10 pt-10 rounded-2xl bg-[#f5f5f5] justify-between items-center flex flex-col">
        <div className="flex flex-row gap-5 justify-center items-center ">
          <img src={IconGrey} alt="" style={{ width: 40, height: 40 }} />

          <p className="text-booksyGray">Booksy App • iOS, Android</p>
        </div>

        <h1 className="text-3xl text-booksyGray font-semibold my-10">
          Booksy For Your Business
        </h1>

        <p className="text-center text-xl">
          Get started with Booksy to run your business, <b>better</b> .
          Calendar, Booking, Marketing, and Payments all in one.
        </p>

        {/* button */}
        <button className="w-1/2 bg-booksyGray text-booksyWhite font-semibold uppercase text-[0.9rem] py-3 px-4 rounded-lg">
          Grow My Business
        </button>

        <div className="mt-5">
          <img src={BooksyBizApp} alt="" style={{ width: 450, height: 350 }} />
        </div>
      </div>
    </section>
  );
}
