'use client';
import React from 'react';
import Order from './order/page';
import Revenue from './revenue/page';
import Layout from '@/components/sidebar/admin';
import SalesOverview from './sales/page';
const Dashboard = () => {
  return (
  
    <div className="w-full p-4">
      <div className="space-y-6">
        <Revenue/>
        <SalesOverview />
        <Order />
      </div>
    </div>
  );
};

export default Dashboard;
