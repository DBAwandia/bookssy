import React from "react";
import { findCity } from "../../../utitlities/dummyData";
import { TfiAngleRight } from "react-icons/tfi";

export default function FindSpecialist() {
  return (
    <section className="w-full relative my-10 p-10">
      <div>
        <h1 className="text-4xl font-semibold text-booksyGray text-center">
          Find Your Boooksy Specialist By City
        </h1>

        <div className=" w-full mt-10 grid lg:grid-cols-4 md:grid-cols-3 gap-5">
          {findCity.map((city, index) => (
            <div key={index} className="flex flex-row gap-2 items-center ">
              <TfiAngleRight size={15} color="#0ba3ad" />
              <p className="text-booksyGray font-normal"> {city.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
