import React from "react";

const AdminPage = () => {
  const products = [
    {
      id: 1,
      name: "Product Name",
      brand: "Brand Name",
      category: "Shampoo, Medicine",
      price: "1000/-",
    },
    {
      id: 2,
      name: "Product Name",
      brand: "Brand Name",
      category: "Shampoo, Medicine",
      price: "1000/-",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white h-full fixed top-0 left-0">
        <div className="p-4 font-bold text-xl">Sai Samarth Medical</div>
        <ul>
          <li className="p-3 text-green-400">Dashboard</li>
          <li className="p-3 text-green-400">Products</li>
          <li className="p-3">Orders</li>
          <li className="p-3">Users</li>
          <li className="p-3">Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 flex justify-between items-center bg-blue-300 shadow-md">
          <h1 className="font-bold text-gray-800">Product</h1>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search Products"
              className="border p-2 rounded-md"
            />
            <button className="bg-white shadow-md p-2 rounded-full">
              Ashok
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Add Product Button */}
          <button className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
            ADD PRODUCT
          </button>

          {/* Product Cards */}
          <div className="flex flex-col gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 bg-white shadow-md rounded-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-300 rounded-md"></div>
                  <div>
                    <h2 className="font-bold text-lg">{product.name}</h2>
                    <p>{product.brand}</p>
                    <p className="text-gray-500">{product.category}</p>
                    <p>Price: {product.price}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-yellow-500 px-4 py-2 rounded-md text-white">
                    Edit
                  </button>
                  <button className="bg-red-500 px-4 py-2 rounded-md text-white">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
