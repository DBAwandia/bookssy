import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { BiCalendar, BiSearch } from "react-icons/bi"
import { RxPerson} from "react-icons/rx"
import { Link } from 'react-router-dom'

function Footbar() {
  return (
    <div
        className='w-full py-[0.3rem] bg-[#161718] h-[4rem] text-[0.8rem]'
    >
      <div
        className='px-[0.6rem] md:px-[1rem] py-[0.5rem] flex w-full justify-between items-center'
      >
        <Link 
            to="/"
        >
            <div
                className='flex items-center flex-col text-[#8c8b88] gap-1' 
            >
                <AiOutlineHeart
                    className='text-[1.3rem]'
                />
                <p>Your booksy</p>
            </div>
        </Link>

        <Link 
            to="/salonshops"
        >
            <div
                className='flex items-center flex-col text-[#8c8b88] gap-1' 
            >
                <BiSearch
                    className='text-[1.3rem]'
                />
                <p>Explore</p>
            </div>
        </Link>
        
            <div
                className='flex items-center flex-col text-[#8c8b88] gap-1' 
            >
                <BiCalendar
                    className='text-[1.3rem]'
                />
                <p>Appointments</p>
            </div>

            <div
                className='flex items-center flex-col text-[#8c8b88] gap-1' 
            >
                <RxPerson
                    className='text-[1.3rem]'
                />
                <p>Profile</p>
            </div>

      </div>
    </div>
  )
}

export default Footbar
