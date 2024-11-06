'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Divider } from '@nextui-org/react';
import FeaturedProduct from './featured-product/page';
import LatestProduct from './latest-product/page';



const Product = () => {
  return (
    <div>
    <div className="items-center justify-center m-3 p-8">
      <div className="text-2xl font-semibold flex  flex-col items-center justify-center h-full">
        <div className="flex flex-col">
        <p>Featured Product</p>
        <div className=" flex items-center justify-center">
        <Divider className="my-3 m-1 w-12 h-3 rounded-lg bg-orange-500 " />
        </div>
        </div>
      </div>
      <FeaturedProduct/>
      </div>
      <div className="items-center justify-center m-3 p-8">
      <div className="text-2xl font-semibold flex  flex-col items-center justify-center h-full">
        <div className="flex flex-col">
        <p>Latest Product</p>
        <div className=" flex items-center justify-center">
        <Divider className="my-3 m-1 w-12 h-3 rounded-lg bg-orange-500 " />
        </div>
        </div>
      </div>
      <LatestProduct/>
      </div>
      </div>
  );
}

export default Product