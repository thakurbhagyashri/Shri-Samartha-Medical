import React, { useState } from "react";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
      
      
        try {
          const response = await fetch('ADMIN API for creating the Admin', {
            method: 'POST', // HTTP method
            headers: {
              'Content-Type': 'application/json', // Inform the server about JSON
            },
            body: JSON.stringify(formData), // Convert the object to JSON string
          });
      
          if (!response.ok) {
            throw new Error('Failed to register'); // Handle non-2xx responses
          }
      
          const data = await response; // Parse the response
          console.log('Registration successful:', data);
    
        
        } catch (error) {
          console.error('Error during registration:', error);
        }
      };
      
 
  return (
    <div className="flex justify-center items-center h-auto bg-gray-50 m-5">
    <div className="w-full max-w-md font-custom bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-medium text-center mb-6 text-gray-800">
        ADD ADMIN
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2 text-md font-medium text-base ">
          <div>
            <label className="block text-gray-700  ">First Name</label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName} 
              onChange={handleChange}
              className="w-full  text-lg mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 ">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              className="w-full  text-lg mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 ">Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username} 
              onChange={handleChange}
              className="w-full  text-lg mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 ">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full  text-lg mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 ">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              className="w-full  text-lg mt-1 mb-3 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#2caad8] text-lg text-white py-2 px-4  rounded-md hover:bg-[#1c97c4] transition"
          >
            Sumbit
          </button>
        </form>
   </div>
    </div>

  );
};

export default LoginPage;
