// 08-01-2025 02:19
// src/pages/CheckoutPage.js
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyContext';

const CheckoutPage = () => {
  const { cart } = useContext(MyContext);

  // State for order details
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const totalPrice = cart.reduce((total, item) => total + item.discountMrp * item.quantity, 0);

  return (
    <div className="checkout-page p-6 font-noto max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      
      {/* Customer Details */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            value={orderDetails.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            name="email"
            value={orderDetails.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="phone"
            value={orderDetails.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="border p-2 rounded w-full"
          />
          <textarea
            name="address"
            value={orderDetails.address}
            onChange={handleInputChange}
            placeholder="Delivery Address"
            className="border p-2 rounded w-full"
          ></textarea>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="border rounded-lg p-4 bg-white shadow-md">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b last:border-none">
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt={item.medicineName}
                  className="w-12 h-12 object-cover rounded mr-4"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
              <span className="text-right font-semibold">₹{item.discountMrp * item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <Link
          to="/cart"
          className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Back to Cart
        </Link>
        <button className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
