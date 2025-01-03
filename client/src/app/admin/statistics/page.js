'use client';

import Layout from '@/component/sidebar/admin';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const barData = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
];

const pieData = [
  { name: "Electronics", value: 40 },
  { name: "Clothing", value: 30 },
  { name: "Books", value: 20 },
  { name: "Home & Garden", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Statistics = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Overview Bar Chart */}
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
    </Layout>
  );
};

export default Statistics;
