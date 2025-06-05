'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Package } from "lucide-react";
import { ProductCard } from '@/components/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/products");
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
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-xl text-white/70">Discover our premium collection</p>
          </div>
          
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-purple-400 animate-spin mx-auto mb-4" />
              <p className="text-white/70">Loading amazing products...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <Package className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Unable to load products</h3>
              <p className="text-white/60">{error}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium products designed to elevate your experience
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mt-6"></div>
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
    </div>
  );
};

export default ProductList;
