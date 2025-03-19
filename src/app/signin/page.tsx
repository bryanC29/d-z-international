import Link from "next/link"
import Carousel_signin from "@/components/carousel_signin/page"

export default function(){
    return(
        <>
        <div className="bg-neutral-800 flex justify-center items-center">
            <div className="md:w-[60%] w-[90%] my-10 flex items-center justify-center rounded-2xl shadow-lg md:h-[110vh]">
                <div className="w-full hidden rounded-l-md h-[110vh] md:inline-block">
                    <Carousel_signin/>
                </div>
                <div className="bg-black p-7 md:p-4 w-full rounded-2xl md:h-[110vh] md:rounded-l-none flex flex-col justify-center ">
                    <p className="text-3xl text-center font-bold py-10 pt-5 text-white">Sign In</p>
                    <form className="pb-5" action="">
                        <label className="block text-lg text-white" id="name" htmlFor="">Name:</label>
                        <input className="w-full mb-3 border-2 border-black rounded-md p-2" placeholder="John Doe" type="name" name="name" id="name" />
                        <label className="block text-lg text-white" id="email" htmlFor="">Email:</label>
                        <input className="w-full mb-3 border-2 border-black rounded-md p-2" placeholder="john.doe@example.com" type="email" name="email" id="email" />
                        <label className="block text-lg text-white" id="contact" htmlFor="">Contact number:</label>
                        <input className="w-full mb-3 border-2 border-black rounded-md p-2" placeholder="+91 1234567890" type="tel" name="contact" id="contact" />
                        <label className="block text-lg text-white" id="password" htmlFor="">Password:</label>
                        <input className="block w-full mb-3 border-2 border-black rounded-md p-2" placeholder="Password" type="password" name="password" id="password" />
                        <label className="block text-lg text-white" id="confirmpassword" htmlFor="">Confirm Password:</label>
                        <input className="block w-full mb-5 border-2 border-black rounded-md p-2" placeholder="Repeat Password" type="password" name="confirmpassword" id="confirmpassword" />
                        <input className="mb-7 mr-2" type="checkbox" name="remember" id="remember" />
                        <label className="text-lg text-white " id="remember" htmlFor="">Remember Me</label>
                        <button className="bg-slate-700 rounded-md mb-6 px-3 py-1 block w-full text-lg text-white border-white hover:bg-slate-800" type="submit">Register</button>
                        <hr className="m-4"></hr>
                        {/* <Link href="/signin"className="bg-black rounded-md  px-3 py-1 mb-7 block w-full text-white text-lg border-2 border-white hover:text-black hover:bg-white" type="submit">Register</Link> */}
                        <p className="text-white text-center text-lg">Already a user? | <Link href="/login" className="underline italic">Login In</Link></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}