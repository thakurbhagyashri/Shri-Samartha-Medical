import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../Admin/SignIn.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName:"",
    username: "",
    email: "",
    password: "",
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
      const response = await fetch("http://localhost:8080/public/signup", {
        method: "POST", // HTTP method
        headers: {
          "Content-Type": "application/json", // Inform the server about JSON
        },
        body: JSON.stringify(formData), // Convert the object to JSON string
      });

      if (!response.ok) {
        throw new Error("Failed to register"); // Handle non-2xx responses
      }

      const data = await response; // Parse the response
      console.log("Registration successful:", data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="flex justify-center items-center max-h-max bg-gray-50">
      <div className="w-full max-w-4xl  bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-medium text-center mb- font-roboto 6 pb-3 text-gray-800">
          Sign up
        </h2>
        <div className="flex flex-row">
          <div className="w-[55%] p-2 m-2">
            <p className="text-md font-light font-roboto">
              Sign up or <Link
                                              to="/login"
                                              className="text-blue-500"
                                          >
                                              Sign in
                                          </Link> to access your orders, special offers, health
              tips and more!
            </p>
            <img
              src={SignIn}
              alt="SignIn"
              style={{ height: "45%", width: "100%", objectFit: "cover" }}
              className=" mt-24 rounded-xl "
            />
            <p className="font-light my-4 p-3 font-roboto text-[#023c7f]">By continuing you agree to our Terms of service 
            and Privacy & Legal Policy </p>
          </div>
          <div className="w-[40%] px-5 mx-5 py-2 font-roboto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">
                Full Name
                </label>
                <input
                  type="text"
                  name="fulllName"
                  value={formData.fulllName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full text-md mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            

              <div className="mb-4">
                <label className="block text-lg font-medium  text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="w-full text-md mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium  text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full text-md mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium  text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full text-md mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-lg text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Sign up
              </button>
            </form>
            <div className="flex items-center my-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-400 text-sm">
                Or continue with
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="mt-3 text-center">
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
        {/* {message && (
              <div
                className="mt-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg text-center"
                role="alert"
              >
                {message}
              </div>
            )} */}
      </div>
    </div>
  );
};

export default Signup;
