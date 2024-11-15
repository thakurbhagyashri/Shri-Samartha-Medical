import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import cartData from './TrendingProductsJs'; // Import cart data
import './TrendingProducts.css';
import AddToCartButton from '../Button/AddToCart';


const TrendingProducts = () => {
  const [cart] = useState(cartData); // Set cart data to state

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <Link to={`/product/${item.id}`}>
                <div className="image-container">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="cart-item-image" // Image with styling and shadow
                    />
                </div>
                <p className="medicine-title">{item.title}</p> {/* Title below the image */}
              </Link>
              <AddToCartButton text={"ADD TO CART"}/>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingProducts;
