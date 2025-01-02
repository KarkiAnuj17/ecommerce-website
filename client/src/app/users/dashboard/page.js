import UserLayout from "@/component/sidebar/user";
import React from "react";
import { FiBox, FiHeart, FiCreditCard, FiShoppingCart } from "react-icons/fi";

const stats = [
  {
    title: "Total Orders",
    value: "12",
    icon: FiBox,
    description: "+2 this month",
  },
  {
    title: "Wishlist Items",
    value: "8",
    icon: FiHeart,
    description: null,
  },
  {
    title: "Total Spent",
    value: "$429.00",
    icon: FiCreditCard,
    description: "+$89 this month",
  },
  {
    title: "Cart Items",
    value: "3",
    icon: FiShoppingCart,
    description: null,
  },
];

const recentOrders = [
  {
    id: "ORD001",
    date: "2024-01-01",
    amount: "$120.00",
    status: "Delivered",
    statusClass: "bg-green-100 text-green-600",
  },
  {
    id: "ORD002",
    date: "2024-01-02",
    amount: "$85.00",
    status: "In Transit",
    statusClass: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "ORD003",
    date: "2024-01-03",
    amount: "224.00",
    status: "Delivered",
    statusClass: "bg-green-100 text-green-600",
  },
];

const recentActivities = [
  {
    icon: FiHeart,
    description: "Added Nike Air Max to wishlist",
    time: "2 hours ago",
  },
  {
    icon: FiShoppingCart,
    description: "Added 2 items to cart",
    time: "4 hours ago",
  },
  {
    icon: FiBox,
    description: "ORD003 was delivered",
    time: "1 day ago",
  },
];

const Dashboard = () => {
  return (
      <UserLayout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <stat.icon className="text-2xl text-gray-500 mr-4" />
            <div>
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className="text-xl font-bold">{stat.value}</p>
              {stat.description && <p className="text-sm text-gray-400">{stat.description}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders and Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Order #{order.id}</h4>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <div>
                  <p className="font-bold">{order.amount}</p>
                  <span className={`text-sm ${order.statusClass} px-2 py-1 rounded`}>{order.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <activity.icon className="text-xl text-gray-500" />
                <div>
                  <p className="text-sm">{activity.description}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </UserLayout>
    
  );
};

export default Dashboard;
