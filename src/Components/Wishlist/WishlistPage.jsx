import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const [wishlistedProducts, setWishlistedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlisted')) || {};
    setWishlistedProducts(Object.values(storedWishlist)); // Fetch and set products
    setIsLoading(false); // Mark as loaded
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlisted')) || {};
    delete storedWishlist[productId];
    localStorage.setItem('wishlisted', JSON.stringify(storedWishlist));
    setWishlistedProducts(Object.values(storedWishlist)); // Update state without reloading
  };

  const handleMoveToCart = (product) => {
    // Logic for moving the product to the cart 
    console.log('Moving product to cart:', product);
    handleRemoveFromWishlist(product.id); 
  };

  if (isLoading) {
    return <p>Loading your wishlist...</p>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-8">Your Wishlist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistedProducts.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Your wishlist is empty!</p>
        ) : (
          wishlistedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600">Price: ${product.price}</p>

              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleMoveToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 flex justify-center">
      
       <Link to={"/all-categories"}  className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default WishlistPage;
