'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation';

export default function adminDashboard() {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const { user, loading } = useAuth();
  const [orderList, setOrderList] = useState<
    {
      id: number;
      uid: string;
      status: string;
      tracking_status: string;
      createdAt: string;
    }[]
  >([]);
  const api = process.env.NEXT_PUBLIC_API;
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${api}/order`);
        setOrderList(res.data[0]);
      } catch (err) {
        console.error(err);
      }
    };

    if (!loading && user?.token && user?.role === 'admin') {
      fetchOrders();
    } else {
      if (!loading && !user?.token) {
        router.push('/login');
      }
    }
  }, [loading, user?.token, user?.role, api, router]);

  const filteredOrders =
    selectedStatus === 'All'
      ? orderList
      : orderList.filter((order) => order.status === selectedStatus);

  const statuses = ['All', 'pending', 'confirmed', 'delivered', 'canceled'];

  // const totalSales = orderList.reduce((sum, order) => {
  //   const numeric = parseFloat(order.total.replace('$', ''));
  //   return sum + (isNaN(numeric) ? 0 : numeric);
  // }, 0);

  const stats = {
    totalOrders: orderList.length,
    // totalSales: `$${totalSales.toFixed(2)}`,
    refunded: orderList.filter((o) => o.status === 'Refunded').length,
    returned: orderList.filter((o) => o.status === 'Returned').length,
    delivered: orderList.filter((o) => o.status === 'Delivered').length,
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders Management</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border rounded p-4">
          <h2 className="text-sm text-gray-500">Total Orders</h2>
          <p className="text-xl font-semibold">{stats.totalOrders}</p>
        </div>
        {/* <div className="bg-white border rounded p-4">
          <h2 className="text-sm text-gray-500">Total Sales</h2>
          <p className="text-xl font-semibold">{stats.totalSales}</p>
        </div> */}
        <div className="bg-white border rounded p-4">
          <h2 className="text-sm text-gray-500">Delivered</h2>
          <p className="text-xl font-semibold">{stats.delivered}</p>
        </div>
        <div className="bg-white border rounded p-4">
          <h2 className="text-sm text-gray-500">Refunded</h2>
          <p className="text-xl font-semibold">{stats.refunded}</p>
        </div>
        <div className="bg-white border rounded p-4">
          <h2 className="text-sm text-gray-500">Returned</h2>
          <p className="text-xl font-semibold">{stats.returned}</p>
        </div>
      </div>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Status:</label>
        <select
          className="border rounded px-2 py-1"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full table-auto border border-gray-300 overflow-x-scroll  ">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Order ID</th>
            <th className="border px-4 py-2 text-left">Customer</th>
            {/* <th className="border px-4 py-2 text-left">Total</th> */}
            <th className="border px-4 py-2 text-left">Tracking Status</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Date</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{order.id ?? 'NA'}</td>
              <td className="border px-4 py-2">{order.uid}</td>
              {/* <td className="border px-4 py-2">{order.total}</td> */}
              <td className="border px-4 py-2">{order.tracking_status}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">
                {order.createdAt.substring(0, 10)}
              </td>
              <td className="border px-4 py-2">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => alert(`Viewing order ${order.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
