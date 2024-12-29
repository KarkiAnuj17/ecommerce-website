'use client';
import React from 'react';

import Order from './order/page';
import RecentSales from './sales/page';
import Revenue from './revenue/page';
import Sidebar from '@/component/sidebar/page';
import { Input } from '@nextui-org/react';


const Dashboard = () => {
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-2">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold p-4">Dashboard Overview</h1>
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
              <Revenue/>
              <Order />
            </div>
            <RecentSales />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
