
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import cartData from '../TrendingProducts/TrendingProductsJs'; 
import { FaHeart } from "react-icons/fa"; 
import { FaStar } from "react-icons/fa";
import { MyContext } from '../MyContext';  // Assuming CartContext is already setup

const Product = () => {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(MyContext);
  const [notification, setNotification] = useState(''); // Notification state

  // Function to show notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(''); // Hide notification after 3 seconds
    }, 3000);
  };

  // Fetch the product data based on the product ID
  useEffect(() => {
    const foundProduct = cartData.find(item => item.id === parseInt(id)); 
    setProduct(foundProduct);
  }, [id]);

  // Handle adding item to cart
  const handleAddToCart = (product) => {
    // Create a product object with selected quantity
    const productToAdd = { ...product, quantity };
    addToCart(productToAdd); // Add item to the global cart using the context
    showNotification('Product added to cart successfully');
  };

  // Handle wishlist toggle
  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value));
    setQuantity(value);
  };

  // Increment and Decrement quantity
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(Math.max(1, quantity - 1));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-[100px] my-10 max-w-[1000px]">
      <div className="flex gap-10">
        {/* Product image */}
        <div className="w-4/12 border-2 border-gray-300 rounded-[10px] transition-transform duration-300 transform hover:scale-105">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-auto p-5"
          />
        </div>

        {/* Product details */}
        <div className="w-5/12 gap-5 flex flex-col justify-between" style={{ height: '100%' }}>
          {/* Wishlist heart icon */}
          <div
            className={`absolute right-[23rem] pt-1 text-3xl cursor-pointer transition-colors duration-300 ${isWishlisted ? 'text-red-500' : 'text-black'}`}
            onClick={handleWishlist}
          >
            <FaHeart
              style={{
                fill: isWishlisted ? 'red' : 'none',
                stroke: isWishlisted ? 'none' : 'black',
                strokeWidth: '15px',
                width: '2em',
              }}
            />
          </div>

          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>

          {/* Star rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`${index < product.rating ? 'text-yellow-400' : 'text-gray-300'} text-3xl`} // Increase size to text-3xl
              />
            ))}
          </div>

          <p className="text-xl font-semibold text-blue-600">Price: ₹{product.price}</p>

          {/* Quantity selection */}
          <div className="flex items-center">
            <label className="text-lg font-medium mr-2">Quantity: </label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={handleDecrement}
                className="px-2 py-1 text-xl bg-gray-200 hover:bg-gray-300 focus:outline-none"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-10 text-center border-0 py-1"
              />
              <button
                onClick={handleIncrement}
                className="px-2 py-1 text-xl bg-gray-200 hover:bg-gray-300 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:font-bold"
            onClick={() => handleAddToCart(product)} 
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Display notification */}
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
    </div>
  );
};

export default Product;
