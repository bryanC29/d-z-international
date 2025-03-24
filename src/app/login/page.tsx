'use client';

import Link from "next/link"
import Carousel_login from "@/components/carousel_login/page"
import { useState } from "react";
import { validateName, validateEmail, validateMobile, validatePasswords } from "@/util/validate/validate";


export default function Login() {

    const [visible,setVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState({ email: ""});


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    
        const emailError = validateEmail(email);
    
        if (emailError) {
          setError({email: emailError});
        } else {
          setError({email: ""});
          alert("All fields are valid! ✅");
          // Proceed with sign-in logic
        }
    };


    return (
        <>
        <div className="bg-neutral-800 flex justify-center items-center">
            <div className="md:w-[60%] w-[90%] my-10 flex relative items-center h-[80vh] justify-center rounded-2xl shadow-lg">
                <div className="w-full h-[80vh] rounded-l-md hidden md:inline-block">
                    <Carousel_login />
                </div>
                <div className="bg-black p-7 md:p-4 w-full rounded-2xl md:rounded-l-none h-[80vh] flex flex-col justify-center">
                    <p className="text-3xl text-center font-bold py-10 pt-5 text-white">Continue Shopping</p>
                    <form onSubmit={handleSubmit} className="pb-4" action="">
                        <label className="block text-lg text-white" id="email" htmlFor="">Email:</label>
                        {error.email && <p className="text-red-500">{error.email}</p>}
                        <input className="w-full mb-3 border-2 border-white rounded-md p-2" placeholder="john.doe@example.com" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label className="block text-lg text-white" id="password" htmlFor="">Password:</label>
                        <div className="flex">
                            <input className="block w-full mb-5 border-t-2 border-l-2 border-b-2 border-white rounded-l-md p-2" placeholder="Password" type={visible ? "text" : "password"} name="password" id="password" />
                            <button className="bg-slate-600 hover:bg-slate-800 block mb-5 border-t-2 border-r-2 border-b-2 rounded-r-md p-2 w-10 border-white" type="button" onClick= {() => setVisible(!visible)}></button>
                        </div>
                        <input className="mb-4 mr-2" type="checkbox" name="remember" id="remember" />
                        <label className="text-lg text-white " id="remember" htmlFor="">Remember Me</label>
                        <Link className="block underline mb-5 text-lg text-white italic" href="http://">Forgot Password?</Link>
                        <button className="bg-slate-700 rounded-md mb-3 px-3 py-1 block w-full text-lg text-white border-white hover:bg-slate-800" type="submit">Login</button>
                        <hr className="my-4" ></hr>
                        <p className="text-center text-lg mb-3 text-white" >OR</p>
                        <Link href="/signin"className="bg-black rounded-md  px-3 py-1 mb-7 block w-full text-white text-lg border-2 border-white hover:text-black hover:bg-white text-center" type="submit">Register</Link>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}