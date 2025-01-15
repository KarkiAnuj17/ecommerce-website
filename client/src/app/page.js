import CustomNavbar from '@/component/navbar/header/page';
import { Button, Divider } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import FooterNavbar from '@/component/navbar/footer/page';
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import {User} from "@nextui-org/react";
import Link from 'next/link';
import FeaturedProduct from './product/featured-product/page';
import LatestProduct from './product/latest-product/page';


const Homepage = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="flex flex-row items-center justify-between p-10 bg-black w-2.5/3">
        <div className="flex flex-col space-y-8 ">
          <h1 className="text-3xl  font-bold text-white">
            Give Your Workout <br /> A New Style!
          </h1>
          <p className="text-white ">
            Success isn't always about greatness. It's about consistency.
            Consistent hard work gains success. Greatness will come.
          </p>
          <Link href="/">
          <Button className="flex items-center bg-white text-black w-1/3" > 
            Explore Now <FaArrowRight  />
          </Button>
          </Link>
        </div>
        <Image src='/image1.png' width={500} height={500} alt='watch' />
      </div>
      <div className="flex w-full items-center justify-center gap-7 m-8">
      <Image src='/category-1.jpg' width={250} height={250} alt='category' />
      <Image src='/category-2.jpg' width={250} height={250} alt='category' />
      <Image src='/category-3.jpg' width={250} height={250} alt='category' />
      </div>
      <div className="items-center justify-center m-3 p-8">
      <div className="text-2xl font-semibold flex  flex-col items-center justify-center h-full">
        <div className="flex flex-col">
        <p>Featured Product</p>
        <div className=" flex items-center justify-center">
        <Divider className="my-3 m-1 w-12 h-3 rounded-lg bg-red-700 " />
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
        <Divider className="my-3 m-1 w-12 h-3 rounded-lg bg-red-700 " />
        </div>
        </div>
      </div>
      <LatestProduct/>
      </div>
      <div className=" bg-red-600 text-white  items-center justify-center m-12 p-9 w-2.5/3 border rounded-xl">
      <div className="flex ">
      <Image src='/exclusive.png' width={500} height={600} alt='watch' />
      <div className="flex flex-col m-4 p-4">
      <p className="p-3 m-2">Exclusively Available in Redstore</p>
      <p className="p-3 m-2 text-5xl font-bold ">Small band 4</p>
      <p className="p-3 m-2 w-auto">The Mi Smart Band 4 features a 30.9% larger(than Mi Band 3) Amoled color full-touch display with adjustable Brightness, so everything is clear as can be.</p>
      <Button className="flex items-center bg-white text-black w-1/3"> Buy Now <FaArrowRight  />
        </Button></div>
      </div>
      </div>
      <div className="flex w-full m-3 items-center justify-center text-justify gap-5">
        <div className=" w-60 p-5 ">
        <FaQuoteLeft />
        <p>The best online shopping site I’ve used! The customer service was incredibly responsive, and they helped me with my inquiries right away. Great prices and great quality.
        </p>
        <div className="flex p-1">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarHalf />
        <IoIosStarOutline />
        </div>
        <User   
      name="Jane Doe"
      className="items-center justify-center"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
        </div>
        <div className=" w-60 p-5 ">
        <FaQuoteLeft />
        <p>The best online shopping site I’ve used! The customer service was incredibly responsive, and they helped me with my inquiries right away. Great prices and great quality.
        </p>
        <div className="flex p-1">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarOutline />
        </div>
        <User   
      name="Jane Garcia"
      className="items-center justify-center"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
      }}
    />
        </div>
        <div className=" w-60 p-5 ">
        <FaQuoteLeft />
        <p>The best online shopping site I’ve used! The customer service was incredibly responsive, and they helped me with my inquiries right away. Great prices and great quality.
        </p>
        <div className="flex p-1">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarHalf />
        </div>
        <User   
      name="Junior Garcia"
      className="items-center justify-center"
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/30373425?v=4"
      }}
    />
        </div>
      </div>
      <FooterNavbar/>
    </div>
  );
};

export default Homepage;