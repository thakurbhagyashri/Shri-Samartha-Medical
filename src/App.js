import React, { useState, useEffect, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { MyContext } from './Components/MyContext';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

// Lazy-loaded Components
const AboutUs = React.lazy(() => import('./Components/AboutPage/AboutUs'));
const LoginPage = React.lazy(() => import('./Components/Admin/LoginPage'));
const Signup = React.lazy(() => import('./Components/Admin/Signup'));
const AdminPanel = React.lazy(() => import('./Components/AdminPanel'));
const CartList = React.lazy(() => import('./Components/Button/CartList'));
const ContactUs = React.lazy(() => import('./Components/ContactUs/ContactUs'));
const PrivacyPolicy = React.lazy(() => import('./Components/Privacy/PrivacyPolicy'));
const ReturnPolicy = React.lazy(() => import('./Components/Privacy/ReturnPolicy'));
const TermsAndConditions = React.lazy(() => import('./Components/Privacy/TermsAndConditions'));
const Product = React.lazy(() => import('./Components/Product/Product'));
const TrendingProducts = React.lazy(() => import('./Components/TrendingProducts/TrendingProducts'));
const Start = React.lazy(() => import('./Start'));

// Fallback Component for Lazy Loading
const Loading = () => <div className="text-center p-5">Loading...</div>;

const App = () => {
  const [cart, setCart] = useState([]);
  const [role, setRole] = useState(null);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const contextValue = { basename: 'my-base', cart, addToCart };

  // Check for User Role using JWT
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  return (
    <MyContext.Provider value={contextValue}>
      <Router>
        <Header role={role} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/admin" element={<AdminPanel />} />
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
        </Suspense>
        <Footer />
      </Router>
    </MyContext.Provider>
  );
};

export default App;
