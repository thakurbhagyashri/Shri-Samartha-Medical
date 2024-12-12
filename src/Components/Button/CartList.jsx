import React, { useContext, useState } from 'react';
import { MyContext } from '../MyContext';

const CartList = () => {
  const { cart, updateCart } = useContext(MyContext); // `updateCart` function to modify cart quantities

  // Helper to calculate total price
  const calculateTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle Quantity Change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity less than 1
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedCart); // Update the cart in context
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty!</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0"
              >
                {/* Product Image */}
                <img
                  src={item.imageUrl}
                  alt={item.medicineName}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  {/* Product Details */}
                  <h2 className="text-lg font-bold">{item.medicineName}</h2>
                  <p className="text-sm text-gray-500">
                    Price: ₹{item.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value) || 1
                        )
                      }
                      className="mx-2 w-12 text-center border rounded-md"
                      min="1"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Total Section */}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">
              Total: ₹{calculateTotalPrice().toFixed(2)}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
