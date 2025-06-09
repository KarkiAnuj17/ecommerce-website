import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from 'next/link';
import CustomNavbar from '@/components/navbar/header/page';
import ProductList from '../admin/add-product/product-list';
import Image from 'next/image';

const LandingHero = () => {
  return (
    <div>
      <CustomNavbar/>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 mb-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col lg:flex-row items-center p-8 lg:p-12">
              <div className="lg:w-2/5 flex justify-center mb-8 lg:mb-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative z-10 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white/60 text-lg">
                      <Image
                        src={'/exclusive.png'}
                        alt="exclusive"
                        layout="fill"
                        objectFit="cover"
                        className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    </span>
                  </div>
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    LIMITED
                  </div>
                </div>
              </div>

              <div className="lg:w-3/5 text-white space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                    Infinite Precision:
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      {" "}Own the Moment
                    </span>
                  </h1>
                  <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mb-4"></div>
                  <p className="text-xl text-white/80 leading-relaxed">
                    Elevate every second with ChronoEdge - limited stock of the timepiece that defines timeless style!
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-white">$2,499</span>
                  <span className="text-xl text-white/60 line-through">$3,299</span>
                  <div className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-semibold">
                    24% OFF
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cart">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-purple-500/25">
                      BUY NOW
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <div className="flex items-center gap-2 text-white/80">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Only 12 left in stock</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-white/80">(4.9/5 from 2,847 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Explore Our Collection
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Curated premium pieces that blend timeless elegance with modern functionality.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            </div>
          </div>

          <div className="relative z-10 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-6 md:p-10 shadow-xl">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;