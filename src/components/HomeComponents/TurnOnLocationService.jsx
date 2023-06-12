import React from "react";
import { ICONSIMAGES } from "../../../utitlities/iconsAndImages";

export default function TurnOnLocationService() {
  return (
    <section className="w-full lg:p-10 p-3">
      <div className="bg-booksyWhite rounded-lg shadow-2xl p-10  w-full flex flex-row gap-5 items-center">
        {/* Details */}
        <div className=" w-full lg:w-2/3">
          <h2 className="lg:text-2xl text-center text-[1rem] font-bold text-booksyGray">
            Turn on location services
          </h2>
          <p className="text-[0.85rem] text-booksyGray my-5">
            Get recommendations of great businesses! Turn on location services
            so we can show you what's nearby.
          </p>

          <div className="w-full grid grid-cols-1 lg:flex lg:flex-row gap-5">
            <button className="w-full bg-booksyGreen text-booksyWhite font-semibold uppercase text-[0.9rem] py-3 px-4 rounded-lg">
              SEARCH NEAR ME
            </button>

            <button className="w-full border-2 bg-booksyWhite text-[#00a3ad] border-booksyGreen font-semibold uppercase text-[0.9rem] py-3 px-4 rounded-lg">
              NOT NOW
            </button>
          </div>
        </div>

        {/* Image */}
        <img
          src={ICONSIMAGES.PhoneLocation}
          className="hidden lg:block"
          style={{ width: 300, height: 300 }}
        />
      </div>
    </section>
  );
}
