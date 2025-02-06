"use client";
import UserLayout from "@/components/sidebar/user";
import React, { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotionalEmails: false,
    inventoryAlerts: true,
  });

  const [privacy, setPrivacy] = useState({
    publicProfile: false,
    orderHistory: false,
  });

  const handleNotificationToggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrivacyToggle = (key) => {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Account deleted!");
      // Add API call or logic here to handle account deletion
    }
  };

  return (
    <UserLayout>
    <div>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-2">Notifications</h2>
          <p className="text-gray-500 mb-4">
            Choose what notifications you want to receive.
          </p>
          <div className="bg-white shadow-md rounded-lg p-4">
            {Object.keys(notifications).map((key) => (
              <div
                key={key}
                className="flex items-center justify-between mb-4 last:mb-0"
              >
                <div>
                  <p className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                  <p className="text-sm text-gray-500">
                    {key === "orderUpdates"
                      ? "Receive notifications about your order status"
                      : key === "promotionalEmails"
                      ? "Receive emails about new products and deals"
                      : "Get notified when wishlist items are back in stock"}
                  </p>
                </div>
                <button
                  className={`relative inline-flex items-center h-6 w-12 rounded-full ${
                    notifications[key] ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => handleNotificationToggle(key)}
                >
                  <span
                    className={`transform transition-transform duration-300 ease-in-out ${
                      notifications[key] ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 rounded-full bg-white`}
                  ></span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>   
        <h2 className="text-xl font-bold mb-2">Privacy</h2>
          <p className="text-gray-500 mb-4">Manage your privacy settings.</p>
          <div className="bg-white shadow-md rounded-lg p-4">
            {Object.keys(privacy).map((key) => (
              <div
                key={key}
                className="flex items-center justify-between mb-4 last:mb-0"
              >
                <div>
                  <p className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                  <p className="text-sm text-gray-500">
                    {key === "publicProfile"
                      ? "Allow others to see your profile information"
                      : "Show your order history in your public profile"}
                  </p>
                </div>
                <button
                  className={`relative inline-flex items-center h-6 w-12 rounded-full ${
                    privacy[key] ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => handlePrivacyToggle(key)}
                >
                  <span
                    className={`transform transition-transform duration-300 ease-in-out ${
                      privacy[key] ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 rounded-full bg-white`}
                  ></span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Delete Account</h2>
          <p className="text-gray-500 mb-4">
            Permanently delete your account and all data.
          </p>
          <button
            onClick={handleDeleteAccount}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
    </UserLayout>
  );
};

export default Settings;
