import Footbar from "../../../components/Footbar"
import Footer from "../../../components/Footer"
import HeroBottom from "../../../components/HomeComponents/HeroBottom"
import Navbar from "../../../components/Navbar"
import BarberShopAroundYou from "./BarberShopAroundYou"
import BarberShopCustomerReview from "./BarberShopCustomerReview"
import BarberShopMoreDescription from "./BarberShopMoreDescription"

function ChooseBarberShop() {
  return (
    <div
      className="relative flex flex-col"
    >
      {/* NAVBAR*/}
      <div className='bg-[#1b1d21] h-[4rem] lg:px-[2rem] pt-[1rem]'>
        <Navbar/>
      </div>

      {/* ALL SHOPS ( HAIRSALONSHOP , BARBESHOP , NAIL SHOP ... etc) */}
      <div className='bg-[#1b1d21] lg:h-[5rem] h-[3.5rem] lg:px-[2rem] pt-[1rem]' >
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
              Barber shops Near you
            </h1>

            <p>
              A barber is a person whose occupation is mainly to cut, dress, 
              groom, style and shave men's and boy's hair or beards. 
              A barber's place of work is known as a "barbershop" or a "barber's". 
              Historically barbershops were also places of social interaction and public discourse. 
              In some instances, barbershops were also public fora. They were the locations of open debates, 
              voicing public concerns, and engaging citizens in discussions about contemporary issues.
            </p>

            <img
              className="w-full object-cover md:h-[30rem] h-[18rem] rounded-lg"
              src="https://d2zdpiztbgorvt.cloudfront.net/us/cms_content/6/c430e062a33e422d837f4ea85233a54f.png"
              alt="booky hairsalon image"
            />

          </div>
        </div>

        {/* Barber shops component( around you ) */}
        <div className="w-full">
          <BarberShopAroundYou/>
        </div>

        {/* BarberShopCustomerReview customer ratings and reviews */}
        <div className="w-full">
          <BarberShopCustomerReview/>
        </div>

        {/* BarberShop more description */}
        <div className="w-full">
          <BarberShopMoreDescription/>
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

export default ChooseBarberShop
