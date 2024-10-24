import CustomNavbar from '@/component/navbar/header/page';
import React from 'react';
import Product from './product/page';
import FooterNavbar from '@/component/navbar/footer/page';

const Homepage = () => {
  return (
    <div className="flex flex-col ">
      <CustomNavbar />,
      <Product/>,
      <FooterNavbar/>
    </div>    
  );
};

export default Homepage;
