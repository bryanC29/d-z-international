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
      <h1>Hello</h1>
      <div className="flex flex-row flex-wrap">
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
      <p>Search</p>
    </>
  );
}
