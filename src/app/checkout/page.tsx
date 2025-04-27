'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import client from '@/lib/apolloClient';
import { GET_PRODUCT_PRICE } from '@/queries/getCartItems';
import { GET_SAVED_ADDRESSES } from '@/queries/getAddress';

export default function Checkout() {
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_API;
  const { user, loading } = useAuth();

  const [data, setData] = useState({
    name: '',
    email: '',
    cno: '',
    address: {
      fname: '',
      al1: '',
      al2: '',
      city: '',
      state: '',
      pin: 0,
      number: 0,
      type: 'home',
    },
  });

  interface CartItem {
    product_id: string;
    quantity: number;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [pricesMap, setPricesMap] = useState<Record<string, number>>({});

  interface Address {
    type: string;
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    code: string;
    number: string;
    alternate_number?: string;
    weekend_availability?: boolean;
  }

  const [savedAddresses, setSavedAddresses] = useState<Address[]>([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const res = await axios.get(`${api}/cart`, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        setCartItems(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (user?.token) {
      getCartItems();
    }
  }, [user?.token, api]);

  useEffect(() => {
    const getUserData = async () => {
      if (!user?.uid) return;

      try {
        const res = await client.query({
          query: GET_SAVED_ADDRESSES,
          variables: { uid: user.uid },
          fetchPolicy: 'no-cache',
        });

        const userData = res.data?.user;
        const addresses = userData?.addressDetails || [];

        setSavedAddresses(addresses);

        if (addresses.length > 0) {
          const firstAddress = addresses[0];

          setData((prev) => ({
            ...prev,
            name: userData?.name || '',
            email: userData?.email || '',
            cno: userData?.number || '',
            address: {
              ...prev.address,
              fname: userData?.name || '',
              al1: firstAddress.line1 || '',
              al2: firstAddress.line2 || '',
              city: firstAddress.city || '',
              state: firstAddress.state || '',
              pin: firstAddress.code || '',
              number: firstAddress.number || '',
              type: firstAddress.type || 'home',
            },
          }));

          setSelectedAddressIndex(0);
        } else {
          setData((prev) => ({
            ...prev,
            name: userData?.name || '',
            email: userData?.email || '',
            cno: userData?.number || '',
          }));
        }
      } catch (err) {
        console.error('Failed to fetch user data:', err);
      }
    };

    getUserData();
  }, [user?.uid]);

  useEffect(() => {
    const fetchPrices = async () => {
      if (!cartItems || cartItems.length === 0) return;

      try {
        const promises = cartItems.map((item) =>
          client.query({
            query: GET_PRODUCT_PRICE,
            variables: { pid: item.product_id },
          })
        );

        const results = await Promise.all(promises);

        let total = 0;
        const map: Record<string, number> = {};

        results.forEach((res, idx) => {
          const price = res.data?.product?.price || 0;
          const quantity = cartItems[idx].quantity;
          map[cartItems[idx].product_id] = price;
          total += price * quantity;
        });

        setPricesMap(map);
        setSubtotal(total);
      } catch (err) {
        console.error('Error fetching prices', err);
      }
    };

    fetchPrices();
  }, [cartItems]);

  useEffect(() => {
    if (!loading && !user?.token) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const delivery = 40;
  const tax = +(0.18 * subtotal).toFixed(2);
  const cartTotal = Math.round(subtotal + delivery + tax);

  const handleSubmit = async () => {
    console.log('Submitting order:', data);
    // const res = await axios.post(
    //   `${api}/orders`,
    //   {
    //     ...data,
    //     cart: cartItems,
    //     total: cartTotal,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${user?.token}`,
    //     },
    //   }
    // );
    // console.log('Order response:', res.data);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const inputClass = 'border border-black rounded w-full text-black p-2';
  const labelClass = 'block pt-4 pb-1';

  return (
    <div className="flex flex-col-reverse md:flex-row bg-gray-900 w-full p-6">
      <div className="w-full md:w-3/4 bg-black text-white rounded-xl py-4 px-6 my-4 pb-6">
        <form>
          <p className="text-xl text-center my-3 border-b pb-3">
            Contact Information
          </p>
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
            className={inputClass}
          />

          <label htmlFor="cno" className={labelClass}>
            Contact Number
          </label>
          <input
            type="tel"
            name="cno"
            id="cno"
            value={data.cno}
            onChange={handleChange}
            className={inputClass}
          />

          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            className={inputClass}
          />
        </form>

        <div>
          <p className="text-xl text-center my-3 border-b pb-3">
            Saved Addresses
          </p>
          {savedAddresses.length > 0 ? (
            <div className="space-y-4">
              {savedAddresses.map((addr, idx) => (
                <div
                  key={idx}
                  className={`border p-4 rounded-md cursor-pointer inline-block m-3 hover:bg-gray-700 ${
                    selectedAddressIndex === idx
                      ? 'border-orange-500 bg-gray-800 shadow-orange-600 shadow-md'
                      : 'border-gray-600'
                  }`}
                  onClick={() => {
                    setSelectedAddressIndex(idx);
                    setData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        fname: data.name || '',
                        al1: addr.line1 || '',
                        al2: addr.line2 || '',
                        city: addr.city || '',
                        state: addr.state || '',
                        pin: parseInt(addr.code || '0', 10),
                        number: parseInt(addr.number || '0', 10),
                        type: addr.type || 'home',
                      },
                    }));
                  }}
                >
                  <p className="font-semibold">{addr.type.toUpperCase()}</p>
                  <p>
                    {addr.line1}, {addr.line2}
                  </p>
                  <p>
                    {addr.city}, {addr.state}, {addr.country} - {addr.code}
                  </p>
                  <p>Contact: {addr.number}</p>
                  {addr.alternate_number && <p>Alt: {addr.alternate_number}</p>}
                  {addr.weekend_availability && <p>Available on weekends</p>}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No saved addresses found.</p>
          )}
        </div>

        <form>
          <p className="text-xl text-center my-3 border-b pb-3">
            Shipping Address
          </p>

          <label htmlFor="fname" className={labelClass}>
            Full Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={data.address.fname}
            onChange={handleAddressChange}
            className={inputClass}
          />

          <label htmlFor="al1" className={labelClass}>
            Address Line 1
          </label>
          <input
            type="text"
            name="al1"
            id="al1"
            value={data.address.al1}
            onChange={handleAddressChange}
            className={inputClass}
          />

          <label htmlFor="al2" className={labelClass}>
            Address Line 2
          </label>
          <input
            type="text"
            name="al2"
            id="al2"
            value={data.address.al2}
            onChange={handleAddressChange}
            className={inputClass}
          />

          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={data.address.city}
            onChange={handleAddressChange}
            className={inputClass}
          />

          <label htmlFor="state" className={labelClass}>
            State
          </label>
          <select
            name="state"
            id="state"
            value={data.address.state}
            onChange={handleAddressChange}
            className={inputClass}
          >
            <option value="">Select State</option>
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">
              Dadra and Nagar Haveli and Daman and Diu
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
          </select>

          <label htmlFor="pin" className={labelClass}>
            PIN Code
          </label>
          <input
            type="number"
            name="pin"
            id="pin"
            value={data.address.pin}
            onChange={handleAddressChange}
            className={inputClass}
          />

          <label htmlFor="number" className={labelClass}>
            Contact Number
          </label>
          <input
            type="text"
            name="number"
            id="number"
            value={data.address.number}
            onChange={handleAddressChange}
            className={inputClass}
          />

          <label htmlFor="type" className={labelClass}>
            Address Type
          </label>
          <select
            name="type"
            id="type"
            value={data.address.type}
            onChange={handleAddressChange}
            className={inputClass}
          >
            <option value="home">Home</option>
            <option value="work">Work</option>
          </select>
        </form>
      </div>

      <div className="w-full md:w-1/5 bg-black text-white rounded-xl p-6 my-4">
        <div className="text-xl text-center border-b p-2">Payment method</div>
        <div className="m-6 bg-gray-800 hover:bg-gray-700 inline-block px-4 py-2 cursor-pointer border-2 border-orange-500 rounded-lg shadow-md shadow-orange-600">
          COD - Cash on Delivery
        </div>

        <p className="text-xl text-center border-b p-2 mb-4">Order Summary</p>
        <div className="flex justify-between">
          <p>Total items:</p>
          <p>{cartItems.length}</p>
        </div>
        <div className="flex justify-between">
          <p>Cart subtotal:</p>
          <p>₹{subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery:</p>
          <p>₹{delivery}</p>
        </div>
        <div className="flex justify-between">
          <p>Tax (18%):</p>
          <p>₹{tax}</p>
        </div>
        <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
          <p>Total amount:</p>
          <p>₹{cartTotal}</p>
        </div>

        <button
          className="block w-full text-center border border-green-700 hover:bg-green-700 p-3 rounded-md mt-6 my-2"
          onClick={handleSubmit}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
