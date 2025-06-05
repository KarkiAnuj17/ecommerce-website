
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-white/10">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-lg text-white/70 mb-8">
              Subscribe to our newsletter and get 20% off your first order
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 flex-1"
                type="email"
                aria-label="Email address"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold text-white">TechStore</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Your premium destination for cutting-edge technology and innovative products.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-purple-400 hover:bg-white/10 rounded-full w-10 h-10 p-0">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-purple-400 hover:bg-white/10 rounded-full w-10 h-10 p-0">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-purple-400 hover:bg-white/10 rounded-full w-10 h-10 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Shop</h3>
            <ul className="space-y-2">
              {['Products', 'Categories', 'Deals', 'New Arrivals', 'Best Sellers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Support</h3>
            <ul className="space-y-2">
              {['Help Center', 'Shipping Info', 'Returns', 'Size Guide', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">123 Tech Street, Digital City</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">hello@techstore.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 TechStore. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((link) => (
                <a key={link} href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;