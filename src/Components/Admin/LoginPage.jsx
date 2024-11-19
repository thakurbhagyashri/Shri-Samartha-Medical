import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Inform the server about JSON
        },
        username,
        password,
      });

      if (response.status === 200) {
        alert("Login successful!");
        navigate("/"); // Redirect to homepage
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials, please try again.");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-md font-custom bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-thin text-center mb-6 text-gray-800">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-lg font-medium font-custom text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full  text-lg mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-lg  font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full font-custom text-lg  mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* Remember Me and Forgot Password */}

          {/* Sign In Button */}
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
        {/* Social Login Buttons */}
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
    </div>
  );
};

export default LoginPage;
