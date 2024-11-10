'use client'
import CustomNavbar from '@/component/navbar/header/page';
import React from 'react';
import FooterNavbar from '@/component/navbar/footer/page';
import Image from 'next/image';
import FeaturedProduct from './product/featured-product/page';
import LatestProduct from './product/latest-product/page';
import { Select, SelectItem} from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";


const Homepage = () => {
  return (
    <div className="flex flex-col">
      <CustomNavbar />,
      {/* <ProductCatogories/>, */}
      <div className="flex flex-col items-center justify-center gap-5">
      <div className=" w-1.7/3 h-60 bg-gray-300 rounded-lg  flex items-center justify-center">
      <div className="flex">
      <div className="p-6   flex-col">
          <h2 className="text-4xl font-bold mb-4 ">The Ultimate Watch <br/>Collection Awaits
          </h2>
          <button className="bg-orange-400 text-black m-4 py-2 px-4 rounded-full shadow-lg">
            SHOP NOW
          </button>
          </div>
          <div className=" bg-green-300 inline-block">
          <Image src='/watch.jpg' width={170} height={30} alt='watch' className="filter brightness-90 sepia-20" />
          </div>
          </div>
      </div>
    </div>
    
    <div className="m-3 p-8 items-end justify-end w-full">
  <div className="text-2xl font-semibold flex flex-col">
    <div className="flex justify-between w-full">
      <p>All Products</p>
      <div className="flex justify-end w-1/3">
      <Select
  selectionMode="single"
  placeholder="Default Sorting"
  className="w-2/3 my-3 justify-start"
>
  <SelectItem key="Default Sorting">Default Sorting</SelectItem>
  <SelectItem key="Sort By price">Sort By price</SelectItem>
  <SelectItem key="Sort by Popularity">Sort by Popularity</SelectItem>
  <SelectItem key="Sort by Rating">Sort by Rating</SelectItem>
  <SelectItem key="Sort By sale">Sort By sale</SelectItem>
</Select>

      </div>
    </div>
  </div>


      <FeaturedProduct/>
      <LatestProduct/>
      </div>
  
  {/* <div className="flex flex-col items-center justify-center gap-6">
      <div className=" w-1.7/3 h-60 bg-gray-300 rounded-lg  flex items-center justify-center">
      <div className="flex">
      <div className="p-6  flex-col">
          <h2 className="text-4xl font-bold mb-4 ">Crafted for Comfort, <br/>Built for Style
          </h2>
          <button className="bg-orange-400 m-4 text-black py-2 px-4 rounded-full shadow-lg">
            SHOP NOW
          </button>
          </div>
          <div className=" bg-green-300 inline-block">
          <Image src='/shoes.jpg' width={170} height={30} alt='watch' className="filter brightness-90 sepia-20" />
          </div>
          </div>
      </div>
    </div> */}
    <div className=" flex justify-end m-2 p-2 gap-2  text-xl ">
      <p className='border rounded-sm w-9 h-9 flex justify-center items-center'>1</p>
      <p className='border rounded-sm w-9 h-9 flex justify-center items-center'>2</p>
      <p className='border rounded-sm w-9 h-9 flex justify-center items-center'>3</p>
      <p className='border rounded-sm w-9 h-9 flex justify-center items-center'>4</p>
      <p className='border rounded-sm w-9 h-9 flex justify-center items-center'><FaArrowRight /></p>
    </div>
      <FooterNavbar/>
    </div>    
  );
};

export default Homepage;
