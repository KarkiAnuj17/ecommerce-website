import CustomNavbar from '@/component/navbar/header/page';
import React from 'react';
import Product from './product/page';
import FooterNavbar from '@/component/navbar/footer/page';
import ProductCatogories from './product/catogories/page';

const Homepage = () => {
  return (
    <div className="flex flex-col ">
      <CustomNavbar />,
      <ProductCatogories/>,
      <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative w-2/3 h-60 bg-green-200 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-4">GET UP TO 50% OFF
          </h2>
          <button className="bg-white text-black py-2 px-4 rounded-full shadow-lg">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
    <div>
    <div className="flex  justify-between items-center mb-6">
  <h2 className="text-3xl font-semibold mt-5 ms-5">New Featured</h2>
  <a href="#" className=" text-lg hover:underline text-blue-500 mr-5">View All</a>
</div>
    <Product/>,
  </div>
  <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative w-2/3 h-60 bg-green-200 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-4">GET UP TO 50% OFF
          </h2>
          <button className="bg-white text-black py-2 px-4 rounded-full shadow-lg">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
    <div>
    <div className="flex justify-between items-center mb-6">
  <h2 className="text-3xl font-semibold mt-5 ms-5">Best Selling</h2>
  <a href="#" className="text-lg text-blue-500 hover:underline mr-5">View All</a>
</div>
    <Product/>,
  </div>
      <FooterNavbar/>
    </div>    
  );
};

export default Homepage;
