import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const CustomNavbar = () => {
  return (
    <Navbar className=" p-4 font-serif">
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
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Blog
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Feature
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                How it works
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Contact
              </Link>
            </NavbarItem>
            </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="lg:flex">
              <Link href="/">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/register">Sign up</Link>
            </NavbarItem> 
        </NavbarContent>
        </Navbar>
  )
}

export default CustomNavbar
