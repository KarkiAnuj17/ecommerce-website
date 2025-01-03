'use client';
import React from 'react';

const orders = [
  { id: "ORD001", product: "Nike Air Max 270", customer: "John Doe", total: "Rs 10,499", status: "Delivered" },
  { id: "ORD002", product: "Apple AirPods Pro", customer: "Jane Smith", total: "Rs 20,499", status: "Processing" },
  { id: "ORD003", product: "Samsung Galaxy S21", customer: "Bob Johnson", total: "Rs 65,999", status: "Shipped" },
  { id: "ORD004", product: "Levi's 501 Original Fit Jeans", customer: "Alice Brown", total: "Rs 4,999", status: "Delivered" },
  { id: "ORD005", product: "Sony PlayStation 5", customer: "Charlie Wilson", total: "Rs 49,999", status: "Processing" },
];

const RecentOrders = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-bold">Latest Orders</p>
        <a href="#" className="text-sm text-blue-500 hover:underline">View All</a>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-600 text-lg border-b space-y-2">
            <th className="py-2">Order ID</th>
            <th className="py-2">Product</th>
            <th className="py-2">Customer</th>
            <th className="py-2">Total</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b text-sm">
              <td className="py-4">{order.id}</td>
              <td className="py-4">{order.product}</td>
              <td className="py-4">{order.customer}</td>
              <td className="py-4">{order.total}</td>
              <td className="py-4">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
