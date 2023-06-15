import SalonDimage from "./SalonDImages";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Footbar from "../../../components/Footbar";
import PopularSdetails from "./PopularSdetails";
import { salonJson } from "../../../assets/Dummydata/Dummydata";
import SalonDsidebar from "./SalonDsidebar";
import HeroBottom from '../../../components/HomeComponents/HeroBottom'


export default function Salondetails() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const salonData = salonJson.find((_data) => String(_data.id) === id);
    if (salonData) {
      setData(salonData);
    }
  }, [id]);

  return (
    <>
        <div
        className="relative flex flex-col"
      >
        {/* NAVBAR*/}
        <div className='bg-[#1b1d21] h-[4rem] md:px-[2rem] pt-[1rem]'>
          <Navbar/>
        </div>

        {/* ALL SHOPS ( HAIRSALONSHOP , BARBESHOP , NAIL SHOP ... etc) */}
        <div className='bg-[#1b1d21] lg:h-[5rem] h-[3.5rem] md:px-[2rem] pt-[1rem]' >
          <HeroBottom/>
        </div>
  </div>
      {/* main tag for salon details  */}
      <main className="pt-9 lg:px-8 px-5 lg:flex gap-[5%]">
        <aside className="lg:w-[65%] w-full">
          {/* image slides */}
          <SalonDimage
            images={data.images}
            ratings={data.ratings}
            reviews={data.reviews}
          />
          <article className="mt-10">
            <h2 className="font-bold text-3xl font-serif text-zinc-700">
              {data.name}
            </h2>
            <p className="font-serif text-xs text-zinc-600">{data.address}</p>
            <span className="flex mt-11 justify-between gap-2">
              <h2 className="text-3xl font-bold ">Services</h2>
              <input
                type="search"
                name=""
                className="font-bg font-serif bg-zinc-300 rounded-md outline-none flex md:w-[40%] w-70%"
                placeholder="Search for service"
              />
            </span>
          </article>
          <br />
          <PopularSdetails />
        </aside>
        <hr className="" />
        <aside className=" lg:w-[30%] w-full bg-[#fafafa]">
          <div className="rounded shadow-md w-full p-2 select-none">
            <p className="text-center text-base">
              {" "}
              Want to make a present? Order a Gift Card!
            </p>
            <button className="text-white bg-[#00a3ad] w-full text-center mt-2 py-2 rounded-xl">
              Show Gift Cards
            </button>
          </div>
          <SalonDsidebar aboutUs={data.aboutUs}/>
        </aside>
      </main>
      {/* FOOTER*/}
      <div>
        <Footer />
      </div>
      <div className="w-full z-[9999999999999] lg:hidden fixed bottom-0 right-0">
        <Footbar />
      </div>
    </>
  );
}
