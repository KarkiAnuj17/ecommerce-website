import React from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { ImStatsDots } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { Input, User } from '@nextui-org/react';
import Link from 'next/link';

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
              <ImStatsDots className="mr-3" />
              Statistics
            </div>
          </Link>
          <Link href="/admin/customers" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <FaPeopleGroup className="mr-3" />
              Customers
            </div>
          </Link>
          <Link href="/admin/message" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <SiImessage className="mr-3" />
              Message
            </div>
          </Link>
          <Link href="/admin/performance" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <CgPerformance className="mr-3" />
              Performance
            </div>
          </Link>
          <Link href="/admin/history" passHref>
            <div className="flex items-center p-1.5 text-l rounded-md hover:bg-gray-200">
              <FaHistory className="mr-3" />
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
        <main className="p-4 bg-white rounded-lg shadow-md">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
