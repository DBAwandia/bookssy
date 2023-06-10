import { useState , useEffect } from 'react'
import { salonJson  } from '../../../assets/Dummydata/Dummydata'
import SalonShopService from './SalonShopService'
import { IoMdThumbsUp } from "react-icons/io"
import { BsArrowRight, BsSliders } from "react-icons/bs"

import ReactPaginate from 'react-paginate';
import "./Paginate.css"
import { RiArrowDownSLine } from 'react-icons/ri'

function SuggestionSalons() {

    
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount,setPageCount] = useState(0)
    const [ currentItems , setCurrentItems ] = useState(null)

    let itemsPerPage = 2 ;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(salonJson?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(salonJson?.length / itemsPerPage));

    }, [itemsPerPage , salonJson , itemOffset])

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % salonJson.length;
        console.log(newOffset)
        setItemOffset(newOffset);
    };

  return (
    <div 
        className='w-full flex flex-col gap-[3rem] text-[0.95]'
    >

        {/* FILTER BY REVIEWS AND RECOMMENDATIONS */}
        <div 
            className='w-full flex text-[#151618] items-center gap-[3rem] text-[0.95rem]'
        >
            <div 
                className='flex items-center gap-[2rem] border-2 border-[#f5f5f5] bg-[#f0f0f0] w-auto px-[1rem] py-[0.7rem] rounded-xl'
            >
                <div
                    className='flex items-center gap-[1rem]'
                >
                    <BsSliders
                        className='text-[1.5\4rem]'
                    />
                    <p>Filter</p>
                </div>
            </div>
            <div>
                <div
                    className='flex items-center gap-[1rem] border-2 border-[#f5f5f5] w-auto bg-[#f0f0f0] px-[1rem] py-[0.7rem] rounded-xl'
                >
                    <p>Sort by: </p>
                    <div
                        className='flex items-center gap-[1rem]'
                    >
                        <span>Recommended</span>
                        <RiArrowDownSLine
                            className='text-[1.4rem]'
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* MAP SALONSHOP JSON DATA */}
        {currentItems?.map((item) =>
            <div
                key={item.id}
                className='w-full flex gap-[1.5rem] min-h-[40vh]'
            >

               {/* SALON SHOP IMAGE */}
                <div
                    className='relative w-[32%] min-h-[40vh]'
                >
                        <img 
                            className="w-[100%] h-[17rem] rounded-2xl object-cover"   
                            src={item.images.length > 1 ? item?.images[0] : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3eEqxqteZ-yqR2AC-W6vv7mY6e4A8cclnkw&usqp=CAU"}
                            alt="image"
                        />

                        {/* RATINGS AND REVIEWS*/}
                        <div 
                            className='absolute flex flex-col items-center gap-[0.3rem] top-[0rem] right-[0rem] bg-[#181717] opacity-[0.9] text-white px-[0.8rem] py-[0.7rem] rounded-bl-2xl  rounded-tr-2xl'
                        >
                            <p 
                                className='text-[0.75rem] font-bold'
                            >
                                {item.ratings}
                            </p>
                            <span
                                className='text-[0.7rem]'
                            >
                                {item.reviews} reviews
                            </span>
                        </div>

                        {/* Recommended */}
                        <div
                            className='absolute left-[1rem] top-[1rem] rounded-md text-[0.7rem] font-[590] flex items-center gap-[0.3rem] w-auto px-[0.8rem] py-[0.5rem] bg-white text-[#161718]'
                        >
                            <IoMdThumbsUp
                                className='text-[1rem] text-[black]'
                            />
                            <p>
                                BOOKSY RECOMMENDED
                            </p>
                        </div>
                </div>

                {/* SALON NAME , ADDRESS AND ITS SERVICES AND PRICE  */}
               <div
                    className='w-[65%] min-h-[40vh]'
                >
                    <div
                        className='px-[1rem] w-full flex flex-col'
                    >
                        <div
                            className='flex flex-col gap-[2rem] pb-[2rem] border-b-2' 
                        >
                            <h1
                                className='text-[#484848] font-bold text-[1.1rem]'
                            >
                                {item.name}
                            </h1>
                            <p
                                className='text-[#767676]'
                            >
                                {item.address}
                            </p>
                        </div>

                        <div 
                            className='w-full'
                        >
                            <SalonShopService />
                        </div>

                    </div>
                </div>

            </div>
        )}

      {/*for pagination  */}
      <div
        className='Reactpaginate' 
      >
        <ReactPaginate
             breakLabel={"..."}
             nextLabel={
                <div
                    className='w-auto rounded-full px-[0.5rem] py-[0.5rem] mt-[1rem] bg-[white] shadow-2xl border-2 text-[1.2rem]'
                >
                    <BsArrowRight/>
                </div>
             }
             onPageChange={handlePageClick}
             pageRangeDisplayed={2}
             pageCount={pageCount}
             marginPagesDisplayed={1}
             previousLabel=""
             renderOnZeroPageCount={null}
             containerClassName="pagination"
             pageLinkClassName="page-nums"
             nextLinkClassName="page-num"
             activeLinkClassName="active-box"
             breakClassName="breakClassName"
        />
       </div>

    </div>
  )
}

export default SuggestionSalons