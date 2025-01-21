import React, { useContext, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddToCartButton from "../Button/AddToCart";
import { MyContext } from "../MyContext";
import { categoriesData } from "../ShopByCategory/categoriesData"; // Assuming categoriesData is exported from a separate file
import ConfirmationModal from "../PopUp/ConfirmationModal";
const WishlistPage = () => {
  const [wishlistedProducts, setWishlistedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track the selected product for the confirmation
  const { addToCart } = useContext(MyContext);

  // Fetch the wishlisted products from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlisted")) || {};
    const wishlistedProductIds = Object.keys(storedWishlist);
    const allProducts = categoriesData.flatMap((category) => category.products);
    const productsInWishlist = allProducts.filter((product) =>
      wishlistedProductIds.includes(product.id.toString())
    );

    setWishlistedProducts(productsInWishlist);
    setIsLoading(false);
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlisted")) || {};
    delete storedWishlist[productId];
    localStorage.setItem("wishlisted", JSON.stringify(storedWishlist));
    setWishlistedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleMoveToCart = (product) => {
    setSelectedProduct(product);
    setShowConfirmation(true);
  };

  const handleDeleteProduct = (product) => {
    setSelectedProduct(product);
    setShowDeleteConfirmation(true);
  };

  const confirmAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct); // Add product to cart
      handleRemoveFromWishlist(selectedProduct.id); // Remove from wishlist
    }
    setShowConfirmation(false); // Close confirmation modal
  };

  const cancelAddToCart = () => {
    setShowConfirmation(false); // Close confirmation modal
  };

  const confirmDeleteProduct = () => {
    if (selectedProduct) {
      handleRemoveFromWishlist(selectedProduct.id); // Remove from wishlist
    }
    setShowDeleteConfirmation(false); // Close delete confirmation modal
  };

  const cancelDeleteProduct = () => {
    setShowDeleteConfirmation(false); // Close delete confirmation modal
  };

  if (isLoading) {
    return <p>Loading your wishlist...</p>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-fira">
      <h2 className="text-4xl text-white font-semibold text-center mb-8 tracking-wide">
        Your Wishlist
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {wishlistedProducts.length === 0 ? (
          <p className="text-center text-lg text-gray-200">
            Your wishlist is empty!
          </p>
        ) : (
          wishlistedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white w-32 sm:w-40 md:w-48 p-4 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl duration-300"
            >
              <Link
                to={`/product/${product.id}`}
                className="block hover:text-cyan-600 transition-all"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-32 object-cover mb-4 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">Price: ₹{product.price}</p>
              </Link>

              <div className="mt-4 flex justify-between items-center">
                <AddToCartButton
                  text="Move to Cart"
                  onClick={() => handleMoveToCart(product)}
                  className="px-6 py-2 text-white rounded-lg shadow-md transition-all duration-200"
                />
                <button
                  onClick={() => handleDeleteProduct(product)}
                  className="text-red-600 hover:text-red-700 focus:outline-none transform transition-all duration-200 pt-3"
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to={"/all-categories"}
          className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Confirmation Modals */}
      <ConfirmationModal
        isOpen={showConfirmation}
        message={`Are you sure you want to move ${selectedProduct?.name} to your cart?`}
        onConfirm={confirmAddToCart}
        onCancel={cancelAddToCart}
        actionText="Yes, Add to Cart"
        cancelText="No, Cancel"
      />

      <ConfirmationModal
        isOpen={showDeleteConfirmation}
        message={`Are you sure you want to remove ${selectedProduct?.name} from your wishlist?`}
        onConfirm={confirmDeleteProduct}
        onCancel={cancelDeleteProduct}
        actionText="Yes, Remove"
        cancelText="No, Cancel"
      />
    </div>
  );
};

export default WishlistPage;
