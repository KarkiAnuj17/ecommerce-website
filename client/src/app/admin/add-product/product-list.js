'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Loader2, Package } from "lucide-react";
import { ProductCard } from '@/components/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(sortOrder
          ? `http://localhost:4000/products?sort=${sortOrder}`
          : `http://localhost:4000/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to load products");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [sortOrder]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  if (loading) {
    return (
      <div className="py-16 text-center text-white">
        <Loader2 className="w-12 h-12 text-purple-400 animate-spin mx-auto mb-4" />
        <p>Loading amazing products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <Package className="w-16 h-16 text-white/40 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Unable to load products</h3>
          <p className="text-white/60">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="text-white">
      <div className="flex justify-end mb-8">
        <div className="relative inline-block text-left">
    <select
      onChange={handleSortChange}
      value={sortOrder}
      className="appearance-none bg-gradient-to-r from-purple-600 to-blue-600 text-black font-semibold px-8 py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-purple-500/30 focus:outline-none"
    >
      <option value="">Sort by: Default</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
    <span className="absolute right-2 top-2.5 pointer-events-none text-black">
      <ChevronDown className="w-5 h-4" />
    </span>
  </div>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-auto">
          <CardContent className="p-12 text-center">
            <Package className="w-16 h-16 text-white/40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
            <p className="text-white/60">Check back later for new products.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductList;
