import React from "react";

const AdminHeader = () => {
  return (
    <div className=" h-screen font-custom">
      {/* Top Navigation Bar */}
      <nav className=" flex bg-sky-400 py-6 shadow-md">
        <div className="flex-[4]">
 cnwjkfbjfn
        </div>
        <div className="flex-[6] flex-row justify-end text-md space-x-20 px-5 mx-5">
          <a href="#" className="text-white font-medium hover:underline px-2 py-2 m-2">ABOUT</a>
          <a href="#" className="text-white font-medium hover:underline px-2 py-2 m-2">HOME</a>
          <a href="#" className="text-white font-medium hover:underline px-2 py-2 m-2">SERVICES</a>
          <a href="#" className="text-white font-medium hover:underline px-2 py-2 m-2">CONTACT</a>
          <a href="#" className="text-white font-medium hover:underline px-2 py-2 m-2">ADMIN</a>
        </div>

      </nav>

      {/* Main Content */}
      <div className="flex h-full">
       
        {/* <aside className="w-64 bg-slate-800 text-white">
          <h2 className="text-xl font-bold p-6 border-b border-gray-700">
            Sai Samarth Medical
          </h2>
          <ul className="mt-6">
            <li className="text-green-500 font-bold px-6 py-2">Dashboard</li>
            <li className="px-6 py-2 hover:bg-gray-700">Products</li>
            <li className="px-6 py-2 hover:bg-gray-700">Orders</li>
            <li className="px-6 py-2 hover:bg-gray-700">Users</li>
            <li className="px-6 py-2 mt-20 hover:bg-red-700">Logout</li>
          </ul>
        </aside> */}

        {/* Main Content */}
        {/* <div className="flex-1 bg-gray-100">
         
          <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="border rounded-lg py-2 pl-4 pr-10 focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">
                &#x1F50D;
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span>Ashok</span>
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                &#x1F464;
              </div>
            </div>
          </div>

          
          <div className="p-12 text-center">
            <h1 className="text-4xl font-bold">Welcome</h1>
            
            <div className="mt-8 inline-block p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl text-gray-600">Total Products</h3>
              <p className="text-3xl font-bold mt-2">100</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AdminHeader;

