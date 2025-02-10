"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useSelector, useDispatch } from "react-redux"
import CustomNavbar from "@/components/navbar/header/page"
import { decrement, increment, removeFromCart } from "@/redux/reducerSlices/productSlice"
import { X } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
  const discount = cartItems.reduce((acc, item) => acc + (item.discount / 100) * item.productPrice * item.quantity, 0);
  const vat = (subtotal - discount) * 0.15;
  const shipping = cartItems.length > 0 ? 10 : 0; 
  const total = subtotal - discount + vat + shipping;

 const handleRemove = (id) => {
    dispatch(removeFromCart(id))
 }
  return (
    <div>
      <CustomNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Shopping Bag</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="grid grid-cols-4 gap-4 mb-4 text-sm text-muted-foreground ml-3">
              <div className="col-span-2 ">Product</div>
              <div>Quantity</div>
              <div>Price</div>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <Card key={item._id} className="mb-4">
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
                        {item.discount > 0 && (
                          <p className="text-sm text-red-500">-{item.discount}% OFF</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" onClick={() => dispatch(decrement(item._id))}>-</Button>
                      <span>{item.quantity}</span>
                      <Button size="sm" variant="outline" onClick={() => dispatch(increment(item._id))}>+</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">${(item.productPrice * item.quantity).toFixed(2)}</span>
                      <Button variant="ghost" size="icon" onClick={() => handleRemove(item._id)}>
                        <X className="h-4 w-4" />
                      </Button>

                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-10 text-muted-foreground">🛒 Your cart is empty!</div>
            )}
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
                  <div className="flex justify-between text-red-500">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>VAT (15%)</span>
                    <span>${vat.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 m-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Link href="/checkout"><Button className="w-full m-3">Proceed to checkout</Button></Link>
                  <Link href="/landing-page"><Button variant="outline" className="w-full ml-3">
                    Continue Shopping
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
