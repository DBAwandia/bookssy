import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { BsSendFill } from "react-icons/bs";
import { Popover } from "@headlessui/react";
import BooksySearchPage from "../../Pages/BooksySearchpage/BooksySearchPage";
import BooksyLocationSearchPage from "../../Pages/BooksyLocationSearchPage/BooksyLocationSearchPage";

export default function HeroMiddle() {

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
    <div className="">
      <h1 className="hidden lg:block text-booksyWhite font-bold text-5xl text-center">
        <Typewriter
          options={{
            strings: [
              "Be Confident",
              "Be Colourful",
              "Be Free",
              "Be Brave",
              "Be Bold",
              "Be Yourself",
            ],
            autoStart: true,
            loop: true,
            cursor: "",
            delay: 100,
          }}
        />
      </h1>

      <p className="text-booksyWhite font-normal lg:text-xl text-[1rem] text-center px-3 py-4 tracking-wide">
        Discover and book beauty & wellness professionals near you
      </p>

      <div className="lg:px-64 px-[0.7rem] w-full flex flex-row justify-center lg:gap-[1px] gap-[0.4rem] lg:mt-3">
        {/* book your service */}
        {/* 1 using headless UI // show BooksySearchPage*/}
        <Popover className="w-full">
          <Popover.Button  onClick={()=>setOpenScroll(true)} className='w-[100%]'>
            <div 
              className="w-full border-[0.6px] px-[1rem] lg:bg-booksyWhite h-12  lg:rounded-l-lg lg:rounded-r-[0px] rounded-lg flex flex-row gap-4 items-center lg:px-5 text-[#c2c2c2] cursor-pointer"
            >
              <CiSearch size={20} />
              <p className="text-[0.9rem] font-medium">Book your services...</p>
            </div>
          </Popover.Button>
            <Popover.Panel
              className='w-full animate__animated animate__fadeIn fixed top-0 left-0 bottom-0 right-0 h-screen z-[9999999999999] ' 
            >
              {/* pass close as prop  */}
              {({ close }) => (
                  <div className="removeZindex">
                    <BooksySearchPage setOpenScroll={setOpenScroll}  close={close}/>
                  </div>
              )}
            </Popover.Panel>
          </Popover>

        {/* 2 using headless UI // show BooksyLocationSearch*/}
        <div 
          className="hidden lg:block bg-booksyWhite h-12 w-1/2 rounded-r-lg lg:flex lg:flex-row gap-4 justify-between items-center px-5 text-[#c2c2c2] cursor-pointer"
        >
          <Popover className='w-full'>
            <Popover.Button  onClick={()=>setOpenScroll(true)}  className='w-[100%]'>
            <div className="flex flex-row gap-4">
              <CiLocationOn size={20} />
              <p className="text-[0.9rem] font-medium">Where?</p>
            </div>
          </Popover.Button>
            <Popover.Panel
                className='w-full animate__animated animate__fadeIn fixed top-0 left-0 bottom-0 right-0 h-screen z-[9999999999999] ' 
            >
              {/* pass close as prop  */}
                {({ close }) => (
                  <div className="removeZindex">
                    <BooksyLocationSearchPage setOpenScroll={setOpenScroll}  close={close}/>
                  </div>
                  )}
              </Popover.Panel>
            </Popover>

          <BsSendFill size={15} />
        </div>
      </div>
    </div>
  );
}
