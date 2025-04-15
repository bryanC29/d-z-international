'use client';

import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { GET_PRODUCT_DETAILS } from '../../queries/getCartItems';
import { useEffect } from 'react';
import client from '@/lib/apolloClient';

interface CartItemProps {
  productId: string;
  quantity: number;
}

export default function CartItem({ productId, quantity }: CartItemProps) {
  console.log(productId);
  const { data, loading, error } = useQuery(GET_PRODUCT_DETAILS, {
    client,
    variables: { pid: productId },
    skip: !productId,
  });

  useEffect(() => {
    if (error) {
      console.error('Error fetching product details:', error);
    }
  }, [error]);

  // Handle loading and error states
  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error loading product details.</p>;

  // Extract product data from the response
  const { name, media, price, description, details, size } =
    data?.product || {};

  return (
    <div className="md:p-2 flex flex-row md:mx-10 text-white gap-2 md:gap-10 mb-2 md:justify-center p-1 bg-zinc-600 rounded-lg">
      <div className="relative md:h-60 h-48 rounded-lg md:w-[20%] w-[45%] bg-cyan-700 overflow-hidden">
        <Image
          src={media || '/default-image.png'} // Fallback if no image is available
          alt={name || 'Product Image'}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-14 md:w-[70%]">
        <div className="md:w-[100%]">
          <p className="text-2xl m-1 mb-2 md:mt-4">{name}</p>
          <p className="mx-1 md:mt-4">{description}</p>
          <p className="text-lg m-1 md:mt-14">${price}</p>
        </div>
        <div className="my-5 mx-1 flex gap-14 justify-start md:w-[50%] md:flex-col">
          <p>Size: {size}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
    </div>
  );
}
