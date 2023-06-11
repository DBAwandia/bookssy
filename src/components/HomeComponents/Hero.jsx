// import React from "react";
import HeroVideo from "../../assets/home/BooksyHeroVideo.mp4";
import Navbar from "../Navbar";
import HeroMiddle from "./HeroMiddle";
import HeroBottom from "./HeroBottom";

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
        <Navbar />
        <HeroMiddle />
        <HeroBottom />
      </div>
    </section>
  );
}
