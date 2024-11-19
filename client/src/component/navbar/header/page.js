import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, Button } from "@nextui-org/react";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";

const CustomNavbar = () => {
  return (
    <Navbar className=" bg-white border  p-4">
    <NavbarBrand >
            <p><img src='/logo.png' width={150} height={30} alt='Hustle Logo' /></p>
          </NavbarBrand>
          <NavbarContent className="sm:flex gap-4" >
            <NavbarItem>
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/contact">
                Contact
              </Link>
            </NavbarItem>
            <NavbarItem className="w-56 p-2 text-lg">
            <Input
                id="search"
                name="search"
                type="text"
                placeholder={"Search..."}
              />
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
              <IoMdHeartEmpty/>Favourites
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
              <GiShoppingCart/>Cart
              </Link>
            </NavbarItem>
            </NavbarContent>
          <NavbarContent  justify="end">
            <NavbarItem className="lg:flex">
              <Link href="/login">
              <Button className="bg-slate-100 h-8 w-8">Login</Button>
              </Link>

            </NavbarItem>
            <NavbarItem >
            <Link  href="/register">
              <Button className="bg-slate-100  h-8 w-8">Sign up</Button>
              </Link>
            </NavbarItem> 
            
            
        </NavbarContent>
        </Navbar>
  )
}

export default CustomNavbar
