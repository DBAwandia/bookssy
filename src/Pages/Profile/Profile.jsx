import { BsArrowLeft, BsChevronDown } from 'react-icons/bs'
import { KE } from "country-flag-icons/react/3x2";
import {  useNavigate } from 'react-router-dom'
import 'animate.css';
import { Popover } from '@headlessui/react';
import Language from '../Language/Language';
import { useEffect, useState } from 'react';
import Login from '../Login/Login';

function Profile({ close }) {
    //close , setOpenScroll prop from headless ui passed from navbar where its called

    const navigate = useNavigate()
   
     //enable and disable scroll when popover
    const [ openScroll , setOpenScroll ] = useState(false)
    useEffect(() => {
        if (openScroll) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'unset';
        }
    }, [openScroll]);

    //close the Popover component and enable scroll
    const handleClose = () =>{
        setOpenScroll(false)
        close()
    }
    
  return (
    <div
        className='relative h-screen w-full lg:flex lg:justify-center lg:items-center text-[0.95rem]'
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
            className='w-full lg:absolute top-[10%] left-[16%] z-[99999999999999999] lg:opacity-[0.88] lg:w-[70%] lg:h-[auto] lg:rounded-2xl bg-white lg:py-[2rem] h-full justify-between flex flex-col'
        >
                <div
                    className='w-full flex flex-col'
                >
                    <div
                        className='w-full border-b-[0.6px] flex items-center'
                    >
                        <div
                            className='w-full px-[1rem] justify-between flex items-center py-[1rem] lg:py-0 lg:pb-4'
                        >
                            <BsArrowLeft
                                onClick={
                                    ()=>{
                                        navigate("/")
                                    }
                                }
                                className='text-[1.4rem]'
                            />
                                
                            {/* language */}
                            <div className="w-auto">
                            {/* 5 using headless UI // show Language*/}
                                <Popover className="w-full">
                                <Popover.Button 
                                    onClick={()=>setOpenScroll(true)} 
                                    className='flex items-center border-b-[0.6px] py-[0.4rem] lg:shadow-sm px-[0.5rem] rounded-md cursor-pointer gap-2'
                                >
                                    <KE 
                                    className="w-[1.2rem] h-[1.2rem]"
                                    />
                                
                                    <BsChevronDown size={12} />    
                                </Popover.Button>
                                <Popover.Panel
                                    className='w-full animate__animated animate__fadeIn fixed top-0 left-0 bottom-0 right-0 h-screen z-[9999999999999] ' 
                                >
                                    {/* pass close as prop  */}
                                    {({ close }) => (
                                        <div className="removeZindex">
                                            <Language 
                                                setOpenScroll={setOpenScroll} 
                                                close={close}
                                            />
                                        </div>
                                    )}
                                </Popover.Panel>
                                </Popover>
                            </div>      
                        </div>
                    </div>

                    <div 
                        className='w-full flex mt-[5rem] justify-center items-center'
                    >
                        <div 
                            className='w-full flex flex-col gap-[2rem] items-center'
                        >
                             {/* 4 using headless UI // show login */}
                            <Popover className="w-full">
                                <Popover.Button className="w-full self-center" onClick={()=>setOpenScroll(true)}>
                                <button
                                    className='w-auto px-[4rem] py-[0.8rem] bg-[#00a3ad] text-white font-semibold rounded-md'
                                >
                                    Login
                                </button>
                                </Popover.Button>
                                <Popover.Panel className="w-full animate__animated animate__fadeIn fixed top-0 left-0 bottom-0 right-0 h-screen z-[9999999999999] " >
                                {({ close }) => (
                                <div className="removeZindex">
                                    <Login close={close} setOpenScroll={setOpenScroll}/>
                                    </div>
                                    )}
                                </Popover.Panel>
                            </Popover>
                            
                            <div
                                className='flex items-center gap-2'
                            >
                                <p className='text-[#767676]'>Don't have account yet?</p>
                                <span className='text-[#00a3ad]'>Create</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default Profile
