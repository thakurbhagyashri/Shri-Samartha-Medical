import React from 'react'
import AdminProfile from './AdminProfile'
import SideBar from './SideBar'

const ManageAdmin = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full bg-gray-50 ">
        <div className="flex bg-gray-100 pl-3 py-2">
          <div className="w-[85%] ">
            <h1 className="text-3xl font-fira font-semibold items-center justify-center text-center mt-2 tracking-wider  bg-gradient-to-r from-[#c248f0] to-[#2fcc84] bg-clip-text text-transparent">Welcome to Manage Admin section</h1>
          </div>
          <AdminProfile />
        </div>
        <div className="flex flex-col p-2 font-fira bg-gray-400 ">

        </div>
      </div>
    </div>
  )
}

export default ManageAdmin
