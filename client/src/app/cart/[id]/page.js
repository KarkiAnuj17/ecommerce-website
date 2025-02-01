"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, X } from "lucide-react"
import CustomNavbar from "@/component/navbar/header/page"

export default function CartPage() {
  const params = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/products/${params.id}`)
        setProducts(Array.isArray(data) ? data : [data])
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [params.id])

  if (loading) return <div>Loading...</div>
  if (!products.length) return <div>No products found</div>

  const calculateSubtotal = () => {
    return products.reduce((total, product) => {
      const price = product.productPrice * (product.quantity || 1)
      const productDiscount = price * (product.discount / 100) // Calculate discount from product data
      return total + (price - productDiscount)
    }, 0)
  }

  // Update the discount calculation to use product discounts
  const totalDiscount = products.reduce((total, product) => {
    const price = product.productPrice * (product.quantity || 1)
    return total + price * (product.discount / 100)
  }, 0)

  const subtotal = calculateSubtotal()
  const vat = subtotal * 0.15 // 15% VAT
  const shipping = 0 // Free shipping
  const total = subtotal + vat + shipping

  const updateQuantity = (index, increment) => {
    const newProducts = [...products]
    const currentQty = newProducts[index].quantity || 1
    newProducts[index].quantity = increment ? currentQty + 1 : Math.max(1, currentQty - 1)
    setProducts(newProducts)
  }

  const removeProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index))
  }

  return (
    <div>
        <CustomNavbar/>
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
       
        <h1 className="text-2xl font-semibold">Shopping Bag</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="grid grid-cols-4 gap-4 mb-4 text-sm text-muted-foreground">
            <div className="col-span-2">Product</div>
            <div>Quantity</div>
            <div>Price</div>
          </div>

          {products.map((product, index) => (
            <Card key={product.id || index} className="mb-4">
              <CardContent className="grid grid-cols-4 gap-4 p-4">
                <div className="col-span-2 flex gap-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={`http://localhost:4000/uploads/${product.productImage}`}
                      alt={product.productName}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold">{product.productName}</h2>
                    <p className="text-sm text-muted-foreground">{product.productBrand}</p>
                    {product.discount > 0 && <p className="text-sm text-red-500">-{product.discount}% OFF</p>}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(index, false)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{product.quantity || 1}</span>
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(index, true)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold">${(product.productPrice * (product.quantity || 1)).toFixed(2)}</span>
                  <Button variant="ghost" size="icon" onClick={() => removeProduct(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Discount</span>
                  <span>-${totalDiscount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>VAT (15%)</span>
                  <span>${vat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button className="w-full">Process Order</Button>
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </div>
  )
}

