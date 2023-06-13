import { useLocation } from "react-router-dom";
import SalonDimage from "./SalonDImages";
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Footbar from '../../../components/Footbar'
// import HeroBottom from '../../../components/HomeComponents/HeroBottom'
export default function Salondetails() {
  const location = useLocation();
  const state = location.state;

  return (
    <>
    <div className='bg-[#1b1d21] h-[4rem] md:px-[2rem] pt-[1rem]'>
        <Navbar/>
      </div>
      {/* main tag for salon details  */}
      <main className="pt-9 px-2 flex gap-[5%]">
        <aside className="w-[65%]">
          {/* image slides */}
          <SalonDimage images={state.images} ratings={state.ratings} reviews={state.reviews}/>
        <article className="mt-10">
            <h2 className="font-bold text-3xl font-serif text-zinc-700">{state.name}</h2>
            <p className="font-serif text-xs text-zinc-600">{state.address}</p>
            <span className="flex mt-11 justify-between gap-2">
                <h2 className="text-3xl font-bold ">Services</h2>
                <input type="search" name=""  className="font-bg font-serif bg-zinc-300 rounded-md outline-none flex md:w-[40%] w-70%" placeholder="Search for service"/>
            </span>
        </article>
        </aside>

        <aside className="sticky h-screen w-[30%] ">
            <div>
                {/* <div className="rounded shadow-md w-full">
                    <p className="text-nowrap"> Want to make a present? Order a Gift Card!</p>
                </div> */}
            </div>
        </aside>
      </main>
            {/* FOOTER*/}
      <div>
        <Footer/>
      </div>
    <div 
        className='w-full z-[9999999999999] lg:hidden fixed bottom-0 right-0'
      >
        <Footbar/>
    </div>


    </>
  );
}
//    {state.id} <br /> {state.name}dff <br/> {state.address} <br /> {state.ratings} <br /> {state.reviews} {state.aboutUs}
//    <img src={state.images[0]} alt="" />
