import CustomNavbar from '@/component/navbar/header/page';
import React from 'react';

const ShoppingCart = () => {
  const cartItems=[
    {id: 1,
    productName: 'Blue Printed T-Shirt',
    image:"/product-4.jpg",
    quantity:2,
    price:150},
    {id: 2,
    productName: 'Watch',
    image:"/product-9.jpg",    quantity:1,
    price:10000},
  ]
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
  <div>
    <CustomNavbar/>
    <div className=" bg-gray-100 p-8 ">
      <h2 className="text-3xl w-full font-bold mb-6 text-gray-800">Shopping Cart</h2>
      
      <div className="flex flex-col lg:flex-row gap-8"> 
        <div className="flex-1">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg  p-6 mb-4 flex gap-4 items-center">
              <img src={item.image} alt={item.productName} className="w-24 h-24  rounded-lg" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.productName}</h3>
                <p className="text-gray-600 mt-2">Rs {item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xl px-2 text-gray-700 bg-gray-200 rounded-full">-</button>
                <span>{item.quantity}</span>
                <button className="text-xl px-2 text-gray-700 bg-gray-200 rounded-full">+</button>
              </div>
              <p className="text-lg font-semibold text-gray-800">Rs {(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800">Rs {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Estimated Shipping</span>
              <span className="text-gray-800">Rs 20.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Tax</span>
              <span className="text-gray-800">Rs 35.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>Rs {(subtotal+20+35).toFixed(2) }</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>  
  );
};

export default ShoppingCart;
