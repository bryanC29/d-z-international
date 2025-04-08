'use client';

import { useState } from 'react';

export default function adminDashboard() {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [orderList] = useState([
    {
      id: 'ORD123',
      customer: 'John Doe',
      total: '$120.00',
      status: 'Processing',
      date: '2025-04-05',
    },
    {
      id: 'ORD124',
      customer: 'Jane Smith',
      total: '$85.00',
      status: 'Shipped',
      date: '2025-04-04',
    },
    {
      id: 'ORD125',
      customer: 'Mike Johnson',
      total: '$45.00',
      status: 'Delivered',
      date: '2025-04-03',
    },
    {
      id: 'ORD126',
      customer: 'Alice Walker',
      total: '$60.00',
      status: 'Canceled',
      date: '2025-04-02',
    },
    {
      id: 'ORD127',
      customer: 'Robert Green',
      total: '$110.00',
      status: 'Returned',
      date: '2025-04-01',
    },
    {
      id: 'ORD128',
      customer: 'Lisa White',
      total: '$95.00',
      status: 'Refunded',
      date: '2025-03-31',
    },
  ]);

  const filteredOrders =
    selectedStatus === 'All'
      ? orderList
      : orderList.filter((order) => order.status === selectedStatus);

  const statuses = [
    'All',
    'Processing',
    'Shipped',
    'Delivered',
    'Canceled',
    'Returned',
    'Refunded',
  ];

  const totalSales = orderList.reduce((sum, order) => {
    const numeric = parseFloat(order.total.replace('$', ''));
    return sum + (isNaN(numeric) ? 0 : numeric);
  }, 0);

  const stats = {
    totalOrders: orderList.length,
    totalSales: `$${totalSales.toFixed(2)}`,
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
        <div className="bg-white border rounded p-4">
          <h2 className="text-sm text-gray-500">Total Sales</h2>
          <p className="text-xl font-semibold">{stats.totalSales}</p>
        </div>
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
            <th className="border px-4 py-2 text-left">Total</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Date</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.customer}</td>
              <td className="border px-4 py-2">{order.total}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">{order.date}</td>
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
