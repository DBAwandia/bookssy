import Logo from "../assets/BooksyLogo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import { Popover } from '@headlessui/react'
import Login from "../Pages/Login/Login";
import BooksyDateSearch from "../Pages/BooksyDateSearch/BooksyDateSearch";
import BooksyLocationSearchPage from "../Pages/BooksyLocationSearchPage/BooksyLocationSearchPage";
import BooksySearchPage from "../Pages/BooksySearchpage/BooksySearchPage";
import { useState } from "react";
import { useEffect } from "react";
import { KE } from "country-flag-icons/react/3x2";
import Language from "../Pages/Language/Language";


export default function Navbar() {

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

        {/* search navbar || using headlessui library for popover  */}
        <div
          className="lg:w-[auto] cursor-default md:px-[2rem] px-[1rem] lg:px-[0px]  text-[#c2c2c2] text-[0.75rem] lg:border-[0.6px] border-[#cfcfcf] rounded-xl  py-[0.4rem] md:py-[0.6rem] lg:py-[0.4rem]"
        >
          <div
            className="w-full grid grid-cols-1 lg:justify-between lg:flex lg:items-center gap-[1rem]"
          >
                {/* 1 using headless UI // show BooksySearchPage*/}
                <Popover className="w-full">
                  <Popover.Button onClick={()=>setOpenScroll(true)} className='w-[100%]'>
                  <div
                    className="flex items-center lg:px-[2rem] px-[0.4rem] md:px-[0.8rem] py-[0.4rem] md:py-[0.6rem] rounded-md md:rounded-lg lg:rounded-none lg:py-0 border-[0.6px] gap-1 lg:border-0 lg:border-r-[0.6px] border-[#cfcfcf]"
                  >
                    <AiOutlineSearch
                      className="text-[1.3rem]"
                    />
                    <p>What are you looking for?</p>
                  </div>
                  </Popover.Button>
                  <Popover.Panel
                    className='w-full animate__animated animate__fadeIn fixed top-0 left-0 bottom-0 right-0 h-screen z-[9999999999999] ' 
                  >
                  {/* pass close as prop  */}
                    {({ close }) => (
                      <div className="removeZindex">
                        <BooksySearchPage 
                          setOpenScroll={setOpenScroll} 
                          close={close}
                        />
                      </div>
                    )}
                  </Popover.Panel>
                </Popover>

              {/* 2 using headless UI // show BooksyLocationSearch*/}
              <div className="w-full lg:w-auto gap-3 flex items-center">
              <Popover className='w-full'>
                <Popover.Button onClick={()=>setOpenScroll(true)}  className='w-[100%]'>
                  <div
                    className="border-[0.6px] lg:border-0 lg:w-auto gap-[1.4rem] lg:rounded-none flex items-center lg:px-[2rem] px-[0.4rem] md:px-[0.8rem] py-[0.4rem] md:py-[0.6rem] rounded-md md:rounded-lg lg:py-0 justify-between lg:border-r-[0.6px] border-[#cfcfcf]"
                  >
                    {/* icon */}
                    <p>Where?</p>
                  </div>
                </Popover.Button>
                <Popover.Panel
                  className='w-full animate__animated animate__fadeIn fixed top-0 left-0 bottom-0 right-0 h-screen z-[9999999999999] ' 
                >
                  {/* pass close as prop  */}
                  {({ close }) => (
                    <div className="removeZindex">
                      <BooksyLocationSearchPage 
                        setOpenScroll={setOpenScroll} 
                        close={close}
                      />
                    </div>
                  )}
                </Popover.Panel>
              </Popover>
              
              {/* 3 using headless UI // show BooksyDateSearch*/}
              <Popover className="w-full">
                <Popover.Button 
                  onClick={()=>setOpenScroll(true)} 
                  className='w-[100%]'
                >
                  <div
                    className="border-[0.6px] lg:border-0 gap-[1.4rem] lg:rounded-none flex items-center lg:px-[2rem] px-[0.4rem] md:px-[0.8rem] py-[0.4rem] md:py-[0.6rem] rounded-md md:rounded-lg lg:py-0 justify-between"
                  >
                      {/* icon */}
                    <p>When?</p>
                  </div>
                </Popover.Button>
                <Popover.Panel
                  className='w-full animate__animated animate__fadeIn fixed top-0 left-0 bottom-0 right-0 h-screen z-[9999999999999] ' 
                >
                  {/* pass close as prop  */}
                  {({ close }) => (
                    <div className="removeZindex">
                      <BooksyDateSearch 
                        setOpenScroll={setOpenScroll} 
                        close={close}
                      />
                    </div>
                  )}
                </Popover.Panel>
              </Popover>
            </div>
          </div>
        </div>

        {/* OTHERS */}
        <div className="w-auto hidden lg:flex items-center gap-[0.6rem] text-white">
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

          {/* language */}
          <div className="w-auto">
             {/* 5 using headless UI // show Language*/}
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
          <button className="uppercase items-center w-[15rem] bg-white text-black text-[0.65rem] font-medium px-3 py-[0.5rem] rounded-md md:rounded-lg">
            List your business
          </button>
        </div>
      </section>
  );
}
