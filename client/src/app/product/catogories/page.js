'use client'
import React, { useState } from 'react'
import {Tabs, Tab} from "@nextui-org/react"; 
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const variants = [
  "light",
];

const ProductCatogories = () => {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <div className="flex flex-wrap gap-4 text-black">
      {variants.map((variant) => (
          <Tabs
          key={variant}
          variant={variant}
          aria-label="Tabs variants"
          selectedKey={selectedTab} 
          onSelectionChange={setSelectedTab} 
          >      
          <Tab key="All"  title="All"/>
          <Tab key="Electronics" title="Electronics"/>
          <Tab key=" Fashion" title=" Fashion"/>
          <Tab key=" Books" title=" Books"/>
          <Tab key="Home & Furniture" title="Home & Furniture"/>
          <Tab key="Beauty & Personal Care" title="Beauty & Personal Care"/>
          <Tab key="Groceries" title="Groceries"/>
          <Tab key=" Gifts " title=" Gifts "/>
          <Tab key=" Toys & Baby Products " title=" Toys & Baby Products "/>
          <Tab key=" Automotive " title=" Automotive "/>
        </Tabs>
      ))}
    </div>
  )
}

export default ProductCatogories