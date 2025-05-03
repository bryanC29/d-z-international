'use client';

import client from '@/lib/apolloClient';
import { GET_PRODUCT } from '@/queries/getProductDetails';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { use } from 'react';
import Carousel from '@/components/carousel/page';
import RatingStar from '@/components/ratingStar/page';
import { JSX } from '@emotion/react/jsx-runtime';
import Link from 'next/link';
import axios from 'axios';
import { useAuth } from '@/app/context/authContext';
import { useRouter } from 'next/navigation';

type Props = {
  params: Promise<{ pid: string }>;
};

const renderDescription = (description: string) => {
  const parts = description.split(/(\|\|\|\||\|\|)/).filter(Boolean);

  const result: JSX.Element[] = [];
  let addMargin = false;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (part === '||||') {
      addMargin = true;
      continue;
    }

    if (part === '||') {
      addMargin = false;
      continue;
    }

    result.push(
      <p key={i} className={addMargin ? 'mt-2' : ''}>
        {part.trim()}
      </p>
    );

    addMargin = false;
  }

  return result;
};

export default function ProductPage({ params }: Props) {
  const { pid } = use(params);
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [addedToCart, setAddedToCart] = useState(false);
  const api = process.env.NEXT_PUBLIC_API;
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

        setProduct(data?.product);
      } catch (error) {
        console.error('Failed to fetch product', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [pid]);

  const handleAddToCart = async () => {
    if (!authLoading && !user?.token) {
      router.push('/login');
    } else {
      try {
        const data = { product_id: pid, quantity: '1' };
        const res = await axios.post(`${api}/cart`, data, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        if (res.status === 201) {
          setAddedToCart(true);
        } else {
          console.error('Error adding to cart');
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (loading) {
    return <div className="text-white p-5">Loading...</div>;
  }

  if (!product) {
    return <div className="text-white p-5">Product not found.</div>;
  }

  return (
    <div className="bg-zinc-800 text-white">
      <div className="md:p-2 flex md:flex-row flex-col">
        <div className="bg-black w-11/12 md:w-1/2 md:h-[85vh] m-5 rounded-2xl overflow-hidden shadow-lg shadow-black p-2">
          <Carousel
            images={product.media}
            divHeightMd="85vh"
            divHeightNormal="40vh"
          />
        </div>

        <div className="text-white md:w-3/5 m-5 mt-2 rounded-2xl p-2 md:text-left text-center">
          <p className="text-4xl font-semibold mt-3 pb-3 border-b">
            {product.name}
          </p>
          <p className="my-1">Category: {product.category}</p>
          <RatingStar rating={product.top_points} />
          <p className="line-through text-red-400">&#8377;{product.price}</p>
          <p className="text-2xl pb-1 border-b">&#8377;{product.offer_price}</p>
          <p className="my-4">{product.description}</p>
          <div className="flex flex-col md:flex-row">
            {!addedToCart && (
              <button
                className="md:w-full m-2 border border-orange-400 p-2 rounded-md hover:bg-orange-400 hover:text-black"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            )}
            {!addedToCart && (
              <button className="md:w-full m-2 bg-orange-400 hover:bg-orange-500 text-black rounded-md p-2">
                Buy Now
              </button>
            )}
            {addedToCart && (
              <Link
                href="/cart"
                className="w-full border mb-2 mt-3 border-green-400 p-2 rounded-md hover:bg-green-400 hover:text-black text-center"
              >
                View Cart
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold whitespace-pre-line text-center md:text-start bg-zinc-600 p-3 rounded-md md:my-4 mb-4">
          Product Details
        </p>
        {renderDescription(product.details)}
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold whitespace-pre-line text-center md:text-start bg-zinc-600 p-3 rounded-md md:my-4 mb-4">
          Product Gallery
        </p>
        <div className="flex flex-col md:flex-row w-full flex-wrap justify-center items-center">
          {product.gallery.map((item: any, index: number) => (
            <Image
              alt={`Image-${index}`}
              src={item.image_url}
              height={500}
              width={500}
              className="w-full md:max-w-[40rem] h-auto rounded-md md:m-4 m-2"
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-col md:flex-row">
          {!addedToCart && (
            <button
              className="md:w-full border mb-2 md:me-4 md:m-0 border-orange-400 p-2 rounded-md hover:bg-orange-400 hover:text-black cursor-pointer"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          )}
          {!addedToCart && (
            <button className="md:w-full md:m-0 my-4 mt-2 bg-orange-400 hover:bg-orange-500 text-black rounded-md p-2 cursor-pointer">
              Buy Now
            </button>
          )}
          {addedToCart && (
            <Link
              href="/cart"
              className="w-full border mb-2 md:m-0 border-green-400 p-2 rounded-md hover:bg-green-400 hover:text-black text-center"
            >
              View Cart
            </Link>
          )}
        </div>
        <Link
          href="/search"
          className="text-lg font-semibold text-center bg-zinc-600 hover:bg-zinc-700 p-3 rounded-md md:my-4 inline-block w-full"
        >
          Show all products
        </Link>
      </div>
    </div>
  );
}
