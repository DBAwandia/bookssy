import { BsArrowRight } from "react-icons/bs"
import { hairSalonCities } from "../../../assets/Dummydata/Dummydata"

function HairsalonAroundYou() {
  return (
    <div
        className='lg:px-[5rem] px-[2rem] py-[2rem] flex flex-col gap-[3rem]'
    >
        <h1
            className='lg:text-[1.5rem] text-[1.2rem] text-center text-[#484848] font-[580]'
        >
            Hair Salons - around you

        </h1>

        <div
            className='flex flex-col gap-[2rem]'
        >
            <div
                className='w-full grid gap-[2rem] grid-cols-1 md:grid-cols-3 text-[0.95rem]' 
            >
                {/* map popular treatment data from dummy json */}
                {hairSalonCities.map(item =>
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
                                className='lg:text-[1.6rem] text-[1.3rem] text-[#bfbfbf]'
                            />
                        </div>
                       
                    </div>
                    
                )}
            </div>
        </div>

        {/* use my location button */}
        <button
            className="md:text-start mr-auto md:w-auto w-full bg-[#00a3ad] text-white px-[2rem] md:px-[3rem] py-[0.7rem] rounded-md md:rounded-lg"
        >
            Use my location
        </button>

    </div>
  )
}

export default HairsalonAroundYou
