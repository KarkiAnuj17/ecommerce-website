import CustomNavbar from '@/component/navbar/header/page';
import React from 'react';
import FooterNavbar from '@/component/navbar/footer/page';
import Image from 'next/image';
import Categories from '../product/catogories/page';
import Product from '../product/page';
import ProductList from '../admin/add-product/product-list';


const LandingPage = () => {
 
  return (
    <div className="flex flex-col">
      <CustomNavbar />,
      {/* <ProductCatogories/>, */}
      <div className="flex flex-col items-center justify-center gap-5 ">
      <div className=" w-2/3 h-80  bg-red-500 rounded-lg  flex items-center justify-center text-white">
      <div className="flex">
      <div className=" p-2 inline-block">
          <Image src='/exclusive.png' width={700} height={300} alt='watch' className="filter brightness-90 sepia-20" />
          </div>
      <div className="p-6 flex-col">
        <div className="gap-5 p-6">
          <h1 className="text-3xl font-bold">
            Infinite Precision: Own the Moment
      </h1>
                  <p className="text-l p-3">
                  Elevate every second with ChronoEdge (limited stock of the timepiece that defines timeless style!)     
                  </p>
                  </div>
          <button className="bg-white text-black m-4 py-2 px-4 rounded-full shadow-lg">
            BUY NOW
          </button>
          </div>
          </div>
      </div>
    </div>
    <Categories/>
    <div className="m-3 p-8 items-end justify-end w-full">
    <div className="flex ">
    </div>
    <ProductList/>
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
    
      <FooterNavbar/>
    </div>    
  );
};

export default LandingPage;