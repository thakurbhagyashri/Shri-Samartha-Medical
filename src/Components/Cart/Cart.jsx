import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cartData from '../cart';

const Cart = () => {
  const [cart, setCart] = useState(cartData);  // Directly use the imported JSON data
  const [loading, setLoading] = useState(false); // Loading is false since no external fetch
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false); // Simulate loading effect if necessary
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="cart-container max-w-screen-lg mx-0 p-0">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((item) => (
            <div key={item.id} className="cart-item flex flex-col items-center mb-6">
              <Link to={`/product/${item.id}`} className="flex flex-col items-center">
                <div className="relative w-[290px] h-[250px] mb-7 ">
                  {/* Elliptical overlay without transparency */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[230px] h-[90px] bg-[#E4CBCB] flex justify-center items-center rounded-full shadow-lg"
                  >
                    {/* Medicine name with color #3E3B3B */}
                    <h3 className="text-sm font-semibold text-center" style={{ color: '#3E3B3B' }}>
                      {item.medicineName}
                    </h3>
                  </div>
                  {/* Center the image below the ellipse and make it smaller */}
                  <img
                    src={item.imageUrl || 'https://via.placeholder.com/290x250.png'}
                    alt={item.medicineName}
                    className="w-[180px] h-[150px] object-cover rounded-md mt-4 shadow-md" // Image is smaller with shadow
                  />
                </div>
              </Link>
              <div className="item-details text-center">
                <p className="text-xs text-gray-700">Quantity: {item.quantity}</p>
                <p className="text-xs text-gray-700">Price: ${item.price}</p>
                <p className="text-xs text-gray-700">Discount: ${item.discount}</p>
                <p className="text-xs text-gray-700">MRP: ${item.realMrp}</p>
                <p className="text-xs text-gray-700">Discounted Price: ${item.discountMrp}</p>
                <p className="text-xs italic text-gray-500 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
