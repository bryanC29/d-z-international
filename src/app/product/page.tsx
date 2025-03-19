import Image from "next/image"

export default function(){
    return(
        <>
        <div className="bg-zinc-800 md:p-10 flex md:flex-row flex-col ">
            <div className="bg-orange-400 w-[90%] md:w-[40%] m-5 rounded-2xl p-2"></div>
            <div className=" text-white md:w-[60%] m-5 rounded-2xl p-2 md:text-left text-center">
                <p className="text-5xl font-bold mt-3">Leather Belt - stitched pattern</p>
                <hr className="mt-3 "/>
                <div className="text-left">
                    <p className="text-2xl mt-8">4 out of 5 rating</p>
                    <p className="text-xl mt-5">M.R.P.: </p>
                    <p className="line-through text-xl">$1999</p>
                    <p className="text-4xl mt-3">$199</p>
                </div>
                <hr className="mt-3"/>
                <div className="mt-4">
                    <p className="text-lg  flex ">brand:<p className="ml-1 font-bold">DnZ</p></p>
                    <p className="text-lg  flex ">brand:<p className="ml-1 font-bold">DnZ</p></p>
                    <p className="text-lg  flex ">brand:<p className="ml-1 font-bold">DnZ</p></p>
                    <p className="text-lg  flex ">brand:<p className="ml-1 font-bold">DnZ</p></p>
                </div>
                <hr className="mt-2"/>
                <p className="text-xl font-bold mt-4">About this item: </p>
                <p className="mt-2">item 📸 50MP Triple Camera with OIS & 30X Zoom – Capture crystal-clear, shake-free photos and 4K videos with Ultra HDR, ultra-wide 120º lens, and up to 30X digital zoom for stunning detail in any light.
                    ⚡ Snapdragon 7s Gen3 Processor – Experience ultra-fast performance with a 33% CPU and 11% GPU boost over Phone (2a) for seamless multitasking, gaming, and app switching.
                    📺 6.77” AMOLED Display, 120Hz Refresh Rate – Enjoy vivid colors and ultra-smooth visuals with 3000 nits peak brightness for unmatched clarity—even in direct sunlight.
                    🔋 5000mAh Battery + 50W Fast Charging – Stay unplugged for 2 days and power up to 50% in under 20 minutes with long-lasting battery life and efficient charging.
                    🏆 Android 15 with Nothing OS – Get a clean, intuitive UI with built-in AI tools, 6 years of updates, and smart customization for a future-proof smartphone experience
                </p>
                <div className="flex mt-5">
                    <button className="h-14 w-[50%] m-2 rounded-lg text-lg font-bold border-white border-2 bg-black hover:bg-white hover:text-black">Add To Cart</button>
                    <button className="h-14 w-[50%] m-2 rounded-lg text-lg font-bold bg-orange-600 hover:bg-orange-700">Buy Now</button>
                </div>
            </div>
        </div>
        </>
    )
}