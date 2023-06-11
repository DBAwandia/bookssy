import { IoMdThumbsUp } from "react-icons/io"

export default function SalonDimage(props) {
    return (
        <>
            <div>
                <img src={props.images[0]} alt="img"/>
                <div
                    className='absolute md:left-[1rem] left-[1rem] md:top-[3rem] top-[3rem] rounded-md md:text-[0.7rem] text-[0.5rem] font-[590] flex items-center gap-[0.3rem] w-auto px-[0.8rem] py-[0.5rem] bg-white text-[#161718]'
                >
                    <IoMdThumbsUp
                        className='text-[1rem] text-[black]'
                    />
                    <p>
                        BOOKSY RECOMMENDED
                    </p>
                </div>
            </div>
        </>
    )
}