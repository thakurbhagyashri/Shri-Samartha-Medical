import React from 'react';
import SideNav from './SideNav';

const CustomerSupport = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <SideNav />
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Contact Support</button>
      <p>View Returns & Refunds: <a href="#" className="text-blue-600">[Link]</a></p>
    </section>
    </div>
  );
};

export default CustomerSupport;
