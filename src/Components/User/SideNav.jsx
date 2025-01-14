import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const SideNav = () => {
  return (
    <div className="w-full md:w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-semibold mb-6">My Account</h2>
      <ul>
        <li className="mb-4">
          <Link to="/profile" className="hover:text-gray-400">Personal Information</Link>
        </li>
        <li className="mb-4">
          <Link to="/orderstatus" className="hover:text-gray-400">Order Status</Link>
        </li>
        <li className="mb-4">
          <Link to="/orderhistory" className="hover:text-gray-400">Order History</Link>
        </li>
        <li className="mb-4">
          <Link to="/prescriptions" className="hover:text-gray-400">Prescriptions</Link>
        </li>
        <li className="mb-4">
          <Link to="/paymentmethod" className="hover:text-gray-400">Payment Methods</Link>
        </li>
        <li className="mb-4">
          <Link to="/pharmacyservices" className="hover:text-gray-400">Pharmacy Services</Link>
        </li>
        <li className="mb-4">
          <Link to="/securitysettings" className="hover:text-gray-400">Security Settings</Link>
        </li>
        <li className="mb-4">
          <Link to="/customersupport" className="hover:text-gray-400">Customer Support</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
