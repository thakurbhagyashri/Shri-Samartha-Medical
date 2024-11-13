import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ShoppingCart.css';

const ShoppingCart = () => {
    return (
        <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            <span className="cart-badge">3</span>
        </div>
    );
};

export default ShoppingCart;
