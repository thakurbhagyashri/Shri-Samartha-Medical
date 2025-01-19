import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        // Update the role in localStorage to 'user'
        localStorage.setItem('role', 'user');
        // Remove the JWT token or any other sensitive data
        localStorage.removeItem('token');

        // Navigate to the home page
        navigate('/');

        // Optionally, refresh the page to reset the application state
        window.location.reload();
    };

    return (
        <div className="w-full md:w-1/5 bg-gray-800 text-white p-1.5 font-fira h-screen">
            <h2 className="text-3xl text-white font-semibold mb-10 pl-3 pr-1">
                Shri Samarth Pharmaceuticals
            </h2>
            <ul>
                <li className="mb-6">
                    <Link
                        to="/dashboard"
                        className={`text-xl pl-5 ${
                            location.pathname === '/dashboard' ? 'text-green-400' : 'hover:text-green-400'
                        }`}
                    >
                        Dashboard
                    </Link>
                </li>
                <li className="mb-6">
                    <Link
                        to="/allProducts"
                        className={`text-xl pl-5 ${
                            location.pathname === '/allProducts' ? 'text-green-400' : 'hover:text-green-400'
                        }`}
                    >
                        Products
                    </Link>
                </li>
                <li className="mb-6">
                    <Link
                        to="/adminOrder"
                        className={`text-xl pl-5 ${
                            location.pathname === '/adminOrder' ? 'text-green-400' : 'hover:text-green-400'
                        }`}
                    >
                        Orders
                    </Link>
                </li>
                <li className="mb-6">
                    <Link
                        to="/manageAdmin"
                        className={`text-xl pl-5 ${
                            location.pathname === '/manageAdmin' ? 'text-green-400' : 'hover:text-green-400'
                        }`}
                    >
                        Manage Admin
                    </Link>
                </li>
                <li className="mt-20 mb-8">
                    <button
                        onClick={() => setShowModal(true)}
                        className="text-xl pl-5 hover:text-green-400 focus:outline-none"
                    >
                        Logout
                    </button>
                </li>
            </ul>

            {/* Logout Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-noto">
                    <div className="bg-white rounded-lg p-6 w-90">
                        <h2 className="text-lg text-gray-500 font-semibold mb-4 text-center">Are you sure you want to logout?</h2>
                        <div className="flex justify-between mt-4">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                            <button
                                className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideBar;
