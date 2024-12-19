import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    productName: '',
    brandName: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('API CALL: Add Product Data', productData);

    // After submitting, navigate back to Admin Panel
    navigate('/admin');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            name="productName"
            value={productData.productName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Brand Name</label>
          <input
            type="text"
            name="brandName"
            value={productData.brandName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter brand name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter price"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600"
        >
          Add Product
        </button>
        <button
          type="button"
          onClick={() => navigate('/admin')}
          className="mt-4 bg-gray-400 text-white py-2 px-4 rounded w-full hover:bg-gray-500"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
