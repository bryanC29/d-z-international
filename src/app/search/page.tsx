'use client';

import ProductPage from '@/components/productPage/page';
import { GET_PRODUCTS } from '@/queries/getProducts';
import { useQuery } from '@apollo/client';
import client from '@/lib/apolloClient';
import { useEffect, useState } from 'react';

export default function Search() {
  const { data, loading, error } = useQuery(GET_PRODUCTS, { client });

  useEffect(() => {
    if (error) {
      console.error('Error fetching cart items:', error);
    }
  }, [error]);

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>Error loading cart data.</p>;

  const products:
    | {
        name: string;
        pid: string;
        media: string[];
        description: string;
        price: number;
        offer_price: number;
      }[]
    | undefined = data.products;

  return (
    <>
      <div className="flex flex-wrap flex-col md:flex-row">
        <div className="w-full md:w-1/5">
          <p className="text-xl py-3 px-1">Search by Filter</p>
          <hr />
          <div className="p-1 px-3">
            <input type="checkbox" name="men" id="men" />
            <label htmlFor="men">Men's Product</label>
          </div>
          <div className="p-1 px-3">
            <input type="checkbox" name="women" id="women" />
            <label htmlFor="women">Women's Product</label>
          </div>
        </div>

        <div className="flex flex-row flex-wrap w-full md:w-4/5 p-3">
          {products &&
            products.map((product, index) => (
              <ProductPage
                name={product.name}
                pid={product.pid}
                media={product.media}
                description={product.description}
                price={product.price}
                offer_price={product.offer_price}
                key={index}
              />
            ))}
        </div>
      </div>
    </>
  );
}
