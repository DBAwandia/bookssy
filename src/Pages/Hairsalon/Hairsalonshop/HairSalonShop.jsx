// import React from 'react'
import HairSalonSlider from './HairSalonSlider'
import SuggestedSalonShops from './SuggestedSalonShops'
import MostPoularTreatments from './MostPopularTreatments'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import HeroBottom from '../../../components/HomeComponents/HeroBottom'
import Footbar from '../../../components/Footbar'

function Hairsalon() {
  return (
    <div
      className="relative flex flex-col"
    >
      {/* NAVBAR*/}
      <div className='bg-[#1b1d21] h-[4rem] md:px-[2rem] pt-[1rem]'>
        <Navbar/>
      </div>

      {/* ALL SHOPS ( HAIRSALONSHOP , BARBESHOP , NAIL SHOP ... etc) */}
      <div className='bg-[#1b1d21] lg:h-[5rem] h-[3.5rem] md:px-[2rem] pt-[1rem]' >
        <HeroBottom/>
      </div>

    <div
      className="w-full flex flex-col gap-[2rem]"
    >
      {/* HAIRSALON COMPONENT HEADER */}
      <div
        className="lg:text-[1.5rem] text-[1.2rem] md:px-[2rem] px-[1rem] pt-[1rem] text-[#484848] font-bold" 
      >
          <h1>
            Hair salons and Hair dressers in USA (2000)
          </h1>
      </div>

      {/* HAIRSALONSLIDERCATEGORY COMPONENT */}
      <div 
        className="w-full md:px-[2rem] px-[1rem] "
      >
        <HairSalonSlider/>
      </div>

      {/* BREAK LINE */}
      <div className='md:px-[2rem] px-[1rem]'>
        <hr />
      </div>

      {/* SUGGESTIONSALON COMPONENT */}
      <div 
        className="md:px-[2rem] px-[1rem]"
      >
        <SuggestedSalonShops/>
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

  </div>
  )
}

export default Hairsalon