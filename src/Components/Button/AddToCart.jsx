 import React from 'react';
import { Link } from 'react-router-dom';
// // import { Link } from 'react-router-dom';

const AddToCartButton = ({ text, onClick, link, extraClasses = '', showNotification }) => {
  const handleClick = () => {
    onClick(); // Call the onClick passed from parent (which adds the product to cart)
    if (showNotification) {
      showNotification("Product added to cart successfully!"); // Show notification after adding to cart
    }
  };
  return (
    <div className="mt-4 text-center font-custom">
      {link ? (
        <Link
          to={link}
          className={`px-4 py-2 text-white text-sm rounded-lg bg-[#497E06] hover:bg-[#5ea328] hover:font-bold transition duration-300 w-full sm:w-auto ${extraClasses}`}
        >
          {text}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={`px-5 py-2 text-white text-sm rounded-2xl bg-ButtonGreen hover:bg-[#5ea328] hover:font-bold  transition duration-300 w-full sm:w-auto ${extraClasses}`}
        >
          {text}
        </button>
      )}
    </div>
  );
};

 export default AddToCartButton;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const AddToCartButton = ({ text, onClick, link, extraClasses = '', showNotification }) => {
//   const handleClick = () => {
//     if (onClick) {
//       onClick(); // Call the onClick function passed from the parent
//     } else {
//       console.warn("No onClick function provided to AddToCartButton.");
//     }
//     if (showNotification) {
//       showNotification("Product added to cart successfully!"); // Show notification
//     }
//   };

//   return (
//     <div className="mt-4 text-center">
//       {link ? (
//         <Link
//           to={link}
//           className={`px-4 py-2 text-white text-sm rounded-lg bg-green-700 hover:bg-green-600 hover:font-bold transition duration-300 w-full sm:w-auto ${extraClasses}`}
//         >
//           {text}
//         </Link>
//       ) : (
//         <button
//           onClick={handleClick}
//           aria-label="Add to cart"
//           className={`px-5 py-2 text-white text-sm rounded-2xl bg-green-700 hover:bg-green-600 hover:font-bold transition duration-300 w-full sm:w-auto ${extraClasses}`}
//         >
//           {text}
//         </button>
//       )}
//     </div>
//   );
// };

// export default AddToCartButton;
