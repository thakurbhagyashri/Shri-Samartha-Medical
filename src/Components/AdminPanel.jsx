import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control modal visibility
  const [productToDelete, setProductToDelete] = useState(null); // State to hold the product id to delete

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    quantity: "",
    discount: "",
    companyName: "",
    medicineName: "",
    minAge: "",
    maxAge: "",
    realMrp: "",
    discountMrp: "",
    prodDescription: "",
    comments: "",
    image: null,
  });

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (keyword) {
        fetchSuggestions(keyword);
      } else {
        setSuggestions([]); // Clear suggestions when input is empty
      }
    }, 300); // 300ms delay for debounce

    return () => clearTimeout(debounceTimer);
  }, [keyword]);

  const fetchSuggestions = async (searchKeyword) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Authentication token not found.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/product/keyword?keyword=${searchKeyword}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the JWT token
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch product suggestions");
      }

      const data = await response.json();
      setSuggestions(data); // Assuming data is an array of product objects
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleSuggestionClick = (productId) => {
    // Navigate to the product detail page and pass the product data
    navigate(`/product/${productId}`);
    setKeyword(""); // Clear the search input
    setSuggestions([]); // Clear the suggestions
  };

  const handleMouseEnter = (index) => {
    setHighlightedIndex(index); // Set the hovered suggestion index
  };

  const handleMouseLeave = () => {
    setHighlightedIndex(-1); // Reset the highlighted index
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on cleanup
    };
  }, [showModal]);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      if (!token) {
        alert("No token found. Please log in.");
        return;
      }

      const url = "http://localhost:8080/product/";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });

        if (response.ok) {
          const result = await response.json();
          setProducts(result);
          console.log(result);
          // Assuming response contains the products list
        } else {
          const error = await response.json();
          alert(`Error fetching products: ${error.message || "Unknown error"}`);
        }
      } catch (error) {
        alert(`Error: ${error.message || "Failed to connect to the server."}`);
      }
    };

    fetchProducts();
  }, []);

  // Handle Add Product
  const handleAddProduct = () => {
    navigate("/add");
  };

  // Handle Edit Product

  const handleEditProduct = (product) => {
    setModalType("edit"); // Set the modal type to edit
    setCurrentProduct({
      ...product, // Load the product data into the modal
      categories: product.categories ? product.categories.join(",") : "", // Convert array to string for input field
    });
    setShowModal(true); // Open the modal
  };

  // Handle Delete Product
  const handleDeleteProduct = async (id) => {
    const token = localStorage.getItem("token"); // Retrieve token from local storage
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) {
      return; // Do nothing if the user cancels the delete action
    }

    try {
      const response = await fetch(
        `http://localhost:8080/admin/delete-product/${id}`,
        {
          method: "DELETE", // Using DELETE method for deleting a product
          headers: {
            Authorization: `Bearer ${token}`, // Send token in Authorization header
          },
        }
      );

      if (response.ok) {
        alert("Product deleted successfully!");
        // Update the products list by filtering out the deleted product
        setProducts(products.filter((product) => product.id !== id));
      } else {
        const error = await response.json();
        alert(`Error deleting product: ${error.message || "Unknown error"}`);
      }
    } catch (error) {
      alert(`Error: ${error.message || "Failed to connect to the server."}`);
    }
  };

  // Handle Save Product (Add/Edit)
  // const handleSaveProduct = () => {
  //   if (modalType === "add") {
  //     const newProduct = { ...currentProduct, id: products.length + 1 };
  //     setProducts([...products, newProduct]);
  //   } else {
  //     const updatedProducts = products.map((product) =>
  //       product.id === currentProduct.id ? currentProduct : product
  //     );
  //     setProducts(updatedProducts);
  //   }
  //   setShowModal(false);
  // };

  const handleSaveProduct = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append(
      "productCatlogueDTO",
      JSON.stringify({
        medicineName: currentProduct.medicineName || "",
        companyName: currentProduct.companyName || "",
        categories: currentProduct.categories
          ? currentProduct.categories.split(",")
          : [], // Convert string back to array
        price: currentProduct.price || 0,
        quantity: currentProduct.quantity || 0,
        discount: currentProduct.discount || 0,
        minAge: currentProduct.minAge || 0,
        maxAge: currentProduct.maxAge || 0,
        realMrp: currentProduct.realMrp || 0,
        discountMrp: currentProduct.discountMrp || 0,
        prodDescription: currentProduct.prodDescription || "",
        comments: currentProduct.comments || "",
      })
    );

    if (currentProduct.image) {
      formData.append("imageFile", currentProduct.image);
    }

    const url =
      modalType === "edit"
        ? `http://localhost:8080/admin/update-product/${currentProduct.id}`
        : "http://localhost:8080/admin/add-product";

    try {
      const response = await fetch(url, {
        method: modalType === "edit" ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        if (modalType === "edit") {
          // Update the product in the local state
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product.id === currentProduct.id ? result : product
            )
          );
          alert("Product updated successfully!");
        } else {
          // Add the new product to the local state
          setProducts((prevProducts) => [...prevProducts, result]);
          alert("Product added successfully!");
        }
        setShowModal(false); // Close the modal
      } else {
        const errorText = await response.text(); // Use text in case response is not JSON
        console.error("Error response:", errorText);
        alert(`Error: ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error.message || "Failed to connect to the server."}`);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-custom">
      {/* Sidebar */}
      <aside className="w-1/5 bg-[#e1e1e1] p-4 font-merriWeather">
        <h1 className="text-2xl font-semibold mb-4  pl-4">
          Shri Samartha Pharmaceuticals
        </h1>
        <ul className="ml-5 ">
          <li className="text-xl text-gray-800 hover:text-blue-500 p-3">
            Dashboard
          </li>
          <li className="text-xl text-gray-800 hover:text-blue-500 p-3">
            Products
          </li>
          <li className="text-xl text-gray-800 hover:text-blue-500 p-3">
            Orders
          </li>
          <li className="text-xl text-gray-800 hover:text-blue-500 p-3">
            Employee
          </li>
        </ul>
        <div className="text-xl text-gray-800 hover:text-blue-500 p-8 my-4">
          Logout
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 relative">
        {/* Header */}
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search Products"
            value={keyword}
            onChange={handleInputChange}
            className="border border-gray-400 pl-5 rounded-xl w-[45%] h-12 focus:outline-none focus:ring focus:ring-green-300"
          />
          {loading && <div className="loading-spinner">Loading...</div>}
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-2/4 shadow-lg z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={suggestion.id}
                  className={`px-4 py-2 cursor-pointer ${highlightedIndex === index
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                    }`}
                  onClick={() => handleSuggestionClick(suggestion.id)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className='flex'>
                    <div className="mx-1 w-/6">
                      {suggestion.imageData ? (
                        <img
                          src={`data:${suggestion.imageType};base64,${suggestion.imageData}`}
                          alt={suggestion.imageName}
                          className="w-16 h-16 rounded-md object-cover"
                        />
                      ) : (
                        <div className="placeholder w-16 h-16 bg-gray-300 rounded-md flex items-center text-sm justify-center text-gray-500">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="ml-5">

                      <div className="font-semibold text-gray-800 font-fira">{suggestion.medicineName}</div>
                      <div className="text-sm text-gray-500 font-custom">{suggestion.companyName}</div>
                      <div className="text-sm text-gray-500 font-custom ">₹{suggestion.price}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white px-2 ml-96 py-2 justify-items-end rounded-lg hover:bg-green-600 transition-all"
          >
            ADD PRODUCT
          </button>
        </div>

        {/* Product List */}
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 mb-4 mx-16"
            >
              <div className="flex space-x-10 ">
                <div className=" bg-gray-300 rounded">
                  {product.imageData ? (
                    <img
                      src={`data:${product.imageType};base64,${product.imageData}`}
                      alt={product.imageName}
                      className="w-40 h-40 rounded-md object-cover"
                    />
                  ) : (
                    <div className="placeholder w-40 h-40 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
                      Image Placeholder
                    </div>
                  )}
                </div>
                <div className="mt-3">
                  <h3 className="font-bold text-lg">{product.medicineName}</h3>
                  <h3 className="font-medium text-sm pt-1">{product.companyName}</h3>
                  <p className="text-sm text-gray-600 pt-1">{product.brand}</p>
                  <p className="text-sm text-gray-600 ">
                    {" "}
                    {product.categories && product.categories.join(", ")}
                  </p>
                  <p className=" text-sm text-gray-800 mt-5">
                    Price ₹{product.price}/-
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500 transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Add/Edit */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
            <div
              className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform scale-95 animate-fade-in w-full max-w-4xl" // Increased form width
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                {modalType === "add" ? "Add Product" : "Edit Product"}
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Categories"
                    value={currentProduct.categories}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        categories: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Price"
                    value={currentProduct.price}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        price: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>

                {/* Row 3: Two fields */}
                <div>
                  <input
                    type="number"
                    placeholder="Quantity"
                    value={currentProduct.quantity}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        quantity: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Discount"
                    value={currentProduct.discount}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        discount: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>

                {/* Row 4: Two fields */}
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={currentProduct.companyName}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        companyName: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Medicine Name"
                    value={currentProduct.medicineName}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        medicineName: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>

                {/* Row 5: Two fields */}
                <div>
                  <input
                    type="number"
                    placeholder="Min Age"
                    value={currentProduct.minAge}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        minAge: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Max Age"
                    value={currentProduct.maxAge}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        maxAge: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>

                {/* Row 6: Two fields */}
                <div>
                  <input
                    type="text"
                    placeholder="Real MRP"
                    value={currentProduct.realMrp}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        realMrp: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Discounted MRP"
                    value={currentProduct.discountMrp}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        discountMrp: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>

                {/* Row 7: Description & Comments */}
                <div className="col-span-2">
                  <textarea
                    placeholder="Description"
                    value={currentProduct.prodDescription}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        prodDescription: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <textarea
                    placeholder="Comments"
                    value={currentProduct.comments}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        comments: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  ></textarea>
                </div>

                {/* Image Upload */}
                <div className="col-span-2">
                  <input
                    type="file"
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        image: e.target.files[0],
                      })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProduct}
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                >
                  {modalType === "add" ? "Save" : "Update"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
