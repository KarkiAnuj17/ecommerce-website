'use client'
import { Button, Card, CardBody, CardFooter, CircularProgress } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const productList=[
  {id: 1, productName: 'Red printed T-shirt', image:'/product-5.jpg', price:1500},
  {id: 2, productName: 'Black shoe', image:'/product-12.jpg', price:1500},
  {id: 3, productName: 'Black printed Trousers', image:'/product-6.jpg', price:1500},
  {id: 4, productName: 'Blue printed T-shirt', image:'/product-7.jpg', price:1500},
  {id: 5, productName: 'Blue printed T-shirt', image:'/product-8.jpg', price:1500},
  {id: 6, productName: 'Blue printed T-shirt', image:'/product-9.jpg', price:1500},
  {id: 7, productName: 'Blue printed T-shirt', image:'/product-10.jpg', price:1500},
  {id: 8, productName: 'Blue printed T-shirt', image:'/product-11.jpg', price:1500},
]
const LatestProduct = () => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-2 p-2">
        {productList.map((item) => (
          <Card shadow="sm" key={item.id} isPressable onPress={() => console.log("item pressed")}>
            <CardBody onClick={() => router.push('/product/' + item.id)} className="p-0">
              <Image
                src={item.image}
                width={250}
                height={250}
                alt={item.productName}
                layout="responsive"
                className="object-cover"
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <div className="flex flex-col m-0 font-light">
                <b>{item.productName}</b>
                <b>Rs {item.price}</b>
              </div>
              <div className="flex gap-4 text-xl">
                <p onClick={() => setIsLiked(!isLiked)}>
                  <FaHeart color={isLiked ? "red" : "gray"} />
                </p>
                <p>
                  <GiShoppingCart />
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default LatestProduct