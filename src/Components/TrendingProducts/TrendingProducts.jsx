
import React, { useState, useContext } from 'react';
import { MyContext } from '../MyContext';
import cartData from './TrendingProductsJs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import AddToCartButton from '../Button/AddToCart'; // Assuming this button is a separate component

const TrendingProducts = () => {
  const { addToCart } = useContext(MyContext); // Use the addToCart function from context
  const [notification, setNotification] = useState(''); // Notification state

  // Function to show notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null); // Hide notification after 3 seconds
    }, 3000);
  };

  // Handle adding item to cart
  const handleAddToCart = (item) => {
    addToCart(item); // Add item to the global cart using the context
    showNotification('Product added to cart successfully');
  };

  return (
    <div className="container mx-[100px] my-[50px] max-w-[1000px]">
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Assuming `cartData` is the list of trending products */}
        {cartData.map((item) => (
          <div
            key={item.id}
            className="group bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:rounded-3xl hover:bg-blue-50 cursor-pointer border-2 border-transparent group-hover:border-blue-500"
          >
            <Link to={`/product/${item.id}`} className="block max-w-xs">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <p className="mt-2 text-center text-lg font-semibold text-gray-800 capitalize group-hover:font-bold transition-all duration-300">
                {item.title}
              </p>

              {/* Render dynamic rating */}
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={index < item.rating ? 'text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>

              <p className="mt-2 text-center text-lg font-semibold text-gray-800 capitalize group-hover:font-bold transition-all duration-300">
                ₹ {item.price}
              </p>
            </Link>

            {/* Add to cart button */}
            <AddToCartButton
              text="Add to Cart"
              onClick={() => handleAddToCart(item)}  // Add the item to the cart
              showNotification={showNotification}  // Show the notification
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
