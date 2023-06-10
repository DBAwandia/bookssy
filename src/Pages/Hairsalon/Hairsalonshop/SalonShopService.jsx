import { AiTwotoneCar } from "react-icons/ai"
import { SalonServiceTypes } from "../../../assets/Dummydata/Dummydata"

// import React from 'react'
function SalonShopServices() {
  return (
        <div className='text-[0.95rem]'>

            {/* MAP ONLY THREE SERVICES FROM EACH SALONSHOP */}
                {SalonServiceTypes.slice(0, 3).map((item , i) => 
                    <div
                        className='w-full'
                        key={i}
                    >
                        <div 
                            className='w-full flex items-center justify-between border-b-2 py-[1rem]'
                        >
                            <div
                              className='w-full flex flex-col gap-[1rem]'
                            >
                                <p 
                                    className='text-[#383734] text-[1rem] font-[550]'
                                >
                                    {item.name}
                                </p>
                                <span
                                    className='text-[#818181] md:w-[70%] w-[90%]'
                                >
                                    {item.description}
                                </span>

                                {item.save &&
                                <span
                                    className='w-auto px-[0.7rem] font-semibold mr-auto py-[0.5rem] bg-[#e5f5f6] text-[#00a3ad] rounded-xl'
                                >
                                    Save up to {item.save}
                                </span>
                                }

                                {item.mobileService === "true" &&
                                <div
                                    className='flex items-center gap-3 w-auto px-[0.7rem] font-semibold mr-auto py-[0.5rem] bg-[#ebebeb] text-[#161718] rounded-xl'
                                 >
                                    <AiTwotoneCar/>
                                   <p>Mobile service</p>
                                </div>
                                }

                            </div>
                            <div
                                className='flex items-center lg:gap-[2.5rem] gap-[1rem]' 
                            >
                                <div
                                    className='flex flex-col text-right md:gap-[0.8rem] gap-[0.3rem]'
                                >
                                    <div
                                        className='flex items-center gap-1'
                                    >
                                        {item.priceBefore &&
                                        <p
                                            className='text-[#8c8b88] line-through '
                                        >
                                            ${item.priceBefore}
                                        </p>
                                        }
                                        <p
                                            className='text-[#383734] font-semibold'
                                        >
                                            ${item.price}
                                        </p>
                                    </div>
                                    <span
                                        className='text-[#a9a9a9]'
                                    >
                                        {item.duration}
                                    </span>
                                </div>
                                <button
                                    className='w-auto px-[0.8rem] py-[0.4rem] rounded-xl text-white bg-[#00a3ad]'
                                >
                                    Book
                                </button>
                            </div>
                            </div>
                        </div>
                )}
            </div>
  )
}

export default SalonShopServices