'use client'; // Add this at the top of your file

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []); 

  return (
    <div className="flex ">
      <div className="flex-col">
      <p className="text-2xl font-bold m-3 p-2">Product Recently Added</p>
      <div className="flex w-full   ">
      {products.map((item) => (
        <div className="p-2">
        <Card shadow="sm" key={item.id}>
          <CardBody>
            <Image src="/product-3.jpg" height={100} width={150} layout="responsive" 
              className="object-cover"/>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <div className="flex flex-col m-0 font-light">
              <b>{item.productName}</b>
              <b>Rs {item.productPrice}</b>
            </div>
            <b className="text-red-600">Remove</b>
          </CardFooter>
        </Card>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default ProductList;
