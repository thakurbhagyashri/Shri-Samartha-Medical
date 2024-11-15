import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cartData from '../TrendingProducts/TrendingProductsJs'; 
import { FaHeart } from 'react-icons/fa';

const Product = () => {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = cartData.find(item => item.id === parseInt(id)); 
    setProduct(foundProduct);
  }, [id]);

  // Toggle wishlist status
  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value));
    setQuantity(value);
  };


  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(Math.max(1, quantity - 1)); // Ensure quantity doesn't go below 1

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main product card */}
      <div className="max-w-2xl mx-auto p-9 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Product image with hover effect */}
        <div className="relative w-full h-80 mb-6">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 transform hover:scale-105"
          />
          {/* Centered Wishlist heart icon */}
          <div
            className={`absolute top-4 right-4 text-3xl cursor-pointer transition-colors duration-300 ${
              isWishlisted ? 'text-red-500' : 'text-gray-500'
            }`}
            onClick={handleWishlist}
          >
            <FaHeart />
          </div>
        </div>

        {/* Product details */}
        <h1 className="text-2xl font-semibold mt-4">{product.title}</h1>
        <p className="text-lg text-gray-600 mt-2">{product.description}</p>
        <p className="text-xl font-semibold mt-4 text-blue-600">Price: ${product.price}</p>

        {/* Quantity selection */}
        <div className="flex items-center mt-6 space-x-4">
          <label className="text-lg font-medium">Quantity: </label>
          <div className="flex items-center border rounded-md overflow-hidden">
            <button
              onClick={handleDecrement}
              className="px-4 py-2 text-xl bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 text-center border-0 py-2 focus:outline-none"
            />
            <button
              onClick={handleIncrement}
              className="px-4 py-2 text-xl bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
