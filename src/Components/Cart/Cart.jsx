import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cart');
        setCart(response.data);
      } catch (err) {
        setError('Failed to fetch cart data');
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="cart-container max-w-screen-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div key={item.id} className="cart-item flex flex-col items-center mb-6">
              <Link to={`/product/${item.id}`} className="flex flex-col items-center">
                <div className="relative w-[455px] h-[274px]">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[334px] h-[143px] bg-white bg-opacity-70 flex justify-center items-center rounded-full shadow-lg">
                    <h3 className="text-lg font-semibold text-center">{item.name}</h3>
                  </div>
                </div>
              </Link>
              <div className="item-details mt-4 text-center">
                <p className="text-sm">Quantity: {item.quantity}</p>
                <p className="text-sm">Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
