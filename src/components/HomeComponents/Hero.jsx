// import React from "react";
import HeroVideo from "../../assets/home/BooksyHeroVideo.mp4";
import HeroMiddle from "./HeroMiddle";
import HeroBottom from "./HeroBottom";
import Navbar2 from "../Navbar2";

export default function Hero() {
  return (
    <section className="relative w-full py-[1rem] h-auto lg:h-[550px] bg-black">
      <div className="lg:absolute top-0 left-0 w-full lg:h-[550px] lg:bg-transparent" />
      <video 
        src={HeroVideo} 
        autoPlay 
        muted 
        loop 
        className="hidden lg:block"
      />

      <div className="w-full lg:h-[550px] lg:absolute lg:top-0 lg:p-10 flex flex-col gap-[2rem] lg:justify-between">
        
        {/* navbar without the search */}
        <Navbar2 />
        <HeroMiddle />
        <HeroBottom />
      </div>
    </section>
  );
}
