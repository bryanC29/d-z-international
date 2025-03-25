// import QuantitySelector from "@/components/quantifier/page"

export default function cart(){
    return (
        <>
        <div className="md:p-6 px-3 py-6 md:bg-slate-400 bg-zinc-700">
            <div className=" md:bg-zinc-700 md:p-5 md:mx-20 py-5 md:px-3" >
                <p className="text-4xl mb-4 text-center text-white">Shopping Cart</p>
                <hr className="mb-5"/>
                <div className="md:p-2 flex flex-row md:mx-10 text-white gap-2 md:gap-10 mb-2 md:justify-center bg-zinc-500 rounded-lg  ">
                    <div className="md:h-52 h-48 rounded-lg md:w-[20%] w-[45%] bg-cyan-700 "></div>
                    <div className=" flex flex-col md:flex-row md:gap-14 md:w-[70%]">
                        <div className=" md:w-[100%]">
                            <p className="md:text-2xl text-lg m-1 ">Item nameItem nameItem nameItem </p>
                            <p className=" mx-1">details</p>
                            <p className="text-lg m-1">price</p>
                        </div>
                        <div className="my-4 mx-1 flex gap-14 justify-start md:w-[50%] md:flex-col">
                            <p>size: M</p>
                            <p>quantity: 1</p>
                        </div>
                    </div>
                </div>
                <div className="md:p-2 flex flex-row md:mx-10 text-white gap-2 md:gap-10 mb-2 md:justify-center bg-zinc-500 rounded-lg  ">
                    <div className="md:h-48 h-42 rounded-lg md:w-[20%] w-[45%] bg-cyan-700 "></div>
                    <div className=" flex flex-col md:flex-row md:gap-14 md:w-[70%]">
                        <div className=" md:w-[100%]">
                            <p className="md:text-2xl text-lg m-1 ">Item nameItem nameItem nameItem </p>
                            <p className=" mx-1">details</p>
                            <p className="text-lg m-1">price</p>
                        </div>
                        <div className="my-4 mx-1 flex gap-14 justify-start md:w-[50%] md:flex-col">
                            <p>size: M</p>
                            <p>quantity: 1</p>
                        </div>
                    </div>
                </div>
                <div className="md:p-2 flex flex-row md:mx-10 text-white gap-2 md:gap-10 mb-2 md:justify-center bg-zinc-500 rounded-lg  ">
                    <div className="md:h-48 h-42 rounded-lg md:w-[20%] w-[45%] bg-cyan-700 "></div>
                    <div className=" flex flex-col md:flex-row md:gap-14 md:w-[70%]">
                        <div className=" md:w-[100%]">
                            <p className="md:text-2xl text-lg m-1 ">Item nameItem nameItem nameItem </p>
                            <p className=" mx-1">details</p>
                            <p className="text-lg m-1">price</p>
                        </div>
                        <div className="my-4 mx-1 flex gap-14 justify-start md:w-[50%] md:flex-col">
                            <p>size: M</p>
                            <p>quantity: 1</p>
                        </div>
                    </div>
                </div>
                <div className="md:p-2 flex flex-row md:mx-10 text-white gap-2 md:gap-10 mb-2 md:justify-center bg-zinc-500 rounded-lg  ">
                    <div className="md:h-[30vh] h-48 rounded-lg md:w-[20%] w-[45%] bg-cyan-700 "></div>
                    <div className=" flex flex-col md:flex-row md:gap-14 md:w-[70%]">
                        <div className=" md:w-[100%]">
                            <p className="md:text-2xl text-lg m-1 ">Item nameItem nameItem nameItem </p>
                            <p className=" mx-1">details</p>
                            <p className="text-lg m-1">price</p>
                        </div>
                        <div className="my-4 mx-1 flex gap-14 justify-start md:w-[50%] md:flex-col">
                            <p>size: M</p>
                            <p>quantity: 1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};