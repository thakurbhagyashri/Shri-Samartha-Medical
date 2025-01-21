import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification";
import AdminProfile from "./AdminProfile";
import SideBar from "./SideBar";
const ManageAdmin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [notification, setNotification] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  // Fetch  Admin
  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setNotification({message: "No token found. User not authenticated.",type: "error", });
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/admin/all-users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const adminUsers = data.filter(
          (user) => user.roles && user.roles.includes("ADMIN")
        );
        setUsers(adminUsers);

      } else {
        setNotification({ message: "Failed to load Admin.", type: "error" });
      }
    } catch (error) {
      setNotification({ message: "Failed to load Admin.", type: "error" });
    }
  };



  // Delete Admin

  const handleDeleteUser = async (userId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setNotification({message: "No token found. User not authenticated.",type: "error", });
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/admin/delete-admin/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        setNotification({ message: "Admin deleted successfully!", type: "success",});

      } else {
        const error = await response.json();
        setNotification({ message: "Failed to delete Admin.", type: "error" });
      }
    } catch (error) {
      setNotification({ message: "Failed to delete Admin.", type: "error" });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const confirmDelete = (userId) => {
    setUserToDelete(userId);
    setDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      handleDeleteUser(userToDelete); // Call the delete function with the product ID
    }
    setDeleteModal(false); // Close the modal
  };

  // Function to close the modal without deleting
  const handleCancelDelete = () => {
    setDeleteModal(false); // Close the modal without deleting
  };

  const handleAddAdmin = () => {
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  // Add admin to DB

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      setNotification({message: "No token found. User not authenticated.",type: "error", });
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/admin/create-admin", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newUser = await response.json();
        setUsers((prevUsers) => [...prevUsers, newUser]);
        setNotification({message: "Admin added successfully",type: "success", });
        handleCloseModal();
      } else {
        const error = await response.json();
        setNotification({message: "Failed to add Admin.",type: "error", });
      }
    } catch (error) {
      setNotification({message: "Failed to add admin",type: "error", });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  };



  return (
    <div className="flex">
      <SideBar />
      <div className="w-full bg-gray-50 ">
        <div className="flex bg-gray-200 pl-3 py-2 border-b-4 border-[#5ba4a4]">
          <div className="w-[85%] ">
            <h1 className="text-3xl font-fira font-semibold items-center justify-center text-center mt-2 tracking-wider  bg-gradient-to-r from-[#c248f0] to-[#2fcc84] bg-clip-text text-transparent">
              Welcome to Manage Admin section
            </h1>
          </div>
          <AdminProfile />
        </div>
        <div className="flex ">
          <div className="w-[25%] bg-gray-300 px-2 rounded-md">
            <div className="border-b border-black">
              <h1 className="text-2xl font-semibold font-noto px-2 py-5 ">
                Admin Section
              </h1>
            </div>
            <div className="p-4">
              <button
                onClick={handleAddAdmin}
                className="bg-[#394d68] text-white  rounded-lg text-lg hover:bg-[#243347] transition-all p-2 font-noto "
              >
                Add Admin
              </button>
            </div>
          </div>

          <div className="flex w-[75%] justify-center items-center font-fira px-5">
            <div className="w-full p-2 bg-gray-50 shadow rounded-lg">
              <h1 className="text-2xl font-bold mb-4 text-center border-b border-black p-3 font-noto">
                Admin List
              </h1>
              <div className="overflow-y-auto max-h-[71vh]">
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 px-2 ">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="p-4 bg-white shadow rounded-lg flex flex-row justify-between"
                    >
                      <div className="space-y-1">
                        <h2 className="text-lg font-semibold">
                          Name: {user.name}
                        </h2>
                        <p className="text-sm text-gray-600">
                          Username: {user.username}
                        </p>
                        <p className="text-sm text-gray-600">
                          Email: {user.email}
                        </p>
                        {/* <p className="text-sm text-gray-600">Auth Provider: {user.authProvider}</p> */}
                        <p className="text-sm text-gray-600">
                          Roles: {user.roles && user.roles.join(", ")}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <button
                          onClick={() => confirmDelete(user.id)}
                          className="items-center justify-center bg-red-500 text-white px-4 py-2 mr-5 rounded hover:bg-red-600 "
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50 font-fira">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
                  Add Admin
                </h2>
                <div
                  className="overflow-y-auto max-h-[80vh] px-6 pb-6"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#D1D5DB #F3F4F6",
                  }}
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-700">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    {/* <div>
                    <label className="block text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div> */}
                    <div>
                      <label className="block text-gray-700">Username</label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleFormChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleFormChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        {deleteModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-fira">
            <div className="bg-white p-6 rounded-lg w-1/3">
              <h2 className="text-lg text-black mb-4">
                Are you sure you want to{" "}
                <span className="text-red-600"> delete</span> this Admin?
              </h2>
              <div className="flex justify-between">
                <button
                  onClick={handleConfirmDelete}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-all"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={handleCancelDelete}
                  className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ManageAdmin;
