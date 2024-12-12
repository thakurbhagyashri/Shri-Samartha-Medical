import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'; // Import specific icons


const AdminPanel = () => {
  // State to toggle sidebar visibility (for mobile responsiveness)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);

  // Function to toggle sidebar visibility on mobile
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleProducts = () => setProductsOpen(!productsOpen);
  const toggleOrders = () => setOrdersOpen(!ordersOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-10 bg-gray-800 bg-opacity-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
      ></div>

      {/* <div
        className={`lg:w-64 w-64 h-full bg-gray-800 text-white fixed top-0 left-0 p-4 ${sidebarOpen ? "block" : "hidden lg:block"}`}
      >
        <div className="text-2xl font-bold mb-8">Medical Admin</div>
        <ul>
          <li>
       
        <input className="" />
            <Link to="/dashboard" className="block p-3 hover:bg-gray-700">
            </Link>
          </li>
          <li>
          <input className=""/>
            <Link to="/products" className="block p-3 hover:bg-gray-700">
              Products
            </Link>
          </li>
          <li>
            <Link to="/users" className="block p-3 hover:bg-gray-700">
              Users
            </Link>
          </li>
          <li>
            <Link to="/orders" className="block p-3 hover:bg-gray-700">
              Orders
            </Link>
          </li>
        </ul>
      </div> */}
  <div
      className={`lg:w-64 w-64 h-full bg-gray-800 text-white fixed top-0 left-0 p-4 ${sidebarOpen ? "block" : "hidden lg:block"}`}
    >
      <div className="text-2xl font-bold mb-8">Medical Admin</div>
      <ul>
        <li>
          <Link to="/dashboard" className="block p-3 hover:bg-gray-700">
            Dashboard
          </Link>
        </li>

        {/* Products Section with Dropdown and Font Awesome Icons */}
        <li>
          <div
            className="flex items-center justify-between block p-3 hover:bg-gray-700 cursor-pointer"
            onClick={toggleProducts}
          >
            <span>Products</span>
            <FontAwesomeIcon icon={productsOpen ? faAngleUp : faAngleDown} className="text-white" />
          </div>
          {productsOpen && (
            <ul className="ml-4">
              <li>
                <Link to="/products/add" className="block p-3 hover:bg-gray-700">
                  Add Product
                </Link>
              </li>
              <li>
                <Link to="/products/edit" className="block p-3 hover:bg-gray-700">
                  Edit Product
                </Link>
              </li>
              <li>
                <Link to="/products/delete" className="block p-3 hover:bg-gray-700">
                  Delete Product
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Orders Section with Dropdown and Font Awesome Icons */}
        <li>
          <div
            className="flex items-center justify-between block p-3 hover:bg-gray-700 cursor-pointer"
            onClick={toggleOrders}
          >
            <span>Orders</span>
            <FontAwesomeIcon icon={ordersOpen ? faAngleUp : faAngleDown} className="text-white" />
          </div>
          {ordersOpen && (
            <ul className="ml-4">
              <li>
                <Link to="/orders/all" className="block p-3 hover:bg-gray-700">
                  All Orders
                </Link>
              </li>
              <li>
                <div className="flex items-center justify-between block p-3 hover:bg-gray-700 cursor-pointer">
                  <span>Update Order Status</span>
                  <FontAwesomeIcon icon={ordersOpen ? faAngleUp : faAngleDown} className="text-white" />
                </div>
                <ul className="ml-4">
                  <li>
                    <Link to="/orders/status/completed" className="block p-3 hover:bg-gray-700">
                      Completed
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders/status/rejected" className="block p-3 hover:bg-gray-700">
                      Rejected
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </li>

        {/* Users Section */}
        <li>
          <Link to="/users" className="block p-3 hover:bg-gray-700">
            Users
          </Link>
        </li>
      </ul>
    </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col pl-64">
        {/* Top Navbar */}
        <div className="bg-white shadow-md flex justify-between items-center p-4">
          <button className="lg:hidden" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round" 
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-gray-800">Admin</span>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">Logout</button>
          </div>
        </div>

        {/* Content Area (Dashboard, etc.) */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Dashboard Cards */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Total Products</h3>
              <p className="text-3xl">150</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Total Orders</h3>
              <p className="text-3xl">80</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Total Users</h3>
              <p className="text-3xl">200</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Total Revenue</h3>
              <p className="text-3xl">$5000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
