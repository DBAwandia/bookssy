import { AiFillStar } from "react-icons/ai"
import { hairSalonCustomerReviewData } from "../../../assets/Dummydata/Dummydata";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function BarberShopCustomerReview() {

    //rendering star rating icons dynamically
    const RatingIcon = () => {

        //from react-icons
        return <AiFillStar />;
      };

    const renderRatingIcons = (count) => {
        const ratingIcons = [];
    
        for (let i = 0; i < count; i++) {
          ratingIcons.push(<RatingIcon key={i} />);
        }
    
        return ratingIcons;
      };

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
        slidesToShow: 3,
        // autoplay: true,
        slidesToScroll: 1,

        
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
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
    <div
        className="md:px-[4rem] px-[2rem] py-[2rem] flex flex-col gap-[3rem] text-[0.95rem]"
    >
      <div
        className="flex flex-col gap-[2rem]"
      >
        <h1 
            className='lg:text-[1.5rem] text-[1.2rem] text-center text-[#484848] font-[580]'
        >
            Barber Shops - customer reviews
        </h1>
        <div
            className="relative"
        >
            {/* SLIDER ARROWS    */}
                    {/* NEXT ARROW */}
                    <div
                        onClick={next}
                        className="hidden lg:block absolute cursor-pointer self-center text-[1.2rem] right-[-1.8rem] p-[1rem] top-[7rem] rounded-full w-[auto] text-[#222324] bg-[white] shadow-2xl z-[9999999999999]"
                    >
                        <BsArrowRight/>
                    </div>

                    {/* PREV ARROW */}
                    <div
                        onClick={previous}
                        className="hidden lg:block absolute cursor-pointer text-[1.2rem] left-[-1.8rem] p-[1rem] top-[7rem] rounded-full w-[auto] text-[#222324] bg-[white] shadow-2xl z-[9999999999999]"
                    >
                        <BsArrowLeft/>
                    </div>


            {/* SLIDER METHOD */}
            <Slider
                ref={sliderRef }
                {...settings}
            >
                {hairSalonCustomerReviewData.map((item) =>
                    <div
                        key={item.id}
                        className="w-full rounded-lg border-[0.6px] border-[#eeeeee] shadow-sm py-[1rem]"
                    >
                       <div
                        className="flex flex-col px-[0.8rem] gap-[1rem]"
                       >
                            <div
                                    className="flex items-center gap-3 text-[1.5rem] text-[#ff9400]"
                                >
                                    {renderRatingIcons(5)}
                                </div>
                                <p>
                                    {item.description}
                                </p>

                                <div
                                    className="flex items-center gap-3"
                                >
                                    <p className="font-semibold text-black">
                                        {item.name}
                                    </p>
                                    <span className="text-[#767676]">
                                        {item.date}
                                    </span>
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                >
                                    <img
                                        className="w-[3rem] h-[3rem] rounded-full object-cover"
                                        src={item.salonistImage}
                                        alt="booksy image"
                                    />
                                    <div
                                        className="flex flex-col gap-1"
                                    >
                                        <p className="text-black font-semibold">
                                        {item.salonistName}
                                        </p>
                                        <span className="text-[#767676]">
                                        {item.location}
                                        </span>
                                    </div>
                                </div>
                        </div>
                    </div>
                )}
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default BarberShopCustomerReview
