import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyContext';

const ShoppingCart = () => {
  const { cart } = useContext(MyContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FontAwesomeIcon icon={faShoppingCart} className="text-white text-xl mx-5 p-2 cursor-pointer" />
      <span className="absolute top-1 right-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs font-bold">{cart.length}</span>

      {isHovered && cart.length > 0 && (
        <div className="absolute top-full left-5 bg-white border border-gray-300 p-4 min-w-[300px] shadow-md z-10 text-left">
          {cart.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-center py-2 border-b border-gray-200">
              <img src={item.imageUrl} alt={item.name} className="w-10 h-10 object-cover mr-3 border border-gray-300 rounded-md" />
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                <p className="text-xs text-gray-500">₹{item.price}</p>
              </div>
            </div>
          ))}
{/* Always visible "View All Products" link */}
<Link
  to="/cart"
  className={`block text-center !text-black text-sm mt-2 ${isHovered ? 'hover:text-blue-600' : ''}`}
>
  View All Products
</Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;