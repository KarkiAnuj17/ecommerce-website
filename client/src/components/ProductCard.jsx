"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/reducerSlices/productSlice"

export function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleClick = () => {
    router.push("/product/" + product._id)
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev)
  }

  const originalPrice = (product.productPrice / (1 - product.discount / 100)).toFixed(0)

  return (
    <Card className="w-[300px] overflow-hidden relative rounded-xl shadow-md">
      <CardContent className="p-0 relative">
        <div className="aspect-[4/3] relative">
          <Image
            onClick={handleClick}
            src={`http://localhost:4000/uploads/${product.productImage}`}
            alt={product.productName}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl cursor-pointer"
          />

          {product.discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-semibold shadow">
              -{product.discount}%
            </div>
          )}

          <Button
            onClick={toggleFavorite}
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 z-10 rounded-full shadow-sm ${
              isFavorite ? "bg-white text-red-500" : "bg-white text-gray-600"
            }`}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-current text-red-500" : ""}`} />
          </Button>
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-base font-semibold truncate">{product.productName}</h3>

          <div className="flex items-center text-sm text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.ratings) ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-500 ml-1">({product.ratings.toFixed(1)})</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <span className="text-xl font-bold text-gray-900">Rs {product.productPrice}</span>
              {product.discount > 0 && (
                <span className="text-sm text-gray-400 line-through">Rs {originalPrice}</span>
              )}
            </div>

            <Button
              onClick={handleAddToCart}
              size="icon"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="hidden" />
    </Card>
  )
}
