import { IoMdThumbsUp } from "react-icons/io";

export default function SalonDimage(props) {
  return (
    <>
      <main className="relative w-50%">
        <img src={props.images && props.images[0]} alt="img" className="w-full object-contain"/>
        <div className="absolute md:left-[1rem] left-[1rem] md:top-[0.5rem] top-[0.5rem] rounded-md md:text-[0.7rem] text-[0.5rem] font-[590] flex items-center gap-[0.3rem] w-auto px-[0.8rem] py-[0.5rem] bg-white text-[#161718]">
          <IoMdThumbsUp className="text-[1rem] text-[black]" />
          <p>BOOKSY RECOMMENDED</p>
        </div>
        <div className=" absolute bg-[#181717e4] opacity-[0.9] text-white px-[0.8rem] py-[0.7rem] rounded top-0 right-0">
          <p className="font-bold text-2xl text-center">{props.ratings}</p>
          <span className="text-[0.7rem]">{props.reviews} reviews</span>
        </div>
      </main>
    </>
  );
}
