import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';  // Corrected import statement

import AboutUs from './Components/AboutPage/AboutUs';
import LoginPage from './Components/Admin/LoginPage';
import Signup from './Components/Admin/Signup';
import AdminPanel from './Components/AdminPanel';
import CartList from './Components/Button/CartList';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import PrivacyPolicy from './Components/Privacy/PrivacyPolicy';
import ReturnPolicy from './Components/Privacy/ReturnPolicy';
import TermsAndConditions from './Components/Privacy/TermsAndConditions';
import { MyContext } from './Components/MyContext';
import Product from './Components/Product/Product';
import TrendingProducts from './Components/TrendingProducts/TrendingProducts';
import Start from './Start';

const App = () => {
  const [cart, setCart] = useState([]);
  const [role, setRole] = useState(null);

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    }
  };

  const contextValue = { basename: 'my-base', cart, addToCart };

  // Check if the user is logged in and has a role
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token); 
      setRole(decoded.role);  
    }
  }, []);

  return (
    <MyContext.Provider value={contextValue}>
      <Router>
        <Header role={role} /> 
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<TrendingProducts />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/return" element={<ReturnPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </Router>
    </MyContext.Provider>
  );
};

export default App;
