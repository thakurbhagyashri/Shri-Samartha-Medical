// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import cartData from '../cart';

// const Cart = () => {
//   const [cart, setCart] = useState(cartData);  // Directly use the imported JSON data
//   const [loading, setLoading] = useState(false); // Loading is false since no external fetch
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(false); // Simulate loading effect if necessary
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="cart-container max-w-screen-lg mx-0 p-0">
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {cart.map((item) => (
//             <div key={item.id} className="cart-item flex flex-col items-center mb-6 ">
//               <Link to={`/product/${item.id}`} className="flex flex-col items-center ">
//                 <div className="relative w-[290px] h-[250px] mb-7 ">
//                   {/* Elliptical overlay without transparency */}
                 
//                     {/* Medicine name with color #3E3B3B */}
                  
//                   {/* Center the image below the ellipse and make it smaller */}
//                   <img
//                     src={item.imageUrl || 'https://via.placeholder.com/290x250.png'}
//                     alt={item.medicineName}
//                     className="w-[180px] h-[200px] " // Image is smaller with shadow
//                   />
//                 </div>
//               </Link>
            
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cartData from './ShopByCategoryJs.js'; 
import './ShopByCategory.css';

const ShopByCategory = () => {
  const [cart] = useState(cartData); 
  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <Link to={`/product/${item.id}`}>
                <div className="image-container">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="cart-item-image"
                    />
                </div>
                <p className="medicine-title">{item.title}</p> 
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopByCategory;
