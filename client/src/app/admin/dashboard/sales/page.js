'use client'
import React from 'react';

const salesData = [
  { name: "Allinata Homaku", time: "02 Minutes Ago", amount: "+Rs 890.00", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Makulam Tarsun", time: "02 Minutes Ago", amount: "+Rs 1230.00", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Demanda Inhan", time: "03 Minutes Ago", amount: "+Rs 340.00", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Hasunta Nambes", time: "04 Minutes Ago", amount: "+Rs 720.00", avatar: "https://i.pravatar.cc/150?img=4" },
  { name: "Geogia Kamuta", time: "05 Minutes Ago", amount: "+Rs 310.00", avatar: "https://i.pravatar.cc/150?img=5" },
];

const RecentSales = () => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-lg w-full">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-lg font-semibold">Recent Sales</h2>
        <a href="#" className="text-sm text-gray-500">View All</a>
      </div>
      <div className="space-y-4 w-full">
        {salesData.map((sale, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={sale.avatar} alt="Avatar" className="w-9 h-10 rounded-full mr-3" />
              <div>
                <p className="text-sm font-medium">{sale.name}</p>
                <p className="text-xs text-gray-400">{sale.time}</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-green-500">{sale.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSales;
