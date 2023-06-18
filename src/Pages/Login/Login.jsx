import { useState } from "react";
export default function Login(props) {
        //close the Popover component and enable scroll
    const handleClose = () =>{
        props.setOpenScroll(false)
        props.close()
    }
    const [activeTab, setActiveTab] = useState("emailInput");
    const [showPassword, setShowpassword] = useState(false);

    const showPasswordHandler = () => {
    setShowpassword(!showPassword);
    }

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
            {activeTab === "Done"  && (
                <div>
                    <h2 className="text-center font-semibold text-lg font-sans pt-3 pb-1 select-none">Please Level Contact details</h2>
                    <p className="pb-[30px] text-center">In case you need to be contacted about your service</p>
                </div>
            )}
        <div className="flex justify-center gap-2">
            <span className={`${activeTab === "emailInput" ? "bg-[#03929b]" : "bg-white"}  w-[40%] border-none  p-[2px] rounded-2xl`}></span>
            <span className={`${activeTab === "Done" ? "bg-[#03929b]" : "bg-white"}  w-[40%] border-none  p-[2px] rounded-2xl`}></span>
        </div>
        <form action="">
            {activeTab === "emailInput"  && (
        <div className="w-full pt-10">
            <input className="block my-0 mx-auto border border-solid border-[#00000093] rounded-lg w-[80%] mb-24 select-none" type="email" name="" id="" placeholder="Email"/>

            <button onClick={() => openTab("Done")} className="w-[90%] text-center bg-[#00a3ad] py-3 font-extrabold mx-auto my-0 block  rounded-xl text-white  select-none">Continue</button>
        </div>
        )}
        {activeTab === "Done" && (
        <div className="pt-10">
            <input className="block my-0 mx-auto border border-solid border-[#00000093] rounded-lg w-[80%]  select-none" type="email" name="" id="" placeholder="First and Last Name"/>

            <br />
            <input type="tel" name="" id="" className="block my-0 mx-auto border border-solid border-[#00000093] rounded-lg w-[80%]  select-none" placeholder="Phone Number"/>
            <br />
            <input type={showPassword ? "text" : "password"} name="" id="" className="block my-0 mx-auto border border-solid border-[#00000093] rounded-lg w-[80%]  select-none" placeholder="Set Password"/>
            <span className="px-[10%]  select-none block ml-[50%] my-2 mb-11" >
               <label className="cursor-pointer" htmlFor="checkboxinput">
                Show Password {"  "}
               </label>
            <input onClick={showPasswordHandler} type="checkbox" name="" id="checkboxinput" className="cursor-pointer bg-[#00000063]"  />
            
            </span>
           <p className="text-center text-sm mb-4">By clicking below you agree to 
            <span className="cursor-pointer">
                <a href="#" className="text-[#00a3ad] select-none"> Booksy's Terms of Service</a>
            </span></p> 
            <div className="flex gap-[10%] justify-center">
                <button  className="w-[40%] text-center bg-[#000101f6] py-3 font-extrabold   rounded-xl text-white select-none" onClick={() => openTab("emailInput")}>Prev</button>
                <button className="w-[40%] text-center bg-[#00a3ad] py-3 font-extrabold   rounded-xl text-white select-none ">Done</button>
            </div>
        </div>)}
        </form>
        </div>
    </div>
    )
}
