'use client';
import React from 'react';
import Order from './order/page';
import RecentSales from './sales/page';
import Revenue from './revenue/page';
import { Input } from '@nextui-org/react';
import Layout from '@/component/sidebar/page';


const Dashboard = () => {
  
  return (
      <Layout>
      <div className="flex-1 w-full ">
        <div className="mb-5">
          <div className="flex gap-4 w-full">
            <div className="flex flex-col ">
              <Revenue/>
              <Order />
            </div>
            <RecentSales />
          </div>
        </div>
      </div>
      </Layout>
  );
};

export default Dashboard;
