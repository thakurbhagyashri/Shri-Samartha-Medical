import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';

const CustomerSupport = () => {
  return (
    <div className="flex flex-col md:flex-row font-noto ">
      {/* Sidebar */}
      <SideNav />
    <section className="mb-8 ml-5 mt-5">
      <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md mb-4">Contact Support</button>
      <br></br>
      {/* <p className="p-2">View Returns & Refunds: <a href="#" className="text-blue-600">[Link]</a></p> */}
      <Link to="/return" className="hover:text-blue-600 pt-4"> View Returns & Refunds Policoies</Link>
    </section>
    </div>
  );
};

export default CustomerSupport;
