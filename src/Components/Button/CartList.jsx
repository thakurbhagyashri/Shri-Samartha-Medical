import React, { useContext, useState } from 'react';
import { MyContext } from '../MyContext';  // Import MyContext
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa'; // Import the trash icon from React Icons

const CartList = () => {
  const { cart = [], removeFromCart } = useContext(MyContext);  // Destructure removeFromCart from MyContext

  // Local state to handle quantity updates
  const [updatedCart, setUpdatedCart] = useState(cart);

  // Update quantity in local state
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from being less than 1
    const updatedItems = updatedCart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setUpdatedCart(updatedItems);
  };

  // Calculate Total Price (using the updated cart)
  const totalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (updatedCart.length === 0) {
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

      {updatedCart.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty. Please add some items.</p>
      ) : (
        <div className="mx-20">
          {/* Table Header */}
          <div className="flex items-center font-bold border-b py-3 text-left">
            <div className="w-1/6">Image</div>
            <div className="w-2/6">Name</div>
            <div className="w-1/6">Quantity</div>
            <div className="w-1/6">Price</div>
            <div className="w-1/6">Total</div>
            <div className="w-1/6">Action</div> {/* New Column for Delete Button */}
          </div>

          {/* Cart Items */}
          {updatedCart.map((item) => (
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
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10) || 1)}
                  className="border p-2 rounded w-16"
                />
              </div>

              {/* Total */}
              <div className="w-1/6">
                <p className="font-bold">₹{item.price * item.quantity}</p>
              </div>

              {/* Delete Button */}
              <div className="w-1/6">
                <button
                  onClick={() => {removeFromCart(item.id); console.log("Removing item with id:", item.id);}}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <FaTrashAlt size={20} /> {/* React Icon trash */}
                </button>
              </div>
            </div>
          ))}

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
                <p className="text-2xl font-bold mb-2 mr-36">
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


// import React, { useContext } from 'react';
// import { MyContext } from '../MyContext';  // Import MyContext
// import { Link } from "react-router-dom";
// import { FaTrashAlt } from 'react-icons/fa'; // Import the trash icon from React Icons

// const CartList = () => {
//   const { cart = [], updateQuantity, removeFromCart } = useContext(MyContext);  // Destructure removeFromCart from MyContext

//   // Calculate Total Price
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   if (cart.length === 0) {
//     console.log("Cart is empty"); // Log if the cart is empty
//     return (
//       <div className="cart-page p-6">
//         <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
//         <p className="m-4">Your cart is currently empty.</p>
//         <Link to="/all-categories" className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 m-4">
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-list w-full max-w-7xl mx-auto px-4 py-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-xl">Your cart is empty. Please add some items.</p>
//       ) : (
//         <div className="mx-20">
//           {/* Table Header */}
//           <div className="flex items-center font-bold border-b py-3 text-left">
//             <div className="w-1/6">Image</div>
//             <div className="w-2/6">Name</div>
//             <div className="w-1/6">Quantity</div>
//             <div className="w-1/6">Price</div>
//             <div className="w-1/6">Total</div>
//             <div className="w-1/6">Action</div> {/* New Column for Delete Button */}
//           </div>

//           {/* Cart Items */}
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center border-b py-4 text-left"
//             >
//               {/* Product Image */}
//               <Link to={`/product/${item.id}`} className="w-1/6">
//                 <img
//                   src={item.imageUrl}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//               </Link>

//               {/* Product Name */}
//               <Link to={`/product/${item.id}`} className="w-2/6">
//                 <h3 className="text-lg font-semibold">{item.name}</h3>
//               </Link>

//               {/* Price */}
//               <div className="w-1/6">
//                 <p>₹{item.price}</p>
//               </div>

//               {/* Quantity */}
//               <div className="w-1/6">
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10) || 1)}
//                   className="border p-2 rounded w-16"
//                 />
//               </div>

//               {/* Total */}
//               <div className="w-1/6">
//                 <p className="font-bold">₹{item.price * item.quantity}</p>
//               </div>

//               {/* Delete Button */}
//               <div className="w-1/6">
//                 <button
//                   onClick={() => {removeFromCart(item.id);    console.log("Removing item with id:", item.id);
//                   }}
//                   className="text-red-500 hover:text-red-700 focus:outline-none"
//                 >
//                   <FaTrashAlt size={20} /> {/* React Icon trash */}
//                 </button>
//               </div>
//             </div>
//           ))}

//           <div className="mt-6">
//             {/* Row: Continue Shopping on the left and Proceed to Checkout on the right */}
//             <div className="flex justify-between items-center">
//               {/* Left: Continue Shopping */}
//               <Link
//                 to="/all-categories"
//                 className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               >
//                 Continue Shopping
//               </Link>

//               {/* Right: Total Price and Proceed to Checkout */}
//               <div className="flex flex-col items-end">
//                 <p className="text-2xl font-bold mb-2 mr-36">
//                   Total Price: <span className="text-green-600">₹{totalPrice}</span>
//                 </p>
//                 <Link
//                   to="/checkout"
//                   className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 >
//                   Proceed to Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>

//         </div>
//       )}
//     </div>
//   );
// };

// export default CartList;
