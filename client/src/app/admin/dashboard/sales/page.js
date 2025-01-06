'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Jan", total: 3500 },
  { name: "Feb", total: 4200 },
  { name: "Mar", total: 3800 },
  { name: "Apr", total: 4700 },
  { name: "May", total: 3900 },
  { name: "Jun", total: 4500 },
  { name: "Jul", total: 4400 },
  { name: "Aug", total: 4600 },
  { name: "Sep", total: 4300 },
  { name: "Oct", total: 4800 },
  { name: "Nov", total: 4100 },
  { name: "Dec", total: 5000 },
];

const SalesOverview = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <p className="text-2xl font-bold mb-4">Sales Overview</p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis tickFormatter={(value) => `Rs${value}`} />
          <Tooltip formatter={(value) => `Rs${value}`} />
          <Bar dataKey="total" fill="#b1fa38" barSize={50}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverview;
