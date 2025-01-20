import React, { useRef } from "react";
import AdminProfile from "./AdminProfile";
import SideBar from "./SideBar";

const AdminOrder = () => {
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
              // value={keyword}
              // onChange={handleInputChange}
              className=" text-lg border border-gray-400 pl-5 rounded-xl w-[50%] h-12 focus:outline-none focus:ring focus:ring-green-300 font-fira"
            />
          </div>
         <AdminProfile />
        </div>
        <div className="flex flex-col p-2 font-fira bg-gray-400 ">
          {/* <div className="p-4 bg-gray-100 min-h-screen">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white shadow-md rounded-lg p-6 mb-6"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold">Order No. {order.id}</h3>
                    <p className="text-sm">Name: {order.customerName}</p>
                    <p className="text-sm">Email: {order.customerEmail}</p>
                    <p className="text-sm">Address: {order.address}</p>
                  </div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handleUpdateStatus(order.id)}
                  >
                    Update Status
                  </button>
                </div>

                <table className="w-full mt-4 border-t border-gray-300">
                  <thead>
                    <tr className="text-left">
                      <th className="py-2">Items</th>
                      <th className="py-2">Quantity</th>
                      <th className="py-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2">{item.name}</td>
                        <td className="py-2">{item.quantity}</td>
                        <td className="py-2">Rs. {item.price}/-</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center w-full">
                    {['Order Placed', 'Accepted / Shipped', 'Delivered'].map(
                      (status, index) => (
                        <React.Fragment key={index}>
                          <div
                            className={`flex items-center ${order.status === status ? 'text-green-500' : 'text-gray-400'
                              }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-full border-2 ${order.status === status
                                  ? 'bg-green-500 border-green-500'
                                  : 'bg-white border-gray-400'
                                }`}
                            ></div>
                            <span className="ml-2 text-sm">{status}</span>
                          </div>
                          {index < 2 && <div className="flex-grow h-1 bg-gray-300 mx-2"></div>}
                        </React.Fragment>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
