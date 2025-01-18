import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AddToCartButton from '../Button/AddToCart';
import { MyContext } from '../MyContext';

const WishlistPage = () => {
  const [wishlistedProducts, setWishlistedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 const {addToCart}=useContext(MyContext);
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlisted')) || {};
    setWishlistedProducts(Object.values(storedWishlist)); // Fetch and set products
    setIsLoading(false); 
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
  // To handle to product cart
  const handleAddToCart = (product) => {
    addToCart(product);
    // showNotification('Product added to cart successfully');
    alert("Product Move to Cart Successfully!");
  };
  if (isLoading) {
    return <p>Loading your wishlist...</p>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-noto">
      <h2 className="text-3xl font-semibold text-center mb-8">Your Wishlist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistedProducts.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Your wishlist is empty!</p>
        ) : (
          wishlistedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 "
            >
              {/* hover:text-2xl blur-xl */}

              {/* for plain wishlist part */}
              {/* <Link to={`/categoryDetails/${product.id}`} className="block">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">Price: ${product.price}</p>
              </Link> */}
              <Link to={`/product/${product.id}`} className="block hover:text-2xl text-cyan-600">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64  mb-4 cursor-pointer"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">Price: ${product.price}</p>
              </Link>

              <div className="mt-4 flex justify-between">
                <AddToCartButton
                  onClick={() => handleAddToCart(product)}
                 
                    text="Move To Cart"
                />
                
                
                {/* <AddToCartButton
                    text="Add to Cart"
                    onClick={() => handleAddToCart(product)} // Add the item to the cart
                  /> */}
                {/* <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button> */}


                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <FaTrashAlt size={20} /> {/* React Icon trash */}
                </button>
             
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <Link  to={"/all-categories"} className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 m-4">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default WishlistPage;
