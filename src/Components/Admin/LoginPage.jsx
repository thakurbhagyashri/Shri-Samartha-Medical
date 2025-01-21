
// import { jwtDecode } from "jwt-decode";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import { useAuth } from "../CheckOutPage/AuthContext"; // Update with the correct path
// // import InputField from "../validations/InputField";
// // import { validateInput } from "../validations/validateInput";
// // import { useAuth } from '../CheckOutPage/AuthContext';
// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility
//   const navigate = useNavigate();

//   // Hardcoded credentials for admin
//   const adminUsername = "admin";
//   const adminPassword = "admin";

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send the login request to the backend
//       const response = await fetch("http://localhost:8080/public/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         throw new Error("Login failed");
//       }

//       let token = await response.text();
//       token = token.trim();
//       console.log("Token received:", token);

//       // Decode the JWT token
//       const decoded = jwtDecode(token);
//       console.log("Decoded token:", decoded);

//       // Store the token in localStorage
//       localStorage.setItem("token", token);

//       // Extract roles from the decoded token (roles is an array)
//       const roles = decoded.roles || [];
//       console.log("User roles:", roles);

//       // Save roles to localStorage for later use (in Nav.jsx or elsewhere)
//       localStorage.setItem("roles", JSON.stringify(roles));

//       // Check if the user has the "ADMIN" role and redirect accordingly
//       if (roles.includes("ADMIN")) {
//         console.log("Redirecting to admin panel");
//         navigate("/admin"); // Redirect to the admin panel
//       } else if (roles.includes("USER")) {
//         console.log("Redirecting to home page");
//         navigate("/"); // Redirect to the home page
//       } else {
//         alert("Unknown role. Access denied.");
//       }

//       // Optional: If there's an intended path (saved in localStorage), redirect to that path
//       const redirectPath = localStorage.getItem("redirectPath") || "/";
//       localStorage.removeItem("redirectPath");
//       navigate(redirectPath);

//     } catch (error) {
//       console.error("Error:", error.message || error);
//       alert("Login failed! Please try again.");
//     }
//   };
   
//   const { isLoggedIn, role, login } = useAuth();  // Get role and isLoggedIn state

//   useEffect(() => {
//     // Check if the user is logged in and has the correct role
//     if (isLoggedIn) {
//       if (role.includes('ADMIN')) {
//         console.log('Redirecting to admin panel');
//         navigate('/admin'); // Redirect to admin panel if role is 'ADMIN'
//       } else if (role.includes('USER')) {
//         console.log('Redirecting to user homepage');
//         navigate('/home'); // Redirect to user homepage
//       }
//     }
//   }, [isLoggedIn, role, navigate]);
  
  
  
//   const handleGoogleLogin = () => {
//     window.location.href = "http://localhost:8080/oauth2/authorization/google";
//   };

//   const closeModal = () => {
//     setShowModal(false); // Close modal when user clicks "Close"
//     navigate("/admin"); // Redirect to Admin Panel
//   };

//   // Disable scroll when modal is open
//   useEffect(() => {
//     if (showModal) {
//       document.body.style.overflow = "hidden"; // Disable scrolling
//     } else {
//       document.body.style.overflow = "auto"; // Re-enable scrolling
//     }

//     return () => {
//       document.body.style.overflow = "auto"; // Clean up to re-enable scrolling
//     };
//   }, [showModal]);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-50">
//       <div className="w-full max-w-md font-roboto bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-3xl font-medium text-center mb-3 text-gray-800">
//           Sign in to your account
//         </h2>
//         <p className="text-center text-md">
//           Don't have an account? 
//           <Link to="/signup" className="text-blue-500 ml-1">
//             Sign up
//           </Link>
//         </p>
//         <form onSubmit={handleSubmit}>
//           {/* Username Input */}
//           <div className="mb-4">

//             <label className="block text-xl font-medium text-gray-700">Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full text-lg mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               required
//             />

//           </div>

//           {/* Password Input */}
//           <div className="mb-4">
//             <label className="block text-xl font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full text-lg mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-lg text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//           >
//             Sign in
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-2 text-gray-400 text-md">Or continue with</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Login Button */}
//         <div className="flex space-x-4">
//           <button
//             type="button"
//             onClick={handleGoogleLogin}
//             className="w-full flex justify-center items-center text-lg py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
//               alt="Google"
//               className="h-5 w-5 mr-2"
//             />
//             Google
//           </button>
//         </div>
//       </div>

//       {/* Admin Success Modal */}
//       {showModal && (
//         <div className="fixed inset-0 font-merriWeather flex items-center justify-center bg-gray-500 bg-opacity-50 backdrop-blur-md z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-80">
//             <h3 className="text-2xl font-semibold text-center text-green-500">
//               Admin Login Successful!
//             </h3>
//             <p className="text-center text-gray-700 mt-4">
//               You have logged in as an Admin. You will be redirected to the Admin Panel shortly.
//             </p>
//             <div className="mt-6 flex justify-center">
//               <button
//                 onClick={closeModal}
//                 className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginPage;



//21-01-2025 00:07 :code for local
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../CheckOutPage/AuthContext"; // Update with the correct path

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const { login } = useAuth(); // Use login function from AuthContext
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hardcoded user credentials for user login
    if (email === "user@sinfolix.com" && password === "Sinfolix") {
      login("user", "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"); // Call login with role and profilePic
      navigate("/"); // Redirect after login
     alert("User login successful!");
      return;
    }

    // Hardcoded admin credentials for admin login
    if (email === "admin@sinfolix.com" && password === "admin") {
      login("admin", "https://www.w3schools.com/w3images/avatar2.png"); // Call login with role and profilePic
      setShowModal(true); // Show the modal on successful admin login
      return;
    }

    // If credentials don't match, call the API for login
    try {
      const response = await fetch("http://localhost:8080/public/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      let token = await response.text();
      token = token.trim();
      console.log("Token received:", token);

      const decoded = jwtDecode(token);
      console.log("Decoded token:", decoded);

      localStorage.setItem("token", token);
      localStorage.setItem("profilePic", "https://www.w3schools.com/w3images/avatar2.png"); // Placeholder image
      localStorage.setItem("role", decoded.role); // Use the role from the decoded token

      // Redirect based on intended destination
      const redirectPath = localStorage.getItem("redirectPath") || "/";
      localStorage.removeItem("redirectPath");
      navigate(redirectPath);

      alert("Login successful!");
    } catch (error) {
      console.error("Error:", error.message || error);
      alert("Login failed! Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const closeModal = () => {
    setShowModal(false); // Close modal when user clicks "Close"
    navigate("/admin"); // Redirect to Admin Panel
  };

  // Disable scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up to re-enable scrolling
    };
  }, [showModal]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-md font-roboto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-medium text-center mb-3 text-gray-800">
          Sign in to your account
        </h2>
        <p className="text-center text-md">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 ml-1">
            Sign up
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-xl font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-lg mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-xl font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-lg mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-lg text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400 text-md">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login Button */}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex justify-center items-center text-lg py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Google
          </button>
        </div>
      </div>

      {/* Admin Success Modal */}
      {showModal && (
        <div className="fixed inset-0 font-merriWeather flex items-center justify-center bg-gray-500 bg-opacity-50 backdrop-blur-md z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h3 className="text-2xl font-semibold text-center text-green-500">
              Admin Login Successful!
            </h3>
            <p className="text-center text-gray-700 mt-4">
              You have logged in as an Admin. You will be redirected to the Admin Panel shortly.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={closeModal}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
