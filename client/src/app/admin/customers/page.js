import Layout from "@/components/sidebar/admin";
import { Input } from "@nextui-org/react";
import React from "react";

const customers = [
  { id: "CUST001", name: "John Doe", email: "john.doe@example.com", orders: 5, spent: "Rs 64995" },
  { id: "CUST002", name: "Jane Smith", email: "jane.smith@example.com", orders: 3, spent: "Rs 74700" },
  { id: "CUST003", name: "Bob Johnson", email: "bob.johnson@example.com", orders: 2, spent: "Rs 159998" },
  { id: "CUST004", name: "Alice Brown", email: "alice.brown@example.com", orders: 4, spent: "Rs 23800" },
  { id: "CUST005", name: "Charlie Wilson", email: "charlie.wilson@example.com", orders: 1, spent: "Rs 49999" },
];

const CustomerDirectory = () => {
  return (
      <div className="min-h-screen bg-gray-50">
    <div className="flex gap-4 items-center mb-8">
          <h1 className="text-3xl font-bold">Customer</h1>
          <div className="flex items-center ml-auto ">
            <Input
              id="search"
              name="search"
              type="text"
              placeholder="Search products..."
              className="w-full"
            />
          </div>
        </div>
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Customer Directory</h1>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Customer ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Total Orders</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Total Spent</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr
                key={customer.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 text-sm text-gray-700">{customer.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{customer.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{customer.email}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{customer.orders}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{customer.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default CustomerDirectory;
