'use client';
import React from 'react';
import { Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import Sidebar from '@/component/sidebar/page';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import Order from '../order/page';
import RecentSales from '../sales/page';

const statsData = [
  { id: "revenue", componentName: "Total Revenue", value: "Rs11345", increment: +4.3 },
  { id: "customers", componentName: "Total Customer", value: "1345", increment: +14.3 },
  { id: "profit", componentName: "Total Profit", value: "Rs3450", increment: -2.3 }
];

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-2 ">
        <div className="mb-8 ">
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
          <div className="flex">
          <div className="flex flex-col w-full">
          <div className=" flex gap-1 p-0 m-4 w-full">
            {statsData.map((item) => (
              <Card className="p-2 rounded-xl bg-white shadow-md gap-1 ">
                <CardHeader onClick={() => router.push('/admin/dashboard/' + item.id)} className="flex justify-between items-center w-full">
  <p className="text-sm font-bold w-1/3 ">
    {item.componentName}
  </p>
  <AiOutlineLoading3Quarters className="text-2xl w-1/3 flex items-end justify-end" />
</CardHeader>

                <CardBody onClick ={()=>router.push('/admin/dashboard/'+item.id)} className="flex flex-row items-center gap-4">
                  <div className="text-2xl font-semibold">{item.value}</div>
                  <div
                    className={`text-sm font-medium ${
                      item.increment >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {item.increment}%
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          <Order/>
          </div>
          <RecentSales/>
</div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
