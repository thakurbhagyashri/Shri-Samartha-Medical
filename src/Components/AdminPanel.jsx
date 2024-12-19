import React, { useState, useEffect } from "react";
import Search from "./Search/Search";

const AdminPanel = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product Name", brand: "Brand Name", category: "Shampoo, Medicine", price: "1000/-" },
    { id: 2, name: "Product Name", brand: "Brand Name", category: "Shampoo, Medicine", price: "1000/-" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentProduct, setCurrentProduct] = useState({});

  // Add/remove overflow-hidden on the body
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showModal]);

  // Handle Add Product
  const handleAddProduct = () => {
    setCurrentProduct({ name: "", brand: "", category: "", price: "" });
    setModalType("add");
    setShowModal(true);
  };

  // Handle Edit Product
  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setModalType("edit");
    setShowModal(true);
  };

  // Handle Delete Product
  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Handle Save Product (Add/Edit)
  const handleSaveProduct = () => {
    if (modalType === "add") {
      const newProduct = { ...currentProduct, id: products.length + 1 };
      setProducts([...products, newProduct]);
    } else {
      const updatedProducts = products.map((product) =>
        product.id === currentProduct.id ? currentProduct : product
      );
      setProducts(updatedProducts);
    }
    setShowModal(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold p-6">Sai Samarth Medical</h1>
        <ul>
          <li className="p-3 hover:bg-gray-700 cursor-pointer text-green-400">Dashboard</li>
          <li className="p-3 hover:bg-gray-700 cursor-pointer text-green-400">Products</li>
          <li className="p-3 hover:bg-gray-700 cursor-pointer">Orders</li>
          <li className="p-3 hover:bg-gray-700 cursor-pointer">Users</li>
          <li className="p-3 mt-4 hover:bg-gray-700 cursor-pointer">Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          {/* <input
            type="text"
            placeholder="Search Products"
            className="border border-gray-300 p-2 rounded-lg w-1/2 focus:outline-none focus:ring focus:ring-green-300"
          /> */}
          
          <Search/>
          <div className="flex-1 p-3 relative">    
             <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all"
          >
            ADD PRODUCT
          </button>  
          </div> 
    
         
        </div>
        

        {/* Product List */}
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-4"
            >
              <div className="flex space-x-6 items-center">
                <div className="w-20 h-20 bg-gray-300 rounded"></div>
                <div>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                  <p className="text-sm text-gray-600">Categories {product.category}</p>
                  <p className="text-gray-800 font-semibold mt-2">Price {product.price}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500 transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Add/Edit */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
            <div
              className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform scale-95 animate-fade-in w-full max-w-md"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                {modalType === "add" ? "Add Product" : "Edit Product"}
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={currentProduct.name}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                />
                <input
                  type="text"
                  placeholder="Brand Name"
                  value={currentProduct.brand}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, brand: e.target.value })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                />
                <input
                  type="text"
                  placeholder="Categories"
                  value={currentProduct.category}
                  onChange={(e) =>
                    setCurrentProduct({ ...currentProduct, category: e.target.value })
                  }
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                />
                <input
                  type="text"
                  placeholder="Price"
                  value={currentProduct.price}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 px-4 py-2 text-white rounded hover:bg-gray-500 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProduct}
                  className="bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600 transition-all"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
