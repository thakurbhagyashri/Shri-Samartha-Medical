// import React, { useContext, useEffect, useState } from 'react';
// import { FaHeart } from "react-icons/fa";
// import { Link, useLocation, useParams } from 'react-router-dom';
// import { MyContext } from '../MyContext';
// import { categoriesData } from '../ShopByCategory/categoriesData';

// const shuffleArray = (array) => {
//   const shuffledArray = [...array];
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// };

// const Product = () => {
//   const { state } = useLocation();
//   const { productId } = useParams();
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [quantity, setQuantity] = useState(1); // Default quantity
//   const { addToCart } = useContext(MyContext);
//   const [notification, setNotification] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const { id } = useParams();

//   // Find the current product
//   const product = state?.product || categoriesData
//     .flatMap(category => category.products)
//     .find(product => product.id === parseInt(productId, 10));

//   const allProducts = categoriesData
//     .flatMap((category) => category.products)
//     .filter((p) => p.id !== product?.id);

//   const suggestedProducts = shuffleArray(allProducts);

//   // Reset quantity when a new product is loaded
//   useEffect(() => {
//     setQuantity(1); // Reset quantity to 1 each time the product changes
//   }, [productId]); // Trigger whenever productId changes

//   const showNotification = (message) => {
//     setNotification(message);
//     setTimeout(() => {
//       setNotification('');
//     }, 3000);
//   };

//   const handleAddToCart = (product) => {
//     const productToAdd = { ...product, quantity };
//     addToCart(productToAdd);
//     showNotification('Product added to cart successfully');
//   };

//   const handleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//   };

//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, parseInt(e.target.value));
//     setQuantity(value);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => Math.min(suggestedProducts.length - 1, prev + 1));
//   };

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

//             <p className="text-xl font-semibold text-blue-600">Price: ₹{product.price}</p>

//             <div className="flex items-center">
//               <label className="text-lg font-medium mr-2">Quantity: </label>
//               <div className="flex items-center border rounded-md overflow-hidden">
//                 <input
//                   type="number"
//                   value={quantity}
//                   onChange={handleQuantityChange}
//                   className="w-10 text-center border-0 py-1"
//                   min="1"
//                 />
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
//         <h2 className="text-2xl font-semibold font-custom mb-5">You May Also Like</h2>
//         <div className="relative font-roboto">
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

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../MyContext";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useContext(MyContext);
  const [notification, setNotification] = useState("");

  useEffect(() => {

    const fetchProductDetails = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Authentication token not found.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:8080/product/${productId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }

        const data = await response.json();
        console.log("API Response:", data); // Log the response here
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };




    fetchProductDetails();
  }, [productId]);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showNotification("Product added to cart successfully");
  };


  if (loading) return <div>Loading...</div>;
  if (!product)
    return <div>No product found. Check if the product ID is valid.</div>;

  const calculateDiscount = (product) =>{

  }


  return (
    <div className="product-details-container max-w-5xl mx-auto p-8 bg-white shadow-md rounded-lg flex flex-col gap-6">
      {/* Left Section: Image */}
      <div className="flex">
        <div className="w-1/2 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
          {product.imageData ? (
            <img
              src={`data:${product.imageType};base64,${product.imageData}`}
              alt={product.imageName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="placeholder w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
              Image Placeholder
            </div>
          )}
        </div>

        <div className="p-7 font-fira">
          <h1 className="product-title text-3xl font-bold text-gray-800 mb-5 font-noto ">
            {product.medicineName}
          </h1>
          <p className="product-company text-sm text-gray-600 mt-1 py-2">
            <span className="font-semibold text-[#ff6f61]"> {product.companyName}</span>{" "}
           
          </p>

          <p className="product-min-age text-sm text-gray-600 mt-1 py-2">
            <span className="font-semibold">Minimum Age :</span> {product.minAge} years
          </p>
          <p className="product-max-age text-sm text-gray-600 mt-1 py-2">
            <span className="font-semibold">Maximum Age :</span> {product.maxAge} years
          </p>
          <p className="product-real-mrp text-sm text-gray-600 mt-1 py-2">
            <span className="font-semibold"> Price : </span> ₹ {product.realMrp}/-
          </p>
          <p className="product-discount-mrp text-sm text-gray-600 mt-1 py-2">
            <span className="font-semibold">Discounted MRP :</span> ₹ {product.discountMrp}/- 
             <span className="text-green-600 ml-1">({Math.round(((product.realMrp - product.discountMrp) / product.realMrp) * 100)}% off)</span>
          </p>
          <p className="product-categories text-sm text-gray-600 mt-1 py-2">
            <span className="font-semibold">Categories :</span>{" "}
            {product.categories && product.categories.join(", ")}
          </p>
          <div className="w-1/2">
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-button w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700">
              Add to Cart
            </button>
            {notification && (
              <div className="fixed top-1/4 right-5 bg-green-500 text-white text-lg py-4 px-6 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out">
                {notification}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="w-full font-fira">
        <p className="product-description text-sm text-gray-600 mt-1">
          <h2 className="font-semibold text-lg mb-2"> Product Description:</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: product.prodDescription
                .replace(/\n/g, "<br />")
                .replace(/<li>/g, "<ul><li>") // Ensure list items are wrapped in <ul>
                .replace(/<\/li>/g, "</li></ul>"), // Close the <ul> properly
            }}
          ></p>
        </p>
      </div>
    </div>
  );
};

export default Product;
