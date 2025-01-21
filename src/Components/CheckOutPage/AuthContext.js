// // src/AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import jwtDecode from 'jwt-decode';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         setIsLoggedIn(true);
//         setRole(decoded.role);
//       } catch (error) {
//         console.error('Invalid token:', error);
//         setIsLoggedIn(false);
//         setRole(null);
//       }
//     } else {
//       setIsLoggedIn(false);
//       setRole(null);
//     }
//   }, []);

//   const logout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     setRole(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, role, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };






//14-01-2025 00:07
// import { jwtDecode } from "jwt-decode";
// import React, { createContext, useContext, useEffect, useState } from 'react';

// const AuthContext = createContext();

// // Custom hook for accessing the AuthContext
// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [role, setRole] = useState(null);
//   const [profilePic, setProfilePic] = useState(null);

//   // Read from localStorage on mount to set initial state
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {

//         const decoded = jwtDecode(token); 
//         const role = Array.isArray(decoded.roles) && decoded.roles.length > 0
//         ? decoded.roles[0]
//         : decoded.role || null;

//         setIsLoggedIn(true);
//         setRole(role)                     // Set role from the decoded JWT token
//         setProfilePic(localStorage.getItem('profilePic') || 'https://www.w3schools.com/w3images/avatar2.png');  // Default profile pic if none exists
//       } catch (error) {
//         console.error('Invalid token:', error);
//         setIsLoggedIn(false);
//         setRole(null);
//         setProfilePic(null);
//       }
//     } else {
//       setIsLoggedIn(false);
//       setRole(null);
//       setProfilePic(null);
//     }
//   }, []); // This runs only once after the component mounts

//   // Login function to update the AuthContext state
//   const login = (token, role, profilePic) => {
//     localStorage.setItem('token', token); // Save the token in localStorage
//     localStorage.setItem('role', role); // Save the role in localStorage
//     localStorage.setItem('profilePic', profilePic); // Save profilePic in localStorage

//     setIsLoggedIn(true);
//     setRole(role); // Update the role in state
//     setProfilePic(profilePic); // Update the profile pic in state
//   };

//   // Logout function to clear the AuthContext state and localStorage
//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     localStorage.removeItem('profilePic');
//     setIsLoggedIn(false);
//     setRole(null);
//     setProfilePic(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, role, profilePic, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };






import { jwtDecode } from 'jwt-decode';
import { createContext, useContext, useEffect, useState } from 'react';


const AuthContext = createContext();

// // Custom hook for accessing the AuthContext
export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  // Read from localStorage on mount to set initial state
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);

        // Handle role correctly based on the 'roles' array
        const userRole = Array.isArray(decoded.roles) && decoded.roles.length > 0
          ? decoded.roles[0] // Take the first role from the array
          : decoded.role || null; // Fallback to a single role if present in the token

        // Update state with the role
        setIsLoggedIn(true);
        setRole(userRole); // Set role from the decoded JWT token
        setProfilePic(localStorage.getItem('profilePic') || 'https://www.w3schools.com/w3images/avatar2.png'); // Default profile pic if none exists

      } catch (error) {
        console.error('Invalid token:', error);
        setIsLoggedIn(false);
        setRole(null);
        setProfilePic(null);
      }
    } else {
      setIsLoggedIn(false);
      setRole(null);
      setProfilePic(null);
    }
  }, []); // This runs only once after the component mounts

  // Login function to update the AuthContext state
  const login = (token, userRole, profilePic) => {
    localStorage.setItem('token', token); // Save the token in localStorage
    localStorage.setItem('role', userRole); // Save only the role (not the entire roles array)
    localStorage.setItem('profilePic', profilePic); // Save profilePic in localStorage

    setIsLoggedIn(true);
    setRole(userRole); // Update the role in state
    setProfilePic(profilePic); // Update the profile pic in state
  };

  // Logout function to clear the AuthContext state
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('profilePic');

    setIsLoggedIn(false);
    setRole(null);
    setProfilePic(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, profilePic, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

