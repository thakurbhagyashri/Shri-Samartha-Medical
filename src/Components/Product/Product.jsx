import React, { useContext, useState, useEffect } from 'react';
import { FaHeart, FaStar } from "react-icons/fa";
import { useLocation, useParams } from 'react-router-dom';
import { MyContext } from '../MyContext';
import { categoriesData } from '../ShopByCategory/categoriesData';
import { Link } from 'react-router-dom';

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Product = () => {
  const { state } = useLocation();
  const { productId } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1); // Default quantity
  const { addToCart } = useContext(MyContext);
  const [notification, setNotification] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Find the current product
  const product = state?.product || categoriesData
    .flatMap(category => category.products)
    .find(product => product.id === parseInt(productId, 10));

  const allProducts = categoriesData
    .flatMap((category) => category.products)
    .filter((p) => p.id !== product?.id);

  const suggestedProducts = shuffleArray(allProducts);

  // Reset quantity when a new product is loaded
  useEffect(() => {
    setQuantity(1); // Reset quantity to 1 each time the product changes
  }, [productId]); // Trigger whenever productId changes

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const handleAddToCart = (product) => {
    const productToAdd = { ...product, quantity };
    addToCart(productToAdd);
    showNotification('Product added to cart successfully');
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value));
    setQuantity(value);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(suggestedProducts.length - 1, prev + 1));
  };

  if (!product) {
    return <p>Product not found. Please go back and select a product.</p>;
  }

  return (
    <div>
      <div className="container mx-[100px] font-custom my-10 max-w-[1000px]">
        <div className="flex gap-10">
          <div className="w-4/12 border-2 border-gray-300 rounded-[10px] transition-transform duration-300 transform hover:scale-105">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto p-5"
            />
          </div>

          <div className="w-5/12 gap-5 flex flex-col justify-between">
            <div
              className={`absolute right-[23rem] pt-1 text-3xl cursor-pointer transition-colors duration-300 ${isWishlisted ? 'text-red-500' : 'text-black'}`}
              onClick={handleWishlist}
            >
              <FaHeart
                style={{
                  fill: isWishlisted ? 'red' : 'none',
                  stroke: isWishlisted ? 'none' : 'black',
                  strokeWidth: '15px',
                  width: '2em',
                }}
              />
            </div>

            <h1 className="text-3xl">{product.name}</h1>
            <p className="text-md text-gray-600">{product.description}</p>

            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`${index < product.rating ? 'text-yellow-400' : 'text-gray-300'} text-3xl`}
                />
              ))}
            </div>

            <p className="text-xl font-semibold text-blue-600">Price: ₹{product.price}</p>

            <div className="flex items-center">
              <label className="text-lg font-medium mr-2">Quantity: </label>
              <div className="flex items-center border rounded-md overflow-hidden">
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-10 text-center border-0 py-1"
                  min="1"
                />
              </div>
            </div>

            <button
              className="w-full py-3 my-3 text-white rounded-lg shadow-md bg-green-700 hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:font-bold"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {notification && (
          <div className="fixed top-1/4 right-5 bg-green-500 text-white text-lg py-4 px-6 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out">
            {notification}
          </div>
        )}
      </div>

      {/* Product Suggestions Carousel */}
      <div className="my-10 mx-[100px]">
        <h2 className="text-2xl font-semibold mb-5">You May Also Like</h2>
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full py-2 px-4 shadow-md z-20"
            disabled={currentIndex === 0}
          >
            &#10094;
          </button>
          <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white to-transparent z-10" />
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * 300}px)`,
              }}
            >
              {suggestedProducts.map((suggestedProduct) => (
                <div
                  key={suggestedProduct.id}
                  className="w-[240px] flex-shrink-0 border rounded-lg shadow-md p-5 mx-2"
                >
                  <Link to={`/product/${suggestedProduct.id}`}>
                    <img
                      src={suggestedProduct.imageUrl}
                      alt={suggestedProduct.name}
                      className="w-full h-32 object-cover rounded"
                    />
                    <h3 className="mt-2 text-lg font-medium">{suggestedProduct.name}</h3>
                    <p className="text-blue-600 font-semibold">₹{suggestedProduct.price}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full py-2 px-4 shadow-md z-10"
            disabled={currentIndex === suggestedProducts.length - 1}
          >
            &#10095;
          </button>
          <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white to-transparent z-5" />
        </div>
      </div>
    </div>
  );
};

export default Product;

// import React, { useContext, useState } from 'react';
// import { FaHeart, FaStar } from "react-icons/fa";
// import { useLocation, useParams } from 'react-router-dom';
// import { MyContext } from '../MyContext';
// import { categoriesData } from '../ShopByCategory/categoriesData';
// import { Link } from 'react-router-dom';

// // Shuffle function to randomize the array
// const shuffleArray = (array) => {
//   const shuffledArray = [...array]; // Create a copy to avoid mutating the original array
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
//   }
//   return shuffledArray;
// };

// // Function to update product quantity in the mock DB (categoriesData)
// const updateProductQuantityInDB = (productId, quantity) => {
//   for (const category of categoriesData) {
//     const product = category.products.find((p) => p.id === productId);
//     if (product) {
//       product.quantity -= quantity; // Decrease quantity based on user selection
//       // console.log(`Updated quantity for ${product.name} in DB: ${product.quantity}`); // Log quantity update
//       break;
//     }
//   }
// };

// const Product = () => {
//   const { state } = useLocation();
//   const { productId } = useParams();
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart } = useContext(MyContext);
//   const [notification, setNotification] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0); // Track carousel scroll position

//   // Find the current product
//   const product = state?.product || categoriesData
//     .flatMap(category => category.products)
//     .find(product => product.id === parseInt(productId, 10));

//   // Get all products from all categories, excluding the current product
//   const allProducts = categoriesData
//     .flatMap((category) => category.products)
//     .filter((p) => p.id !== product?.id);  // Exclude the current product

//   // Shuffle the products for suggestion
//   const suggestedProducts = shuffleArray(allProducts);

//   // Show notification after adding product to cart
//   const showNotification = (message) => {
//     setNotification(message);
//     setTimeout(() => {
//       setNotification('');
//     }, 3000);
//   };

//   // Handle adding product to cart
//   const handleAddToCart = (product) => {
//     const productToAdd = { ...product, quantity };
//     console.log("Adding to cart:", productToAdd); // Log before adding to cart
//     console.log("Quantity in AddToCart to cart:", product.quantity);
//     // Add the product to the cart
//     addToCart(productToAdd);

//     // Update quantity in mock database
//     // updateProductQuantityInDB(product.id, quantity);

//     // Show notification
//     showNotification('Product added to cart successfully');
//   };

//   // Handle wishlist toggle
//   const handleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//   };

//   // Handle quantity change input
//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, parseInt(e.target.value));
//     setQuantity(value);
//     console.log("Quantityin product:", value);
//   };

//   // Handle increment/decrement of quantity
//   // const handleIncrement = () => setQuantity(quantity + 1);
//   // const handleDecrement = () => setQuantity(Math.max(1, quantity - 1));

//   // Handle previous/next suggestion in carousel
//   const handlePrev = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => Math.min(suggestedProducts.length - 1, prev + 1));
//   };

//   // If product is not found, show a message
//   if (!product) {
//     return <p>Product not found. Please go back and select a product.</p>;
//   }

//   return (
//     <div>
//       <div className="container mx-[100px] font-custom my-10 max-w-[1000px]">
//         <div className="flex gap-10">
//           <div className="w-4/12 border-2 border-gray-300 rounded-[10px] transition-transform duration-300 transform hover:scale-105">
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-full h-auto p-5"
//             />
//           </div>

//           <div className="w-5/12 gap-5 flex flex-col justify-between">
//             <div
//               className={`absolute right-[23rem] pt-1 text-3xl cursor-pointer transition-colors duration-300 ${isWishlisted ? 'text-red-500' : 'text-black'}`}
//               onClick={handleWishlist}
//             >
//               <FaHeart
//                 style={{
//                   fill: isWishlisted ? 'red' : 'none',
//                   stroke: isWishlisted ? 'none' : 'black',
//                   strokeWidth: '15px',
//                   width: '2em',
//                 }}
//               />
//             </div>

//             <h1 className="text-3xl">{product.name}</h1>
//             <p className="text-md text-gray-600">{product.description}</p>

//             <div className="flex items-center">
//               {[...Array(5)].map((_, index) => (
//                 <FaStar
//                   key={index}
//                   className={`${index < product.rating ? 'text-yellow-400' : 'text-gray-300'} text-3xl`}
//                 />
//               ))}
//             </div>

//             <p className="text-xl font-semibold text-blue-600">Price: ₹{product.price}</p>

//             <div className="flex items-center">
//               <label className="text-lg font-medium mr-2">Quantity: </label>
//               <div className="flex items-center border rounded-md overflow-hidden">
//                 {/* <button
//                   onClick={handleDecrement}
//                   className="px-2 py-1 text-xl bg-gray-200 hover:bg-gray-300 focus:outline-none"
//                 >
//                   -
//                 </button> */}
//                 <input
//                   type="number"
//                   value={quantity}
//                   onChange={handleQuantityChange}
//                   className="w-10 text-center border-0 py-1"
//                   min="1"
//                   pattern="[0-9]*"
//                 />
//                 {/* <button
//                   onClick={handleIncrement}
//                   className="px-2 py-1 text-xl bg-gray-200 hover:bg-gray-300 focus:outline-none"
//                 >
//                   +
//                 </button>*/}
//               </div> 
//             </div>

//             <button
//               className="w-full py-3 my-3 text-white rounded-lg shadow-md bg-green-700 hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:font-bold"
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>

//         {notification && (
//           <div className="fixed top-1/4 right-5 bg-green-500 text-white text-lg py-4 px-6 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out">
//             {notification}
//           </div>
//         )}
//       </div>

//       {/* Product Suggestions Carousel */}
//       <div className="my-10 mx-[100px]">
//         <h2 className="text-2xl font-semibold mb-5">You May Also Like</h2>
//         <div className="relative">
//           <button
//             onClick={handlePrev}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full py-2 px-4 shadow-md z-20"
//             disabled={currentIndex === 0}
//           >
//             &#10094;
//           </button>
//           <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white to-transparent z-10" />
//           <div className="overflow-hidden w-full">
//             <div
//               className="flex transition-transform duration-300"
//               style={{
//                 transform: `translateX(-${currentIndex * 300}px)`,
//               }}
//             >
//               {suggestedProducts.map((suggestedProduct) => (
//                 <div
//                   key={suggestedProduct.id}
//                   className="w-[240px] flex-shrink-0 border rounded-lg shadow-md p-5 mx-2"
//                 >
//                   <Link to={`/product/${suggestedProduct.id}`}>
//                     <img
//                       src={suggestedProduct.imageUrl}
//                       alt={suggestedProduct.name}
//                       className="w-full h-32 object-cover rounded"
//                     />
//                     <h3 className="mt-2 text-lg font-medium">{suggestedProduct.name}</h3>
//                     <p className="text-blue-600 font-semibold">₹{suggestedProduct.price}</p>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={handleNext}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full py-2 px-4 shadow-md z-10"
//             disabled={currentIndex === suggestedProducts.length - 1}
//           >
//             &#10095;
//           </button>
//           <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white to-transparent z-5" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
