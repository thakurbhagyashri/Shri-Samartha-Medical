import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import { Link } from "react-router-dom";



const WishlistPage = () => {
  const { wishlist, addToCart, handleWishlist } = useContext(MyContext);
  const productsData = [
    { id: 1, name: "Product 1", description: "Description 1", price: 10, imageUrl: "image1.jpg" },
    { id: 2, name: "Product 2", description: "Description 2", price: 20, imageUrl: "image2.jpg" },
    // Add more products here
  ];
  const wishlistProducts = Object.keys(wishlist)
    .filter((productId) => wishlist[productId]) // Only the products in the wishlist
    .map((productId) => {
      // Retrieve product data (in this case, you need to fetch this data from your product array)
      return productsData.find((product) => product.id === parseInt(productId)); // Assuming you have a `productsData` array
    });

  return (
    <div>
      <h1>Your Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
              <div className="h-40 w-full mb-4 bg-gray-200 rounded-lg">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </Link>
                <Link to="/wishlist" className="text-blue-500">Wishlist</Link>

              </div>
              <div className="p-4">
                <Link
                  to={`/product/${product.id}`}
                  className="text-lg font-semibold text-gray-800 hover:text-blue-500 no-underline"
                >
                  {product.name}
                </Link>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <p className="text-sm text-gray-600">{product.price}</p>

                <div className="flex justify-between items-center">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleWishlist(product.id)}
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
