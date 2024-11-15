import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; 

import cartData from './TrendingProductsJs'; // Import cart data
import AddToCartButton from '../Button/AddToCart'; 

const TrendingProducts = () => {
  const [cart] = useState(cartData);
  const [wishlistedProducts, setWishlistedProducts] = useState([]); 

  const handleWishlist = (id, event) => {
    event.stopPropagation(); 
    setWishlistedProducts((prevWishlisted) =>
      prevWishlisted.includes(id)
        ? prevWishlisted.filter((item) => item !== id)
        : [...prevWishlisted, id]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* If no products in cart, display message */}
      {cart.length === 0 ? (
        <p className="text-xl font-semibold text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Loop through cart data and display product cards */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50 cursor-pointer border-2 border-transparent group-hover:border-blue-500 p-4"
            >
              <div className="relative">
                <Link to={`/product/${item.id}`} className="block">
                 
                  <div className="relative w-full h-48 rounded-xl overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

              
                  <p className="mt-4 text-center text-lg font-semibold text-gray-800 capitalize group-hover:text-blue-600 group-hover:tracking-widest transition-all duration-300">
                    {item.title}
                  </p>
                </Link>

                {/* Wishlist heart icon */}
                <div
                  className={`absolute top-4 right-4 text-2xl cursor-pointer transition-colors duration-300 ${
                    wishlistedProducts.includes(item.id) ? 'text-red-500' : 'text-gray-500'
                  }`}
                  onClick={(e) => handleWishlist(item.id, e)} 
                >
                  <FaHeart />
                </div>
              </div>

              <p className="text-center text-lg font-semibold text-gray-800 mt-2">
                ₹{item.price}
              </p>

              {/* Add to cart button */}
              <div className="px-4 py-3">
                {/* <AddToCartButton text={"ADD TO CART"} /> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingProducts;
