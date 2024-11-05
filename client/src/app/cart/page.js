import CustomNavbar from '@/component/navbar/header/page';
import React from 'react';

const ShoppingCart = () => {
  const cartItems=[
    {id: 1,
    productName: 'Iphone',
    description:' Premium Apple smartphone',
    image:'https://imgs.search.brave.com/arkTNGlxIlD4XaSOTZbzNu1vCz-2dLszrstRYOJIn7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzY1MDhi/Y2Y0YjYxOTRlYTcw/NTQyNTJiNy9tYXN0/ZXIvd18zMjAsY19s/aW1pdC9pUGhvbmUt/MTUtUmV2aWV3LVRv/cC1HZWFyLmpwZw', 
    quantity:2,
    price:150},
    {id: 2,
    productName: 'Laptop',
    description: 'Offer a range of options from budget-friendly to high-performance models,',
    image:'https://imgs.search.brave.com/NgqT_2ZeWxV2TbcB6enS5ldkn0SxGzSnk8FpwvgMYjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/Nzk2MTQxMi9waG90/by9sYXB0b3AtaXNv/bGF0ZWQtb24td2hp/dGUtYmFja2dyb3Vu/ZC13aXRoLXR3by1j/bGlwcGluZy1wYXRo/cy1pbmNsdWRlZC1y/ZWFsaXN0aWMtM2Qt/cmVuZGVyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz02UGt4/RmFfOExrUmRZLVlF/UzFPNnhqcjFzRFlU/eVRuLWM4SnFYRXJl/RTEwPQ', 
    quantity:1,
    price:100},
  ]
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
  <div>
    <CustomNavbar/>
    <div className=" bg-gray-100 p-8 font-mono">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg  p-6 mb-4 flex gap-4 items-center">
              <img src={item.image} alt={item.productName} className="w-24 h-24  rounded-lg" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.productName}</h3>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xl px-2 text-gray-700 bg-gray-200 rounded-full">-</button>
                <span>{item.quantity}</span>
                <button className="text-xl px-2 text-gray-700 bg-gray-200 rounded-full">+</button>
              </div>
              <p className="text-lg font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
              <button className="text-red-500 hover:text-red-700">Remove</button>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Estimated Shipping</span>
              <span className="text-gray-800">$20.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Tax</span>
              <span className="text-gray-800">$35.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>${(subtotal+20+35).toFixed(2) }</span>
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
