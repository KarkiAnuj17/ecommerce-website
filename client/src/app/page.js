import CustomNavbar from '@/component/navbar/header/page';
import React from 'react';
import Product from './product/page';
import FooterNavbar from '@/component/navbar/footer/page';
import ProductCatogories from './product/catogories/page';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="flex flex-col">
      <CustomNavbar />,
      {/* <ProductCatogories/>, */}
      <div className="flex flex-col items-center justify-center gap-6">
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
    <div>
    <div className="flex  justify-between items-center mb-6">
  <h2 className="text-3xl text-white font-semibold mt-5 ms-5">New Featured</h2>
  <a href="#" className="text-lg hover:underline mr-5 flex items-center space-x-1">
  <span>View All</span>
  <FaArrowRight />
</a></div>
    <Product/>,
  </div>
  <div className="flex flex-col items-center justify-center gap-6">
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
    </div>
    <div>
    <div className="flex justify-between items-center mb-6">
  <h2 className="text-3xl font-semibold text-white mt-5 ms-5">Best Selling 
  </h2>
  <a href="#" className="text-lg hover:underline mr-5 flex items-center space-x-1">
  <span>View All</span>
  <FaArrowRight />
</a></div>
    <Product/>,
  </div>
      <FooterNavbar/>
    </div>    
  );
};

export default Homepage;
