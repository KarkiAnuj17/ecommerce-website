"use client"

import axios from "axios"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ProductPage = () => {
  const params = useParams()
  const [productDetail, setProductDetails] = useState(null)
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedSize, setSelectedSize] = useState("M")

  const fetchProductDetails = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/products/${params.id}`)
      setProductDetails(data)
      if (data.colorOption && data.colorOption.length > 0) {
        setSelectedColor(JSON.parse(data.colorOption[0])[0])
      }
    } catch (error) {
      console.error("Error fetching product details:", error)
    }
  }

  useEffect(() => {
    fetchProductDetails()
  }, [params.id])

  if (!productDetail) return <div>Loading...</div>

  const discountedPrice = productDetail.productPrice * (1 - productDetail.discount / 100)
  const availableColors = JSON.parse(productDetail.colorOption[0])
  const sizes = ["S", "M", "L", "XL"]

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-white rounded-lg overflow-hidden">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={`http://localhost:4000/uploads/${productDetail.productImage}`}
                alt={productDetail.productName}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-500 mb-2">{productDetail.categories}</div>
              <h1 className="text-2xl font-semibold mb-4">{productDetail.productName}</h1>

              {/* Ratings */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(productDetail.ratings) ? "text-yellow-400 fill-current" : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({productDetail.ratings}) {productDetail.ratings}K Reviews
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mb-6">
                {productDetail.discount > 0 && (
                  <span className="text-gray-500 line-through">${productDetail.productPrice}</span>
                )}
                <span className="text-xl font-semibold">${discountedPrice.toFixed(2)}</span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h2 className="font-semibold mb-2">Description</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {productDetail.productBrand}. In stock: {productDetail.stockQuantity} units.
                </p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h2 className="font-semibold mb-2">Available Color</h2>
                <div className="flex gap-2">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-sm transition-all ${
                        selectedColor === color ? "ring-2 ring-offset-2 ring-black" : "ring-1 ring-gray-300"
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h2 className="font-semibold mb-2">Size</h2>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 flex items-center justify-center rounded-sm border transition-all ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button className="flex-1 h-12 text-sm font-medium">Add To Chart</Button>
                <Button className="flex-1 h-12 text-sm font-medium bg-black text-white hover:bg-gray-900">
                  Checkout Now
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductPage

