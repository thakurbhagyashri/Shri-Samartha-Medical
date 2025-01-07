// // src/ProtectedRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const ProtectedRoute = ({ children }) => {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? children : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;

// 07-01-2025 10:37
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};
export default ProtectedRoute;