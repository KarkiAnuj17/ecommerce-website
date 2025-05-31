import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FooterNavbar = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <section className="container mx-auto px-4 py-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-purple-100 mb-6">
            Subscribe to our newsletter and get 20% off your first order
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white border-0 text-black flex-1"
              type="email"
              aria-label="Email address"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
<nav className="container mx-auto px-7 py-8 flex flex-col md:flex-row md:flex-wrap items-start md:items-start justify-center gap-y-10 md:gap-x-20 text-sm text-white text-left">
        <div className="flex flex-col ">
          <p className="font-semibold text-base">Shop</p>
          <a href="#">Coupons</a>
          <a href="#">Money-back Guarantee</a>
          <a href="#">Buying Help</a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-base">Sell</p>
          <a href="#">Sell on Website</a>
          <a href="#">Affiliates</a>
          <a href="#">Learn to Sell</a>
          <a href="#">Forums</a>
        </div>
         <div className="flex flex-col gap-1">
          <p className="font-semibold text-base">Stay Connected</p>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-base">Help</p>
          <a href="#">Help Center</a>
          <a href="#">Privacy Settings</a>
        </div>
       
      </nav>

     
      <div className="border-t border-purple-300 py-4 text-center text-sm">
        <div className="flex justify-center flex-wrap gap-6">
          <a href="#" className="hover:underline">
            © 2025 YourCompany
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterNavbar;
