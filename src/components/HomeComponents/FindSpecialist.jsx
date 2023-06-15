import React from "react";
import { findCity } from "../../../utitlities/dummyData";
import { TfiAngleDown, TfiAngleRight } from "react-icons/tfi";
import { useState } from "react";

export default function FindSpecialist() {
  // const [ open , setOpen ] = useState(false)
  const [ index , setIndex ] = useState("0")

  const openServices = (id) =>{
    setIndex(id)
  }

  return (
    <section className="w-full relative my-10 lg:p-10 p-3">
      <div>
        <h1 className="lg:text-4xl text-[1.3rem] font-semibold text-booksyGray text-center">
          Find Your Boooksy Specialist By City
        </h1>

        <div className=" w-full mt-10 grid grid-cols-1 gap-5">
          {findCity.map((city) => (
            <div 
              key={city.id} 
              onClick={()=>setIndex(city.id)}
            >
              <div
                onClick={()=>openServices(city.id)}
                className="flex gap-3 items-center "
              >
                {index !== city.id && <TfiAngleRight className="text-[1.4rem] text-[#00beb7]" color="#0ba3ad" />}
                {index === city.id && <TfiAngleDown className="text-[1.4rem] text-[#00beb7]" color="#0ba3ad" />}
                <p
                  className={index === city.id ? "text-booksyGray font-bold":"text-booksyGray font-normal"}
                >
                     {city.name}
                </p>
              </div>
              {index === city.id &&
                <div className="flex flex-col font-semibold mt-2 text-[#00beb7] gap-3 px-[2.3rem]">
                <span>BarberShop</span>
                <span>Haircut</span>
                <span>Massage</span>
                <span>Day Spa</span>
              </div>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
