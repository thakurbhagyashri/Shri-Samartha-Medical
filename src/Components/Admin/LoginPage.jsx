import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  // Hardcoded credentials for admin
  const adminUsername = "admin";
  const adminPassword = "admin";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // First check for the hardcoded credentials
    if (username === adminUsername && password === adminPassword) {
      localStorage.setItem("role", "admin");
      setShowModal(true); // Show the modal on successful admin login
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/public/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
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

      navigate("/");

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
          Don't have an account? 
          <Link to="/signup" className="text-blue-500 ml-1">
            Sign up
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-xl font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
