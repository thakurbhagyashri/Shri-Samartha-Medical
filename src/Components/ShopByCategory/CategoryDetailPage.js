import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddToCartButton from '../Button/AddToCart'; // Assuming this button is a separate component
import { MyContext } from '../MyContext';
import { categoriesData } from './categoriesData'; // Mock categories data
import { FaHeart } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa'; // Import the checkmark icon

const CategoryDetailPage = () => {
  const { categoryName } = useParams();
  const [category, setCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(MyContext);
  const [notification, setNotification] = useState('');
  const [Wishlisted, setWishlisted] = useState({});

  // useEffect(() => {
  //   const loadCategoryData = async () => {
  //     try {
  //       setLoading(true);

  //       // Retrieve the token from localStorage
  //       const token = localStorage.getItem('jwtToken');
  //       if (!token) {
  //         throw new Error('Authentication token not found.');
  //       }

  //       const response = await fetch(`http://localhost:8080/product/category?name=${categoryName}`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${token}`, // Include the JWT token
  //         },
  //       });
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch category data');
  //       }

  //       const data = await response.json();

  //       // Convert image bytes to Base64
  //       const categoryWithImages = {
  //         ...data,
  //         products: data.products.map((product) => ({
  //           ...product,
  //           imageUrl: `data:image/jpeg;base64,${btoa(
  //             String.fromCharCode(...new Uint8Array(product.image))
  //           )}`,
  //         })),
  //       };
  //       setCategory(categoryWithImages);
  //     } catch (error) {
  //       console.error('Error fetching category data:', error);
  //       setCategory(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   // Find the category based on the categoryName
  //   const foundCategory = categoriesData.find(
  //     (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
  //   );

  //   setCategory(foundCategory || null);
  //   setLoading(false);
  // }, [categoryName]);
  useEffect(() => {
    const loadCategoryData = async () => {
      try {
        setLoading(true);
  
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          throw new Error('Authentication token not found.');
        }
  
        const response = await fetch(`http://localhost:8080/product/category?name=${categoryName}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch category data');
        }
  
        const data = await response.json();
  
        const categoryWithImages = {
          ...data,
          products: data.products.map((product) => ({
            ...product,
            imageUrl: `data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(product.image)))}`,
          })),
        };
        setCategory(categoryWithImages);
      } catch (error) {
        console.error('Error fetching category data:', error);
        // You can fallback to mock data if fetching fails
        const foundCategory = categoriesData.find(
          (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
        );
        setCategory(foundCategory || null);
      } finally {
        setLoading(false);
      }
    };
  
    loadCategoryData();
  }, [categoryName]);


  const filterProducts = () => {
    const products = category?.products || [];
    let filteredProducts = products;
  
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    if (priceFilter !== 'all') {
      filteredProducts = filteredProducts.filter((product) => {
        if (!product || product.price === undefined) return false;
        const price = parseFloat(product.price.replace('$', ''));
  
        if (priceFilter === 'low') return price < 20;
        if (priceFilter === 'medium') return price >= 20 && price < 50;
        return price >= 50;
      });
    }
  
    return filteredProducts;
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!category) {
    return (
      <div>
        <p>Category not found.</p>
        <Link to="/all-categories" className="text-blue-500">Go to all categories</Link>
      </div>
    );
  }

  const filteredProducts = filterProducts();

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  

  const handleAddToCart = (product) => {
    addToCart(product);
    showNotification('Product added to cart successfully');
  };const handleWishlist = (productId, productName) => {
    setWishlisted((prevWishlisted) => {
      const updatedWishlist = {
        ...prevWishlisted,
        [productId]: prevWishlisted[productId] ? undefined : { id: productId, name: productName },
      };
  
      // Clean up undefined entries
      const cleanedWishlist = Object.fromEntries(
        Object.entries(updatedWishlist).filter(([_, value]) => value !== undefined)
      );
  
      // Store the updated wishlist in localStorage
      localStorage.setItem('wishlisted', JSON.stringify(cleanedWishlist));
      showNotification("Wishlist Updated!");
  
      return cleanedWishlist;
    });
  };
  
  
  
  return (
    <div className="flex">
      {/* Left-side Category Navigation */}
      <aside className="w-1/6 bg-[#e1e1e1] p-4 font-merriWeather">
        <h3 className="text-2xl font-semibold mb-4">Categories</h3>
        <ul>
          {categoriesData.map((cat) => (
            <li key={cat.id} className="mb-2">
              <Link
                to={`/category/${cat.name}`}
                className="text-xl text-gray-800 hover:text-blue-500"
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="w-3/4 p-6">
        <h2 className="text-3xl  font-roboto font-semibold mb-8">
          Products in {category.name} Category
        </h2>

        {/* Search and Filter Bar */}
        <div className="mb-6 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for categories"
            className="px-4 py-2 border font-merriWeather border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border font-merriWeather font-thin text-gray-500 border-gray-300 rounded-md"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Price Ranges</option>
            <option value="low">Under $20</option>
            <option value="medium">$20 - $50</option>
            <option value="high">Over $50</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
                <div className="h-40 w-full mb-4 bg-gray-200 rounded-lg">
                  <Link to={`/product/${product.id}`}>
                  <img
  src={product.imageUrl}
  alt={product.name}
  className="w-full h-full object-cover rounded-lg"
/>

                  </Link>
                </div>
                <div className="p-4">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-lg font-semibold font-merriWeather text-gray-800 hover:text-blue-500 no-underline"
                  >
                    {product.name}
                  </Link>
                  {/* Product Description (Partial) */}
                  <p className="text-sm text-gray-600 font-merriWeather font-medium mt-2">
                    {product.description && product.description.length > 100
                      ? `${product.description.substring(0, 100)}...`
                      : product.description || "No description available"}
                  </p>
                  <p className="text-sm font-merriWeather text-gray-600">{product.price}</p>

                  {/* Add to Wishlist */}
                  <div
                    className={`absolute top-2 right-2 m-1 p-2 text-1xl cursor-pointer transition-colors duration-300 ${
                      Wishlisted[product.id] ? 'text-red-500' : 'text-black'
                    }`}
                    onClick={() => handleWishlist(product.id,product.name)} // Use 'product.id' here
                  >
                    <FaHeart
                      style={{
                        fill: Wishlisted[product.id] ? 'red' : 'none',
                        stroke: Wishlisted[product.id] ? 'none' : 'black',
                        strokeWidth: '15px',
                        width: '1.5em',
                        height: '1.5em',
                      }}
                    />
                  </div>

                  <AddToCartButton
                    text="Add to Cart"
                    onClick={() => handleAddToCart(product)} // Add the item to the cart
                  />
{notification && (
  <div className="fixed top-1/4 right-5 Opacity-20 bg-gray-200 text-b text-lg py-4 px-6 rounded-lg shadow-lg z-50 transition-opacity duration-300 ease-in-out transform Opacity-100">
    <div className="flex justify-between items-center">
      {/* Green checkmark icon */}
      <div className="flex items-center space-x-2">
        <FaCheck className="text-ButtonGreen text-xl" />
        <span className="font-medium">{notification}</span>
      </div>
    
      <button
        className="text-black font-semibold text-xl leading-none"
        onClick={() => setNotification(null)}
      >
        &times;
      </button>
    </div>
  </div>
)}

                </div>
              </div>
            ))
          ) : (
            <p>No products found based on the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;



// Backend Integration
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import AddToCartButton from "../Button/AddToCart";
// import { MyContext } from "../MyContext"; // Replace with the correct path to your context

// const CategoryDetailPage = () => {
//   const { categoryName } = useParams();
//   const [category, setCategory] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [priceFilter, setPriceFilter] = useState("all");
//   const [loading, setLoading] = useState(true);
//   const { addToCart } = useContext(MyContext);
//   const [notification, setNotification] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadCategoryData = async () => {
//       try {
//         setLoading(true);

//         // Retrieve the token from localStorage
//         const token = localStorage.getItem("token");
//         if (!token) {
//           throw new Error("Authentication token not found.");
//         }

//         // Make the API call with the Authorization header
//         const response = await fetch(
//           `http://localhost:8080/product/category?categories=${categoryName}`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`, // Include the JWT token
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch category data");
//         }

//         const data = await response.json();

//         // Convert image bytes to Base64
//         const categoryWithImages = {
//           name: categoryName,
//           products: data.map((product) => {
//             let imageUrl = null;
//             if (product.imageData) {
//               const binaryString = atob(product.imageData); // Decode Base64 (if needed)
//               const base64String = btoa(binaryString); // Encode to Base64 (if needed)
//               imageUrl = `data:${product.imageType};base64,${base64String}`;
//             }
//             return {
//               ...product,
//               imageUrl,
//             };
//           }),
//         };

//         setCategory(categoryWithImages);
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//         setCategory(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCategoryData();
//   }, [categoryName]);

//   const filterProducts = () => {
//     const products = category?.products || [];
//     let filteredProducts = products;

//     if (searchTerm) {
//       filteredProducts = filteredProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (priceFilter !== "all") {
//       filteredProducts = filteredProducts.filter((product) => {
//         if (!product || product.price === undefined) return false;
//         const price = parseFloat(product.price.replace("$", ""));
//         if (priceFilter === "low") return price < 20;
//         if (priceFilter === "medium") return price >= 20 && price < 50;
//         return price >= 50;
//       });
//     }

//     return filteredProducts;
//   };

//   if (loading) {
//     return <div className="font-fira text-center text-4xl p-8 m-5">Loading...</div>;
//   }

//   if (!category) {
//     return (
//       <div className="text-center font-fira p-5">
//         <p className="text-3xl">Category not found.</p>
//         <Link to="/all-categories" className="text-blue-500 text-lg">
//           Go to all categories
//         </Link>
//       </div>
//     );
//   }

//   const filteredProducts = filterProducts();

//   const showNotification = (message) => {
//     setNotification(message);
//     setTimeout(() => {
//       setNotification(null);
//     }, 3000);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     showNotification("Product added to cart successfully");
//   };

//   const handleProductDetails = (productId) => {
//     navigate(`/product/${productId}`);
//   }

//   return (
//     <div className="flex">
//       {/* Left-side Category Navigation */}
//       <aside className="w-1/6 bg-[#e1e1e1] p-4 font-merriWeather">
//         <h3 className="text-2xl font-semibold mb-4">Categories</h3>
//         <ul>{/* Add navigation links if needed */}</ul>
//       </aside>

//       {/* Main Content Area */}
//       <div className="w-3/4 p-6">
//         <h2 className="text-3xl font-roboto font-semibold mb-8">
//           Products in {category.name} Category
//         </h2>

//         {/* Search and Filter Bar */}
//         <div className="mb-6 flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Search for products"
//             className="px-4 py-2 border font-merriWeather border-gray-300 rounded-md"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <select
//             className="px-4 py-2 border font-merriWeather font-thin text-gray-500 border-gray-300 rounded-md"
//             value={priceFilter}
//             onChange={(e) => setPriceFilter(e.target.value)}
//           >
//             <option value="all">All Price Ranges</option>
//             <option value="low">Under ₹500</option>
//             <option value="medium">₹500 - ₹1000</option>
//             <option value="high">Over ₹1000</option>
//           </select>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 font-merriWeather">
//           {category.products.length > 0 ? (
//             category.products.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white shadow-lg rounded-lg overflow-hidden"
//               >
//                 <div className="h-40 w-full mb-4 bg-gray-200 rounded-lg">
//                   {product.imageUrl ? (
//                     <img
//                       src={product.imageUrl}
//                       alt={product.imageName || "Product Image"}
//                       className="w-full h-full object-cover rounded-lg"
//                     />
//                   ) : (
//                     <p className="text-center text-gray-500">
//                       No image available
//                     </p>
//                   )}
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold cursor-pointer"
//                    onClick={() => handleProductDetails(product.id)}
//                   >
//                     {product.medicineName || "Unnamed Product"}
//                   </h3>
//                   <p className="text-sm text-orange-500 hover:text-orange-700"> Company:
//                   {product.companyName|| "No price available"}
//                   </p>
//                   <p className="text-sm text-orange-500 hover:text-orange-700"> Price:
//                   ₹{product.price|| "No price available"}
//                   </p>
                 
//                   {/* <p
//                     dangerouslySetInnerHTML={{
//                       __html: product.prodDescription.replace(/\n/g, "<br />"),
//                     }}
//                   ></p> */}
//                   {/* <p className="text-sm font-medium">Quantity: {product.quantity || 'N/A'}</p> */}
//                   <AddToCartButton
//                     text="Add to Cart"
//                     onClick={() => handleAddToCart(product)} // Add the item to the cart
//                   />
//                   {notification && (
//                     <div className="fixed top-1/4 right-5 bg-green-500 text-white text-lg py-4 px-6 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out">
//                       {notification}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No products found in this category.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryDetailPage;
