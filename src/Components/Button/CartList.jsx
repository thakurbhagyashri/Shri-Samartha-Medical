import React, { useContext } from 'react';
import { MyContext } from '../MyContext'; // Or useCart if you're using a different context

// const CartList = () => {
//   const { cartItems } = useContext(MyContext); // Assuming you have cartItems in your context
  
//   if (cartItems.length === 0) {
//     return <p>Your cart is empty.</p>;
//   }

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index} className="cart-item">
//             <div className="flex items-center gap-5">
//               <img src={item.imageUrl} alt={item.title} className="w-20 h-20" />
//               <div>
//                 <h3 className="text-xl">{item.title}</h3>
//                 <p>Price: ₹{item.price}</p>
//                 <p>Quantity: {item.quantity}</p>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className="cart-total">
//         <p>Total: ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
//       </div>
//     </div>
//   );
// };

// export default CartList;

const CartList = () => {
    const { cart, addToCart } = useContext(MyContext);
  
    // Check if cart is defined and has items
    if (!cart || cart.length === 0) {
      return <p>Your cart is empty!</p>;
    }
  
    const handleQuantityChange = (product, quantity) => {
      addToCart(product, quantity); // Update quantity in the cart
    };
  
    return (
      <div>
        <h2>Your Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: 
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
              />
            </p>
            <p>Total: ₹{item.price * item.quantity}</p>
          </div>
        ))}
        <div>
          <h3>Total: ₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
        </div>
      </div>
    );
  };
  export default CartList;