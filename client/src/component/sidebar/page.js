import React from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { ImStatsDots } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { User } from '@nextui-org/react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="h-screen w-55 flex flex-col bg-gray-100 p-2 shadow-lg overflow-y-auto">
        <Image src="/logo.png" width="200" height="50" alt="image"className="text-3xl font-bold font-serif  mb-4"/>

        <div className="mb-8">
          <User
            name="Sam Doe"
            description="samdoe@gmail.com"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026302d",
            }}
          />
        </div>

        <nav className="flex-1 space-y-2">
          <a href="/admin/dashboard" className="flex items-center p-1 text-l rounded-md flex-shrink-0">
            <LuLayoutDashboard className="mr-3" />
            Dashboard
          </a>
          <a href="#" className="flex items-center p-1 text-l rounded-md flex-shrink-0">
            <ImStatsDots className="mr-3" />
            Statistics
          </a>
          <a href="#" className="flex items-center p-1 text-l rounded-md flex-shrink-0">
            <FaPeopleGroup className="mr-3" />
            Audience
          </a>
          <a href="#" className="flex items-center p-1 text-l rounded-md flex-shrink-0">
            <SiImessage className="mr-3" />
            Message
          </a>
          <a href="#" className="flex items-center p-1 text-l rounded-md flex-shrink-0">
            <CgPerformance className="mr-3" />
            Performance
          </a>
          <a href="#" className="flex items-center p-1 text-l rounded-md flex-shrink-0">
            <FaHistory className="mr-3" />
            History
          </a>
        </nav>
        
        <a href="#" className="flex items-center p-1 text-l rounded-md flex-shrink-0">
          <TbLogout2 className="mr-3" />
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
