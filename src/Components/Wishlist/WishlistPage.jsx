import React, { useEffect, useState } from 'react';

const WishlistPage = () => {
  const [wishlistedProducts, setWishlistedProducts] = useState({});

  useEffect(() => {
    // Retrieve the wishlist data from localStorage
    const storedWishlist = localStorage.getItem('wishlisted');
    if (storedWishlist) {
      setWishlistedProducts(JSON.parse(storedWishlist));
    }
  }, []);

  return (
    <div>
      <h2>Your Wishlist</h2>
      <div className="wishlist-products">
        {Object.keys(wishlistedProducts).length === 0 ? (
          <p>Your wishlist is empty!</p>
        ) : (
          Object.keys(wishlistedProducts).map((productId) => (
            <div key={productId}>
              <p>Product ID: {productId}</p>
              {/* Render product details based on the productId */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
