'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ProductPageProps {
  name: string;
  pid: string;
  media: string[];
  description: string;
  price: number;
  offer_price: number;
}

export default function ProductPage({
  name,
  pid,
  media,
  description,
  price,
  offer_price,
}: ProductPageProps) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    console.log('Add to cart button clicked');
    setAddedToCart(true);
  };

  return (
    <div className="flex flex-col w-full md:w-1/5 bg-black text-white m-2 rounded-xl overflow-hidden shadow md:hover:scale-105 transition-all">
      <Image
        src={media[0]}
        alt=""
        height={500}
        width={500}
        className="w-full"
      />
      <div className="p-5">
        <p className="text-2xl">&#8377; {offer_price}</p>
        <p className="line-through text-gray-400">&#8377; {price}</p>
        <p className="text-xl">{name}</p>
        <p>{description}</p>
        {!addedToCart && (
          <button
            className="border-orange-400 border w-full p-3 my-2 mt-8 rounded-md hover:bg-orange-400 hover:text-black"
            onClick={handleAddToCart}
            id={pid}
          >
            Add to Cart
          </button>
        )}
        {addedToCart && (
          <Link
            href=""
            className="border-green-400 block text-center border w-full p-3 my-2 mt-8 rounded-md hover:bg-green-400 hover:text-black"
          >
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
}
