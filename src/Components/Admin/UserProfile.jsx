import React from "react";

const UserProfile = () => {
  // Retrieve username from localStorage to show on the profile page
  const role = localStorage.getItem("role");
  const username = role === "admin" ? "admin" : "sinfolix";

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p>Welcome, {username}!</p>
      <p>This is your profile page. You can view and update your details here.</p>
    </div>
  );
};

export default UserProfile;
