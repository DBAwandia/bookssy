import React from "react";
import Typewriter from "typewriter-effect";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { BsSendFill } from "react-icons/bs";

export default function HeroMiddle() {
  return (
    <div>
      <h1 className="text-booksyWhite font-bold text-5xl text-center">
        <Typewriter
          options={{
            strings: [
              "Be Confident",
              "Be Colourful",
              "Be Free",
              "Be Brave",
              "Be Bold",
              "Be Yourself",
            ],
            autoStart: true,
            loop: true,
            cursor: "",
            delay: 100,
          }}
        />
      </h1>

      <p className="text-booksyWhite font-normal text-xl text-center py-4 tracking-wide">
        Discover and book beauty & wellness professionals near you
      </p>

      <div className="px-64 w-full flex flex-row justify-center gap-[1px] mt-3">
        {/* book your service */}
        <div className="bg-booksyWhite h-12 w-1/2 rounded-l-lg flex flex-row gap-4 items-center px-5 text-[#c2c2c2] cursor-pointer">
          <CiSearch size={20} />
          <p className="text-[0.9rem] font-medium">Book your services...</p>
        </div>

        {/* search location */}
        <div className="bg-booksyWhite h-12 w-1/2 rounded-r-lg flex flex-row gap-4 justify-between items-center px-5 text-[#c2c2c2] cursor-pointer">
          <div className="flex flex-row gap-4">
            <CiLocationOn size={20} />
            <p className="text-[0.9rem] font-medium">Where?</p>
          </div>

          <BsSendFill size={15} />
        </div>
      </div>
    </div>
  );
}
