'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Home, Link } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import CustomNavbar from '@/components/navbar/header/page';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <CustomNavbar/>

      <div className="container mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Have questions about our products? Need help with your order? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-purple-200 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200 focus:border-purple-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200 focus:border-purple-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    required
                    rows={5}
                    className="bg-white/20 border-white/30 text-white placeholder:text-purple-200 focus:border-purple-400 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-white text-slate-900 hover:bg-gray-100 transition-colors font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Talk to Sales</h3>
                    <p className="text-purple-200 text-sm mb-2">
                      Just pick up the phone to chat with a member of our team
                    </p>
                    <p className="text-white font-medium">+977 980000000</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Find Us</h3>
                    <p className="text-purple-200 text-sm mb-2">
                      Visit our nearest office for direct assistance
                    </p>
                    <p className="text-white font-medium">Baneshwor, Kathmandu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email Us</h3>
                    <p className="text-purple-200 text-sm mb-2">
                      Send us an email and we'll get back to you shortly
                    </p>
                    <p className="text-white font-medium">info@luxemarket.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Business Hours</h3>
                <div className="space-y-2 text-purple-200">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="bg-black/30 backdrop-blur-md border-t border-white/20 mt-12">
        <div className="container mx-auto px-8 py-8">
          <div className="text-center text-purple-200">
            <p>&copy; 2024 LuxeMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
