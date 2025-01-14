import React from 'react';
import SideNav from './SideNav';

const PaymentMethods = ({ paymentMethods }) => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <SideNav />
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
      {paymentMethods.map((method) => (
        <div key={method.id} className="bg-white p-4 rounded-md shadow-md mb-4">
          <p>Card ending in {method.last4}</p>
          <p>Expiry Date: {method.expiry}</p>
          <button className="bg-yellow-500 text-white py-1 px-3 rounded-md">Edit</button>
          <button className="bg-red-500 text-white py-1 px-3 rounded-md ml-2">Remove</button>
        </div>
      ))}
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Add Payment Method</button>
    </section>
    </div>
  );
};

export default PaymentMethods;
