import { useContext } from "react"
import { SearchProductContext } from "../../../Context/SearchProductContext"
import Footbar from "../../../components/Footbar"
import Footer from "../../../components/Footer"
import HeroBottom from "../../../components/HomeComponents/HeroBottom"
import Navbar from "../../../components/Navbar"
import BooksySearchPage from "../../BooksySearchpage/BooksySearchPage"
import HairSalonCustomerReviews from "./HairSalonCustomerReviews"
import HairSalonMoreDescription from "./HairSalonMoreDescription"
import HairsalonAroundYou from "./HairsalonAroundYou"
import BooksyLocationSearchPage from "../../BooksyLocationSearchPage/BooksyLocationSearchPage"
import { SearchLocationContext } from "../../../Context/SearchLocationContext"

function ChooseHairSalon() {
   //opening BooksySearchPage component
   const { open } = useContext(SearchProductContext)

   //opening BooksyLocationSearchPage component
  const { opens } = useContext(SearchLocationContext)

  return (
    <div
      className="relative flex overflow-x-hidden flex-col"
    >
      {/* NAVBAR*/}
      <div className='bg-[#1b1d21] lg:px-[2rem] py-[0.8rem]'>
        <Navbar/>
      </div>

      {/* ALL SHOPS ( HAIRSALONSHOP , BARBESHOP , NAIL SHOP ... etc) */}
      <div className='bg-[#1b1d21] lg:h-[4rem] h-[3.5rem] lg:px-[2rem] pt-[1.2rem]' >
        <HeroBottom/>
      </div>

      {/* HairsalonDescription Near you */}
      <div
        className="w-full py-[2rem] flex flex-col gap-[2rem]"
      >
        <div
          className="lg:w-[55%] w-[90%]  self-center"
        >
          <div
            className="flex flex-col items-start text-[0.95rem] gap-[2rem]"
          >
            <h1
              className="w-[90%] lg:text-[1.5rem] text-[1.2rem] font-[600] tracking-normal text-[#383734]"
            >
              Hair Salons and Hair Dressers Near you
            </h1>

            <p>
              A hair salon is a business that offers hair styling and other cosmetic services. Usually, a hair salon will have a team of hair stylists to provide these services.
              The hair stylists are required to be licensed cosmetologists trained as either hair stylists, general cosmetologists, estheticians, barbers, or manicurists. 
              Stylists will either be employed by the salon directly or rent their own booth space in hair salons to provide these services to clients. 
              In a salon, you can expect a few standard services to be available, like hair cutting, coloring, highlighting, and styling. Hair and scalp treatments are usually available as well.
              Some salons offer additional services that extend beyond hair, like massage, makeup, tanning, nail care, skincare, and waxing.
            </p>

            <img
              className="w-full object-cover md:h-[30rem] h-[18rem] rounded-lg"
              src="https://d2zdpiztbgorvt.cloudfront.net/us/cms_content/1/3827e6dc24ec442eb32878d937e1091a.jpg"
              alt="booky hairsalon image"
            />

          </div>
        </div>

        {/* hair salon cities component ( around you ) */}
        <div className="w-full">
          <HairsalonAroundYou/>
        </div>

        {/* hairsalon customer ratings and reviews */}
        <div className="w-full">
          <HairSalonCustomerReviews/>
        </div>

        {/* hairsalon more description */}
        <div className="w-full">
          <HairSalonMoreDescription/>
        </div>

        {/* FOOTER*/}
      <div>
        <Footer/>
      </div>
      </div>

      <div 
        className='w-full z-[9999999999999] lg:hidden fixed bottom-0 right-0'
      >
        <Footbar/>
      </div>

      {/* open the BooksySearchPage component */}
      {open &&
        <div 
          className='w-full animate__animated animate__fadeIn h-screen z-[9999999999999] top-0 left-0 fixed bottom-0 right-0'
        >
          <BooksySearchPage/>
        </div>
      }

      {/* open the BooksyLocationSearchPage component */}
      {/* {!opens && */}
        <div 
          className='w-full animate__animated animate__fadeIn h-screen z-[9999999999999] fixed top-0 left-0 bottom-0 right-0'
        >
          <BooksyLocationSearchPage/>
        </div>
      {/* } */}
      
    </div>
  )
}

export default ChooseHairSalon
