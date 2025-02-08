"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/reducerSlices/productSlice"

export function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const handleClick = () => {
    router.push('/product/' + product._id)
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev)
  }

  return (
    <Card className="w-full max-w-sm overflow-hidden relative">
      <CardContent className="p-0">
        <div className="aspect-square relative">
          <Image
            onClick={handleClick}
            src={`http://localhost:4000/uploads/${product.productImage}`}
            alt={product.productName}
            layout="fill"
            objectFit="cover"
            className="rounded-t-md cursor-pointer"
          />
          {product.discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold">
              {product.discount}% OFF
            </Badge>
          )}
          <Button
            onClick={toggleFavorite}
            variant="secondary"
            size="icon"
            className={`absolute top-2 right-2 z-10 ${isFavorite ? " text-red-500 " : "bg-white hover:bg-gray-100"}`}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-current text-red-500" : "text-gray-600"}`} />
          </Button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 truncate">{product.productName}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.productBrand}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-primary">${product.productPrice.toFixed(2)}</span>
            <div className="flex items-center">
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
              <span className="text-sm text-gray-500 ml-1">({product.ratings.toFixed(1)})</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full bg-primary hover:bg-primary/90 text-white">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
