import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import logo2 from "../../Images/logo.png";
import AdminProfile from "./AdminProfile";
import SideBar from "./SideBar";
const AdminDashboard = () => {

  const [userName, setUserName] = useState('');
 


  const toCamelCase = (name) => {
    return name
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (token) {
      try {

        const decodedToken =jwtDecode(token);
        const name = decodedToken.sub || 'Guest'; // Replace 'name' with the correct field from your JWT
        setUserName(toCamelCase(name));
        
      } catch (error) {
        console.error('Error decoding JWT token:', error);
        setUserName('Guest');
      }
    } else {
      setUserName('Guest');
    }
  }, []);


  return (
    <div className="flex">
      <SideBar />
      <div className="w-full p-3 bg-gray-100 ">
        <div className="flex">
          <div className="w-[85%]"></div>
         <AdminProfile />
        </div>
        <div className="flex items-center justify-center py-3">
          <div className="text-center">
            {/* Logo */}
            <img
              src={logo2}
              alt="Sai Samartha"
              className="mx-auto mb-6"
              style={{ height: "25%", width: "25%" }}
            />

            {/* Welcome Text */}
            <h1 className="text-4xl font-bold font-noto bg-gradient-to-r from-[#c248f0] to-[#2fcc84] bg-clip-text text-transparent">Welcome to </h1>
            <h1 className="text-4xl font-bold font-noto bg-gradient-to-r from-[#c248f0] to-[#2fcc84] bg-clip-text text-transparent">
              Shri Samarth Pharmaceuticals
            <h1 className="text-4xl font-bold font-noto bg-gradient-to-r from-[#6a8cce] to-[#ff2f00] bg-clip-text text-transparent"> {userName}</h1>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
