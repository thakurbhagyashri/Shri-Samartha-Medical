// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ShopByCategory.css';
// import cartData from './ShopByCategoryJs.js';

// const ShopByCategory = () => {
//   const [cart] = useState(cartData); 
//   return (
//     <div className="cart-container">
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items font-custom ">
//           {cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <Link to={`/product/${item.id}`}>
//                 <div className="image-container">
//                     <img
//                       src={item.imageUrl}
//                       alt={item.title}
//                       className="cart-item-image"
//                     />
//                 </div>
//                 <p className="medicine-title">{item.title}</p> 
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopByCategory;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopByCategory.css';
import cartData from './ShopByCategoryJs.js';

const ShopByCategory = () => {
  const [cart] = useState(cartData);

  return (
    <div className="cart-container">
      <div className="header-container font-custom">
        <h2 className="shop-by-category-title">Shop by Category</h2>
        <Link to="/all-categories" className="view-all-link text-lg p-2 bg-ButtonGreen text text-white rounded-lg no-underline hover:scale-110 hover:bg-[#61912a] transform transition-all duration-300">
          View All
        </Link>
      </div>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items font-custom">
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
