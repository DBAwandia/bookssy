// import React from 'react'
import HairSalonSlider from './HairSalonSlider'
import SuggestedSalonShops from './SuggestedSalonShops'
import MostPoularTreatments from './MostPopularTreatments'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import HeroBottom from '../../../components/HomeComponents/HeroBottom'

function Hairsalon() {
  return (
    <>
      {/* NAVBAR*/}
      <div className='bg-[#1b1d21] h-[4rem] px-[2rem] pt-[1rem]'>
        <Navbar/>
      </div>

      {/* ALL SHOPS ( HAIRSALONSHOP , BARBESHOP , NAIL SHOP ... etc) */}
      <div className='bg-[#1b1d21] h-[5rem] px-[2rem] pt-[1rem]' >
        <HeroBottom/>
      </div>

    <div
      className="w-full flex flex-col gap-[2rem]"
    >
      {/* HAIRSALON COMPONENT HEADER */}
      <div
        className="text-[1.5rem] px-[2rem] pt-[1rem] text-[#484848] font-bold" 
      >
          <h1>
            Hair salons and Hair dressers in USA (2000)
          </h1>
      </div>

      {/* HAIRSALONSLIDERCATEGORY COMPONENT */}
      <div 
        className="w-full px-[2rem] "
      >
        <HairSalonSlider/>
      </div>

      {/* BREAK LINE */}
      <div className='px-[2rem]'>
        <hr />
      </div>

      {/* SUGGESTIONSALON COMPONENT */}
      <div 
        className="px-[2rem]"
      >
        <SuggestedSalonShops/>
      </div>

      {/* BREAK LINE */}
      <div className='px-[2rem]'>
        <hr />
      </div>

      {/* MOST POPULAR TREATMENTS */}
      <div
        className="px-[2rem]"
      >
        <MostPoularTreatments/>
      </div>

      {/* FOOTER*/}
      <div>
        <Footer/>
      </div>

    </div>
  </>
  )
}

export default Hairsalon