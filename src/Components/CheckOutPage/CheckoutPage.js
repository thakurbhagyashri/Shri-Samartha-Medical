// src/pages/CheckoutPage.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyContext';

const CheckoutPage = () => {
  const { cart } = useContext(MyContext);

  const totalPrice = cart.reduce((total, item) => total + item.discountMrp * item.quantity, 0);

  return (
    <div className="checkout-page p-6 font-noto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="flex  py-2 border-b">
            <span className="mx-2">{item.quantity}</span>
            <span  className="mx-2">{item.medicineName}</span>
            <span  className="mx-2">₹{item.discountMrp * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-4">
          <span>Total:</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>
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
