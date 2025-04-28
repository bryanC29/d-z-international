'use client';

import client from '@/lib/apolloClient';
import { GET_PRODUCT } from '@/queries/getProductDetails';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { use } from 'react';

type Props = {
  params: Promise<{ pid: string }>;
};

export default function ProductPage({ params }: Props) {
  // Unwrap the promise with React.use()
  const { pid } = use(params);
  console.log(pid);

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { data } = await client.query({
          query: GET_PRODUCT,
          variables: { pid },
          fetchPolicy: 'no-cache',
        });
        console.log(data);

        setProduct(data?.product);
      } catch (error) {
        console.error('Failed to fetch product', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [pid]);

  if (loading) {
    return <div className="text-white p-5">Loading...</div>;
  }

  if (!product) {
    return <div className="text-white p-5">Product not found.</div>;
  }
  console.log(product);

  return (
    <div className="bg-zinc-800 md:p-10 flex md:flex-row flex-col">
      <div className="bg-orange-400 w-[90%] md:w-[40%] m-5 rounded-2xl p-2">
        {product.media && (
          <Image
            src={product.media[0]}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-2xl object-contain"
          />
        )}
      </div>

      <div className="text-white md:w-[60%] m-5 rounded-2xl p-2 md:text-left text-center">
        <p className="text-5xl font-bold mt-3">{product.name}</p>
        <hr className="mt-3" />
        <div className="text-left">
          <p className="text-2xl mt-8">4 out of 5 rating</p>
          <p className="text-xl mt-5">M.R.P.:</p>
          <p className="line-through text-xl">${product.price}</p>
          <p className="text-4xl mt-3">${product.offer_price}</p>
        </div>
        <hr className="mt-3" />
        <div className="mt-4">
          <p className="text-lg flex">
            Category: <span className="ml-1 font-bold">{product.category}</span>
          </p>
        </div>
        <hr className="mt-2" />
        <p className="text-xl font-bold mt-4">About this item:</p>
        <p className="mt-2 whitespace-pre-line">{product.description}</p>
        <div className="flex mt-5">
          <button className="h-14 w-[50%] m-2 rounded-lg text-lg font-bold border-white border-2 bg-black hover:bg-white hover:text-black">
            Add To Cart
          </button>
          <button className="h-14 w-[50%] m-2 rounded-lg text-lg font-bold bg-orange-600 hover:bg-orange-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
