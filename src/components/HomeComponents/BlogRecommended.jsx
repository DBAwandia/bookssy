import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeBlogCards from "../HomeBlogCards";
import { blogRecommend } from "../../../utitlities/dummyData";

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
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleArrow />,
  prevArrow: <SampleArrow />,

  responsive: [
    {
    breakpoint: 1024,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows: false

    },
    },
    {
    breakpoint: 600,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows: false
    },
    },
],
};

export default function BlogRecommended() {
  return (
    <section className="w-full lg:p-10 p-3">
      <h2 className="lg:text-2xl text-[1rem] font-bold text-booksyGray">
        Recommended For You
      </h2>
      <div className="my-5">
        <Slider {...settings}>
          {blogRecommend.map((card, index) => (
            <HomeBlogCards
              key={index}
              title={card.title}
              image={card.imageURL}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}
