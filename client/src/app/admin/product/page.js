'use client';
import Layout from '@/component/sidebar/admin';
import { Input } from '@nextui-org/react';
import React from 'react';

const products = [
  { id: "PROD001", name: "Nike Air Max 270", category: "Footwear", price: "10,499", stock: 50 },
  { id: "PROD002", name: "Apple AirPods Pro", category: "Electronics", price: "20,499", stock: 100 },
  { id: "PROD003", name: "Samsung Galaxy S21", category: "Electronics", price: "65,999", stock: 30 },
  { id: "PROD004", name: "Levi's 501 Original Fit Jeans", category: "Apparel", price: "4,999", stock: 200 },
  { id: "PROD005", name: "Sony PlayStation 5", category: "Electronics", price: "49,999", stock: 10 },
];

const ProductCatalog = () => {
  return (
    <Layout>
      <div>
    <div className="flex gap-4 items-center mb-8">
          <h1 className="text-3xl font-bold">Product</h1>
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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <p className="text-2xl font-bold mb-4">Product Catalog</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3">Product ID</th>
              <th className="py-3">Name</th>
              <th className="py-3">Category</th>
              <th className="py-3">Price</th>
              <th className="py-3">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                <td className="py-3">{product.id}</td>
                <td className="py-3">{product.name}</td>
                <td className="py-3">{product.category}</td>
                <td className="py-3">Rs {product.price}</td>
                <td className="py-3">{product.stock}</td>
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

export default ProductCatalog;
