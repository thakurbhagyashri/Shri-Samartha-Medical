import React from 'react'

const AdminHeader = () => {
  return (
    <div>
      <div class="flex  bg-gray-200 p-4 rounded-md">

        <div className="w-[80%]">
          <input
            type="text"
            placeholder="Search Products"
            className="border border-gray-400 pl-5 rounded-xl  h-12 focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>
        <div class=" w-[20%] flex items-center bg-white rounded-full shadow-md px-4 py-2 cursor-pointer">
          <span class="mr-2 text-gray-700">Ashok</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 10a5 5 0 100-10 5 5 0 000 10zm-8 8a8 8 0 0116 0H2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
