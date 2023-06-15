import { useState , useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineHeart , AiFillHeart } from "react-icons/ai"
import { BsArrowRight , BsArrowLeft } from "react-icons/bs"
import { salonJson } from "../../../assets/Dummydata/Dummydata"
import { useNavigate } from 'react-router-dom';

function HairSalonSliderCategories() {

    const [ liked , setLike ] = useState(false)
    const sliderRef = useRef(null)

    // UNLIKE HEART ICON
    const setLikedFalse =() =>{
        setLike(false)
    }

    //LIKE HEART ICON
    const setLikedTrue =() =>{
        setLike(true)
    }

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
        slidesToShow: 4,
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
        // navigte to page details
    const navigate = useNavigate()
    function handleNavigatePage(id) {
        window.scrollTo(0, 0)
        navigate(`/salondetails/${id}`)
    }

  return (
    <div 
        className="w-full relative text-[0.95rem]"
    >

        <div className='w-full relative border2'>
                    {/* SLIDER ARROWS    */}
                    {/* NEXT ARROW */}
                    <div
                        onClick={next}
                        className="hidden lg:block absolute cursor-pointer self-center text-[1.2rem] right-[0rem] p-[1rem] top-[4rem] rounded-full w-[auto] text-[#222324] bg-[white] shadow-2xl z-[9999999999999]"
                    >
                        <BsArrowRight/>
                    </div>

                    {/* PREV ARROW */}
                    <div
                        onClick={previous}
                        className="hidden lg:block absolute cursor-pointer text-[1.2rem] left-[-1.5rem] p-[1rem] top-[4rem] rounded-full w-[auto] text-[#222324] bg-[white] shadow-2xl z-[9999999999999]"
                    >
                        <BsArrowLeft/>
                    </div>

          {/* SLIDER METHOD */}
            <Slider
                ref={sliderRef }
                {...settings}
            >
              {/* MAP SALONSHOP JSON DATA IN SLIDER COMPONENTS */}
                {salonJson?.map((item) =>
                    <div 
                        className="w-full relative flex flex-col justify-center"
                        key={item.id}
                    >
                    <div className='lg:w-[90%] w-full relative'>
                            <img 
                            onClick={() => {
                        handleNavigatePage(item.id)
                    }}
                                className="w-[100%] h-[14rem] md:rounded-lg rounded-md object-cover cursor-pointer"   
                                src={item.images[0]}
                                alt="image"
                            />
                        {/* RATINGS AND REVIEWS*/}
                        <div 
                            className='absolute w-[auto] flex flex-col items-center gap-[0.3rem] top-[0rem] right-[0] bg-[#181717] opacity-[0.9] text-white px-[0.6rem] py-[0.4rem] rounded-bl-lg  rounded-tr-lg'
                            >
                            <p 
                            className='text-[0.8rem] font-bold'
                            >
                                {item.ratings}
                            </p>
                            <span
                            className='text-[0.70rem]'
                            >
                                {item.reviews} reviews
                            </span>
                        </div>
                    </div>
                        <div
                            className="relative w-[90%] flex items-center gap-[2rem]"
                        >
                            <div
                                className="w-full flex flex-col gap-[1rem]"
                            >
                                <p
                                onClick={() => {
                        handleNavigatePage(item.id, item.images, item.address, item.ratings, item.reviews, item.aboutUs, item.name)
                    }}
                                    className="text-[#222324] md:text-[1.2rem] text-[1rem] mt-[1.5rem] font-[650] cursor-pointer"
                                    >
                                    {item.name}
                                </p>
                                <span
                                    className="w-[85%] text-[0.95rem] text-[#767676]"
                                    >
                                    {item.address}
                                </span>
                            </div>

                            {/* FILL HEART ICON WHEN LIKED  */}
                                {!liked &&
                                    <div
                                        onClick={setLikedTrue}
                                        className="absolute lg:right-[0.3rem] right-0 cursor-pointer top-[3.2rem] lg:text-[1.6rem] text-[1.3rem]" 
                                        >
                                        <AiOutlineHeart/>
                                    </div>
                                }
                            
                            {/* UNFILL HEART ICON WHEN LIKED  */}
                                {liked &&
                                    <div
                                        onClick={setLikedFalse}
                                        className="absolute lg:right-[0.3rem] right-0 cursor-pointer top-[3.2rem] text-[#ff003c] lg:text-[1.6rem] text-[1.3rem]" 
                                        >
                                        <AiFillHeart/>
                                    </div>
                                }

                        </div>

                    </div>
                )}
            
            </Slider> 
        </div>
    </div>
  )
}

export default HairSalonSliderCategories
