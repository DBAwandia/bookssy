import { useLocation } from "react-router-dom";
import SalonDimage from "./SalonDImages";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Footbar from "../../../components/Footbar";
import PopularSdetails from "./PopularSdetails";

export default function Salondetails() {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <div className="bg-[#1b1d21] h-[4rem] md:px-[2rem] pt-[1rem]">
        <Navbar />
      </div>
      {/* main tag for salon details  */}
      <main className="pt-9 lg:px-8 px-5 lg:flex gap-[5%]">
        <aside className="lg:w-[65%] w-full">
          {/* image slides */}
          <SalonDimage
            images={state.images}
            ratings={state.ratings}
            reviews={state.reviews}
          />
          <article className="mt-10">
            <h2 className="font-bold text-3xl font-serif text-zinc-700">
              {state.name}
            </h2>
            <p className="font-serif text-xs text-zinc-600">{state.address}</p>
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
<hr className=""/>
        <aside className="sticky h-screen lg:w-[30%] top-2 w-full">
          <div className="rounded shadow-md w-full p-2">
            <p className="text-center text-base">
              {" "}
              Want to make a present? Order a Gift Card!
            </p>
            <button className="text-white bg-[#00a3ad] w-full text-center mt-2 py-2 rounded-xl">Show Gift Cards</button>
          </div>
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
//    {state.id} <br /> {state.name}dff <br/> {state.address} <br /> {state.ratings} <br /> {state.reviews} {state.aboutUs}
//    <img src={state.images[0]} alt="" />
