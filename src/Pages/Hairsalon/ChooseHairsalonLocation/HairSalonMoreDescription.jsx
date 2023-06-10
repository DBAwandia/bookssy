import { hairSalonMoreDescriptionData ,popularServices } from "../../../assets/Dummydata/Dummydata"

function HairSalonMoreDescription() {
  return (
     <div
        className="w-full py-[2rem] flex flex-col gap-[2rem]"
      >
        <div
          className="lg:w-[55%] w-[90%] self-center"
        >
          <div
            className="flex flex-col items-start gap-[2rem]"
          >
            <img
              className="w-full object-cover md:h-[30rem] h-[18rem]  rounded-lg"
              src="https://d2zdpiztbgorvt.cloudfront.net/us/cms_content/1/c7b3fca955024cdd8391d1a08ba35ed0.jpg"
              alt="booky hairsalon image"
            />
               
            {/* map hairsalon more Description dummyData */}
            {hairSalonMoreDescriptionData.map(( item , i ) =>
                <div
                    key={i}
                    className="flex flex-col items-start md:gap-[2rem] gap-[1rem]"
                >
                    <h1
                    className="w-[90%] lg:text-[1.5rem] text-[1.2rem] font-[600] tracking-normal text-[#383734]"
                    >
                        {item.title}
                    </h1>

                    <p>
                        {item.description}
                    </p>
                </div>
            )}

                <div
                    className="flex flex-col items-start gap-[0.2rem]"
                >
                    <h1
                        className="w-[90%] pb-[1.5rem] lg:text-[1.5rem] text-[1.2rem] font-[600] tracking-normal text-[#383734]"
                    >
                        Articles
                    </h1>

                    <p className="text-[#00beb7] font-semibold">
                       Check your face 
                    </p>
                    <p className="text-[#00beb7] font-semibold">
                        Wedding hair cuts
                    </p>
                    <p className="text-[#00beb7] font-semibold">
                        Style curly hair
                    </p>
                    <p className="text-[#00beb7] font-semibold">
                        Make hair less greasy
                    </p>
                    <p className="text-[#00beb7] font-semibold">
                        Popular cuts
                    </p>
                </div>

                {/* map populaservices data from dummy data */}
                <div
                    className="w-full flex flex-wrap gap-6"
                >
                    <h1
                        className="w-[90%] lg:text-[1.5rem] text-[1.2rem] font-[600] tracking-normal text-[#383734]"
                    >
                        Popular treatments
                    </h1>
                   <div
                        className="w-full flex flex-wrap gap-6"
                   >
                    {popularServices.map((item) =>
                            <div
                                key={item.id}
                            >
                                <p
                                    className="w-auto md:px-[1.4rem] px-[0.9rem]  md:py-[0.5rem] py-[0.2rem] rounded-2xl text-[#2a2d32] border-[0.6px] shadow-sm"
                                >
                                    {item.name}
                                </p>
                            </div>
                        )}
                   </div>
                </div>

          </div>
        </div>
    </div>
      
  )
}

export default HairSalonMoreDescription
