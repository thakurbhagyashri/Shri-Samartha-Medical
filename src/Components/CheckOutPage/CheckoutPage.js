// src/pages/CheckoutPage.js
import React, { useContext } from 'react';
import { MyContext } from '../Components/MyContext';

const CheckoutPage = () => {
  const { cart } = useContext(MyContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout-page p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between py-2 border-b">
            <span>{item.name} (x{item.quantity})</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-4">
          <span>Total:</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>
      <button className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded">
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutPage;
