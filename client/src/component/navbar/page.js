import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, Button } from "@nextui-org/react";

const CustomNavbar = () => {
  return (
    <Navbar className=" bg-orange-400 p-2 font-serif">
    <NavbarBrand >
          <p> <img className="w-10 h-10" src="/pexels-jessbaileydesign-1097930.jpg" />
          </p>
            <p className=" font-extrabold  text-3xl text-inherit">SHOPPING</p>
          </NavbarBrand>
          <NavbarContent className="sm:flex gap-4" >
            <NavbarItem>
              <Link color="foreground" href="#">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Contact
              </Link>
            </NavbarItem>
            <NavbarItem className="w-56 p-2 text-lg">
            <Input
                id="search"
                name="search"
                type="text"
                placeholder={"Search...⌕"}
              />
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
              ❤Favourites
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
              🛒Cart
              </Link>
            </NavbarItem>
            </NavbarContent>
          <NavbarContent  justify="end">
            <NavbarItem className="lg:flex">
              <Button className="bg-slate-100 h-8 w-8" href="/">Login</Button>
            </NavbarItem>
            <NavbarItem >
              <Button className="bg-slate-100  h-8 w-8" href="/register">Sign up</Button>
            </NavbarItem> 
            
        </NavbarContent>
        </Navbar>
  )
}

export default CustomNavbar
