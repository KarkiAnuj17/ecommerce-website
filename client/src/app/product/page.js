'use client'
import { Button, Card, CardBody, CardFooter, CircularProgress } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import ProductCatogories from './catogories/page'
import { FaHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const productList=[
  {id: 1, productName: 'Iphone', image:'https://imgs.search.brave.com/arkTNGlxIlD4XaSOTZbzNu1vCz-2dLszrstRYOJIn7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzY1MDhi/Y2Y0YjYxOTRlYTcw/NTQyNTJiNy9tYXN0/ZXIvd18zMjAsY19s/aW1pdC9pUGhvbmUt/MTUtUmV2aWV3LVRv/cC1HZWFyLmpwZw', price:150000},
  {id: 2, productName: 'Laptop', image:'https://imgs.search.brave.com/NgqT_2ZeWxV2TbcB6enS5ldkn0SxGzSnk8FpwvgMYjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/Nzk2MTQxMi9waG90/by9sYXB0b3AtaXNv/bGF0ZWQtb24td2hp/dGUtYmFja2dyb3Vu/ZC13aXRoLXR3by1j/bGlwcGluZy1wYXRo/cy1pbmNsdWRlZC1y/ZWFsaXN0aWMtM2Qt/cmVuZGVyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz02UGt4/RmFfOExrUmRZLVlF/UzFPNnhqcjFzRFlU/eVRuLWM4SnFYRXJl/RTEwPQ', price:100000},
  {id: 3, productName: 'Headphone', image:'https://imgs.search.brave.com/G4aKCoH6NN4eeZUoscyMGM3oEPGyVhKiGfFd1gx7Q1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcy/ODQ3MjE4L3Bob3Rv/L2hlYWRwaG9uZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVZYTEtIVXRHZEQ4/cFBIOFB6UkhTLTg3/UW5kekRzc1pwTWRz/T2ZaTmhLdVU9', price:3000},
  {id: 4, productName: 'Camera', image:'https://imgs.search.brave.com/RrAWSNpVxzS4Bxwc0Sie7YESiYkMIRnGFDxp2NvNiOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODEyVGo0WTRvZEwu/anBn', price:14000},
  {id: 5, productName: 'Earphone', image:'https://imgs.search.brave.com/wJ0mNfetF-tt86R69ymHySysrWdS8P6zwSmmWdc3eQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXR5bW90aWMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA0L2VyM3NlZWFy/cGhvbmVzLnBuZw', price:1400},
  {id: 6, productName: 'Watch', image:'https://imgs.search.brave.com/y31z0gf2yJqZkYCAzrIF78DanoB5uFJOzH7wYC_7hRs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbWFydC13YXRj/aC13aXRoLW51bWJl/ci05MC1mYWNlXzEy/NDkwMzQtMjkzMDcu/anBnP3NpemU9NjI2/JmV4dD1qcGc', price:15000},
  {id: 7, productName: 'Television', image:'https://imgs.search.brave.com/GM81bkuVyjK8RyIeMtIzcUiPQQlsiK5Tvz6Gq-kqLI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2ZR/ajVYOUxkNjlZU3dF/U21OYTQ3RGUtMzIw/LTgwLnBuZw', price:50000},
  {id: 8, productName: 'Consoles', image:'https://imgs.search.brave.com/VTa7zmHeDzm-Dl78E0Y2Yv3wMawBOqapzSp0uPNTHPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L01N/aHJEaEtydUZ1YWRt/RkJidVlSTUwtMzIw/LTgwLmpwZw', price:80000},
]

const Product = () => {
  const router = useRouter()
  const [isLiked,setIsLiked]= useState(false)
  return (
    <div>
      <ProductCatogories/>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-1 p-2">
      
      {productList.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody onClick ={()=>router.push('/product/'+item.id)} className="overflow-visible p-0">

          <Image
              src={item.image}
              width={200}      
              height={200}     
              alt={item.productName}
              layout="responsive" 
              className="object-cover"
          />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <div className="flex flex-col">
            <b>{item.productName}</b>
            <b>Rs{item.price}</b>
            </div>
            <div className="flex  gap-4 text-xl">
            <p onClick={()=>setIsLiked(!isLiked)}><FaHeart  color={isLiked?"red":"gray"}/></p>
            <p ><GiShoppingCart /></p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
  );
}

export default Product