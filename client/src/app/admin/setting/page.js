"use client";

import React, { useState } from "react";
import Layout from "@/component/sidebar/admin";
import { Input } from "@nextui-org/react";

const StoreSettings = () => {
  const [storeName, setStoreName] = useState("My E-commerce Store");
  const [storeEmail, setStoreEmail] = useState("contact@mystore.com");
  const [storePhone, setStorePhone] = useState("1234567890");
  const [storeAddress, setStoreAddress] = useState("123 Main St, City, Country");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!storeEmail.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    if (storePhone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Settings saved!");
    setIsSaving(false);
  };

  return (
    <Layout>
      <div>
        <div className="flex gap-4 items-center mb-8">
        <h1 className="text-3xl font-bold">Store Settings</h1>
        <div className="flex items-center ml-auto">
            <Input
              id="search"
              name="search"
              type="text"
              placeholder="Search products..."
              className="w-full"
            />
          </div>
        </div>
        <div className="p-3 bg-gray-100 min-h-screen">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
              <input
                type="text"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">This is the name of your store that customers will see.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store Email</label>
              <input
                type="email"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={storeEmail}
                onChange={(e) => setStoreEmail(e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">This email will be used for customer support inquiries.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store Phone</label>
              <input
                type="tel"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={storePhone}
                onChange={(e) => setStorePhone(e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">This phone number will be displayed for customer support.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store Address</label>
              <textarea
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={storeAddress}
                onChange={(e) => setStoreAddress(e.target.value)}
                rows="3"
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">This address will be used for shipping and legal purposes.</p>
            </div>

            {/* Save Button */}
            <div className="text-right">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className={`px-4 py-2 bg-black text-white rounded-lg shadow ${
                  isSaving ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
                }`}
              >
                {isSaving ? "Saving..." : "Save changes"}
              </button>
            </div>
         
        </div>
      </div>
    </Layout>
  );
};

export default StoreSettings;
