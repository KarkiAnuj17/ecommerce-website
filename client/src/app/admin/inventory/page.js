import Layout from "@/component/sidebar/admin";
import { Input } from "@nextui-org/react";
import React from "react";

const inventoryItems = [
  { id: "INV001", product: "Nike Air Max 270", sku: "NKE-AM270-001", quantity: 50, reorderPoint: 20 },
  { id: "INV002", product: "Apple AirPods Pro", sku: "APL-APP-001", quantity: 100, reorderPoint: 30 },
  { id: "INV003", product: "Samsung Galaxy S21", sku: "SAM-GS21-001", quantity: 30, reorderPoint: 15 },
  { id: "INV004", product: "Levi's 501 Original Fit Jeans", sku: "LEV-501-001", quantity: 200, reorderPoint: 50 },
  { id: "INV005", product: "Sony PlayStation 5", sku: "SNY-PSS-001", quantity: 10, reorderPoint: 5 },
];

const InventoryManagement = () => {
  return (
    <Layout>
      <div>
    <div className="flex gap-4 items-center mb-8">
          <h1 className="text-3xl font-bold">Inventory</h1>
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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Inventory ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Product</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">SKU</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Reorder Point</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-4 text-sm text-gray-700">{item.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.product}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.sku}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.quantity}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.reorderPoint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </Layout>
  );
};

export default InventoryManagement;
