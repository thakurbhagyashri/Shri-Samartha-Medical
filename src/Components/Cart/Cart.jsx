// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import cartData from '../cart';

// const Cart = () => {
//   const [cart, setCart] = useState(cartData);  // Directly use the imported JSON data
//   const [loading, setLoading] = useState(false); // Loading is false since no external fetch
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(false); 
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (

//     <div className="cart-container max-w-screen-lg mx-auto p-6 flex justify-center items-center min-h-screen">
//       <div className="w-full">
//         <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
        
//         {cart.length === 0 ? (
//           <p className="text-center">Your cart is empty.</p>
//         ) : (
//           <div className="cart-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {cart.map((item) => (
//               <div key={item.id} className="cart-item flex flex-col items-center mb-6">
//                 <Link to={`/product/${item.id}`} className="flex flex-col items-center">
//                   <div className="relative w-[350px] h-[350px] mb-7">
//                     <img
//                       src={item.imageUrl || 'https://via.placeholder.com/350x350.png'} 
//                       alt={item.medicineName}
//                       className="w-[300px] h-[300px] object-contain"
//                     />
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Cart;
import React, { useContext, useState } from 'react';
import { MyContext } from '../context/MyContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getTotal, notification } = useContext(MyContext);
    const [localNotification, setLocalNotification] = useState(notification);

    const handleQuantityChange = (productId, e) => {
        const newQuantity = parseInt(e.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            updateQuantity(productId, newQuantity);
        }
    };

    return (
        <div className="cart-container max-w-screen-lg mx-auto p-6 flex justify-center items-center min-h-screen">
            <div className="w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
                
                {localNotification && (
                    <div className="notification text-center text-green-500 mb-4">
                        {localNotification}
                    </div>
                )}
                
                {cart.length === 0 ? (
                    <p className="text-center">Your cart is empty.</p>
                ) : (
                    <>
                        <div className="cart-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item flex flex-col items-center mb-6">
                                    <Link to={`/product/${item.id}`} className="flex flex-col items-center">
                                        <div className="relative w-[350px] h-[350px] mb-7">
                                            <img
                                                src={item.imageUrl || 'https://via.placeholder.com/350x350.png'}
                                                alt={item.name}
                                                className="w-[300px] h-[300px] object-contain"
                                            />
                                        </div>
                                    </Link>
                                    <div className="cart-item-details">
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p>${item.price}</p>
                                        <div className="quantity-container flex items-center">
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                className="border p-1"
                                                onChange={(e) => handleQuantityChange(item.id, e)}
                                            />
                                            <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary mt-4">
                            <h3 className="text-xl font-bold">Total: ${getTotal()}</h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
