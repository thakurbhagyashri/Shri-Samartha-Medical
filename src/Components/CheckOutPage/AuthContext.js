// src/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

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

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
