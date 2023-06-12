import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getInspired } from "../../../utitlities/dummyData";
import GetInspiredCard from "../GetInspiredCard";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#0ba3ad",
        width: 50,
        height: 50,
        borderRadius: 1000,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleArrow />,
  prevArrow: <SampleArrow />,

  responsive: [
    {
    breakpoint: 1024,
    settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows: false

    },
    },
    {
    breakpoint: 600,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows: false
    },
    },
],
};

export default function GetInspired() {
  return (
    <section className="w-full p-10">
      <div className="w-full bg-[#f5f5f5] rounded-xl lg:py-10 p-3">
        <h1 className="lg:text-4xl text-[1.5rem] font-semibold text-booksyGray text-center">
          Get inspired with Booksy
        </h1>
        <p className="text-booksyGray text-center my-2">
          Read thousands of professional articles
        </p>

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
