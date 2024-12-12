import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopByCategory.css';
import cartData from './ShopByCategoryJs.js';

const ShopByCategory = () => {
  const [cart] = useState(cartData); 
  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items font-custom ">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <Link to={`/product/${item.id}`}>
                <div className="image-container">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="cart-item-image"
                    />
                </div>
                <p className="medicine-title">{item.title}</p> 
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopByCategory;
