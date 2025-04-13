'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, gql } from '@apollo/client';
import { useAuth } from '../context/authContext';
import client from '@/lib/apolloClient';
import { GET_USER } from '@/queries/getUser';

export default function Profile() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.token) router.push('/login');
  }, [user, router]);

  const { data, loading, error } = useQuery(GET_USER, {
    client,
    variables: {
      uid: user?.uid || '', // ✅ pass the actual UID
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
    <div className="bg-gray-700 flex flex-row">
      <div className="bg-zinc-600 h-auto w-[22%] sticky flex flex-col items-center">
        <img
          src={profile.profile_url || '/default-avatar.png'}
          alt="Profile"
          className="rounded-full h-40 w-40 m-10 object-cover bg-slate-400"
        />
        <p className="text-3xl font-semibold">{profile.name}</p>
        <div className="flex w-full items-center flex-col py-16">
          <p className="text-xl mb-5">see your orders</p>
          <button className="w-[90%] mb-20 h-14 bg-slate-400 rounded-lg">
            Orders
          </button>
          <p className="text-xl mb-5">goto your cart</p>
          <button className="w-[90%] h-14 bg-slate-400 rounded-lg">Cart</button>
        </div>
      </div>

      <div className="bg-neutral-700 h-auto w-[78%]">
        <div className="bg-white shadow rounded-2xl p-6 space-y-4 m-5 w-[80%]">
          <h2 className="text-xl font-semibold">User Information</h2>
          <div className="space-y-1 flex flex-col gap-5">
            <p>
              <strong>Name:</strong> {profile.name}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Phone:</strong> {profile.number}
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Change Password
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 space-y-4 m-5 w-[80%]">
          <h2 className="text-xl font-semibold">Address Book</h2>
          <div className="space-y-2 flex flex-col gap-5">
            {profile.addressDetails.length === 0 ? (
              <p className="text-gray-500">No saved addresses.</p>
            ) : (
              profile.addressDetails.map((addr: any, idx: number) => (
                <div key={idx} className="text-sm leading-6">
                  <p>
                    <strong>
                      {addr.type || 'Address'} {idx + 1}
                    </strong>
                  </p>
                  <p>
                    {addr.line1}
                    {addr.line2 ? `, ${addr.line2}` : ''}, {addr.city},{' '}
                    {addr.state}
                  </p>
                  <p>
                    {addr.country} - {addr.code}
                  </p>
                  <p>
                    📞 {addr.number}
                    {addr.alternate_number
                      ? ` | 📱 ${addr.alternate_number}`
                      : ''}
                  </p>
                  <p>
                    🗓️ Weekend Availability:{' '}
                    {addr.weekend_availability ? 'Yes' : 'No'}
                  </p>
                </div>
              ))
            )}
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Add New Address
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 space-y-4 m-5 w-[80%]">
          <h2 className="text-xl font-semibold">Payment Methods</h2>
          <div className="space-y-2 flex flex-col gap-5">
            <p>
              <strong>Card no. :</strong> **** **** **** 4242 (Visa)
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Add New Card
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 space-y-4 m-5 w-[80%]">
          <h2 className="text-xl font-semibold">Account Actions</h2>
          <div className="flex gap-4">
            <button
              onClick={logout}
              className="bg-blue-600 text-white px-4 w-[50%] py-2 rounded"
            >
              Log Out
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 w-[50%] rounded">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
