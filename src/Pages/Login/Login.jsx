import { useState } from "react";
export default function Login(props) {
        //close the Popover component and enable scroll
    const handleClose = () =>{
        props.setOpenScroll(false)
        props.close()
    }
    const [activeTab, setActiveTab] = useState("emailInput");

    const openTab = (tabName) => {
    setActiveTab(tabName);
    };

return (
        <div
        className='relative h-screen w-full lg:flex lg:justify-center lg:items-center text-[0.95rem] text-[black]'
    >

      <div
       onClick={
            handleClose
        }
        className='bgTransparent animate__animated animate__fadeIn  hidden lg:block absolute top-0 right-0 bottom-0 w-full h-screen'
      >
        {/* close the BooksySearchPage component */}
    </div>
          <div className=" lg:absolute top-[10%]  z-[99999999999999999] lg:opacity-[0.95] lg:w-[40%] lg:h-[auto] lg:rounded-2xl bg-white lg:py-[2rem]">
            {activeTab === "emailInput"  && (
            <h2 className="text-center font-semibold text-lg font-sans pt-3 pb-[60px] select-none">My Email Address is:</h2> )}
        <div className="flex justify-center gap-2">
            <span className="w-[40%] border-none bg-[#03929b] p-[2px] rounded-2xl"></span>
            <span className="w-[40%] border-none bg-[#03929b] p-[2px] rounded-2xl"></span>
        </div>
        <form action="">
            {activeTab === "emailInput"  && (
        <div className="w-full pt-10">
            <input className="block my-0 mx-auto border border-solid border-[#00000093] rounded-lg w-[80%] mb-24 select-none" type="email" name="" id="" placeholder="Email"/>

            <button onClick={() => openTab("Done")} className="w-[90%] text-center bg-[#00a3ad] py-3 font-extrabold mx-auto my-0 block  rounded-xl text-white ">Continue</button>
        </div>
        )}
        {activeTab === "Done" && (
        <div>
            <input className="block my-0 mx-auto border border-solid border-[#00000093] rounded-lg w-[80%] select-none" type="email" name="" id="" placeholder="Password"/>

            <button className="w-[90%] text-center bg-[#00a3ad] py-3 font-extrabold mx-auto my-0 block  rounded-xl text-white">Continue</button>
        </div>)}
        </form>
        </div>
    </div>
    )
}
