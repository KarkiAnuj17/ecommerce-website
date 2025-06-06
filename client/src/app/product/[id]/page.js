"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "@/redux/reducerSlices/productSlice";
import { Button } from "@/components/ui/button";
import CustomNavbar from "@/components/navbar/header/page";
import { Star, ArrowRight } from "lucide-react";

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };

    if (id) fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const discountPrice = (product.productPrice-(product.productPrice * product.discount / 100)).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <CustomNavbar />
      <div className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="relative flex flex-col lg:flex-row items-center p-8 lg:p-12">
            <div className="lg:w-2/5 flex justify-center mb-8 lg:mb-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                <div className="relative z-10 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <Image
                    src={`http://localhost:4000/uploads/${product.productImage}`}
                    alt={product.productName}
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
                {product.discount > 0 && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
            </div>

            <div className="lg:w-3/5 text-white space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  {product.productName}:
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {" "}Precision Redefined
                  </span>
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mb-4"></div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-white/60 uppercase tracking-wide mb-1">Brand</p>
                    <p className="text-lg font-medium text-white/90">{product.productBrand}</p>
                  </div>

                  <div>
                    <p className="text-sm text-white/60 uppercase tracking-wide mb-2">Description</p>
                    <p className="text-lg text-white/80 leading-relaxed">
                      {product.productDescription}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-white">Rs{discountPrice}</span>
                {product.discount > 0 && (
                  <>
                    <span className="text-xl text-white/60 line-through">Rs{product.productPrice.toFixed(2)}</span>
                    <div className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.discount}% OFF
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.ratings)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white/80">
                  ({product.ratings.toFixed(1)}/5 from {Math.floor(Math.random() * 2000)} reviews)
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 ">
                <Button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-purple-500/25"
                >
                  Add to Cart
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  className="border-white/20 text-black font-semibold  text-lg rounded-full transition-all duration-300 px-6 py-6"
                >
                  Checkout Now
                </Button>
              </div>
              <div className="flex items-center gap-2 text-white/80">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
