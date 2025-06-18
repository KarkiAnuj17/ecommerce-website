"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Star, ShoppingBag, Truck, Shield, Headphones, Heart, Eye } from "lucide-react"
import Image from "next/image"
import FooterNavbar from "@/components/navbar/footer/page"
import CustomNavbar from "@/components/navbar/header/page"
import CategoriesPage from "./categories/categories-list"


const Homepage = () => {
  return ( <div className="min-h-screen">
      <CustomNavbar />

<div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">New Collection 2024</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Give Your Workout
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {" "}
                    A New Style!
                  </span>
                </h1>
                <p className="text-lg text-gray-300 max-w-md">
                  Success isn't always about greatness. It's about consistency. Consistent hard work gains success.
                  Greatness will come.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 group">
                  Explore Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black">
                  Watch Video
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-sm text-gray-400">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <Image
                src="/image1.png"
                width={600}
                height={600}
                alt="Featured Product"
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
              { icon: Shield, title: "Secure Payment", desc: "100% secure payment" },
              { icon: Headphones, title: "24/7 Support", desc: "Dedicated support" },
              { icon: ArrowRight, title: "Easy Returns", desc: "30-day return policy" },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    <CategoriesPage/>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=250&width=300`}
                    width={300}
                    height={250}
                    alt={`Product ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 rounded-full">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  <Badge className="absolute top-2 left-2 bg-red-500">-20%</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Smart Watch Pro</h3>
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(24)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-x-2">
                      <span className="text-lg font-bold text-gray-900">$299</span>
                      <span className="text-sm text-gray-500 line-through">$399</span>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 border-0">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-12 text-white">
                <Badge className="bg-white/20 text-white border-white/30 mb-4">Exclusively Available</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">Smart Band 4</h2>
                <p className="text-lg opacity-90 mb-8 max-w-md">
                  The Mi Smart Band 4 features a 30.9% larger AMOLED color full-touch display with adjustable
                  brightness, so everything is clear as can be.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold">30.9%</div>
                    <div className="text-sm opacity-80">Larger Display</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">20</div>
                    <div className="text-sm opacity-80">Day Battery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">5ATM</div>
                    <div className="text-sm opacity-80">Water Resistant</div>
                  </div>
                </div>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Buy Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-96 lg:h-full">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  width={600}
                  height={500}
                  alt="Smart Band 4"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Doe",
                avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                rating: 4.5,
                text: "The best online shopping site I've used! The customer service was incredibly responsive, and they helped me with my inquiries right away.",
              },
              {
                name: "Jane Garcia",
                avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                rating: 4,
                text: "Amazing quality products and fast delivery. The smart watch I bought exceeded my expectations. Highly recommended!",
              },
              {
                name: "Junior Garcia",
                avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
                rating: 4.5,
                text: "Great prices and excellent customer support. The return process was smooth and hassle-free. Will definitely shop again!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(testimonial.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : i < testimonial.rating
                              ? "fill-yellow-400/50 text-yellow-400"
                              : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <Avatar className="mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">Verified Customer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>

      <FooterNavbar />
    </div>
    
  )
}

export default Homepage
