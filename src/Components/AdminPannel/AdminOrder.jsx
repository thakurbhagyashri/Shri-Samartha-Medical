import React, { useEffect, useRef, useState } from "react";
import Notification from "../Notification";
import AdminProfile from "./AdminProfile";
import SideBar from "./SideBar";

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [showDropdown, setShowDropdown] = useState(null); // Track which dropdown is open
  const [loading, setLoading] = useState(false);
 const [notification, setNotification] = useState(null);


  const handleStatusChange = async (orderId, status) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setNotification({message: "No token found. User not authenticated.",type: "error", });
      return;
    }

    try {
      setLoading(true); // Show a loader if necessary
      const response = await fetch(
        `http://localhost:8080/admin/status/${orderId}?status=${status}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        
        
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === orderId ? { ...order, status } : order
          )
        );
        setNotification({ message: "order status updated successfully!", type: "success",});
      } else {
        const error = await response.json();
        setNotification({ message: "Failed to update status.", type: "error" });
      }
    } catch (error) {
      setNotification({ message: "Failed to update status.", type: "error" });
    } finally {
      setLoading(false);
      setShowDropdown(null); // Close the dropdown after updating
    }
  };

  const formatOrderDate = (orderDate) => {
    if (!orderDate || orderDate.length !== 3) {
      return "Invalid date";
    }

    const [year, month, day] = orderDate;
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      const url = "http://localhost:8080/admin/all-orders";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setOrders(result);
        } else {
          const error = await response.json();
          console.error("Error fetching orders:", error.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const searchRef = useRef(null);

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full bg-gray-100 ">
        <div className="flex bg-gray-200 pl-3 py-2">
          <div className="w-[85%]" ref={searchRef}>
            <input
              type="text"
              placeholder="Search order"
              className=" text-lg border border-gray-400 pl-5 rounded-xl w-[50%] h-12 focus:outline-none focus:ring focus:ring-green-300 font-fira"
            />
          </div>
          <AdminProfile />
        </div>
        <div className="flex flex-col p-2 font-fira ">
          <div className="flex-1 overflow-y-auto max-h-[83vh]">
            <div className="p-2">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-4 mx-16"
                >
                  <div className="flex flex-col ">
                    <div className="mt-3">
                      <h3 className="font-semibold text-lg tracking-wide">
                        Name : {order.customerName}
                      </h3>
                      <p className="font-medium text-sm pt-1 tracking-wide">
                        Email : {order.customerEmail}
                      </p>
                      <p className="text-sm text-gray-600 mt-3 ">
                        Address : {order.customerAddress}
                      </p>
                      <p className="text-sm text-gray-600 mt-5">
                        Order Date : {formatOrderDate(order.orderDate)}
                      </p>
                      <p className="text-sm text-gray-600 mt-5">
                        Modified Time : {formatOrderDate(order.modified_time)}
                      </p>
                     
                    </div>
                    <div className="w-[35%]">
                      <p
                        className={`text-sm mt-5 ${
                          order.status === 1
                            ? "text-white bg-green-400 p-1.5 rounded-sm"
                            : order.status === 2
                            ? "text-white bg-yellow-500  p-1.5 rounded-sm"
                            : order.status === 3
                            ? "text-white bg-red-600  p-1.5 rounded-sm"
                            : "text-gray-600  p-1 rounded-sm"
                        }`}
                      >
                        Order status : {" "}
                        {order.status === 1
                          ? "Completed"
                          : order.status === 2
                          ? "Placed"
                          : order.status === 3
                          ? "Rejected"
                          : "Unknown"}
                      </p>
                      </div>
                  </div>
                  <div className="flex flex-col space-y-8 font-fira mr-10">
                    <button
                      onClick={() =>
                        setShowDropdown(showDropdown === order.id ? null : order.id)
                      }
                      className="bg-[#284265] text-white px-4 py-1 rounded hover:bg-[#1f2937] transition-all"
                    >
                      {loading && showDropdown === order.id
                        ? "Updating..."
                        : "Update order status"}
                    </button>
                    {showDropdown === order.id && (
                      <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
                        <button
                          onClick={() => handleStatusChange(order.id, 1)} // Completed
                          className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                        >
                          Completed
                        </button>
                        <button
                          onClick={() => handleStatusChange(order.id, 3)} // Rejected
                          className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                        >
                          Rejected
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
