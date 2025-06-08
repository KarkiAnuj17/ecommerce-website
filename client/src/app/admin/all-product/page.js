"use client";
import { useEffect, useState } from "react";
import { Loader2, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AdminProductCard } from "@/components/adminProductCard";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete product");
      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin mx-auto mb-4" />
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <Package className="w-16 h-16 text-white/40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Error</h3>
            <p className="text-white/60">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">All Products</h2>
          <p className="text-white/70">Manage your product inventory here</p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <AdminProductCard key={product._id} product={product} onDelete={handleDelete} />
            ))}
          </div>
        ) : (
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-auto mt-12">
            <CardContent className="p-12 text-center">
              <Package className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-white/60">Please add some products to manage them here.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
