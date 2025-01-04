// import React, { createContext, useState, useContext } from 'react';

// // Creating context with initial values
// const MyContext = createContext({
//   basename: 'default-base',
//   cart: [], // Initialize cart as an empty array
//   addToCart: () => {} // Function to handle adding products to the cart
// });

// const MyComponent = () => {
//   const { cart, addToCart } = useContext(MyContext); // Consume context

//   const handleAddProduct = () => {
//     const newProduct = { id: 1, title: 'New Product', price: 100, quantity: 1 };
//     addToCart(newProduct); // Add product to the cart
//   };

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         cart.map((item, index) => (
//           <div key={index}>
//             <p>{item.title} - ₹{item.price} x {item.quantity}</p>
//           </div>
//         ))
//       )}
//       <button onClick={handleAddProduct}>Add New Product to Cart</button>
//     </div>
//   );
// };

// const App = () => {
//   const [cart, setCart] = useState([]);

//   // Function to add a product to the cart
//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const contextValue = { basename: 'my-base', cart, addToCart }; // Providing context values

//   return (
//     <MyContext.Provider value={contextValue}>
//       <MyComponent />
//     </MyContext.Provider>
//   );
// };

// export default App;
import React, { createContext, useContext, useState } from 'react';

// Creating context with initial values
const MyContext = createContext({
  cart: [], // Initialize cart as an empty array
  addToCart: () => {} // Function to handle adding products to the cart
});

// MyComponent - To display and interact with the cart
const MyComponent = () => {
  const { cart, addToCart } = useContext(MyContext); // Consume context

  const handleAddProduct = () => {
    const newProduct = { id: 1, title: 'New Product', price: 100, quantity: 1 };
    addToCart(newProduct); // Add product to the cart
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.title} - ₹{item.price} x {item.quantity}</p>
          </div>
        ))
      )}
      <button onClick={handleAddProduct}>Add New Product to Cart</button>
    </div>
  );
};

// App component - Context Provider and main app structure
const App = () => {
  const [cart, setCart] = useState([]); // Initialize cart state

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    
    if (existingProductIndex >= 0) {
      // Update the quantity if the product already exists
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Add a new product if it does not exist
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const contextValue = { cart, addToCart }; // Providing context values

  return (
    <MyContext.Provider value={contextValue}>
      <MyComponent />
    </MyContext.Provider>
  );
};

export default App;
