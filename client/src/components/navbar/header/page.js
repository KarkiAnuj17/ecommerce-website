"use client"

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  ShoppingBag,
  Store,
  Heart,
  ShoppingCart,
  Package,
  BarChart3,
  BookOpen,
  DollarSign,
  User,
  Plus,
  LogOut,
  Settings,
  PlusCircle,
  FileText,
  UserCheck,
  MessageSquare,
  Eye,
  Bell,
  Tag,
  Users,
  Truck,
  Star,
  Gift,
  HelpCircle,
  Phone,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { logoutUser } from "@/redux/reducerSlices/userSlice"
import { useRouter } from "next/navigation"

const CustomNavbar = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { isLoggedIn, email, fullName, role } = useSelector((state) => state.user)
  const { cartItems = [] } = useSelector((state) => state.product || {})
  const { pendingOrders = [], lowStockItems = [] } = useSelector((state) => state.seller || {})

  const handleLogout = () => {
    dispatch(logoutUser())
    router.push("/")
  }

  const totalNotifications = (pendingOrders?.length || 0) + (lowStockItems?.length || 0)

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              {role === "Seller" ? (
                <Store className="w-5 h-5 text-white" />
              ) : (
                <ShoppingBag className="w-5 h-5 text-white" />
              )}
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              LuxeMarket
            </span>
            {role === "Seller" && (
              <Badge variant="secondary" className="text-xs">
                Seller
              </Badge>
            )}
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={
                  role === "Seller" ? "Search orders, products, customers..." : "Search products, brands, categories..."
                }
                className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>

          {role === "Buyer" || !role ? (
            <div className="hidden lg:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Shop</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 bg-white rounded-lg shadow-lg border">
                      <div className="grid gap-3 w-64">
                        <div className="grid gap-2">
                          <h4 className="font-medium text-gray-900 mb-2">Browse Products</h4>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/landing-page"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Search className="w-4 h-4 text-gray-500" />
                              <span>All Products</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/categories"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Tag className="w-4 h-4 text-gray-500" />
                              <span>Categories</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/deals"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Gift className="w-4 h-4 text-gray-500" />
                              <span>Deals & Offers</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/new-arrivals"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Star className="w-4 h-4 text-gray-500" />
                              <span>New Arrivals</span>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                      <Store className="w-4 h-4" />
                      <span>Brands</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 bg-white rounded-lg shadow-lg border">
                      <div className="grid gap-3 w-64">
                        <div className="grid gap-2">
                          <h4 className="font-medium text-gray-900 mb-2">Explore Brands</h4>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/brands"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Store className="w-4 h-4 text-gray-500" />
                              <span>All Brands</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/brands/featured"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Star className="w-4 h-4 text-gray-500" />
                              <span>Featured Brands</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/brands/luxury"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <DollarSign className="w-4 h-4 text-gray-500" />
                              <span>Luxury Brands</span>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                      <BookOpen className="w-4 h-4" />
                      <span>Help</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 bg-white rounded-lg shadow-lg border">
                      <div className="grid gap-3 w-64">
                        <div className="grid gap-2">
                          <h4 className="font-medium text-gray-900 mb-2">Customer Support</h4>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/help"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <HelpCircle className="w-4 h-4 text-gray-500" />
                              <span>Help Center</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/contact"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Phone className="w-4 h-4 text-gray-500" />
                              <span>Contact Us</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/shipping"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Truck className="w-4 h-4 text-gray-500" />
                              <span>Shipping Info</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/returns"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Package className="w-4 h-4 text-gray-500" />
                              <span>Returns & Refunds</span>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                href="/favourites"
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <Heart className="h-4 w-4" />
                <span className="hidden xl:inline">Favourites</span>
              </Link>

              <Link
                href="/cart"
                className="relative flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                {Array.isArray(cartItems) && cartItems.length > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {cartItems.length}
                  </Badge>
                )}
                <ShoppingCart className="h-4 w-4" />
                <span className="hidden xl:inline">Cart</span>
              </Link>
            </div>
          ) : (
            <div className="hidden lg:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
                      <Package className="w-4 h-4" />
                      <span>Products</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 bg-white rounded-lg shadow-lg border">
                      <div className="grid gap-3 w-64">
                        <div className="grid gap-2">
                          <h4 className="font-medium text-gray-900 mb-2">Product Management</h4>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/admin/add-product"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <PlusCircle className="w-4 h-4 text-gray-500" />
                              <span>Add New Product</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/admin"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Package className="w-4 h-4 text-gray-500" />
                              <span>Manage Products</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/seller/inventory"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <FileText className="w-4 h-4 text-gray-500" />
                              <span>Inventory</span>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Orders</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 bg-white rounded-lg shadow-lg border">
                      <div className="grid gap-3 w-64">
                        <div className="grid gap-2">
                          <h4 className="font-medium text-gray-900 mb-2">Order Management</h4>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/seller/orders"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <ShoppingBag className="w-4 h-4 text-gray-500" />
                              <span>All Orders</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/seller/orders/pending"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <FileText className="w-4 h-4 text-gray-500" />
                              <span>Pending Orders</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/seller/orders/shipped"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Truck className="w-4 h-4 text-gray-500" />
                              <span>Shipped Orders</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/seller/returns"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <UserCheck className="w-4 h-4 text-gray-500" />
                              <span>Returns & Refunds</span>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
                      <BarChart3 className="w-4 h-4" />
                      <span>Analytics</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 bg-white rounded-lg shadow-lg border">
                      <div className="grid gap-3 w-64">
                        <div className="grid gap-2">
                          <h4 className="font-medium text-gray-900 mb-2">Sales & Analytics</h4>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/seller/analytics/dashboard"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <BarChart3 className="w-4 h-4 text-gray-500" />
                              <span>Sales Dashboard</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/seller/analytics/products"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Eye className="w-4 h-4 text-gray-500" />
                              <span>Product Performance</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/seller/analytics/customers"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <Users className="w-4 h-4 text-gray-500" />
                              <span>Customer Insights</span>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
                      <BookOpen className="w-4 h-4" />
                      <span>Resources</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 bg-white rounded-lg shadow-lg border">
                      <div className="grid gap-3 w-64">
                        <div className="grid gap-2">
                          <h4 className="font-medium text-gray-900 mb-2">Seller Resources</h4>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/seller/resources/guide"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <BookOpen className="w-4 h-4 text-gray-500" />
                              <span>Seller Guide</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/seller/resources/pricing"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <DollarSign className="w-4 h-4 text-gray-500" />
                              <span>Pricing Strategies</span>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/seller/support"
                              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <MessageSquare className="w-4 h-4 text-gray-500" />
                              <span>Seller Support</span>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link href="/admin/add-product">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  <span className="hidden xl:inline">Add Product</span>
                </Button>
              </Link>

              <Link
                href="/seller/notifications"
                className="relative flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                {totalNotifications > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {totalNotifications}
                  </Badge>
                )}
                <Bell className="h-4 w-4" />
                <span className="hidden xl:inline">Notifications</span>
              </Link>
            </div>
          )}

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 hover:bg-gray-100">
                  <Avatar className="h-10 w-10 border-2 border-gray-200 hover:border-purple-400 transition-colors">
                    <AvatarImage
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}`}
                      alt={fullName}
                    />
                    <AvatarFallback className="bg-purple-600 text-white font-semibold">
                      {fullName?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}`}
                          alt={fullName}
                        />
                        <AvatarFallback className="bg-purple-600 text-white font-semibold">
                          {fullName?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <p className="text-sm font-medium leading-none">{fullName}</p>
                        <p className="text-xs leading-none text-muted-foreground mt-1">{email}</p>
                        <Badge variant="outline" className="mt-1 w-fit text-xs">
                          {role || "Buyer"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {role === "Seller" ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/seller/dashboard" className="flex items-center gap-2 cursor-pointer">
                        <BarChart3 className="h-4 w-4" />
                        Seller Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/seller/profile" className="flex items-center gap-2 cursor-pointer">
                        <User className="h-4 w-4" />
                        Seller Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/seller/store-settings" className="flex items-center gap-2 cursor-pointer">
                        <Store className="h-4 w-4" />
                        Store Settings
                      </Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
                        <User className="h-4 w-4" />
                        My Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/orders" className="flex items-center gap-2 cursor-pointer">
                        <ShoppingBag className="h-4 w-4" />
                        My Orders
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/wishlist" className="flex items-center gap-2 cursor-pointer">
                        <Heart className="h-4 w-4" />
                        Wishlist
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}

                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center gap-2 cursor-pointer">
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="flex items-center gap-2 cursor-pointer text-red-600 focus:text-red-600"
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <User className="w-4 h-4 mr-2" />
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default CustomNavbar
