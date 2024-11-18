// import React, { createContext, useContext } from 'react';

// //  context with a default value
// const MyContext = createContext({ basename: 'default-base' });

// const MyComponent = () => {
//   const contextValue = useContext(MyContext); // Use context
//   const basename = contextValue?.basename || 'default-base';
//   return <div>{basename}</div>;
// };

// const App = () => {
//   const contextValue = { basename: 'my-base' };  
//   return (
//     <MyContext.Provider value={contextValue}>
//       <MyComponent />
//     </MyContext.Provider>
//   );
// };

// export default App;
import React, { createContext, useState, useContext } from 'react';

// Creating context with initial values
const MyContext = createContext({
  basename: 'default-base',
  cart: [], // Initialize cart as an empty array
  addToCart: () => {} // Function to handle adding products to the cart
});

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

const App = () => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const contextValue = { basename: 'my-base', cart, addToCart }; // Providing context values

  return (
    <MyContext.Provider value={contextValue}>
      <MyComponent />
    </MyContext.Provider>
  );
};

export default App;
