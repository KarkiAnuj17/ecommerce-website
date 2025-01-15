import React from "react";
import { Link, Input, Button } from "@nextui-org/react";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const CustomNavbar = () => {
  return (
    <div className="bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-black text-white">
        <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          LuxeMarket
        </div>
          <div className="hidden md:flex gap-6">
            <Link href="/new" className="text-white">
              New
            </Link>
            <Link href="/deals" className="text-white">
              Deals
            </Link>
            <Link href="/contact" className="text-white">
              Help & Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block w-80">
            <Input
              type="text"
              className="pl-10 bg-black border border-hidden text-white shadow-none"
              placeholder="Search products..."
              contentLeft={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M16.75 10a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
                  />
                </svg>
              }
            />
          </div>
          <Link href="/favourites" className="flex items-center gap-2 text-white">
            <CiHeart className="h-6 w-6" />
            Favourites
          </Link>
          <Link href="/cart" className="flex items-center gap-2 text-white">
            <FiShoppingCart className="h-6 w-6" />
            Cart
          </Link>
          <Link href="/login">
            <Button variant="outline" className="text-sm text-white border-white">
              Sign in
            </Button>
          </Link>
          <Link href="/register">
            <Button className="text-sm bg-white text-gray-900">
              Register
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default CustomNavbar;
