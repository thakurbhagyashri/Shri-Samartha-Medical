// import React, { useState } from 'react';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle signup form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   const handleGoogleLogin = () => {
//     // Handle Google login logic here
//     console.log('Google login clicked');
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">First Name</label>
//             <input 
//               type="text" 
//               name="firstName"
//               value={formData.firstName} 
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//               required 
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Last Name</label>
//             <input 
//               type="text" 
//               name="lastName" 
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//               required 
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Username</label>
//             <input 
//               type="text" 
//               name="username"
//               value={formData.username} 
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//               required 
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input 
//               type="email" 
//               name="email" 
//               value={formData.email} 
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//               required 
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input 
//               type="password" 
//               name="password" 
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//               required 
//             />
//           </div>

//           <button 
//             type="submit" 
//             className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
//           >
//             Sign Up
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <p className="text-gray-600">or</p>
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full py-2 mt-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
//           >
//             Continue with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';

const Signup = ({ closeModal }) => {
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
    console.log('Form submitted:', formData);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <div className="flex items-center justify-center fixed inset-0 bg-gray-100 bg-opacity-50 z-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg relative overflow-auto">
        {/* Close Button */}
        <button 
          onClick={closeModal} 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
        X
        </button>

        <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-gray-700 text-sm">First Name</label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName} 
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm">Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username} 
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-sm"
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-sm"
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none text-sm"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-3 text-center">
          <p className="text-gray-600 text-sm">or</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 mt-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none text-sm"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
