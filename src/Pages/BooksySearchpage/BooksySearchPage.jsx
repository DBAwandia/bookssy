import React , { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { popularSearches } from "../../assets/Dummydata/Dummydata"
import {  useNavigate } from 'react-router-dom'
import { SearchProductContext } from '../../Context/SearchProductContext'
import 'animate.css';

function BooksySearchPage() {

    const { dispatch } = useContext(SearchProductContext)

    const navigate = useNavigate()

   
    const CloseBooksySearchPage = () =>{
        //close the BooksySearchPage component
        dispatch({type:"CLOSE"})

    }

    // search function
    const handleSearch = () =>{

        //close the BooksySearchPage component first b4 navigating
        dispatch({type:"CLOSE"})
        navigate("/salonshops")

    }
    
  return (
    <div
        className='relative h-screen w-full lg:flex lg:justify-center lg:items-center text-[0.95rem]'
    >

      <div
        onClick={CloseBooksySearchPage}
        className='bgTransparent animate__animated animate__fadeIn  hidden lg:block absolute top-0 right-0 bottom-0 w-full h-screen'
      >
        {/* close the BooksySearchPage component */}
      </div>

      <div
        className='w-full lg:absolute top-[10%] left-[16%] z-[99999999999999999] lg:opacity-[0.88] lg:w-[70%] lg:h-[auto] lg:rounded-2xl bg-white lg:py-[2rem] h-full justify-between flex flex-col'
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
                        onClick={CloseBooksySearchPage}
                        className='text-[1.4rem]'
                    />
                    {/* </Link> */}
                    <input
                        className='bg-transparent text-[#d6d6d6] placeholder-[#d6d6d6] border-transparent w-full pl-[1rem] py-[1rem] lg:py-[1rem] md:py-[1.5rem]'
                        type='text'
                        placeholder='What are you looking for?'
                    />
                </div>
            </div>
            <div
                className='w-full py-[2rem] px-[1rem] flex flex-col gap-[1rem] md:gap-[2rem]'
            >
                <p
                    className='text-[0.95rem] font-bold text-[#999999]'
                >
                    Popular services

                </p>
                <div
                    className='w-full flex flex-wrap gap-[1rem] md:gap-[2rem] lg:gap-[1rem]'
                >
                    {popularSearches.map((item) =>
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

export default BooksySearchPage
