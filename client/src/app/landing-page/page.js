import CustomNavbar from '@/components/navbar/header/page';
import React from 'react';
import FooterNavbar from '@/components/navbar/footer/page';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ProductList from '../admin/add-product/product-list';
import CategoriesPage from '../admin/categories/categories-list';


const LandingPage = () => {
 
  return (
    <div className="flex flex-col pt-20">
      <CustomNavbar />,
       <div className="w-[1000px] max-w-7xl mx-auto my-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 p-6 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
              <Image
                src="/exclusive.png"
                width={300}
                height={300}
                alt="ChronoEdge Watch"
                className="relative z-10 filter brightness-110 drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                LIMITED
              </div>
            </div>
          </div>
          <div className="md:w-3/5 p-8 text-white">
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Infinite Precision:
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    {" "}
                    Own the Moment
                  </span>
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-3"></div>
                <p className="text-slate-300 mt-3">
                  Elevate every second with ChronoEdge - limited stock of the timepiece that defines timeless style!
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">$2,499</span>
                <span className="text-slate-400 line-through">$3,299</span>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-amber-500/25">
                  BUY NOW
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Only 12 left in stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="m-3 p-8 items-end justify-end w-full">
    <div className="flex ">
    </div>
    <ProductList/>
    </div>
      <FooterNavbar/>
    </div>    
  );
};

export default LandingPage;