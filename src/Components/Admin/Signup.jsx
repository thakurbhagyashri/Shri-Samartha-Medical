import React, { useState } from 'react';

const Signup = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login clicked');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName} 
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700">Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username} 
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">or</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 mt-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
