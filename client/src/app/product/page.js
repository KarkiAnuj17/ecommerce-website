'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";


const products=[
  {id: 1, productName: 'Red printed T-shirt', image:'/product-1.jpg',price: 10.99,
    originalPrice: 14.99},
  {id: 2, productName: 'Black shoe', image:'/product-2.jpg', price: 10.99,
    originalPrice: 14.99},
  {id: 3, productName: 'Black printed Trousers', image:'/product-3.jpg', price: 10.99,
    originalPrice: 14.99},
  {id: 4, productName: 'Blue printed T-shirt', image:'/product-4.jpg', price: 10.99,
    originalPrice: 14.99},
]

const Product = () => {
  return (
    <div>
    <div className="max-w-6xl mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.image}
                  alt={product.productName}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="font-medium mb-2">{product.productName}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                  <CiHeart className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
}

export default Product