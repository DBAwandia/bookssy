import { BsArrowRight } from "react-icons/bs"
import { hairSalonCities } from "../../../assets/Dummydata/Dummydata"

function HairsalonAroundYou() {
  return (
    <div
        className='px-[5rem] py-[2rem] flex flex-col gap-[3rem]'
    >
        <h1
            className='text-[1.5rem] text-center text-[#484848] font-[580]'
        >
            Hair Salons - around you

        </h1>

        <div
            className='flex flex-col gap-[2rem]'
        >
            <div
                className='w-full grid gap-[2rem] grid-cols-3 text-[0.95rem]' 
            >
                {/* map popular treatment data from dummy json */}
                {hairSalonCities.map(item =>
                    <div
                        key={item.id}
                        className='w-auto px-[0.7rem] py-[0.5rem] border-2 border-[#ececec] rounded-xl'
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
                                className='text-[1.6rem] text-[#bfbfbf]'
                            />
                        </div>
                       
                    </div>
                    
                )}
            </div>
        </div>

        {/* use my location button */}
        <button
            className="text-start mr-auto w-auto bg-[#00a3ad] text-white px-[3rem] py-[0.7rem] rounded-lg"
        >
            Use my location
        </button>

    </div>
  )
}

export default HairsalonAroundYou
