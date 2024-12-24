// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { MyContext } from '../MyContext';

// const CartList = () => {
//   const { cart, removeFromCart, updateCartItem } = useContext(MyContext);
//   console.log("Cart data received in CartList My Context:", useContext(MyContext)); // Log the cart state
//   console.log("Cart data received in CartList:", cart); // Log the cart state

//   const handleQuantityChange = (item, quantity) => {
//     if (quantity > 0) {
//       console.log("Updating item quantity:", { id: item.id, quantity }); // Log the updated quantity

//       updateCartItem(item.id, quantity);
//     }
//   };

//   if (cart.length === 0) {
//     console.log("Cart is empty"); // Log if the cart is empty
//     return (
//       <div className="cart-page p-6">
//         <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
//         <p>Your cart is currently empty.</p>
//         <Link to="/all-categories" className="btn btn-primary mt-4 text-blue-500 underline">
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-page p-6">
//       <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
//       <div className="cart-items space-y-4">
//         {cart.map((item) => (
//           <div key={item.id} className="cart-item flex justify-between items-center p-4 bg-white shadow-md mb-4 rounded-lg">
//             <div className="flex items-center">
//               <img
//                 src={item.imageUrl}
//                 alt={item.name}
//                 className="w-20 h-20 object-cover rounded-md"
//               />
//               <div className="ml-4">
//                 <h3 className="text-lg font-medium">{item.name}</h3>
//                 <p className="text-gray-600">{item.quantity}</p>
//                 <p className="text-gray-600">₹{item.price}</p>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 mt-2 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//             <div className="quantity-controls flex items-center">
//               <button
//                 onClick={() => handleQuantityChange(item, item.quantity - 1)}
//                 className="px-2 py-1 bg-gray-200 rounded-md text-gray-700"
//               >
//                 -
//               </button>
//               <span className="mx-2">{item.quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(item, item.quantity + 1)}
//                 className="px-2 py-1 bg-gray-200 rounded-md text-gray-700"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="cart-summary mt-6 p-4 bg-gray-100 rounded-lg">
//         <h3 className="text-xl font-semibold">Cart Summary</h3>
//         // In CartList component where you're calculating the total price
// <p className="text-lg mt-2">
//   Total: ₹
//   {cart.reduce(
//     (total, item) => {
//       // Convert price to string and remove '₹' if it exists
//       const price = typeof item.price === 'string' ? item.price : item.price.toString();
//       return total + parseFloat(price.replace('₹', '')) * item.quantity;
//     },
//     0
//   ).toFixed(2)}
// </p>

//         <Link to="/checkout" className="btn btn-primary mt-4 text-blue-500 underline">
//           Proceed to Checkout
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CartList;


// src/Components/Button/CartList.jsx
import React, { useContext } from 'react';
import { MyContext } from '../MyContext';  // Import MyContext
import { Link } from "react-router-dom";

const CartList = () => {
  const { cart = [], updateQuantity } = useContext(MyContext);  // Destructure updateQuantity from MyContext

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  if (cart.length === 0) {
    console.log("Cart is empty"); // Log if the cart is empty
    return (
      <div className="cart-page p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <p className="m-4">Your cart is currently empty.</p>
        <Link to="/all-categories" className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 m-4">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-list w-full max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty. Please add some items.</p>
      ) : (
        <div>
          {/* Table Header */}
          <div className="flex items-center font-bold border-b py-3 text-left">
            <div className="w-1/6">Image</div>
            <div className="w-2/6">Name</div>
            <div className="w-1/6">Quantity</div>
            <div className="w-1/6">Price</div>
            <div className="w-1/6">Total</div>
          </div>

          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b py-4 text-left"
            >
              {/* Product Image */}
              <Link to={`/product/${item.id}`} className="w-1/6">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </Link>

              {/* Product Name */}
              <Link to={`/product/${item.id}`} className="w-2/6">
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </Link>
              {/* Price */}
              <div className="w-1/6">
                <p>₹{item.price}</p>
              </div>

              {/* Quantity */}
              <div className="w-1/6">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10) || 1)}
                  className="border p-2 rounded"
                />
              </div>

              {/* Total */}
              <div className="w-1/6">
                <p className="font-bold">₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}

          {/* Display Total Price and Checkout Button */}
          {/* <div className="flex justify-end items-center mt-6 space-x-6">
            <p className="text-2xl font-bold">
              Total Price: <span className="text-green-600">₹{totalPrice}</span>
            </p>

            <Link
              to="/checkout"
              className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Proceed to Checkout
            </Link>
          </div> */}
          <div className="mt-6">
            {/* Row: Continue Shopping on the left and Proceed to Checkout on the right */}
            <div className="flex justify-between items-center">
              {/* Left: Continue Shopping */}
              <Link
                to="/all-categories"
                className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Continue Shopping
              </Link>

              {/* Right: Total Price and Proceed to Checkout */}
              <div className="flex flex-col items-end">
                <p className="text-2xl font-bold mb-2">
                  Total Price: <span className="text-green-600">₹{totalPrice}</span>
                </p>
                <Link
                  to="/checkout"
                  className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default CartList;
