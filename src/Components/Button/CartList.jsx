// import React, { useContext, useState } from 'react';
// import { FaTrashAlt } from 'react-icons/fa'; // Import the trash icon from React Icons
// import { Link } from "react-router-dom";
// import { MyContext } from '../MyContext'; // Import MyContext

// const CartList = () => {
//   // const { cart = [], removeFromCart } = useContext(MyContext);  // Destructure removeFromCart from MyContext
//   const { cart, removeFromCart } = useContext(MyContext);
//   console.log({ cart, removeFromCart });

//   // Local state to handle quantity updates
//   const [updatedCart, setUpdatedCart] = useState(cart);

//   // Update quantity in local state
//   const handleQuantityChange = (id, newQuantity) => {
//     if (newQuantity < 1) return; // Prevent quantity from being less than 1
//     const updatedItems = updatedCart.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     );
//     setUpdatedCart(updatedItems);
//   };

//   // Handle removal of an item from the cart
//   const handleRemoveItem = (id) => {
//     // Remove the item from the local state (updatedCart)
//     const filteredCart = updatedCart.filter(item => item.id !== id);
//     setUpdatedCart(filteredCart);

//     // Optionally, remove it from the global context/state
//     removeFromCart(id); // Call removeFromCart to update the global cart state
//   };

//   // Calculate Total Price (using the updated cart)
//   const totalPrice = updatedCart.reduce((total, item) => total + item.discountMrp * item.quantity, 0);

//   if (updatedCart.length === 0) {
//     console.log("Cart is empty"); // Log if the cart is empty
//     return (
//       <div className="cart-page p-6 font-merriWeather text-center">
//         <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
//         <p className="m-4">Your cart is currently empty.</p>
//         <Link to="/all-categories" className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 m-4">
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-list w-full max-w-7xl mx-auto px-4 py-6 font-merriWeather">
//       <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

//       {updatedCart.length === 0 ? (
//         <p className="text-center text-xl">Your cart is empty. Please add some items.</p>
//       ) : (
//         <div className="mx-20">
//           {/* Table Header */}
//           <div className="flex items-center font-bold border-b py-3 text-left">
//             <div className="w-1/6">Image</div>
//             <div className="w-2/6">Name</div>
//             <div className="w-1/6">Price</div>
//             <div className="w-1/6">Quantity</div>
//             <div className="w-1/6">Total</div>
//             <div className="w-1/6">Action</div> {/* New Column for Delete Button */}
//           </div>

//           {/* Cart Items */}
//           {updatedCart.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center border-b py-4 text-left"
//             >
//               {/* Product Image */}
//               <Link to={`/product/${item.id}`} className="w-1/6">
//                 <img
//                   src={`data:${item.imageType};base64,${item.imageData}`}
//                   alt={item.imageName}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//               </Link>

//               {/* Product Name */}
//               <Link to={`/product/${item.id}`} className="w-2/6">
//                 <h3 className="text-lg font-semibold">{item.medicineName}</h3>
//               </Link>

//               {/* Price */}
//               <div className="w-1/6">
//                 <p>₹{item.discountMrp}</p>
//               </div>

//               {/* Quantity */}
//               <div className="w-1/6">
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10) || 1)}
//                   className="border p-2 rounded w-16"
//                 />
//               </div>

//               {/* Total */}
//               <div className="w-1/6">
//                 <p className="font-bold">₹{item.discountMrp * item.quantity}</p>
//               </div>

//               {/* Delete Button */}
//               <div className="w-1/6">
//                 <button
//                   onClick={() => handleRemoveItem(item.id)}
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

//07-01-2025 10:37
import React, { useContext, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Import the trash icon from React Icons
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from '../MyContext'; // Import MyContext
import { useAuth } from '../CheckOutPage/AuthContext';

const CartList = () => {
  const { cart, removeFromCart } = useContext(MyContext);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [updatedCart, setUpdatedCart] = useState(cart);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from being less than 1
    const updatedItems = updatedCart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setUpdatedCart(updatedItems);
  };

  const handleRemoveItem = (id) => {
    const filteredCart = updatedCart.filter(item => item.id !== id);
    setUpdatedCart(filteredCart);
    removeFromCart(id); // Call removeFromCart to update the global cart state
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      localStorage.setItem('redirectPath', '/checkout'); // Save redirect path
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  const totalPrice = updatedCart.reduce((total, item) => total + item.discountMrp * item.quantity, 0);

  if (updatedCart.length === 0) {
    console.log("Cart is empty"); // Log if the cart is empty
    return (
      <div className="cart-page p-6 font-merriWeather text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <p className="m-4">Your cart is currently empty.</p>
        <Link to="/all-categories" className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 m-4">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-list w-full max-w-7xl mx-auto px-4 py-6 font-merriWeather">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
      {updatedCart.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty. Please add some items.</p>
      ) : (
        <div className="mx-20">
          <div className="flex items-center font-bold border-b py-3 text-left">
            <div className="w-1/6">Image</div>
            <div className="w-2/6">Name</div>
            <div className="w-1/6">Price</div>
            <div className="w-1/6">Quantity</div>
            <div className="w-1/6">Total</div>
            <div className="w-1/6">Action</div> {/* New Column for Delete Button */}
          </div>
          {updatedCart.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b py-4 text-left"
            >
              <Link to={`/product/${item.id}`} className="w-1/6">
                <img
                  src={`data:${item.imageType};base64,${item.imageData}`}
                  alt={item.imageName}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </Link>
              <Link to={`/product/${item.id}`} className="w-2/6">
                <h3 className="text-lg font-semibold">{item.medicineName}</h3>
              </Link>
              <div className="w-1/6">
                <p>₹{item.discountMrp}</p>
              </div>
              <div className="w-1/6">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10) || 1)}
                  className="border p-2 rounded w-16"
                />
              </div>
              <div className="w-1/6">
                <p className="font-bold">₹{item.discountMrp * item.quantity}</p>
              </div>
              <div className="w-1/6">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <FaTrashAlt size={20} /> {/* React Icon trash */}
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <Link
                to="/all-categories"
                className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Continue Shopping
              </Link>
              <div className="flex flex-col items-end">
                <p className="text-2xl font-bold mb-2 mr-36">
                  Total Price: <span className="text-green-600">₹{totalPrice}</span>
                </p>
                <button
                  onClick={handleCheckout}
                  className="btn btn-primary text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
