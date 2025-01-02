import React from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { GoHistory } from "react-icons/go";
import { TbLogout2 } from "react-icons/tb";
import { Input, User } from '@nextui-org/react';
import Link from 'next/link';
import { BiBarChart } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { GrDocumentPerformance } from "react-icons/gr";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="h-screen w-64 flex flex-col bg-gray-100 p-4 shadow-lg overflow-y-auto">
        <Link href="/" passHref>
          <div className="text-4xl font-bold text-black mb-8">RedStore</div>
        </Link>
        <div className="mb-2">
          <User
            name="Sam Doe"
            description="samdoe@gmail.com"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026302d",
            }}
          />
        </div>

        <nav className="flex-1 space-y-4">
          <Link href="/admin/dashboard" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <LuLayoutDashboard className="mr-3" />
              Dashboard
            </div>
          </Link>
          <Link href="/admin/statistics" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <BiBarChart className="mr-3" />
              Statistics
            </div>
          </Link>
          <Link href="/admin/customers" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <BsPeople className="mr-3" />
              Customers
            </div>
          </Link>
          <Link href="/admin/message" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <AiOutlineMessage className="mr-3" />
              Message
            </div>
          </Link>
          <Link href="/admin/performance" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <GrDocumentPerformance className="mr-3" />
              Performance
            </div>
          </Link>
          <Link href="/admin/history" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <GoHistory className="mr-3" />
              History
            </div>
          </Link>
        </nav>

        <Link href="#" passHref>
          <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
            <TbLogout2 className="mr-3" />
            Logout
          </div>
        </Link>
      </div>

      <div className="flex-1 bg-gray-50 p-6">
        <div className="flex gap-4 items-center mb-8">
          <h1 className="text-3xl font-bold">Overview</h1>
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
        <main >{children}</main>
      </div>
    </div>
  );
};

export default Layout;