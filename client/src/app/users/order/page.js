import UserLayout from "@/components/sidebar/user";
import React from "react";
import { FiEye } from "react-icons/fi";

const orders = [
  {
    id: "ORD001",
    date: "Jan 01, 2024",
    status: "Delivered",
    statusClass: "bg-green-100 text-green-600",
    total: "$120.00",
  },
  {
    id: "ORD002",
    date: "Jan 02, 2024",
    status: "In Transit",
    statusClass: "bg-yellow-100 text-yellow-600",
    total: "$85.00",
  },
  {
    id: "ORD003",
    date: "Jan 03, 2024",
    status: "Processing",
    statusClass: "bg-blue-100 text-blue-600",
    total: "$224.00",
  },
  {
    id: "ORD004",
    date: "Jan 04, 2024",
    status: "Delivered",
    statusClass: "bg-green-100 text-green-600",
    total: "$65.00",
  },
];

const MyOrders = () => {
  return (
      <UserLayout>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">My Orders</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Download All
        </button>
      </div>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">Order ID</th>
            <th className="text-left p-4">Date</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Total</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{order.id}</td>
              <td className="p-4">{order.date}</td>
              <td className="p-4">
                <span
                  className={`text-sm px-2 py-1 rounded ${order.statusClass}`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-4">{order.total}</td>
              <td className="p-4 flex items-center space-x-2">
                <FiEye className="text-gray-500" />
                <button className="text-blue-500 font-medium hover:underline">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </UserLayout>
  );
};

export default MyOrders;
