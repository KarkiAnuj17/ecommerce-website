import React from "react";
import Link from "next/link";
import { Input, User } from "@nextui-org/react";
import { FiShoppingBag, FiHeart, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";

const UserLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="h-screen w-64 flex flex-col bg-gray-100 p-4 shadow-lg overflow-y-auto">
        <Link href="/" passHref>
          <div className="text-4xl font-bold text-black mb-8 cursor-pointer">RedStore</div>
        </Link>
        <div className="mb-4">
          <User
            name="Sam Doe"
            description="samdoe@gmail.com"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026302d",
            }}
          />
        </div>
        <nav className="flex-1 space-y-4">
          <Link href="/users/dashboard" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <LuLayoutDashboard className="mr-3" />
              <span>Dashboard</span>
            </div>
          </Link>
          <Link href="/users/order" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <FiShoppingBag className="mr-3" />
              <span>My Orders</span>
            </div>
          </Link>
          <Link href="/users/wishlist" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <FiHeart className="mr-3" />
              <span>Wishlist</span>
            </div>
          </Link>
          <Link href="/users/profile" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <FiUser className="mr-3" />
              <span>Profile</span>
            </div>
          </Link>
          <Link href="/users/setting" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <FiSettings className="mr-3" />
              <span>Settings</span>
            </div>
          </Link>
        </nav>
        <div className="mt-auto">
          <Link href="/logout" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <FiLogOut className="mr-3" />
              <span>Logout</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-1 bg-gray-50 p-6">
        <div className="flex gap-4 items-center mb-8">
          <h1 className="text-3xl font-bold">My Account</h1>
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
        <main className="p-4 bg-white rounded-lg shadow-md">{children}</main>
      </div>
    </div>
  );
};

export default UserLayout;
