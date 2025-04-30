'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, gql } from '@apollo/client';
import { useAuth } from '../context/authContext';
import client from '@/lib/apolloClient';
import { GET_USER } from '@/queries/getUser';
import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  const { user, logout, loading: authLoading } = useAuth();
  const router = useRouter();
  const btnClass =
    'border-2 border-orange-600 hover:bg-orange-600 py-2 px-4 rounded m-2 md:w-full text-center';

  useEffect(() => {
    if (!authLoading && !user?.token) router.push('/login');
  }, [user, router]);

  const { data, loading, error } = useQuery(GET_USER, {
    client,
    variables: {
      uid: user?.uid || '',
    },
    context: {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    },
    skip: !user?.token || !user?.uid,
  });

  if (!user?.token || loading)
    return <p className="text-white p-10">Loading...</p>;
  if (error) return <p className="text-red-500 p-10">Error: {error.message}</p>;

  const profile = data.user;

  return (
    <div className="flex flex-col md:flex-row bg-neutral-800 text-white w-full">
      <div className="flex flex-col bg-black items-center p-4 m-2 rounded-md md:rounded-none md:m-0 md:w-1/5">
        <Image
          src={
            profile.profile_url ||
            `https://avatar.iran.liara.run/username?username=${profile.name}`
          }
          alt="Profile"
          height={500}
          width={500}
          className="rounded-full md:h-24 h-32 w-auto bg-slate-400 m-4"
        />
        <p className="text-2xl font-semibold md:text-center mb-3">
          {profile.name}
        </p>
        <div className="flex flex-row md:flex-col items-center w-full">
          <Link href="" className={`${btnClass} w-full md:m-3`}>
            Orders
          </Link>
          <Link href="/cart" className={`${btnClass} w-full md:m-3`}>
            Cart
          </Link>
        </div>
      </div>

      <div className="p-1 w-full">
        <div className="bg-black p-2 m-2 rounded-md">
          <p className="text-xl pb-1 border-b mb-2">User information</p>
          <p className="text-gray-400">
            Name: <span className="text-white">{profile.name}</span>
          </p>
          <p className="text-gray-400">
            Email address: <span className="text-white">{profile.email}</span>
          </p>
          <p className="text-gray-400">
            Primary contact number:{' '}
            <span className="text-white">{profile.number}</span>
          </p>
        </div>

        <div className="bg-black p-2 m-2 rounded-md">
          <p className="text-xl pb-1 border-b mb-2">Saved Addresses</p>
          <div className="md:flex md:flex-row md:flex-wrap">
            {profile.addressDetails.length === 0 ? (
              <p className="text-gray-500">No saved addresses.</p>
            ) : (
              profile.addressDetails.map((addr: any, idx: number) => (
                <div key={idx} className="border m-2 p-2 rounded-md">
                  <strong>
                    {addr.type.substring(0, 1).toUpperCase() +
                      addr.type.substring(1) || 'Address'}
                  </strong>
                  <p className="text-gray-400">
                    Address:
                    <span className="text-white">
                      {' ' + addr.line1 + ', ' + addr.line2}
                    </span>
                  </p>
                  <p className="text-gray-400">
                    City: <span className="text-white">{' ' + addr.city}</span>
                  </p>
                  <p className="text-gray-400">
                    State:{' '}
                    <span className="text-white">{' ' + addr.state}</span>
                  </p>
                  <p className="text-gray-400">
                    Country:{' '}
                    <span className="text-white">{' ' + addr.country}</span>
                  </p>
                  <p className="text-gray-400">
                    Code: <span className="text-white">{' ' + addr.code}</span>
                  </p>
                  <p className="text-gray-400">
                    Contact number:
                    <span className="text-white">{' ' + addr.number}</span>
                  </p>
                  {addr.alternate_number && (
                    <p className="text-gray-400">
                      Alternate number:
                      <span className="text-white">
                        {' ' + addr.alternate_number}
                      </span>
                    </p>
                  )}
                  <p className="text-gray-400">
                    Weekend Availability:
                    <span className="text-white">
                      {addr.weekend_availability ? ' Yes' : ' No'}
                    </span>
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="flex flex-col md:flex-row">
            <button className={btnClass}>Manage Saved Addresses</button>
            <button className={btnClass}>Add New Address</button>
          </div>
        </div>

        <div className="bg-black p-2 m-2 rounded-md">
          <p className="text-xl pb-1 border-b mb-2">Account Action</p>
          <div className="md:flex md:flex-row">
            <button className={`${btnClass}`}>Reset Password</button>
            <button className={`${btnClass}`}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
