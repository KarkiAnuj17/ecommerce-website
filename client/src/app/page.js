import CustomNavbar from '@/component/navbar/page';
import { Button } from "@nextui-org/react";
import React from 'react';
import Product from './product/page';
import ProductCatogories from './product/catogories/page';

const Homepage = () => {
  return (
    <div className="flex flex-col ">
      <CustomNavbar />,
      <Product/>,
    </div>    
  );
};

export default Homepage;
