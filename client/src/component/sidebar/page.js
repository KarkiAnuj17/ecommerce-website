import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu"; 
import { ImStatsDots } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { User } from '@nextui-org/react';

const Sidebar = () => {
  return (
    <div className="flex">
    <div className="h-screen w-50  flex flex-col ">
    <h2 className="text-2xl font-bold font-serif m-3 p-2">SHOPPING</h2>
      <h2 className="text-2xl font-bold mb-5"> 
      <User   
      name="Sam Doe"
      description="samdoe@gmail.com"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026302d"
        
      }}
    /></h2>
      <nav className="flex-1 space-y-3 justify-center">
        <a href="#" className="flex items-center p-1 text-l ">
          <LuLayoutDashboard className="mr-3" />
          Dashboard
        </a>
        <a href="#" className="flex items-center p-1 text-l">
          <ImStatsDots className="mr-3" />
          Statistics
        </a>
        <a href="#" className="flex items-center p-1 text-l">
          <FaPeopleGroup className="mr-3" />
          Audience
        </a>
        <a href="#" className="flex items-center p-1 text-l mt-auto">
        <SiImessage className="mr-3" />
        Message
      </a>
      <a href="#" className="flex items-center p-1 text-l mt-auto">
        <CgPerformance  className="mr-3" />
        Performance
      </a>
      <a href="#" className="flex items-center p-1 text-l mt-auto">
        <FaHistory  className="mr-3" />
        History
      </a>
      </nav>
      <a href="#" className="flex items-center p-1 text-l mt-auto ">
        <TbLogout2 className="mr-3" />
        Logout
      </a>
    </div>
    </div>
  )
}

export default Sidebar