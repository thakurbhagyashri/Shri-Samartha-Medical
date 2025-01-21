

// //14-01-2025 00:07
// import { jwtDecode } from "jwt-decode";
// import React, { createContext, useContext, useEffect, useState } from 'react';

// const AuthContext = createContext();
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
//         setIsLoggedIn(true);
//         setRole(decoded.roles); 
//         setProfilePic(localStorage.getItem('profilePic') || 'https://www.w3schools.com/w3images/avatar2.png');  
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
//   }, []);

//   // Login function to update the AuthContext state
//   const login = (token, role, profilePic) => {
//     localStorage.setItem('token', token); 
//     localStorage.setItem('role', role); 
//     localStorage.setItem('profilePic', profilePic); 

//     setIsLoggedIn(true);
//     setRole(role); 
//     setProfilePic(profilePic); 
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




// Code for Local:

import React, { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsLoggedIn(true);
        setRole(decoded.role);
      } catch (error) {
        console.error('Invalid token:', error);
        setIsLoggedIn(false);
        setRole(null);
      }
    } else {
      setIsLoggedIn(false);
      setRole(null);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setRole(null);
  };
  const login = (role, profilePic) => {
    localStorage.setItem('token', 'mock-token'); // Replace with actual token if needed
    localStorage.setItem('role', role);
    localStorage.setItem('profilePic', profilePic);

    setIsLoggedIn(true);
    setRole(role);
    // setProfilePic(profilePic);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, role, logout ,login}}>
      {children}
    </AuthContext.Provider>
   );
 };
