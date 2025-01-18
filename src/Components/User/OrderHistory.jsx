// OrderHistory.js
import React from 'react';
import SideNav from './SideNav';

const OrderHistory = () => {
  // Dummy data for order history
    // const [orderHistory, setOrderHistory] = useState([
    //   { id: 1, date: "2025-01-01", status: "Delivered", total: "$50", items: ["Medicine A", "Medicine B"] },
    //   { id: 2, date: "2025-01-05", status: "Shipped", total: "$30", items: ["Medicine C"] },
    // ]);

  const pastOrders = [
    { id: 1, date: '2025-01-01', total: '$50', items: ['Medicine A', 'Medicine B'] },
    { id: 2, date: '2025-01-05', total: '$30', items: ['Medicine C'] },
  ];

  return (
    <div className="flex flex-col md:flex-row font-noto">
      {/* Sidebar */}
      <SideNav />
    <div className="flex-1 p-6">
      <h2 className="text-3xl font-semibold mb-4">Order History</h2>
      {pastOrders.map((order) => (
        <div key={order.id} className="bg-white p-4 rounded-md shadow-md mb-4">
          <h3 className="font-semibold">Order #{order.id}</h3>
          <p>Date: {order.date}</p>
          <p>Total: {order.total}</p>
          <p>Items: {order.items.join(', ')}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OrderHistory;
