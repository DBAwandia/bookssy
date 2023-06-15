import React , { useContext } from "react";
import Logo from "../assets/BooksyLogo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FLAGS } from "../../utitlities/iconsAndImages";
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import { SearchProductContext } from "../Context/SearchProductContext";
import { SearchLocationContext } from "../Context/SearchLocationContext";
import { Popover } from '@headlessui/react'
import Login from "../Pages/Login/Login";


export default function Navbar() {
  //opening BooksySearchPage component
  const { dispatch } = useContext(SearchProductContext)

  //opening BooksyLocationSearchPage component
  const { dispatchs } = useContext(SearchLocationContext)

  //openBooksySearchComponent
  const openBooksySearchComponent = () =>{
    dispatch({type: "OPEN"})
    
  }

   //OpenBooksyLocationSearchComponent
   const OpenBooksyLocationSearchComponent = () =>{
    dispatchs({type: "OPEN"})
    
  }

  return (
    <section className="w-full bg-transparent grid grid-col-1 lg:flex lg:justify-between lg:px-[0.8rem] gap-3 lg:gap-0 items-center">

      {/* list your business for mobile */}
      <div
        className="lg:hidden border-b-[0.5px] py-[0.8rem] w-full text-[#fff] font-bold justify-center flex items-center gap-[0.5rem]"
      >
        <h1>List Your Business</h1>
        <BsArrowRight
          className="text-[1.3rem]"
        />
      </div>

      {/* LOGO*/}
      <div className="grid justify-center items-center lg:justify-start ">
        <Link to="/">
          <img
            src={Logo}
            alt="Booksy Logo"
            className="justify-center w-[100px] h-[22px]"
          />
        </Link>
      </div>

      {/* search navbar */}
      <div
        className="lg:w-[auto] cursor-default md:px-[2rem] px-[1rem] lg:px-[0px]  text-[#c2c2c2] text-[0.75rem] lg:border-[0.6px] border-[#cfcfcf] rounded-xl  py-[0.4rem] md:py-[0.6rem] lg:py-[0.4rem]"
      >
        <div
          className="w-full grid grid-cols-1 lg:justify-between lg:flex lg:items-center gap-[1rem]"
        >
            <div
              onClick={openBooksySearchComponent}
              className=" flex items-center lg:px-[2rem] px-[0.4rem] md:px-[0.8rem] py-[0.4rem] md:py-[0.6rem] rounded-md md:rounded-lg lg:rounded-none lg:py-0 border-[0.6px] gap-1 lg:border-0 lg:border-r-[0.6px] border-[#cfcfcf]"
            >
              <AiOutlineSearch
                className="text-[1.3rem]"
              />
              <p>What are you looking for?</p>
            </div>
          <div className="w-full lg:w-auto gap-3 flex items-center">
            <div
              onClick={OpenBooksyLocationSearchComponent}
              className="w-[50%] border-[0.6px] lg:border-0 lg:w-auto gap-[1.4rem] lg:rounded-none flex items-center lg:px-[2rem] px-[0.4rem] md:px-[0.8rem] py-[0.4rem] md:py-[0.6rem] rounded-md md:rounded-lg lg:py-0 justify-between lg:border-r-[0.6px] border-[#cfcfcf]"
            >
              {/* icon */}
              <p>Where?</p>
            </div>
            
            <div
              className="w-[50%] border-[0.6px] lg:border-0 gap-[1.4rem] lg:rounded-none flex items-center lg:px-[2rem] px-[0.4rem] md:px-[0.8rem] py-[0.4rem] md:py-[0.6rem] rounded-md md:rounded-lg lg:py-0 justify-between"
            >
              {/* icon */}
              <p>When?</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* OTHERS */}
      <div className="hidden lg:flex items-center gap-[1rem] text-white">
        {/* login */}
        <Popover className="relative">
          <Popover.Button>
        <div className="flex gap-1 items-center">
          <HiOutlineUserCircle size={35} />
          <p className="text-[0.75rem] font-semibold">Login / Sign Up</p>
        </div>
        </Popover.Button>
        <Popover.Panel className="fixed z-50  w-[30%] bg-white text-black left-[35%] top-24 shadow-2xl" >
          <Login/>
        </Popover.Panel>
        </Popover>

        {/* language */}
        
        <div className="flex flex-row gap-1 items-center">
          <img
            src={FLAGS.usaFlag}
            alt="USA"
            style={{ width: "25px", height: "20px " }}
          />
          <p className="text-[0.75rem] font-semibold">US</p>
          <BsChevronDown size={10} />
        </div>

        {/* list your business button */}
        <button className=" uppercase bg-white text-black text-[0.65rem] font-medium px-4 py-[0.5rem] rounded-md md:rounded-lg">
          List your business
        </button>
      </div>
    </section>
  );
}
