'use client'
import React from 'react'
import {Tabs, Tab} from "@nextui-org/react"; 
import { useRouter } from 'next/navigation';

const variants = [
  "light",
];

const ProductCatogories = () => {
  const router = useRouter()
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Tabs key={variant} variant={variant} aria-label="Tabs variants">
          <Tab key="All" title="All"/>
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