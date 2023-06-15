import { IoMdThumbsUp } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  useRef } from 'react'
import { AiOutlineHeart , AiFillHeart } from "react-icons/ai"
import { BsArrowRight , BsArrowLeft } from "react-icons/bs"

export default function SalonDimage(props) {
      const sliderRef = useRef(null)
      //NEXT SLIDER BUTTON ARROW
    const next = () =>{
        sliderRef.current.slickNext();
    }

    //PREV SLIDER BUTTON ARROW
    const previous = () =>{
        sliderRef.current.slickPrev();
    }

    //slider settings props
    let settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                autoplay: true,

            },
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                autoplay: true,

            },
            },
        ],
      };
  return (
    <div className="relative">

    <Slider ref={sliderRef} {...settings} >
      {props.images && props.images.map((item,index) => 
      <main className="relative w-50%" key={index}>
      <img src={item} alt="img" className="w-full object-contain"/>
        <div className="absolute md:left-[1rem] left-[1rem] md:top-[0.5rem] top-[0.5rem] rounded-md md:text-[0.7rem] text-[0.5rem] font-[590] flex items-center gap-[0.3rem] w-auto px-[0.8rem] py-[0.5rem] bg-white text-[#161718]">
          <IoMdThumbsUp className="text-[1rem] text-[black]" />
          <p>BOOKSY RECOMMENDED</p>
        </div>
        <div className=" absolute bg-[#181717e4] opacity-[0.9] text-white px-[0.8rem] py-[0.7rem] rounded top-0 right-0">
          <p className="font-bold text-2xl text-center">{props.ratings}</p>
          <span className="text-[0.7rem]">{props.reviews} reviews</span>
        </div>
      </main>
      )}
      </Slider>
      {/* NEXT ARROW */}
      <div
      className="absolute right-[10px] top-[40%] cursor-pointer bg-white rounded-full p-3 text-xl shadow-2xl md:text-3xl"
      onClick={next}>
         <BsArrowRight/>
      </div>
      {/* PREV ARROW */}
      <div
      className="absolute left-[10px] top-[40%] cursor-pointer bg-white p-3 text-xl rounded-full shawdow-2xl md:text-3xl"
      onClick={previous}>
        <BsArrowLeft/>
      </div>
    </div>
  );
}