import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoriesData } from './categoriesData'; // Mock categories data
import AddToCartButton from '../Button/AddToCart'; // Assuming this button is a separate component
import { MyContext } from '../MyContext';

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(MyContext); // Use the addToCart function from context

  useEffect(() => {
    // Find the product from categoriesData by product ID
    const foundProduct = categoriesData
      .flatMap((category) => category.products) // Flatten all products from categories
      .find((prod) => prod.id === productId); // Match product ID

    if (foundProduct) {
      setProduct(foundProduct);
    }

    setLoading(false);
  }, [productId]);

  // Handle adding item to cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add item to the global cart using the context
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="flex">
      {/* Left-side Category Navigation */}
      <div className="w-1/6 bg-gray-100 p-4">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul>
          {categoriesData.map((cat) => (
            <li key={cat.id} className="mb-2">
              <Link
                to={`/category/${cat.name}`}
                className="text-lg text-gray-800 hover:text-blue-500"
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 p-6">
        <h2 className="text-3xl font-semibold mb-8">
          {product.name}
        </h2>

        <div className="flex space-x-8">
          {/* Product Image */}
          <div className="w-1/2 bg-gray-200 p-4 rounded-lg">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-1/2 p-4">
            <h3 className="text-2xl font-semibold">{product.name}</h3>
            <p className="text-lg text-gray-700 mt-2">{product.description}</p>
            <p className="text-xl font-semibold text-gray-900 mt-4">{product.price}</p>

            {/* Add to Cart Button */}
            <AddToCartButton
              text="Add to Cart"
              onClick={() => handleAddToCart(product)} // Pass the individual product to add to cart
            />
          </div>
        </div>

        {/* Back to Category Link */}
        <Link to={`/category/${product.category}`} className="mt-6 text-blue-500">
          Back to {product.category} Category
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailPage;
