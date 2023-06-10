import  { useState } from 'react'
import { popularTreatMents } from '../../../assets/Dummydata/Dummydata'
import { BsArrowRight } from 'react-icons/bs'
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"
import { AiFillHome } from 'react-icons/ai'

function MostPoularTreatments() {

    // hide or show more popularitems or less
    const [ show , setShow ] = useState(false)

    //limited mapped data but can display all when show all is clicked
    let slicedArray = !show ? popularTreatMents.slice(0 , 4) : popularTreatMents

  return (
    <div
        className='w-full flex flex-col gap-[3rem]'
    >
        <h1
            className='lg:text-[1.5rem] text-[1.2rem] text-[#484848] font-[580]'
        >
            Most popular treatments

        </h1>

        <div
            className='flex flex-col gap-[2rem]'
        >
            <div
                className='w-full grid gap-[2rem] md:grid-cols-3 grid-cols-1 text-[0.95rem]' 
            >
                {/* map popular treatment data from dummy json */}
                {slicedArray.map(item =>
                    <div
                        key={item.id}
                        className='w-auto px-[0.7rem] py-[0.5rem] border-2 border-[#ececec] rounded-md md:rounded-xl'
                    >
                        <div 
                            className='flex items-center justify-between'
                        >
                            <p 
                            className='text-[#383734]'
                            >
                                {item.name}
                            </p>
                            <BsArrowRight
                                className='lg:text-[1.6rem] text-[1.4rem] text-[#bfbfbf]'
                            />
                        </div>
                    </div>
                )}
            </div>
                {/* SHOW MORE ITEMS */}
                {!show &&
                    <div
                        onClick={()=> setShow(true)}
                        className='flex items-center cursor-pointer gap-[1rem] text-[#767676] text-[0.95rem]'
                    >
                        <RiArrowDownSLine
                            className='text-[1.4rem]'
                        />
                        <p>
                            SHOW MORE
                        </p>
                    </div>
                }

                {/* SHOW LESS ITEMS */}
                {show &&    
                    <div
                        onClick={()=> setShow(false)}
                        className='flex items-center cursor-pointer gap-[1rem] text-[#767676] text-[0.95rem]'
                    >
                        <RiArrowUpSLine
                            className='text-[1.4rem]'
                        />
                        <p>
                            SHOW LESS
                        </p>
                    </div>
                }
        </div>

        <div
            className='flex items-center gap-[1rem] text-[0.95rem]'
        >
            <AiFillHome className='text-[#bfbfbf]'/>
            <i className='text-[0.95rem]'>/</i>
            <p className='text-[#484848] text-[0.95rem] font-semibold'>
                Weave
            </p>
            <i className='text-[0.95rem]'>/</i>
            <p className='text-[#484848] text-[0.95rem] font-semibold'>Weave in Jacksonville , FL</p>
        </div>

    </div>
  )
}

export default MostPoularTreatments