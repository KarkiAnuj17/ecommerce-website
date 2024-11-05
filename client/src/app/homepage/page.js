import CustomNavbar from '@/component/navbar/header/page';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="flex flex-row items-center justify-between p-10 bg-orange-200">
        <div className="flex flex-col space-y-8 ">
          <h1 className="text-3xl  font-bold">
            Give Your Workout <br /> A New Style!
          </h1>
          <p className="text-gray-600 ">
            Success isn't always about greatness. It's about consistency.
            Consistent hard work gains success. Greatness will come.
          </p>
          <Button className="flex items-center bg-black text-white" >
            Explore Now <FaArrowRight  />
          </Button>
        </div>
        <Image src='/image1.png' width={500} height={500} alt='watch' />
      </div>
      <div className="flex w-full items-center justify-center gap-5 m-8">
      <Image src='/category-1.jpg' width={250} height={250} alt='category' />
      <Image src='/category-2.jpg' width={250} height={250} alt='category' />
      <Image src='/category-3.jpg' width={250} height={250} alt='category' />

      </div>
    </div>
  );
};

export default Homepage;
