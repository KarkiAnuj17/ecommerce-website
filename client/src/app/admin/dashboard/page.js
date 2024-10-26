'use client';
import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Input } from '@nextui-org/react';
import Sidebar from '@/component/sidebar/page';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="flex">
    <Sidebar/>
    <div className="flex-1  bg-gray-100 p-2">
    <div className="p-4 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Input
            id="search"
            name="search"
            type="text"
            placeholder="Search products..."
            className="w-1/3"
          />
          </div>
          <div className="flex ">
<Card className="p-1 m-3 rounded-xl bg-white  ">
  <CardHeader className="flex justify-between items-center gap-4">
    <p className="text-sm font-bold">Total Revenue</p>
    <AiOutlineLoading3Quarters className="text-2xl " />
  </CardHeader>
  <CardBody className="flex flex-row gap-4">
    <div className="text-xl font-semibold">Rs 11,345</div>
    <div className="text-sm text-green-500 font-medium">+4.37%</div>
  </CardBody>
</Card>
<Card className="p-1 m-3 rounded-xl bg-white  ">
  <CardHeader className="flex justify-between items-center gap-4">
    <p className="text-sm font-bold">Total Customer</p>
    <AiOutlineLoading3Quarters className="text-2xl " />
  </CardHeader>
  <CardBody className="flex flex-row gap-4">
    <div className="text-xl font-semibold">4500</div>
    <div className="text-sm text-green-500 font-medium">+12.37%</div>
  </CardBody>
</Card>
<Card className="p-1 m-3 rounded-xl bg-white  ">
  <CardHeader className="flex justify-between items-center gap-4">
    <p className="text-sm font-bold">Total Profit</p>
    <AiOutlineLoading3Quarters className="text-2xl " />
  </CardHeader>
  <CardBody className="flex flex-row gap-4">
    <div className="text-xl font-semibold">Rs 3780</div>
    <div className="text-sm text-green-500 font-medium">+2.37%</div>
  </CardBody>
</Card>
</div>
<div>
  <p>Latest Order</p>
  
</div>
</div>  
  </div>
    </div>
  );
};

export default Dashboard;
