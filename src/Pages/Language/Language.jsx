import { AiOutlineClose } from 'react-icons/ai'
import { SlArrowDown, SlArrowUp } from "react-icons/sl"
import 'animate.css';
import { Menu } from '@headlessui/react'
import { useState } from 'react';
import { AR, BR, CA, CL, ES, FR, GB, IE, KE, MX, PL, PT, US } from 'country-flag-icons/react/3x2'

function Language({ close , setOpenScroll }) {
    //close , setOpenScroll prop from headless ui passed from navbar where its called

    const [ language , setLanguage ] = useState("English")

    //close the Popover component and enable scroll
    const handleClose = () =>{
        setOpenScroll(false)
        close()
    }
    
  return (
    <div
        className='fixed text-[#484848] h-screen w-full lg:flex lg:justify-center lg:items-center text-[0.95rem]'
    >
      <div
       onClick={
            handleClose
        }
        className='bgTransparent animate__animated animate__fadeIn  hidden lg:block absolute top-0 right-0 bottom-0 w-full h-screen'
      >
        {/* close the BooksySearchPage component */}
      </div>

      <div
        className='w-full lg:absolute top-[2%] left-[25.5%] lg:rounded-sm z-[99999999999999999] lg:opacity-[0.88] lg:w-[50%] min-h-screen overflow-y-scroll bg-[white] lg:pb-[2rem] h-full justify-between flex flex-col'
      >
        <div
            className='w-full flex flex-col'
        >
            <div
                className='w-full border-b-[0.2px] border-[#eeeeee] flex items-center'
            >
                
                    <div
                        className='w-full justify-start p-[1rem] flex items-center'
                    >
                        <AiOutlineClose
                            onClick={
                                handleClose
                            }
                            className='text-[1.4rem]'
                        />
                        
                    </div>
            </div>
            <div 
                className='text-[1rem] font-bold px-[1rem] py-[0.5rem] w-full border-b-[0.2px] border-[#eeeeee]'
            >
                <p>Language :</p>
            </div>

            {/* Headless ui library dropdown */}
            <Menu>
            {({ open }) => (
                <>
                    <div 
                        className='w-full border-b-[0.2px] border-[#eeeeee] px-[1rem] py-[0.5rem]'
                    >
                        <Menu.Button
                            className="flex w-full items-center justify-between"
                        >
                            <div 
                                className='text-[0.95rem] items-start flex flex-col gap-2 font-bold'
                            >
                                <p className='text-[0.75rem] text-[#8c8b88]'>Your language</p>
                                <span>{language}</span>
                            </div>
                            {!open &&
                                <div>
                                    <SlArrowDown
                                        className='text-[1.2rem] text-[#8c8b88]'
                                    />
                                </div>
                            }
                            {open &&
                                <div>
                                    <SlArrowUp
                                        className='text-[1.2rem] text-[#8c8b88]'
                                    />
                                </div>
                            }
                        </Menu.Button>
                    </div>
                    <Menu.Items className="lg:w-[40%] w-full py-[0.3rem] bg-[#fafafa] shadow-sm lg:m-3 lg:rounded-md">
                        <Menu.Items className="flex flex-col gap-2 w-[100%] ">
                            <Menu.Item
                                className="w-full px-[1.5rem] text-[#161718] cursor-pointer hover:bg-[#00a3ad] border-b-[0.2px] border-[#eeeeee] hover:text-[white] py-[0.5rem]"
                            >
                                <p
                                    onClick={()=>setLanguage("English")}
                                >
                                    English
                                </p>
                            </Menu.Item>
                            <Menu.Item
                                className="w-full px-[1.5rem] text-[#161718] cursor-pointer hover:bg-[#00a3ad] border-b-[0.2px] border-[#eeeeee] hover:text-[white] py-[0.5rem]"
                            >
                                <p
                                    onClick={()=>setLanguage("Espanol")}
                                >
                                    Espanol
                                </p>
                            </Menu.Item>
                            <Menu.Item
                                className="w-full px-[1.5rem] text-[#161718] cursor-pointer hover:bg-[#00a3ad] border-b-[0.2px] border-[#eeeeee] hover:text-[white] py-[0.5rem]"
                            >
                                <p
                                    onClick={()=>setLanguage("Francais")}
                                >
                                    Francais
                                </p>
                            </Menu.Item>
                            <Menu.Item
                                className="w-full px-[1.5rem] text-[#161718] cursor-pointer hover:bg-[#00a3ad] border-b-[0.2px] border-[#eeeeee] hover:text-[white] py-[0.5rem]"
                            >
                                <p
                                    onClick={()=>setLanguage("Swahili")}
                                >
                                    Swahili
                                </p>
                            </Menu.Item>
                            <Menu.Item
                                className="w-full px-[1.5rem] text-[#161718] cursor-pointer hover:bg-[#00a3ad] hover:text-[white] py-[0.5rem]"
                            >
                                <p
                                    onClick={()=>setLanguage("Portugues")}
                                >
                                    Portugues
                                </p>
                            </Menu.Item>
                        </Menu.Items>
                    </Menu.Items>
                </>
            )}
            </Menu>
            <div
                className='w-full px-[1rem] py-[0.5rem] flex flex-col gap-[1rem] md:gap-[2rem]'
            >
                <p
                    className='text-[0.95rem] font-bold text-[#000]'
                >
                    Region :

                </p>

                {/* flags Africa countries */}
                <div
                    className='flex flex-col gap-[0.7rem]'
                >
                    <p className='text-[#767676] text-[0.9rem] uppercase'>
                        Africa
                    </p>
                    <div
                        className='w-full flex flex-wrap gap-[1rem]'
                    >
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <KE 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    Kenya
                                </p>
                            </div>
                    </div>
                </div>

                {/* flags Europe countries */}
                <div
                    className='flex flex-col gap-[0.7rem]'
                >
                    <p className='text-[#767676] text-[0.9rem] uppercase'>
                        Europe
                    </p>
                    <div
                        className='w-full grid grid-cols-1 md:grid-cols-2 gap-[1rem]'
                    >
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <FR 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    France
                                </p>
                            </div>
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <IE 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    Ireland
                                </p>
                            </div>
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <PL 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    Poland
                                </p>
                            </div>
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <PT 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    Portugal
                                </p>
                            </div>
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <ES 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    Spain
                                </p>
                            </div>
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <GB 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    United Kingdom
                                </p>
                            </div>
                    </div>
                </div>
                
                   {/* flags South america countries */}
                   <div
                        className='flex flex-col gap-[0.7rem]'
                    >
                    <p className='text-[#767676] text-[0.9rem] uppercase'>
                        South America
                    </p>
                    <div
                        className='w-full grid grid-cols-1 gap-[1rem]'
                    >
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <BR 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    Brazil
                                </p>
                            </div>
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <CL 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    Chile
                                </p>
                            </div>
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <AR 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    Argentina
                                </p>
                            </div>
                        </div>
                    </div>

                    
                   {/* flags North american countries */}
                   <div
                        className='flex flex-col gap-[0.7rem]'
                    >
                    <p className='text-[#767676] text-[0.9rem] uppercase'>
                        North America
                    </p>
                    <div
                        className='w-full grid grid-cols-1 gap-[1rem]'
                    >
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <US 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    United States
                                </p>
                            </div>
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <CA 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    Canada
                                </p>
                            </div>
                            <div
                                className='flex items-center cursor-pointer gap-3'
                            >
                                <MX 
                                    className="w-[1.3rem] h-[1.3rem]"
                                />
                                <p
                                    className='hover:text-[#8c8b88]'
                                >
                                    Mexico
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
      </div>
    </div>
  )
}

export default Language
