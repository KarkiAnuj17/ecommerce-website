'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'; 
import { useRouter } from 'next/navigation';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const getProduct = async (values) => {
    const {data} = await axios.get(`http://localhost:4000/products`, values);
    setProducts(data)
  }

  useEffect(() => {
    getProduct();
}, []);

  return (
    <div className="flex ">
      <div className="flex-col">
      <p className="text-2xl font-bold m-3 p-2">Product Recently Added</p>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 ">
      {products.map((item) => (
        <div key={item._id}>
        <Card  >
          <CardBody onClick={() => router.push('/product/' + item._id)} className=" p-0 ">
          <Image
              src="/product-3.jpg"
              width={250}      
              height={250}     
              alt={item.productName}
              layout="responsive" 
              className="object-cover "
             
          />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <div className="flex flex-col m-0 font-light">
              <b>{item.productName}</b>
              <b>Rs {item.productPrice}</b>
            </div>
            
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
