"use client";
import React, { useEffect, useState } from "react";
import CustomNavbar from "@/component/navbar/header/page";
import { MdDelete } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import axios from "axios";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/products`);
      const itemsQuantity = data.map((item) => ({
        ...item,
        quantity: 1, 
      }));
      setProducts(itemsQuantity);
      setCartItems(itemsQuantity); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div>
      <CustomNavbar />
      <div className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
          <div className="flex gap-3 items-center text-4xl">
            <FiShoppingCart />
            Your Shopping Cart
          </div>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg p-6 mb-4 flex gap-4 items-center shadow-md"
              >
                <img
                  src="product-3.jpg"
                  alt={item.productName}
                  className="w-24 h-24 rounded-lg bg-gray-200"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.productName}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Rs {item.productPrice.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="w-8 h-8 text-gray-700 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="w-8 h-8 text-gray-700 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="w-8 h-8 text-white bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600"
                >
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Order Summary
              </h3>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800">Rs {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="text-gray-800">Rs {tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>Rs {total.toFixed(2)}</span>
              </div>
              <button className="w-full flex items-center gap-5 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 justify-center">
                Proceed to Checkout <IoIosArrowRoundForward className="text-3xl" />
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Free shipping on all orders over Rs 2000. <br />
                30-day return policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
