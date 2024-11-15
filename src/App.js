import React from 'react';
import { MyContext } from './Components/MyContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Start';
import TrendingProducts from './Components/TrendingProducts/TrendingProducts';
import Product from './Components/Product/Product';
import Header from './Components/Header/Header'; // Import Header Component
import Footer from './Components/Footer/Footer';

const App = () => {
  const contextValue = { basename: 'my-base' };

  return (
    <MyContext.Provider value={contextValue}>
      <Router>
        <Header /> {/* This will render on all pages */}

        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/products" element={<TrendingProducts />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer/>
      </Router>
    </MyContext.Provider>
  );
};

export default App;
