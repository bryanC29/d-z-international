import Image from 'next/image';

interface CartItemProps {
  name: string;
  image: string;
  size: number;
  quantity: number;
  price: number;
}

export default function cartItem({
  name,
  image,
  size,
  quantity,
  price,
}: CartItemProps) {
  return (
    <>
      <div className="md:p-2 flex flex-row md:mx-10 text-white gap-2 md:gap-10 mb-2 md:justify-center p-1 bg-zinc-600 rounded-lg  ">
        <div className="relative md:h-60 h-48 rounded-lg md:w-[20%] w-[45%] bg-cyan-700 overflow-hidden">
          <Image
            src={image}
            alt="Dark & Dusky Logo"
            layout="fill"
            objectFit="fill" // Ensures the whole image fits inside
          />
        </div>
        <div className=" flex flex-col md:flex-row md:gap-14 md:w-[70%]">
          <div className=" md:w-[100%]">
            <p className="text-2xl m-1 mb-2 md:mt-4">{name}</p>
            <p className=" mx-1 md:mt-4">details</p>
            <p className="text-lg m-1 md:mt-14">{price}</p>
          </div>
          <div className="my-5 mx-1 flex gap-14 justify-start md:w-[50%] md:flex-col ">
            <p>size: {size}</p>
            <p>quantity: {quantity}</p>
          </div>
        </div>
      </div>
    </>
  );
}
