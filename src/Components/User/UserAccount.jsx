// import React from 'react';

// const UserAccount = ({ userInfo, setUserInfo }) => {
//   console.log("userInfo",userInfo); // Add this to check if it's being passed correctly
//   // Check if userInfo is undefined
//   // if (!userInfo) {
//   //   return <div>Loading...</div>; // You can show a loading state if needed
//   // }
//   const defaultUserInfo = { name: "", email: "", phone: "", address: "" };
//   const user = userInfo || defaultUserInfo;
//   return (
//     <section className="mb-8">
//       <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
//       <div className="space-y-4">
//         <div>
//           <label className="block">Name: </label>
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             value={user.name}
//             onChange={(e) => setUserInfo({ ...user, name: e.target.value })}
//           />
//         </div>
//         <div>
//           <label className="block">Email: </label>
//           <input
//             type="email"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             value={user.email}
//             onChange={(e) => setUserInfo({ ...user, email: e.target.value })}
//           />
//         </div>
//         <div>
//           <label className="block">Phone: </label>
//           <input
//             type="tel"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             value={user.phone}
//             onChange={(e) => setUserInfo({ ...user, phone: e.target.value })}
//           />
//         </div>
//         <div>
//           <label className="block">Address: </label>
//           <textarea
//             className="w-full p-2 border border-gray-300 rounded-md"
//             value={user.address}
//             onChange={(e) => setUserInfo({ ...user, address: e.target.value })}
//           />
//         </div>
//         <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Save Changes</button>
//       </div>
//     </section>
//   );
// };

// export default UserAccount;


import React, { useState } from 'react';
import SideNav from './SideNav';

const UserAccount = () => {
  // Initialize userInfo properly
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "",
    address: "123 Pharmacy St, City, State, 12345",
  });
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Update user info with the profile picture
        setUserInfo({ ...userInfo, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <SideNav />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-3xl font-semibold mb-6">My Account</h1>

        {/* Personal Information Section */}
        <section className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      
      {/* Profile Picture Section */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Profile Picture:</label>
        <div className="flex items-center space-x-4">
          <img
            src={userInfo.profilePic || "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="text-sm"
          />
        </div>
      </div>

      {/* Name Field */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Name:</label>
        <input
          type="text"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          placeholder="Enter your full name"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Email:</label>
        <input
          type="email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          placeholder="Enter your email address"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Phone Field */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Phone:</label>
        <input
          type="tel"
          value={userInfo.phone}
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
          placeholder="Enter your phone number"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Address Field */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Address:</label>
        <textarea
          value={userInfo.address}
          onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
          placeholder="Enter your address"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Save Changes
      </button>
    </section>
      </div>
    </div>
  );
};

export default UserAccount;