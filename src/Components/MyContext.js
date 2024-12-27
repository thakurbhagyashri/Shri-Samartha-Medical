// src/MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

// Create the provider
export const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to update quantity
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, newQuantity) } // Ensure quantity is at least 1
          : item
      )
    );
  };

  // Function to remove item from the cart
  const removeFromCart = (id) => {
    console.log("removeFromCart called with id:", id); // Debugging log
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <MyContext.Provider value={{ cart, updateQuantity, removeFromCart }}>
      {children}
    </MyContext.Provider>
  );
};



// import React, { createContext, useState, useEffect } from 'react';

// export const MyContext = createContext();

// export const MyProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     const [notification, setNotification] = useState(null);

//     useEffect(() => {
//         // Check if there's any saved cart in localStorage
//         const savedCart = JSON.parse(localStorage.getItem('cart'));
//         if (savedCart) {
//             setCart(savedCart);
//         }
//     }, []);

//     useEffect(() => {
//         // Save cart to localStorage whenever it changes
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     const addToCart = (product) => {
//         setCart((prevCart) => {
//             const existingProduct = prevCart.find((item) => item.id === product.id);
//             if (existingProduct) {
//                 return prevCart.map((item) =>
//                     item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
//                 );
//             }
//             setNotification(`${product.name} added to the cart!`);
//             return [...prevCart, { ...product, quantity: product.quantity }];
//         });
//     };

//     // const updateQuantity = (productId, quantity) => {
//     //     setCart((prevCart) =>
//     //         prevCart.map((item) =>
//     //             item.id === productId ? { ...item, quantity: quantity } : item
//     //         )
//     //     );
//     // };

//     const removeFromCart = (productId) => {
//         setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//         setNotification('Item removed from cart');
//     };

//     const getTotal = () => {
//         return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//     };
//     console.log("My context - Calculated total for cart:", children); // Log the total
//     return (
//         // <MyContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, getTotal, notification }}>
//         //     {children}
//         // </MyContext.Provider>
//         <MyContext.Provider value={{ cart, addToCart, removeFromCart, getTotal, notification }}>
//             {children}
//         </MyContext.Provider>
//     );
// };

