'use client'
import React from 'react'
const orders = [
  { no: '01', id: '#12345', date: 'Nov 20th, 22', price: 'Rs 500.00', status: 'New order' },
  { no: '02', id: '#32456', date: 'Nov 19th, 22', price: 'Rs 600.00', status: 'On Delivery' },
  { no: '03', id: '#43567', date: 'Nov 19th, 22', price: 'Rs 450.00', status: 'Available' }
];
const Order = () => {
  return (
    <div className="m-3 bg-white p-6 rounded-lg shadow-md ">
    <div className="flex justify-between items-center mb-4 ">
      <p className="text-lg font-bold">Latest Orders</p>
      <a href="#" className="text-sm text-blue-500 hover:underline">View All</a>
    </div>
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b-2 ">
          <th className=" text-sm text-gray-500">No</th>
          <th className=" text-sm text-gray-500">ID</th>
          <th className=" text-sm text-gray-500">Date</th>
          <th className=" text-sm text-gray-500">Price</th>
          <th className=" text-sm text-gray-500">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index} className="border-b">
            <td className="py-3 px-2">{order.no}</td>
            <td className="py-3 px-2">{order.id}</td>
            <td className="py-3 px-2">{order.date}</td>
            <td className="py-3 px-2">{order.price}</td>
            <td className="py-3 px-2">{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Order