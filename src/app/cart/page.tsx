'use client';

import { useQuery } from '@apollo/client';
import { useAuth } from '../context/authContext';
import CartItem from '@/components/cartItem/page';
import { useEffect } from 'react';
import { GET_CART_ITEMS } from '@/queries/getCartItems';
import client from '@/lib/apolloClient';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const router = useRouter();
  const { user } = useAuth();

  const { data, loading, error } = useQuery(GET_CART_ITEMS, {
    client,
    variables: { uid: user?.uid },
    skip: !user?.uid,
  });

  useEffect(() => {
    if (!user?.token) router.push('/login');
  }, [user, router]);

  useEffect(() => {
    if (error) {
      console.error('Error fetching cart items:', error);
    }
  }, [error]);

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>Error loading cart data.</p>;

  const cartItems: { product_id: string; quantity: number }[] | undefined =
    data?.user?.cart;

  return (
    <div className="md:p-6 px-3 py-6 bg-neutral-800">
      <div className=" bg-black md:mx-20 md:py-10 py-6 md:px-3 px-2 rounded-2xl">
        <p className="text-4xl mb-8 text-center text-white">Shopping Cart</p>
        <hr className="mb-5" />

        {/* Handle the case when the cart is empty */}
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem
              key={index}
              productId={item.product_id}
              quantity={item.quantity}
              // Add more fields if needed
            />
          ))
        ) : (
          <p className="text-white text-xl text-center mt-8">
            Your cart is empty
          </p>
        )}
      </div>
    </div>
  );
}
