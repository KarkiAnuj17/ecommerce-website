'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, X, ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { decrement, increment, removeFromCart } from '@/redux/reducerSlices/productSlice';
import CustomNavbar from '@/components/navbar/header/page';
import Image from 'next/image';

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
  const discount = cartItems.reduce((acc, item) => acc + (item.discount / 100) * item.productPrice * item.quantity, 0);
  const vat = (subtotal - discount) * 0.15;
  const shipping = cartItems.length > 0 ? 10 : 0;
  const total = subtotal - discount + vat + shipping;

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <CustomNavbar/>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 ">
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <Card key={item._id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative w-full md:w-32 h-32 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-white/60">
                        <Image
                          src={`http://localhost:4000/uploads/${item.productImage}`}
                          alt={item.productName}
                          fill
                          className="object-cover rounded"
                        />                       
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-white">{item.productName}</h3>
                            <p className="text-purple-300">{item.productBrand}</p>
                            {item.discount > 0 && (
                              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 mt-2">
                                {item.discount}% OFF
                              </Badge>
                            )}
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleRemove(item._id)}
                            className="text-white/60 hover:text-red-400 hover:bg-red-500/10"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="text-white/80 text-sm">Quantity:</span>
                            <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDecrement(item._id)}
                                className="w-8 h-8 text-white hover:bg-white/20"
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center text-white font-medium">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleIncrement(item._id)}
                                className="w-8 h-8 text-white hover:bg-white/20"
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <div className="text-right">
                            {item.discount > 0 && (
                              <p className="text-white/60 text-sm line-through">
                                ${(item.productPrice * item.quantity).toFixed(2)}
                              </p>
                            )}
                            <p className="text-xl font-bold text-white">
                              ${((item.productPrice * (1 - item.discount / 100)) * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-12 text-center">
                  <ShoppingBag className="w-16 h-16 text-white/40 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Your cart is empty</h3>
                  <p className="text-white/60 mb-6">Add some items to get started</p>
                  <Link href="/">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Start Shopping
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 sticky top-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-white/80">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>VAT (15%)</span>
                    <span>${vat.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mt-3 ">
                  <Link href="/checkout">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3" >
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className="space-y-6 mt-3 ">
                <Link href="/landing-page">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3">
                      Continue Shopping 
                    </Button>
                  </Link>
                  </div>
                <div className="mt-6 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Secure 256-bit SSL encryption</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartPage;
