import { useContext } from "react"
import MostPoularTreatments from './MostPopularTreatments'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import HeroBottom from '../../../components/HomeComponents/HeroBottom'
import BarberShopSlider from './BarberShopSlider'
import SuggestedBarberShops from './SuggestedBarberShops'
import Footbar from '../../../components/Footbar'
import { SearchProductContext } from "../../../Context/SearchProductContext"
import BooksySearchPage from "../../BooksySearchpage/BooksySearchPage"
import BooksyLocationSearchPage from "../../BooksyLocationSearchPage/BooksyLocationSearchPage"
import { SearchLocationContext } from "../../../Context/SearchLocationContext"

function BarberShop() {
  //opening BooksySearchPage component
  const { open } = useContext(SearchProductContext)

  //opening BooksyLocationSearchPage component
  const { opens } = useContext(SearchLocationContext)

  return (
    <div
      className="relative flex flex-col"
    >
      {/* NAVBAR*/}
      <div className='bg-[#1b1d21] py-[0.6rem] pt-[1rem]'>
        <Navbar/>
      </div>

      {/* ALL SHOPS ( BarberShopSHOP , BARBESHOP , NAIL SHOP ... etc) */}
      <div className='bg-[#1b1d21] lg:h-[5rem] h-[3.5rem] md:px-[2rem] pt-[1rem]' >
        <HeroBottom/>
      </div>

    <div
      className="w-full flex flex-col gap-[2rem]"
    >
      {/* BarberShop COMPONENT HEADER */}
      <div
        className="lg:text-[1.5rem] text-[1.2rem] md:px-[2rem] px-[1rem] pt-[1rem] text-[#484848] font-bold" 
      >
          <h1>
            Barber shops in in Texas ,USA (3900)
          </h1>
      </div>

      {/* BarberShopSLIDERCATEGORY COMPONENT */}
      <div 
        className="w-full md:px-[2rem] px-[1rem] "
      >
        <BarberShopSlider/>
      </div>

      {/* BREAK LINE */}
      <div className='md:px-[2rem] px-[1rem]'>
        <hr />
      </div>

      {/* SUGGESTIONSALON COMPONENT */}
      <div 
        className="md:px-[2rem] px-[1rem]"
      >
        <SuggestedBarberShops/>
      </div>

      {/* BREAK LINE */}
      <div className='md:px-[2rem] px-[1rem]'>
        <hr />
      </div>

      {/* MOST POPULAR TREATMENTS */}
      <div
        className="md:px-[2rem] px-[1rem]"
      >
        <MostPoularTreatments/>
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

    {/* opne the BooksySearchPage component */}
    {open &&
        <div 
          className='w-full animate__animated animate__fadeIn h-screen z-[9999999999999] fixed bottom-0 right-0'
        >
          <BooksySearchPage/>
        </div>
      }

      {/* open the BooksyLocationSearchPage component */}
      {opens &&
        <div 
          className='w-full animate__animated animate__fadeIn h-screen z-[9999999999999] fixed bottom-0 right-0'
        >
          <BooksyLocationSearchPage/>
        </div>
      }

  </div>
  )
}

export default BarberShop