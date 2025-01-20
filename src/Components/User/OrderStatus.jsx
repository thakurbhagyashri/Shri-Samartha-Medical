// OrderStatus.js
import React from 'react';
import SideNav from './SideNav';

const OrderStatus = () => {
  // Dummy data for order status
  const orders = [
    { id: 1, status: 'Shipped', estimatedDelivery: '2025-01-15' },
    { id: 2, status: 'Processing', estimatedDelivery: '2025-01-20' },
  ];

  return (
    <div className="flex flex-col md:flex-row font-noto">
      {/* Sidebar */}
      <SideNav />
    <div className="flex-1 p-6">
      <h2 className="text-3xl font-semibold mb-4">Order Status</h2>
      {orders.map((order) => (
        <div key={order.id} className="bg-white p-4 rounded-md shadow-md mb-4">
          <h3 className="font-semibold">Order #{order.id}</h3>
          <p>Status: {order.status}</p>
          <p>Estimated Delivery: {order.estimatedDelivery}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OrderStatus;
