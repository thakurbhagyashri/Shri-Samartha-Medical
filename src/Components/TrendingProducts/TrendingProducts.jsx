import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../Button/AddToCart'; // Assuming this button is a separate component
import { MyContext } from '../MyContext';
import cartData from './TrendingProductsJs';
import { FaHeart, FaStar } from "react-icons/fa";
import Product from '../Product/Product';
const TrendingProducts = () => {
  const { addToCart } = useContext(MyContext); // Use the addToCart function from context
  const [notification, setNotification] = useState(''); // Notification state
  const [Wishlisted, setWishlisted]=useState({});
  // Function to show notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(''); // Hide notification after 3 seconds
    }, 3000);
  };

  // Handle adding item to cart
  const handleAddToCart = (item) => {
    addToCart(item); // Add item to the global cart using the context
    showNotification('Product added to cart successfully');
  };
// const handleWishlist=(itemId)=>
// {

//   setWishlisted=(PreWishlisted)=>
//   ({...PreWishlisted,[itemId]:!PreWishlisted[itemId]})
// };
const handleWishlist = (itemId) => {
  setWishlisted((prevWishlisted) => ({
    ...prevWishlisted,
    [itemId]: !prevWishlisted[itemId], // Toggle the wishlist state for the specific item
  }));
};
  return (
    <div className="font-custom container mx-[100px] my-[50px]">
      {/* Slide-In Notification */}
      {notification && (
        <div className="notification-slide-in fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3 opacity-100 z-50">
          <span className="font-semibold">Success!</span>
          <p>{notification}</p>
          <button
            onClick={() => setNotification('')} 
            className="ml-3 text-2xl font-bold text-white hover:text-gray-200">
            &times;
          </button>
        </div>
      )}
             
      

      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-40">
        {/* Assuming `cartData` is the list of trending products */}
        
        {cartData.map((item) => (
          <div
            key={item.id}
            className="group bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:rounded-3xl hover:bg-blue-50 p-4 cursor-pointer border-2 border-transparent group-hover:border-blue-500"
          >
            
            <Link to={`/product/${item.id}`} className="block max-w-xs">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <p className="mt-2 text-center text-lg font-[550] text-gray-800 capitalize group-hover:font-bold transition-all duration-300">
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

       {/* Add to Wishlist */}
<div
  className={`absolute top-2 right-2 m-1 p-2 text-1xl cursor-pointer transition-colors duration-300 ${
    Wishlisted[item.id] ? 'text-red-500' : 'text-black'
  }`}
  onClick={() => handleWishlist(item.id)}
>
  <FaHeart
    style={{
      fill: Wishlisted[item.id] ? 'red' : 'none',
      stroke: Wishlisted[item.id] ? 'none' : 'black',
      strokeWidth: '15px',
      width: '1.5em',
      height: '1.5em',
    }}
  />
</div>


  {/* Add to cart button */}
            <AddToCartButton
              text="Add to Cart"
              onClick={() => handleAddToCart(item)}  // Add the item to the cart
              showNotification={showNotification}  // Show the notification
            />
            
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;