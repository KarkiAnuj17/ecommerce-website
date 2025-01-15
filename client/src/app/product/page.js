'use client';
import { Button, Card, CardBody, CardFooter, Select, SelectItem } from '@nextui-org/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import axios from 'axios';

const ITEMS_PER_PAGE = 4;

const Product = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const getProduct = async (values) => {
    const {data} = await axios.get(`http://localhost:4000/products`, values);
    setProducts(data)
  }
  useEffect(() => {
    getProduct();
}, []);
  const [likedItems, setLikedItems] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('Default Sorting');

  const toggleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = (option) => {
    setSortOption(option);
    setCurrentPage(1); 
  };

  // // Sort the product list based on the selected option
  // const sortedProductList = [...setProducts].sort((a, b) => {
  //   switch (sortOption) {
  //     case 'Sort By price':
  //       return b.price - a.price;
  //     case 'Sort by Popularity': // Assuming popularity is based on price in reverse
  //       return b.price - a.price;
  //     case 'Sort by Rating': // Placeholder for future implementation
  //       return a.id - b.id; // Default sorting for now
  //     case 'Sort By sale':
  //       return (b.originalPrice - b.price) - (a.originalPrice - a.price);
  //     default:
  //       return a.id - b.id; // Default sorting
  //   }
  // });

  // const totalPages = Math.ceil(sortedProductList.length / ITEMS_PER_PAGE);
  // const currentItems = sortedProductList.slice(
  //   (currentPage - 1) * ITEMS_PER_PAGE,
  //   currentPage * ITEMS_PER_PAGE
  // );

  return (
    <div>
      <div className="text-2xl font-semibold flex flex-col">
        <div className="flex justify-between w-full">
          <p>All Products</p>
          <div className="flex justify-end w-1/3">
            <Select
              selectionMode="single"
              placeholder="Default Sorting"
              className="w-2/3 my-3 justify-start"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
            >
              <SelectItem key="Default Sorting" value="Default Sorting">Default Sorting</SelectItem>
              <SelectItem key="Sort By price" value="Sort By price">Sort By price</SelectItem>
              <SelectItem key="Sort by Popularity" value="Sort by Popularity">Sort by Popularity</SelectItem>
              <SelectItem key="Sort by Rating" value="Sort by Rating">Sort by Rating</SelectItem>
              <SelectItem key="Sort By sale" value="Sort By sale">Sort By sale</SelectItem>
            </Select>
          </div>
        </div>
      </div>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 ">
      {products.map((item) => (
        <div key={item._id}>
        <Card >
          <CardBody onClick={() => router.push('/products/' + item._id)} className=" p-0 ">
          <Image
              src="/product-3.jpg"
              width={200}      
              height={150}     
              alt={item.productName}
              layout="responsive" 
              className="object-cover"
          />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <div className="flex flex-col m-0 font-light">
              <b>{item.productName}</b>
              <b>Rs {item.productPrice}</b>
            </div>
             <div className="flex gap-4 text-xl">
                            <p onClick={() => toggleLike(item.id)}>
                              <FaHeart color={likedItems[item.id] ? "red" : "gray"} />
                            </p>
                            <p>
                              <GiShoppingCart />
                            </p>
                          </div>
          </CardFooter>
        </Card>
        </div>
      ))}
      </div>

      {/* <div className="flex justify-center items-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${currentPage === index + 1 ? "bg-gray-800 text-white" : "bg-gray-200"}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Product;
