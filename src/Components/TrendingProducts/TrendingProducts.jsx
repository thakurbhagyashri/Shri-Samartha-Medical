// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import cartData from './TrendingProductsJs'; // Import cart data
// import AddToCartButton from '../Button/AddToCart'; // Assuming this button is a separate component

// const TrendingProducts = () => {
//   const [cart] = useState(cartData); // Set cart data to state

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {cart.length === 0 ? (
//         <p className="text-xl font-semibold text-gray-600">Your cart is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:rounded-3xl hover:bg-blue-50 cursor-pointer border-2 border-transparent group-hover:border-blue-500 p-4"
//             >
//               <Link to={`/product/${item.id}`} className="block">
//                 {/* Image container with reduced size and full image visibility */}
//                 <div className="relative w-full h-40 rounded-3xl ">
//                   <img
//                     src={item.imageUrl}
//                     alt={item.title}
//                     className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 {/* Title with animation and hover effect */}
//                 <p className="mt-4 text-center text-lg font-semibold text-gray-800 capitalize group-hover:text-blue-600 group-hover:tracking-widest transition-all duration-300">
//                   {item.title}
//                 </p>
//               </Link>
//               <div className="px-4 py-3">
//                 <AddToCartButton text={"ADD TO CART"} />
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrendingProducts;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import cartData from './TrendingProductsJs'; // Import cart data
import AddToCartButton from '../Button/AddToCart'; // Assuming this button is a separate component

const TrendingProducts = () => {
  const [cart] = useState(cartData); // Set cart data to state

  return (
    <div className="container mx-[100px] my-[50px] max-w-[1000px]">
      {cart.length === 0 ? (
        <p className="text-xl font-semibold text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="group bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:rounded-3xl hover:bg-blue-50 cursor-pointer border-2 border-transparent group-hover:border-blue-500"
            >
              <Link to={`/product/${item.id}`} className="block max-w-xs">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                {/* Title with animation and hover effect */}
                <p className="mt-2 text-center text-lg font-semibold text-gray-800 capitalize group-hover:font-bold transition-all duration-300">
                  {item.title}
                </p>
                
                {/* Render dynamic rating */}
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={index < item.rating ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>

                <p className="mt-2 text-center text-lg font-semibold text-gray-800 capitalize group-hover:font-bold transition-all duration-300">
                  ₹ {item.price}
                </p>
              </Link>
                <AddToCartButton text={"ADD TO CART"} />             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingProducts;
