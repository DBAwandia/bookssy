import React from "react";
import HeroVideo from "../../assets/home/BooksyHeroVideo.mp4";
import Navbar from "../Navbar";
import HeroMiddle from "./HeroMiddle";
import HeroBottom from "./HeroBottom";

export default function Hero() {
  return (
    <section className=" w-full h-[550px]">
      <div className="absolute top-0 left-0 w-full h-[550px] bg-black/[.4]" />
      <video src={HeroVideo} autoPlay muted loop />

      <div className=" w-full h-[550px] absolute top-0 p-10 flex flex-col justify-between">
        <Navbar />
        <HeroMiddle />
        <HeroBottom />
      </div>
    </section>
  );
}
