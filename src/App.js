

import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CartList from "./Components/Button/CartList";
import Product from "./Components/Product/Product";
import TrendingProducts from "./Components/TrendingProducts/TrendingProducts";
import Start from "./Start";
import LoginPage from './Components/Admin/LoginPage';
import Signup from "./Components/Admin/Signup";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { MyContext } from "./Components/MyContext";
import AboutUs from "./Components/AboutPage/AboutUs";

const App = () => {
  const [cart, setCart] = useState([]);

  // Add to cart function now includes the quantity
  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex >= 0) {
      // Update quantity if product already exists in the cart
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add product with quantity to the cart
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    }
  };

  const contextValue = { basename: "my-base", cart, addToCart };

  return (
    <MyContext.Provider value={contextValue}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          {/* Correct the About Us route */}
          <Route path="/about" element={<AboutUs />} /> {/* Fixed the path here */}
          <Route path="/products" element={<TrendingProducts />} /> 
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </MyContext.Provider>
  );
};

export default App;



