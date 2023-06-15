
export default function Login() {
    return(
        <div className="pt-16 px-2">
        <h2 className="select-none text-center text-xl font-bold pb-10">
            My Email Adress is:
        </h2>
        <input type="email"  className=" w-full rounded-md mb-28 border-b-2 border-solid border-b-black" placeholder="Email" />
        <button className="block my-0 mx-auto py-3 bg-gray-300 w-full rounded-sm font-black font-sans text-gray-500 mb-14">Continue</button>
        </div>
    )
}