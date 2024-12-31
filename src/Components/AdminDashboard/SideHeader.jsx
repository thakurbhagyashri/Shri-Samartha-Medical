import React from 'react'

const SideHeader = () => {
  return (
    <div>
      <aside className="w-2/4 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold p-6">Shri Samartha Pharmaceuticals</h1>
        <ul className="ml-5">
          <li className="p-3 hover:bg-gray-700 cursor-pointer text-green-400">Dashboard</li>
          <li className="p-3 hover:bg-gray-700 cursor-pointer text-green-400">Products</li>
          <li className="p-3 hover:bg-gray-700 cursor-pointer">Orders</li>
          <li className="p-3 hover:bg-gray-700 cursor-pointer">employee</li>
          <li className="p-3 hover:bg-gray-700 cursor-pointer mt-20">Logout</li>
        </ul>
      </aside>
    </div>
  )
}

export default SideHeader
