'use client';
import React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from 'next/navigation';

const statsData = [
  { id: "revenue", componentName: "Total Revenue", value: "Rs 1345", increment: +4.3 },
  { id: "customers", componentName: "Total Customers", value: "1345", increment: +14.3 },
  { id: "profit", componentName: "Total Profit", value: "Rs 3450", increment: -2.3 },
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
              className="p-2 rounded-xl bg-white shadow-md gap-1"
            >
              <CardHeader
                onClick={() => router.push('/admin/dashboard/' + item.id)}
                className="flex justify-between items-center w-full cursor-pointer"
              >
                <p className="text-sm font-bold w-1/3">
                  {item.componentName}
                </p>
                <AiOutlineLoading3Quarters className="text-2xl w-1/3 flex items-end justify-end" />
              </CardHeader>
              <CardBody
                onClick={() => router.push('/admin/dashboard/' + item.id)}
                className="flex flex-row items-center gap-4 cursor-pointer"
              >
                <div className="text-xl font-semibold">{item.value}</div>
                <div
                  className={`text-sm font-medium ${
                    item.increment >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {item.increment >= 0 ? `+${item.increment}` : item.increment}%
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
