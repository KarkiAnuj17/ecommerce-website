import React from "react";
import {Link, Input, Button } from "@nextui-org/react";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const CustomNavbar = () => {
  return (
    <div className=" bg-gray-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-white">
            BuzzeBuy
          </Link>
          <div className="hidden md:flex gap-6">
            <Link className="text-white" href="/new">New</Link>
            <Link className="text-white" href="/deals">Deals</Link>
            <Link className="text-white" href="/contact">Help & Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64 hidden md:block">
            <Input
              className="pl-8 bg-gray-800 border-gray-700 text-white"
              placeholder="Search..."
            />
          </div>
          <Link className="flex text-white " href="/favourites">
          <CiHeart className="h-5 w-5" />
          Favourites
          </Link>
          <Link className="flex text-white" href="/cart">
          <FiShoppingCart className="h-5 w-5" />
          Cart
          </Link>
          <Button variant="outline" className="text-sm">
            Sign in
          </Button>
          <Button className="text-sm">Register</Button>
        </div>
      </nav>
      </div>
  )
}

export default CustomNavbar
