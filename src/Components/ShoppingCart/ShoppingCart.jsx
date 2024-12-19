import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyContext';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { cart } = useContext(MyContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cart"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <span className="cart-badge">{cart.length}</span>

      {isHovered && cart.length > 0 && (
        <div className="cart-dropdown">
        {cart.slice(0, 3).map((item, index) => (
          <div key={index} className="scart-item">
            <img src={item.imageUrl} alt={item.title} className="scart-item-image" />
            <div className="scart-item-details">
              <p className="scart-item-title">{item.title}</p>
              <p className="scart-item-price">₹{item.price}</p>
            </div>
          </div>
        ))}
        <Link to="/cart" className="view-all-link">
          View All Products
        </Link>
      </div>
      
      )}
    </div>
  );
};

export default ShoppingCart;
