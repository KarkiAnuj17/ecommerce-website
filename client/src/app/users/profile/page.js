"use client"
import UserLayout from "@/components/sidebar/user";
import React, { useState } from "react";

const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Sam Doe",
    email: "samdoe@gmail.com",
    phone: "+1 234 567 890",
  });

  const [shippingAddress, setShippingAddress] = useState({
    streetAddress: "123 Main St, Apt 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
  });

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleShippingAddressChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    alert("Personal information saved!");
  };

  const handleUpdateAddress = () => {
    alert("Shipping address updated!");
  };

  return (
    
      <UserLayout>
      <h2 className="text-2xl font-bold mb-2">Profile</h2>
      <p className="text-gray-500 mb-6">
        Manage your personal information and preferences.
      </p>
      <hr className="mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Personal Information</h3>
          <p className="text-sm text-gray-500 mb-4">
            Update your personal details here.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={personalInfo.fullName}
                onChange={handlePersonalInfoChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
          <button
            onClick={handleSaveChanges}
            className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Save Changes
          </button>
        </div>

        {/* Shipping Address */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Shipping Address</h3>
          <p className="text-sm text-gray-500 mb-4">
            Your default shipping address information.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Street Address
              </label>
              <textarea
                name="streetAddress"
                value={shippingAddress.streetAddress}
                onChange={handleShippingAddressChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={shippingAddress.city}
                  onChange={handleShippingAddressChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={shippingAddress.state}
                  onChange={handleShippingAddressChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={shippingAddress.zipCode}
                  onChange={handleShippingAddressChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={shippingAddress.country}
                  onChange={handleShippingAddressChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleUpdateAddress}
            className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Update Address
          </button>
        </div>
      </div>
      </UserLayout>
  );
};

export default Profile;
