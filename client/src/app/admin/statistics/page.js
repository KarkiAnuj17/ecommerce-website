'use client';
import { Input } from '@nextui-org/react';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const barData = [
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

const pieData = [
  { name: "Electronics", value: 40 },
  { name: "Fashion", value: 30 },
  { name: "Books", value: 20 },
  { name: "Sports", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Statistics = () => {
  return (
      <div className='w-full'>
    <div className="flex gap-4 items-center mb-8">
          <h1 className="text-3xl font-bold">Statistics</h1>
          <div className="flex items-center ml-auto ">
            <Input
              id="search"
              name="search"
              type="text"
              placeholder="Search products..."
              className="w-full"
            />
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <p className="text-2xl font-bold mb-4">Sales Overview</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis 
                dataKey="name" 
                stroke="#8884d8" 
                tick={{ fontSize: 12 }} 
                interval={0} 
              />
              <YAxis tickFormatter={(value) => `Rs${value}`} />
              <Tooltip formatter={(value) => `Rs${value}`} />
              <Bar dataKey="total" fill="#b1fa38" barSize={25} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sales by Category Pie Chart */}
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <p className="text-2xl font-bold mb-4">Sales by Category</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                labelLine={false}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend layout="horizontal" align="center" />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      </div>
  );
};

export default Statistics;
