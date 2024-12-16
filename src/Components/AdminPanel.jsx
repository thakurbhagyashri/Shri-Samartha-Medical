import React, { useState } from 'react';
import ProductCard from './ProductCard';

const AdminPanel = () => {
  // Static product data
  const [products, setProducts] = useState([
    { id: 1, productName: 'Paracetamol', brandName: 'Sai Brand', price: '₹50' },
    { id: 2, productName: 'Vitamin C', brandName: 'Health First', price: '₹150' },
  ]);

  const [newProduct, setNewProduct] = useState({
    id: null,
    productName: '',
    brandName: '',
    price: '',
  });

  const [editMode, setEditMode] = useState(false);

  // Add product handler
  const handleAddProduct = () => {
    if (newProduct.productName && newProduct.price) {
      const newId = products.length ? products[products.length - 1].id + 1 : 1;
      const updatedProduct = { ...newProduct, id: newId };
      setProducts([...products, updatedProduct]);

      // Placeholder for API integration
      console.log('API CALL: Add Product:', updatedProduct);

      setNewProduct({ id: null, productName: '', brandName: '', price: '' }); // Clear form
    }
  };

  // Edit product handler
  const handleEditProduct = (product) => {
    setEditMode(true);
    setNewProduct(product);
  };

  // Update product
  const handleUpdateProduct = () => {
    const updatedProducts = products.map((item) =>
      item.id === newProduct.id ? newProduct : item
    );
    setProducts(updatedProducts);

    // Placeholder for API integration
    console.log('API CALL: Edit Product:', newProduct);

    setNewProduct({ id: null, productName: '', brandName: '', price: '' });
    setEditMode(false);
  };

  // Delete product handler
  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);

    // Placeholder for API integration
    console.log('API CALL: Delete Product ID:', id);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white h-full">
        <h1 className="text-2xl font-bold p-6">Sai Samarth Medical</h1>
        <nav>
          <ul>
            <li className="p-3 hover:bg-gray-700 cursor-pointer">Dashboard</li>
            <li className="p-3 hover:bg-gray-700 cursor-pointer text-green-400">Products</li>
            <li className="p-3 hover:bg-gray-700 cursor-pointer">Orders</li>
            <li className="p-3 hover:bg-gray-700 cursor-pointer">Users</li>
            <li className="p-3 hover:bg-gray-700 cursor-pointer mt-4">Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Manage Products</h2>

        {/* Add Product Form */}
        <div className="mb-6 p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold mb-2">
            {editMode ? 'Edit Product' : 'Add Product'}
          </h3>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.productName}
              onChange={(e) =>
                setNewProduct({ ...newProduct, productName: e.target.value })
              }
              className="border p-2 rounded w-1/3"
            />
            <input
              type="text"
              placeholder="Brand Name"
              value={newProduct.brandName}
              onChange={(e) =>
                setNewProduct({ ...newProduct, brandName: e.target.value })
              }
              className="border p-2 rounded w-1/3"
            />
            <input
              type="text"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="border p-2 rounded w-1/3"
            />
            <button
              onClick={editMode ? handleUpdateProduct : handleAddProduct}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              {editMode ? 'Update' : 'Add'}
            </button>
          </div>
        </div>

        {/* Product List */}
        <div>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.productName}
              brandName={product.brandName}
              price={product.price}
              onEdit={() => handleEditProduct(product)}
              onDelete={() => handleDeleteProduct(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
