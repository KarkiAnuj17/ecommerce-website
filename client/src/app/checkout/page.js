'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Truck, Shield, ArrowLeft, Lock, Check, User, MapPin, Wallet } from "lucide-react";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [sameAsShipping, setSameAsShipping] = useState(true);

  const { cartItems } = useSelector((state)=>state.product);
  const { email,fullName ,phoneNumber}=useSelector((state)=>state.user)
  const subtotal = cartItems.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);
  const discount = cartItems.reduce((acc, item) => acc + (item.discount / 100) * item.productPrice * item.quantity, 0);
  const shipping = 100;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;

  const steps = [ 
    { id: 1, title: "Contact", icon: User, completed: currentStep > 1 },
    { id: 2, title: "Shipping", icon: MapPin, completed: currentStep > 2 },
    { id: 3, title: "Payment", icon: Wallet, completed: currentStep > 3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link  href="/cart" className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Cart</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">Secure Checkout</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  step.completed 
                    ? 'bg-green-600 border-green-600' 
                    : currentStep === step.id 
                      ? 'bg-purple-600 border-purple-600' 
                      : 'border-white/30 bg-white/10'
                }`}>
                  {step.completed ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <step.icon className="w-6 h-6 text-white" />
                  )}
                </div>
                <span className={`ml-3 font-medium ${
                  step.completed || currentStep === step.id ? 'text-white' : 'text-white/60'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 ml-8 ${
                    step.completed ? 'bg-green-600' : 'bg-white/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= 1 ? 'bg-purple-600' : 'bg-white/20'
                  }`}>
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className='flex flex-col  gap-2'>
                    <Label htmlFor="email" className="text-white/80">Email Address</Label>
                    <span className="bg-white/10 border border-white/20 text-white px-3 py-2 rounded">
                        {email}
                    </span>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor="phone" className="text-white/80">Phone Number</Label>
                    <span className="bg-white/10 border border-white/20 text-white px-3 py-2 rounded">
                        {phoneNumber}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= 2 ? 'bg-purple-600' : 'bg-white/20'
                  }`}>
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className='flex flex-col gap-2'>
                  <Label htmlFor="fullName" className="text-white/80">Full Name</Label>
                 <span className="bg-white/10 border border-white/20 text-white px-3 py-2 rounded">
                        {fullName}
                    </span>
                </div>
                 
                </div>
                <div>
                  <Label htmlFor="address" className="text-white/80">Street Address</Label>
                  <Input 
                    id="address" 
                    placeholder="123 Main Street"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-white/80">City</Label>
                    <Input 
                      id="city" 
                      placeholder="New York"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-white/80">State</Label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                        <SelectItem value="fl">Florida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zip" className="text-white/80">ZIP Code</Label>
                    <Input 
                      id="zip" 
                      placeholder="10001"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= 3 ? 'bg-purple-600' : 'bg-white/20'
                  }`}>
                    <span className="text-white font-semibold text-sm">3</span>
                  </div>
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-4 border border-white/20 rounded-lg bg-white/5">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer text-white">
                      <CreditCard className="w-4 h-4" />
                      Credit/Debit Card
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-white/80">Card Number</Label>
                      <Input 
                        id="cardNumber" 
                        placeholder="1234 5678 9012 3456"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-white/80">Expiry Date</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM/YY"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-white/80">CVV</Label>
                        <Input 
                          id="cvv" 
                          placeholder="123"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName" className="text-white/80">Name on Card</Label>
                      <Input 
                        id="cardName" 
                        placeholder="John Doe"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="sameAddress" 
                    checked={sameAsShipping} 
                    onCheckedChange={setSameAsShipping}
                    className="border-white/30"
                  />
                  <Label htmlFor="sameAddress" className="text-sm text-white/80">
                    Billing address same as shipping address
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 sticky top-8">
              <CardHeader>
                <CardTitle className="text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item._id} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                        <div className="relative w-20 h-20">
                        <Image
                          src={`http://localhost:4000/uploads/${item.productImage}`}
                          alt={item.productName}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-white">{item.productName}</h4>
                        <p className="text-white/60 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-white">
                          Rs {((item.productPrice * (1 - item.discount / 100)) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="bg-white/20" />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-white/80">
                    <span>Subtotal</span>
                    <span>Rs {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-green-400">
                    <span>Discount</span>
                    <span>-Rs {discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/80">
                    <span className="flex items-center gap-1">
                      <Truck className="w-4 h-4" />
                      Shipping
                    </span>
                    <span>Rs {shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/80">
                    <span>Tax</span>
                    <span>Rs {tax.toFixed(2)}</span>
                  </div>
                  <Separator className="bg-white/20" />
                  <div className="flex justify-between font-semibold text-lg text-white">
                    <span>Total</span>
                    <span>Rs {total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">Secure 256-bit SSL encryption</span>
                </div>

                <Button className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Lock className="w-4 h-4 mr-2" />
                  Complete Order - Rs {total.toFixed(2)}
                </Button>

                <div className="flex justify-center gap-4 pt-4">
                  <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                    Free Returns
                  </Badge>
                  <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                    2-Day Shipping
                  </Badge>
                  <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                    24/7 Support
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;