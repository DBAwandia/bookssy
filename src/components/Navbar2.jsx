// import React from "react";
import Logo from "../assets/BooksyLogo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import { useEffect, useState } from "react";
import Language from "../Pages/Language/Language";
import { Popover } from "@headlessui/react";
import { KE } from "country-flag-icons/react/3x2";
import Login from "../Pages/Login/Login";


export default function Navbar2() {
 //enable and disable scroll when popover
 const [ openScroll , setOpenScroll ] = useState(false)
 useEffect(() => {
   if (openScroll) {
     document.body.style.overflow = 'hidden';
   } else {
     document.body.style.overflow = 'unset';
   }
 }, [openScroll]);

  return (
    <section className="w-full bg-transparent grid grid-col-1 gap-[1rem] lg:flex lg:justify-between items-center">

      {/* list your business for mobile */}
      <div
        className="lg:hidden border-b-[0.5px] py-[0.7rem] w-full text-[#fff] font-bold justify-center flex items-center gap-[0.5rem]"
      >
        <h1>List Your Business</h1>
        <BsArrowRight
          className="text-[1.3rem]"
        />
      </div>

      {/* LOGO*/}
      <div className="w-full grid justify-center items-center lg:justify-start lg:w-[20%]">
        <Link to="/">
          <img
            src={Logo}
            alt="Booksy Logo"
            className="justify-center w-[100px] h-[22px]"
          />
        </Link>
      </div>

      {/* OTHERS */}
      <div className="hidden lg:w-[70%] lg:flex lg:flex-row justify-end items-center gap-7 text-white">
        {/* login */}
        <div className="flex gap-1 items-center">
          {/* 4 using headless UI // show login */}
          <Popover className="w-full">
            <Popover.Button onClick={()=>setOpenScroll(true)}>
              <div className="flex gap-1 items-center">
                <HiOutlineUserCircle size={25} />
                <p className="text-[0.75rem] font-semibold">Login / Sign Up</p>
              </div>
            </Popover.Button>
            <Popover.Panel className="w-full animate__animated animate__fadeIn fixed top-0 left-0 bottom-0 right-0 h-screen z-[9999999999999] " >
              {({ close }) => (
              <div className="removeZindex">
                <Login close={close} setOpenScroll={setOpenScroll}/>
                  </div>
                  )}
            </Popover.Panel>
          </Popover>
        </div>

        {/* language */}
        <div className="w-auto">
             {/* 4 using headless UI // show Language*/}
             <Popover className="w-full">
                <Popover.Button 
                  onClick={()=>setOpenScroll(true)} 
                  className='flex gap-1 items-center'
                >
                    <div
                      className='flex items-center cursor-pointer gap-1'
                    >
                      <KE 
                        className="w-[1.2rem] h-[1.2rem]"
                      />
                      <p
                        className='hover:text-[#8c8b88] text-[0.75rem]'
                      >
                          KE
                      </p>
                    </div>         
                    <BsChevronDown size={12} />
                </Popover.Button>
                <Popover.Panel
                  className='w-full animate__animated animate__fadeIn fixed top-0 left-0 bottom-0 right-0 h-screen z-[9999999999999] ' 
                >
                  {/* pass close as prop  */}
                  {({ close }) => (
                    <div className="removeZindex">
                      <Language 
                        setOpenScroll={setOpenScroll} 
                        close={close}
                      />
                    </div>
                  )}
                </Popover.Panel>
              </Popover>
          </div>


        {/* list your business button */}
        <button className=" uppercase bg-white text-black text-[0.65rem] font-medium px-4 py-2 rounded-lg">
          List your business
        </button>
      </div>
    </section>
  );
}
