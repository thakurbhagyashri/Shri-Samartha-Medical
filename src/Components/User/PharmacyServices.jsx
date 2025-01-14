import React from 'react';
import SideNav from './SideNav';

const PharmacyServices = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <SideNav />
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Pharmacy Services</h2>
      <p>Medicine Delivery Subscription: Active</p>
      <p>Next Delivery: 2025-01-15</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Manage Subscription</button>
      <p>Health Consultations: No upcoming appointments</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Book Consultation</button>
    </section>
    </div>
  );
};

export default PharmacyServices;
