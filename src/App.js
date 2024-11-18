
import React, { useState } from 'react';
import { MyContext } from './Components/MyContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Start';
import TrendingProducts from './Components/TrendingProducts/TrendingProducts';
import Product from './Components/Product/Product';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CartList from './Components/Button/CartList';

const App = () => {
  const [cart, setCart] = useState([]);

  // Add to cart function now includes the quantity
  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
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

  const contextValue = { basename: 'my-base', cart, addToCart };

  return (
    <MyContext.Provider value={contextValue}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/products" element={<TrendingProducts />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<CartList />} /> {/* Cart route */}
        </Routes>
        <Footer />
      </Router>
    </MyContext.Provider>
  );
};

export default App;
