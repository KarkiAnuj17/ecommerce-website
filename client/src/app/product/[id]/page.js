"use client"
import CustomNavbar from '@/component/navbar/header/page';
import React from 'react';
import FooterNavbar from '@/component/navbar/footer/page';
import FeaturedProduct from '../featured-product/page';
import { TbListDetails } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { Select, SelectItem } from '@nextui-org/react';

const productDetail = [
  { id: 1, name:"Shoes Reebok Zig Kinetica 3",price: "199.00", image: "https://imgs.search.brave.com/2ht0u4aAE02jDF1Tadp0LDQmWsydZ39b-1jRT3DpdaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5nb2F0LmNvbS90/cmFuc2Zvcm0vdjEv/YXR0YWNobWVudHMv/cHJvZHVjdF90ZW1w/bGF0ZV9hZGRpdGlv/bmFsX3BpY3R1cmVz/L2ltYWdlcy8wNzkv/NTk3LzI1NC9vcmln/aW5hbC8xMzU2M18w/MS5qcGcuanBlZz9h/Y3Rpb249Y3JvcCZ3/aWR0aD03NTA" }
];

const size = [40, 41, 42, 43, 44, 45, 46];

const Thumbnail = [
  { image: "https://imgs.search.brave.com/QtX-izwgOIVHIG8wTK7e7ddaxrYUUzkZURdzLOkSJdM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbmVh/a2VybmV3cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDIvam9yZGFuLTEt/aGktODUtYmxhY2st/d2hpdGUtYnE0NDIy/LTAwMS1zdG9yZS1s/aXN0LTEuanBn" },
  { image: "https://imgs.search.brave.com/EuSUsFBmdYV1RUFzmAqiIlnWaKfXWhGdOWm8CyP0VHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbmVh/a2VybmV3cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTAvYWlyLWpvcmRh/bi0xLWhpLTg1LWJs/YWNrLXdoaXRlLUJR/NDQyMi0wMDEtMS5q/cGc" },
  { image: "https://imgs.search.brave.com/01tEirfNpqioQiXfUD06_WfV68FHAdcOtVrlYJEW30c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9haXIt/am9yZGFuLTEtaGln/aC1oZXJvLTE2NzYw/NDI4NTQuanBnP2Ny/b3A9MC41eHc6MXho/O2NlbnRlcix0b3Am/cmVzaXplPTY0MDoq" },
  { image: "https://imgs.search.brave.com/QtX-izwgOIVHIG8wTK7e7ddaxrYUUzkZURdzLOkSJdM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbmVh/a2VybmV3cy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDIvam9yZGFuLTEt/aGktODUtYmxhY2st/d2hpdGUtYnE0NDIy/LTAwMS1zdG9yZS1s/aXN0LTEuanBn" }
];

const ProductPage = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="w-full p-8 rounded-lg shadow-md flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="mb-6">
              {productDetail.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  className="w-full h-auto rounded-lg"
                />
              ))}
            </div>
            <div className="flex gap-4">
              {Thumbnail.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  className="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 border-gray-300"
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h2 className="mb-4">Home / T-Shirt</h2>
            {productDetail.map((item) => (
              <div key={item.id}>
                <h2 className="text-3xl font-bold mb-4 m-4 w-2/3">
                  {item.name}
                </h2>
                <p className="text-2xl font-semibold mb-6 m-4">
                  Rs {item.price}
                </p>
              </div>
            ))}
            <div className=" flex-col mb-4 gap-2 m-4">
              <p className="text-lg font-medium mb-2"> Size:</p>
              <div className="grid grid-cols-4 gap-2">
                <div className="grid grid-cols-4 gap-2 w-80">
                  {size.map((item, index) => (
                    <button
                      key={index}
                      className=" h-15 flex items-center justify-center text-lg font-semibold rounded-md border border-gray-300 bg-white"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex w-full">
                <Select
                  selectionMode="multiple"
                  name="colorOption"
                  placeholder="Select color"
                  className="w-2/3 my-3 justify-start "
                >
                  <SelectItem key="Black">Black</SelectItem>
                  <SelectItem key="Red">Red</SelectItem>
                  <SelectItem key="Blue">Blue</SelectItem>
                  <SelectItem key="Green">Green</SelectItem>
                </Select>
              </div>
            </div>
            <div className="mb-4">
              <button className="w-full bg-black text-white py-3 rounded-lg m-4">
                Add to Cart
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Free delivery on orders over $50.00
              </p>
            </div>
            <div className="flex items-center gap-5">
              <p className="font-bold text-xl">Product Details</p>
              <TbListDetails />
            </div>
            <p className="p-1 text-justify">
              Experience the ultimate in style and comfort with the Nike Reebok
              Zig. Combining modern aesthetics with innovative technology, these
              shoes are perfect for both everyday wear and intense workouts.
            </p>
          </div>
        </div>
      </div>
      <div className=" p-8 bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold mb-4">Related Products</h3>
          <div className="flex items-center space-x-2 cursor-pointer">
            <p className=" hover:underline">View All</p>
            <FaArrowRight />
          </div>
        </div>
        <FeaturedProduct />
      </div>
      <FooterNavbar />
    </div>
  );
};

export default ProductPage;
