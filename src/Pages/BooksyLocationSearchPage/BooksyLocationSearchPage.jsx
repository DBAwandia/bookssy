
import React , { useContext } from 'react'
import { BsArrowLeft , BsSend } from 'react-icons/bs'
import { popularLocations } from "../../assets/Dummydata/Dummydata"
import {  useNavigate } from 'react-router-dom'
import { SearchProductContext } from '../../Context/SearchProductContext'
import 'animate.css';
import { SearchLocationContext } from '../../Context/SearchLocationContext'

function BooksyLocationSearchPage() {
    //opening BooksyLocationSearchPage component
    const { dispatchs } = useContext(SearchLocationContext)

    const navigate = useNavigate()

   
    const CloseBooksyLocationPage = () =>{
        //close the BooksySearchPage component
        dispatchs({type:"CLOSE"})

    }

    // search function
    const handleSearch = () =>{

        //close the BooksySearchPage component first b4 navigating
        dispatchs({type:"CLOSE"})
        navigate("/salonshops")

    }
    
  return (
    <div
        className='relative h-screen lg:min-h-screen w-full lg:flex lg:justify-center lg:items-center text-[0.95rem]'
    >

      <div
        onClick={CloseBooksyLocationPage}
        className='bg-[black] animate__animated animate__fadeIn  hidden opacity-[0.33] lg:block absolute top-0 right-0 bottom-0 w-full h-screen'
      >
        {/* close the BooksySearchPage component */}
      </div>

      <div
        className='w-full lg:absolute top-[10%] left-[16%] z-[99999999999999999] lg:opacity-[0.88] lg:w-[70%] lg:h-[80%] lg:rounded-2xl bg-white lg:py-[2rem] h-full justify-between flex flex-col'
      >
        <div
            className='w-full flex flex-col'
        >
            <div
                className='w-full border-b-[0.6px] flex items-center'
            >
                <div
                    className='w-full px-[1rem] flex items-center'
                >
                    {/* <Link to="/"> */}
                    <BsArrowLeft
                        onClick={CloseBooksyLocationPage}
                        className='text-[1.4rem]'
                    />
                    {/* </Link> */}
                    <input
                        className='bg-transparent text-[#d6d6d6] placeholder-[#d6d6d6] border-transparent w-full pl-[1rem] py-[1rem] lg:py-[1rem] md:py-[1.5rem]'
                        type='text'
                        placeholder='Where?'
                    />
                </div>
            </div>

            {/* enable location near me */}
            <div
                className='hidden lg:block w-full py-[0.5rem] border-b-[0.6px]'
            >
                <div
                    className='w-full flex items-center justify-between px-[1rem]'
                >
                    <div
                        className='flex items-center gap-4'
                    >
                        <BsSend className='text-[1.4rem] text-[#c2c2c2]'/>
                        <div>
                            <p className='capitalize text-[#767676]'>Your current location</p>
                            <span className='font-bold'>Unknown</span>
                        </div>
                    </div>
                    <div>
                        <button
                            className='uppercase px-[1.5rem] py-[0.7rem] bg-[#00a3ad] rounded-lg text-white font-semibold'
                        >
                            Search Near Me
                        </button>
                    </div>
                </div>
            </div>

            <div
                className='w-full py-[2rem] px-[1rem] flex flex-col gap-[1rem] md:gap-[2rem]'
            >
                <p
                    className='uppercase text-[0.85rem] font-bold text-[#252525]'
                >
                    Looking for services elsewhere?

                </p>
                <div
                    className='w-full flex flex-wrap gap-[1rem] md:gap-[2rem] lg:gap-[1rem]'
                >
                    {popularLocations.map((item) =>
                        <div
                            key={item.id}
                        >
                            <p
                                className='w-auto  cursor-pointer px-[1rem] font-semibold rounded-full border-[#e0e0e0] shadow-sm py-[0.5rem] border-[0.5px]'
                            >
                                {item.name}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div
            className='w-[100%] md:grid md:justify-center md:items-center px-[1rem] py-[2rem] md:py-[4rem] lg:py-0'
        >
            <button
                onClick={handleSearch}
                className='uppercase md:w-[20rem] lg:w-[18rem] lg:h-[3.1rem]  w-[100%] bg-[#00a3ad] text-white font-semibold md:h-[3.5rem] h-[2.7rem] rounded-md md:rounded-lg'
            >
                Search
            </button>
        </div>
      </div>
    </div>
  )
}

export default BooksyLocationSearchPage

