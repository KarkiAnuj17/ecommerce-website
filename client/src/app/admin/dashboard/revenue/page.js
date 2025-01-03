'use client';
import React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import {
  AiOutlineDollar,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineAppstore 
} from "react-icons/ai";
import { LuPackage } from "react-icons/lu";

import { useRouter } from 'next/navigation';

const statsData = [
  {
    id: "revenue",
    componentName: "Total Revenue",
    value: "Rs 45,231.89",
    increment: +20.1,
    description: "from last month",
    icon: <AiOutlineDollar className="text-2xl" />,
  },
  {
    id: "orders",
    componentName: "Orders",
    value: "+2,350",
    increment: +10.1,
    description: "from last month",
    icon: <AiOutlineShoppingCart className="text-2xl" />,
  },
  {
    id: "products",
    componentName: "Products",
    value: "+12,234",
    increment: +19,
    description: "from last month",
    icon: <LuPackage className="text-2xl" />,
  },
  {
    id: "customers",
    componentName: "Active Customers",
    value: "+573",
    increment: +201,
    description: "since last week",
    icon: <AiOutlineUser className="text-2xl" />,
  },
];

const Revenue = () => {
  const router = useRouter();
  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <div className="flex gap-5 m-2 w-full">
          {statsData.map((item) => (
            <Card
              key={item.id}
              className="p-4 rounded-xl bg-white shadow-md w-1/4"
            >
              <CardHeader
                onClick={() => router.push('/admin/dashboard/' + item.id)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-sm font-bold">{item.componentName}</p>
                {item.icon}
              </CardHeader>
              <CardBody
                onClick={() => router.push('/admin/dashboard/' + item.id)}
                className="flex flex-col items-start cursor-pointer"
              >
                <div className="text-xl font-semibold">{item.value}</div>
                <div
                  className={`text-sm font-medium ${
                    item.increment >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {item.increment >= 0 ? `+${item.increment}` : item.increment}%
                  <span className="text-gray-500"> {item.description}</span>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Revenue;
