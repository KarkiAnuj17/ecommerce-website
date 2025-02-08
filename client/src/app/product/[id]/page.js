"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { addToCart } from "@/redux/reducerSlices/productSlice"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import CustomNavbar from "@/components/navbar/header/page"
import { Star } from "lucide-react"

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/products/${id}`)
        setProduct(data)
      } catch (err) {
        console.error("Error fetching product details:", err)
      }
    }

    fetchProductDetails()
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product))
    }
  }

  if (!product) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>
  }

  const originalPrice = (product.productPrice / (1 - product.discount / 100)).toFixed(2)

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomNavbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Image */}
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={`http://localhost:4000/uploads/${product.productImage}`}
                alt={product.productName}
                fill
                className="object-cover"
                priority
              />
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.discount}% OFF
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">{product.productName}</h1>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.ratings) ? "fill-primary text-primary" : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.ratings.toFixed(1)}) {Math.floor(Math.random() * 2000)} Reviews
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Brand</p>
                <p className="font-medium">{product.productBrand}</p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500">Description</p>
                <p className="text-gray-700 leading-relaxed">{product.productDescription}</p>
              </div>

              

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold">${product.productPrice.toFixed(2)}</span>
                {product.discount > 0 && <span className="text-sm text-gray-500 line-through">${originalPrice}</span>}
              </div>

              <div className="flex gap-4">
                <Button onClick={handleAddToCart} className="flex-1 bg-primary hover:bg-primary/90">
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  Checkout Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

