"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, X } from "lucide-react"
import CustomNavbar from "@/components/navbar/header/page"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetchCartItems()
  }, [])

  const fetchCartItems = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/cart")
      setCartItems(data)
    } catch (error) {
      console.error("Error fetching cart items:", error)
    }
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.productPrice * item.quantity
      const productDiscount = price * (item.discount / 100)
      return total + (price - productDiscount)
    }, 0)
  }

  const totalDiscount = cartItems.reduce((total, item) => {
    const price = item.productPrice * item.quantity
    return total + price * (item.discount / 100)
  }, 0)

  const totalprice = cartItems.reduce((total, item) => {
    return total + item.productPrice * item.quantity
  }, 0)

  const subtotal = calculateSubtotal()
  const vat = subtotal * 0.15
  const shipping = 0
  const total = subtotal + vat + shipping

  const updateQuantity = async (itemId, increment) => {
    try {
      const item = cartItems.find((item) => item.id === itemId)
      const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1)

      await axios.patch(`http://localhost:4000/cart/${itemId}`, { quantity: newQuantity })

      setCartItems(cartItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
    } catch (error) {
      console.error("Error updating quantity:", error)
    }
  }

  const removeItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:4000/cart/${itemId}`)
      setCartItems(cartItems.filter((item) => item.id !== itemId))
    } catch (error) {
      console.error("Error removing item:", error)
    }
  }

  return (
    <div>
      <CustomNavbar />
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

            {cartItems.map((item) => (
              <Card key={item.id} className="mb-4">
                <CardContent className="grid grid-cols-4 gap-4 p-4">
                  <div className="col-span-2 flex gap-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={`http://localhost:4000/uploads/${item.productImage}`}
                        alt={item.productName}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold">{item.productName}</h2>
                      <p className="text-sm text-muted-foreground">{item.productBrand}</p>
                      {item.discount > 0 && <p className="text-sm text-red-500">-{item.discount}% OFF</p>}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, false)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, true)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold">${(item.productPrice * item.quantity).toFixed(2)}</span>
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
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
                    <span>Price</span>
                    <span>${totalprice.toFixed(2)}</span>
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

