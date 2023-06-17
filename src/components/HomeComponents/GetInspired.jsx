import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getInspired } from "../../../utitlities/dummyData";
import GetInspiredCard from "../GetInspiredCard";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function GetInspired() {

  const sliderRef = useRef(null)
  //NEXT SLIDER BUTTON ARROW
  const next = () =>{
    sliderRef.current.slickNext();
}

//PREV SLIDER BUTTON ARROW
const previous = () =>{
    sliderRef.current.slickPrev();
}

  

const settings = {
  speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 0,
                autoplay: true,

            },
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                autoplay: true,

            },
            },
        ],
};

  return (
    <section className="w-full p-10">
      <div className="relative w-full bg-[#f5f5f5] rounded-xl lg:py-10 p-3">
        <h1 className="lg:text-4xl text-[1.5rem] font-semibold text-booksyGray text-center">
          Get inspired with Booksy
        </h1>
        <p className="text-booksyGray text-center my-2">
          Read thousands of professional articles
        </p>

         {/* SLIDER ARROWS    */}
            {/* NEXT ARROW */}
            <div
                onClick={next}
                className="hidden lg:block absolute cursor-pointer self-center text-[1.2rem] right-[-0.6rem] p-[1rem] top-[13rem] rounded-full w-[auto] text-[#222324] bg-[white] shadow-2xl z-[99999999]"
              >
                <BsArrowRight/>
              </div>

              {/* PREV ARROW */}
              <div
                onClick={previous}
                className="hidden lg:block absolute cursor-pointer text-[1.2rem] left-[-0.2rem] p-[1rem] top-[13rem] rounded-full w-[auto] text-[#222324] bg-[white] shadow-2xl z-[99999999]"
              >
                <BsArrowLeft/>
              </div>

        {/* Slider */}
        <div className="mt-10">
          <Slider {...settings}>
            {getInspired.map((item, index) => (
              <GetInspiredCard
                key={index}
                name={item.name}
                imageURL={item.imageURL}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
