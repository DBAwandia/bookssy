import React , { useContext } from "react";
import Typewriter from "typewriter-effect";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { BsSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SearchProductContext } from "../../Context/SearchProductContext";
import { SearchLocationContext } from "../../Context/SearchLocationContext";

export default function HeroMiddle() {

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
        {/* <Link className="w-full lg:w-1/2 " to="/search"> */}
        <div 
          onClick={openBooksySearchComponent}
          className="w-full border-[0.6px] px-[1rem] lg:bg-booksyWhite h-12  lg:rounded-l-lg lg:rounded-r-[0px] rounded-lg flex flex-row gap-4 items-center lg:px-5 text-[#c2c2c2] cursor-pointer"
        >
          <CiSearch size={20} />
          <p className="text-[0.9rem] font-medium">Book your services...</p>
        </div>
        {/* </Link> */}

        {/* search location */}
        <div 
          onClick={OpenBooksyLocationSearchComponent}
          className="hidden lg:block bg-booksyWhite h-12 w-1/2 rounded-r-lg lg:flex lg:flex-row gap-4 justify-between items-center px-5 text-[#c2c2c2] cursor-pointer"
        >
          <div className="flex flex-row gap-4">
            <CiLocationOn size={20} />
            <p className="text-[0.9rem] font-medium">Where?</p>
          </div>

          <BsSendFill size={15} />
        </div>
      </div>
    </div>
  );
}
