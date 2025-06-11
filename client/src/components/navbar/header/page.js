"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Heart, ShoppingCart, Search, Home, LogOut, User, Settings } from "lucide-react"
import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from "@/redux/reducerSlices/userSlice"
import Link from "next/link"

const CustomNavbar = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.product)
  const { isAuthenticated, user } = useSelector((state) => state.user)

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    dispatch(logoutUser())
    window.location.href = "/"
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const displayName = user?.name || user?.fullName || user?.email?.split("@")[0] || "User"

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="bg-white">
        <nav className="flex items-center justify-between px-8 py-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-2xl font-semibold">
              <Home className="h-6 w-6" />
              <Link href="/landing-page" className="hover:text-purple-200 transition-colors">
                LuxeMarket
              </Link>
            </div>
            <div className="hidden md:flex gap-6">
              <Link href="/new" className="text-white hover:text-purple-200 transition-colors">
                New
              </Link>
              <Link href="/deals" className="text-white hover:text-purple-200 transition-colors">
                Deals
              </Link>
              <Link href="/contact" className="text-white hover:text-purple-200 transition-colors">
                Help & Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20"
                placeholder="Search products..."
              />
            </div>

            {isAuthenticated && (
              <>
                <Link
                  href="/favourites"
                  className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
                >
                  <Heart className="h-5 w-5" />
                  <span className="hidden sm:inline">Favourites</span>
                </Link>

                <Link
                  href="/cart"
                  className="relative flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
                >
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                  <ShoppingCart className="h-5 w-5" />
                  <span className="hidden sm:inline">Cart</span>
                </Link>
              </>
            )}

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 hover:bg-white/10">
                    <Avatar className="h-10 w-10 border-2 border-white/20 hover:border-white/40 transition-colors">
                      <AvatarImage
                        src={user?.avatar || `https://i.pravatar.cc/150?u=${user?.email}`}
                        alt={displayName}
                      />
                      <AvatarFallback className="bg-purple-600 text-white font-semibold">
                        {getInitials(displayName)}
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
                            src={user?.avatar || `https://i.pravatar.cc/150?u=${user?.email}`}
                            alt={displayName}
                          />
                          <AvatarFallback className="bg-purple-600 text-white font-semibold">
                            {getInitials(displayName)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <p className="text-sm font-medium leading-none">{displayName}</p>
                          <p className="text-xs leading-none text-muted-foreground mt-1">{user?.email}</p>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
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
              <div className="flex items-center gap-4">
                <Link href="/login"
                    variant="outline"
                  className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
                  >
                    Sign in
                  
                </Link>
                <Link href="/register">
                  <Button className="text-sm bg-white text-slate-900 hover:bg-gray-100">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </nav>
  )
}

export default CustomNavbar
