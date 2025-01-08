import { jwtDecode } from 'jwt-decode';
import React, { Suspense, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddProductPage from './Components/Admin/AddProduct';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { MyContext } from './Components/MyContext';
import ScrollToTop from './Components/ScrollToTop';

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
const CategoriesPage = React.lazy(() => import('./Components/ShopByCategory/CategoriesPage'));
const CategoryDetailPage = React.lazy(() => import('./Components/ShopByCategory/CategoryDetailPage'));
const CheckOutPage = React.lazy(() => import('./Components/CheckOutPage/CheckoutPage'));
const UserProfile = React.lazy(() => import('./Components/Admin/UserProfile'));
const Start = React.lazy(() => import('./Start'));

// Fallback Component for Lazy Loading
const Loading = () => <div className="text-center p-5">Loading...</div>;

const App = () => {
  const [cart, setCart] = useState([]);
  const [role, setRole] = useState(null);

  // Function to add an item to the cart
  const addToCart = (product) => {
    // Set the quantity to a fixed value, for example, 1
    const quantity = 1;  // You can replace this with any dynamic value if needed
  
    // Create a new product object with the desired quantity
    const productWithUpdatedQuantity = { ...product, quantity };
  
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
  
      if (existingProduct) {
        // If product already exists, increase the quantity by the new value (1)
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If product doesn't exist in the cart, add it with the new quantity
        return [...prevCart, productWithUpdatedQuantity];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Context value including cart state and actions
  const contextValue = {
    basename: 'my-base',
    cart,
    addToCart,
    removeFromCart, // Add removeFromCart to the context
  };

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
        <ScrollToTop />
        <Header role={role} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<TrendingProducts />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<CartList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/return" element={<ReturnPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/all-categories" element={<CategoriesPage />} />
            <Route path="/add" element={<AddProductPage />} />
            <Route path="/category/:categoryName" element={<CategoryDetailPage />} />
            <Route path="/checkout" element={<CheckOutPage />}/>
            <Route path="/profile" element={<UserProfile />}/>
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </MyContext.Provider>
  );
};

export default App;
