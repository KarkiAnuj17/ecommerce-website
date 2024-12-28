'use client'
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const productList = [
  { id: 1, productName: 'Red printed T-shirt', image: '/product-1.jpg', price: 1500 },
  { id: 2, productName: 'Black shoe', image: '/product-2.jpg', price: 1500 },
  { id: 3, productName: 'Black printed Trousers', image: '/product-3.jpg', price: 1500 },
  { id: 4, productName: 'Blue printed T-shirt', image: '/product-4.jpg', price: 1500 },
];

const FeaturedProduct = () => {
  const router = useRouter();
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-2 p-2">
        {productList.map((item) => (
          <Card
            key={item.id}
            shadow="sm"
            className="hover:shadow-lg transition-shadow duration-300"
            isPressable
          >
            <CardBody onClick={() => router.push(`/product/${item.id}`)} className="p-0">
              <Image
                src={item.image}
                width={250}
                height={250}
                alt={`Image of ${item.productName}`}
                layout="responsive"
                className="object-cover"
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <div className="flex flex-col m-0 font-light">
                <b>{item.productName}</b>
                <b>Rs{item.price}</b>
              </div>
              <div className="flex gap-4 text-xl">
                <p onClick={() => toggleLike(item.id)}>
                  <FaHeart color={likedItems[item.id] ? "red" : "gray"} />
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

export default FeaturedProduct;
