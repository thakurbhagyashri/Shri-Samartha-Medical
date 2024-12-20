import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product Name", brand: "Brand Name", category: "Shampoo, Medicine", price: "1000/-" },
    { id: 2, name: "Product Name", brand: "Brand Name", category: "Shampoo, Medicine", price: "1000/-" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    quantity: "",
    discount: "",
    companyName: "",
    medicineName: "",
    minAge: "",
    maxAge: "",
    realMrp: "",
    discountMrp: "",
    description: "",
    comments: "",
    image: null,
  });

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on cleanup
    };
  }, [showModal]);

  // Handle Add Product
  const handleAddProduct = () => {
    setCurrentProduct({
      name: "",
      brand: "",
      category: "",
      price: "",
      quantity: "",
      discount: "",
      companyName: "",
      medicineName: "",
      minAge: "",
      maxAge: "",
      realMrp: "",
      discountMrp: "",
      description: "",
      comments: "",
      image: null,
    });
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
    <div className="flex h-screen bg-gray-100 font-custom">
      {/* Sidebar */}
      <aside className="w-80 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold p-6">Shri Samartha Pharmaceuticals</h1>
        <ul className="ml-5">
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
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search Products"
            className="border border-gray-400 pl-5 rounded-xl w-[45%] h-12 focus:outline-none focus:ring focus:ring-green-300"
          />
          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white px-6 ml-96 py-2 justify-items-end rounded-lg hover:bg-green-600 transition-all"
          >
            ADD PRODUCT
          </button>
        </div>

        {/* Product List */}
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-4 mx-16"
            >
              <div className="flex space-x-10 items-center">
                <div className="w-20 h-20 bg-gray-300 rounded"></div>
                <div>
                  <h3 className="font-bold text-xl">{product.name}</h3>
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
              className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform scale-95 animate-fade-in w-full max-w-4xl" // Increased form width
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                {modalType === "add" ? "Add Product" : "Edit Product"}
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Row 1: Two fields */}
                <div>
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={currentProduct.name}
                    onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Brand Name"
                    value={currentProduct.brand}
                    onChange={(e) => setCurrentProduct({ ...currentProduct, brand: e.target.value })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>

                {/* Row 2: Two fields */}
                <div>
                  <input
                    type="text"
                    placeholder="Categories"
                    value={currentProduct.category}
                    onChange={(e) =>
                      setCurrentProduct({ ...currentProduct, category: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Price"
                    value={currentProduct.price}
                    onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>

                {/* Row 3: Two fields */}
                <div>
                  <input
                    type="number"
                    placeholder="Quantity"
                    value={currentProduct.quantity}
                    onChange={(e) =>
                      setCurrentProduct({ ...currentProduct, quantity: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Discount"
                    value={currentProduct.discount}
                    onChange={(e) =>
                      setCurrentProduct({ ...currentProduct, discount: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>

                {/* Row 4: Two fields */}
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={currentProduct.companyName}
                    onChange={(e) =>
                      setCurrentProduct({ ...currentProduct, companyName: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Medicine Name"
                    value={currentProduct.medicineName}
                    onChange={(e) =>
                      setCurrentProduct({ ...currentProduct, medicineName: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>

                {/* Row 5: Two fields */}
                <div>
                  <input
                    type="number"
                    placeholder="Min Age"
                    value={currentProduct.minAge}
                    onChange={(e) =>
                      setCurrentProduct({ ...currentProduct, minAge: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Max Age"
                    value={currentProduct.maxAge}
                    onChange={(e) =>
                      setCurrentProduct({ ...currentProduct, maxAge: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>

                {/* Row 6: Two fields */}
                <div>
                  <input
                    type="text"
                    placeholder="Real MRP"
                    value={currentProduct.realMrp}
                    onChange={(e) =>
                      setCurrentProduct({ ...currentProduct, realMrp: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Discounted MRP"
                    value={currentProduct.discountMrp}
                    onChange={(e) =>
                      setCurrentProduct({ ...currentProduct, discountMrp: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>

                {/* Row 7: Description & Comments */}
                <div className="col-span-2">
                  <textarea
                    placeholder="Description"
                    value={currentProduct.description}
                    onChange={(e) =>
                      setCurrentProduct({ ...currentProduct, description: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <textarea
                    placeholder="Comments"
                    value={currentProduct.comments}
                    onChange={(e) =>
                      setCurrentProduct({ ...currentProduct, comments: e.target.value })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  ></textarea>
                </div>

                {/* Image Upload */}
                <div className="col-span-2">
                  <input
                    type="file"
                    onChange={(e) => setCurrentProduct({ ...currentProduct, image: e.target.files[0] })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProduct}
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                >
                  {modalType === "add" ? "Save" : "Update"}
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
