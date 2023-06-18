
export default function Login(props) {
        //close the Popover component and enable scroll
    const handleClose = () =>{
        props.setOpenScroll(false)
        props.close()
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
          <div className=" lg:absolute top-[10%] left-[16%] z-[99999999999999999] lg:opacity-[0.88] lg:w-[70%] lg:h-[auto] lg:rounded-2xl bg-white lg:py-[2rem] w-[22px]">
        <h2 className="select-none text-center text-xl font-bold pb-10">
            My Email Adress is:
        </h2>
        <input type="email"  className=" w-full rounded-md mb-28 border-b-2 border-solid border-b-black" placeholder="Email" />
        <button className="block my-0 mx-auto py-3 bg-gray-300 w-full rounded-sm font-black font-sans text-gray-500 mb-14">Continue</button>
        </div>
    </div>
    )
}
