import React, { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import moment from 'moment';
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi"
// import {  useNavigate } from 'react-router-dom'
import 'animate.css';


function BooksyDateSearch({ close , setOpenScroll }) {
    //close prop from headless ui passed from navbar where its called

    const [ anytime , setAnyTime ] = useState("")
    const [ morning , setMorning ] = useState("")
    const [ afternoon , setAfternoon ] = useState("")
    const [ evening , setEvening ] = useState("")


    //react date range and picker
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);

    //react startdate range and enddate range
    let startDate = date.map(item => item.startDate)
    let endDate = date.map(item => item.endDate)
    let thisMonth = new Date()
    let formattedStartDate = moment(startDate[0]).format("MMM D");
    let formattedEndDate = moment(endDate[0]).format("MMM D, YYYY");
    let dateRange = formattedStartDate + " " + "-" + " " + formattedEndDate;

    //anytime , evening , afternoon , morning change onClick
    const [ handleChange , setHandleChange ] = useState("")

    //showMonth || less days
    const [open , setOpen ] = useState(false)

    //close the Popover component and enable scroll
    const handleClose = () =>{
        setOpenScroll(false)
        close()
    }
    
    return (
      <div
      className='relative min-h-0 overflow-x-hidden lg:min-h-screen w-full lg:flex lg:justify-center lg:items-center text-[0.95rem]'
    >
    
      <div
        onClick={handleClose}
        className='bgTransparent animate__animated animate__fadeIn hidden lg:block absolute top-0 right-0 bottom-0 w-full min-h-0'
        >
      </div>
    
      <div
        className='w-full h-screen lg:absolute top-[5%] left-[16%] z-[99999999999999999] lg:opacity-[0.88] lg:w-[70%] lg:h-[auto] lg:rounded-2xl bg-white lg:py-[1rem] justify-between flex flex-col gap-3 md:gap-6 lg:gap-3'
      >
        <div
            className='w-full flex flex-col gap-2'
        >
            <div
                className='w-full border-b-[0.6px] flex items-center'
            >
                {/* INPUT */}
                <div
                    className='w-full px-[1rem] flex items-center'
                >
                    {/* <Link to="/"> */}
                    <BsArrowLeft
                        onClick={handleClose}
                        className='text-[1.4rem]'
                    />
                    {/* </Link> */}
                    <input
                        value={
                                formattedEndDate === "Invalid date" 
                                ? "When" : dateRange + " " + "," + "  " +handleChange
                              }
                        readOnly
                        className='bg-transparent text-[#000000] font-bold placeholder-[#d6d6d6] border-transparent w-full pl-[1rem] py-[1rem] outline-none lg:py-[1rem] md:py-[1.5rem]'
                    />
                </div>
            </div>

            <div
                className='w-full px-[1rem]'
            >
                <div
                    className='w-full flex items-center justify-between'
                >
                    <p>
                      {moment(thisMonth).format("MMMM  YYYY")}
                    </p>
                    
                    {!open &&
                        <div
                            onClick={()=>setOpen(true)}
                            className='flex items-center gap-1 text-[0.6rem] border-[0.5px] rounded-md py-[0.3rem] px-[0.3rem]'
                        >
                            <span>Show Month</span>
                            <TfiAngleDown/>
                        </div>
                    }

                    {open &&
                        <div
                            onClick={()=>setOpen(false)}
                            className='flex items-center gap-1 text-[0.6rem] border-[0.5px] rounded-md py-[0.3rem] px-[0.3rem]'
                        >
                            <span>Less days</span>
                            <TfiAngleUp/>
                        </div>
                    }

                </div>
            </div>

            {/* DATERANGE // CALENDAR */}
            <div
                className='w-full px-[1rem] flex flex-col'
            >
                <div
                    className='px-[1rem] self-center'
                >
                   <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={thisMonth}
                        showSelectionPreview={true}
                        showPreview={false}
                        showMonthAndYearPickers={false}
                        rangeColors={['#00a3ad']}
                        showMonthArrow={false}
                        showDateDisplay={false}
                        
                    />
                </div>
            </div>

            <div
                className='w-full lg:px-[3rem] px-[1rem] element overflow-x-scroll flex items-center gap-4 md:gap-0 justify-between'
            >
                <p
                    onClick={()=>setHandleChange("Anytime")}
                    className={handleChange === "Anytime" ?'w-auto bg-[#e8f8f9] px-[2rem] rounded-md py-[0.6rem] font-semibold text-[0.7rem] border-[#00a3ad] border-[0.5px]': 'w-auto px-[2rem] rounded-md py-[0.6rem] text-[0.7rem] border-[#ebebeb] border-[0.5px]'}
                >
                    Anytime
                </p>
                <p
                    onClick={()=>setHandleChange("Morning")}
                    className={handleChange === "Morning" ?'w-auto bg-[#e8f8f9] px-[2rem] rounded-md py-[0.6rem] font-semibold text-[0.7rem] border-[#00a3ad] border-[0.5px]': 'w-auto px-[2rem] rounded-md py-[0.6rem] text-[0.7rem] border-[#ebebeb] border-[0.5px]'}
                    >
                    Morning
                </p>
                <p
                    onClick={()=>setHandleChange("Afternoon")}
                    className={handleChange === "Afternoon" ?'w-auto bg-[#e8f8f9] px-[2rem] rounded-md py-[0.6rem] font-semibold text-[0.7rem] border-[#00a3ad] border-[0.5px]': 'w-auto px-[2rem] rounded-md py-[0.6rem] text-[0.7rem] border-[#ebebeb] border-[0.5px]'}
                    >
                    Afternoon
                </p>
                <p
                    onClick={()=>setHandleChange("Evening")}
                    className={handleChange === "Evening" ?'w-auto bg-[#e8f8f9] px-[2rem] rounded-md py-[0.6rem] font-semibold text-[0.7rem] border-[#00a3ad] border-[0.5px]': 'w-auto px-[2rem] rounded-md py-[0.6rem] text-[0.7rem] border-[#ebebeb] border-[0.5px]'}
                >
                    Evening
                </p>

            </div>

        </div>

        {/* BUTTON SEARCH */}
        <div
            className='w-[100%] md:grid md:justify-center md:items-center px-[1rem] py-[2rem] md:py-[1rem]'
        >
            <button
                // onClick={handleSearch}
                className='uppercase md:w-[20rem] lg:w-[18rem] lg:h-[3.1rem]  w-[100%] bg-[#00a3ad] text-white font-semibold md:h-[3.5rem] h-[2.7rem] rounded-md md:rounded-lg'
            >
                Search
            </button>
        </div>
      </div>
    </div>
  )
}

export default BooksyDateSearch

