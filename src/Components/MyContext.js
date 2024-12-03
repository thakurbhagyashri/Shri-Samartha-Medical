// import { createContext } from 'react';

// export const MyContext = createContext({ basename: 'default-base' });
// In MyContext.js
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <MyContext.Provider value={{ cart, addToCart }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
