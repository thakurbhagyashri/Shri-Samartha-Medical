import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification";
import AdminProfile from "./AdminProfile";
import SideBar from "./SideBar";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [notification, setNotification] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control modal visibility
    const [productToDelete, setProductToDelete] = useState(null); // State to hold the product id to delete

    const [showModal, setShowModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const searchRef = useRef(null);
    const [currentProduct, setCurrentProduct] = useState({
        name: "",
        brand: "",
        categorries: "",
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
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSuggestions([]); // Clear the suggestions
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    // Handle Add Product
    // const handleAddProduct = () => {
    //   navigate("/add");
    // };

    const handleAddProduct = () => {
        navigate("/add");
    };

    // Handle Edit Product

    const handleEditProduct = (product) => {
        setModalType("edit"); // Set modal type to "edit"
        setCurrentProduct({
            ...product,
            image: null, // Reset image to null initially (to handle cases where no new image is uploaded)
        });
        setShowModal(true); // Open the modal
    };

    // Handle Delete Product
    const handleDeleteProduct = async (id) => {

        const token = localStorage.getItem("token");
        if (!token) {
            console.log("No token found. User not authenticated.");
            return;
        }


        try {

            const response = await fetch(`http://localhost:8080/admin/delete-product/${id}`, {
                method: "DELETE", // 
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });


            if (response.ok) {

                setNotification({ message: "Product deleted successfully!", type: "success" });


                setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
            } else {
                const error = await response.json();
                console.error("Error deleting product:", error.message);
                setNotification({ message: "Failed to delete product.", type: "error" });
            }
        } catch (error) {

            console.error("Error in delete API call:", error);
            setNotification({ message: "Failed to delete product.", type: "error" });
        }
    };


    const confirmDelete = (productId) => {
        setProductToDelete(productId);
        setDeleteModal(true);
    };

    // Function to handle the deletion after confirmation
    const handleConfirmDelete = () => {
        if (productToDelete) {
            handleDeleteProduct(productToDelete); // Call the delete function with the product ID
        }
        setDeleteModal(false); // Close the modal
    };

    // Function to close the modal without deleting
    const handleCancelDelete = () => {
        setDeleteModal(false); // Close the modal without deleting
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

    // const handleSaveProduct = async (e) => {
    //   e.preventDefault(); // Prevent default form submission

    //   const token = localStorage.getItem("token");
    //   if (!token) {
    //     alert("No token found. Please log in.");
    //     return;
    //   }

    //   const formData = new FormData();
    //   formData.append(
    //     "productCatlogueDTO",
    //     JSON.stringify({
    //       imageName: currentProduct.imageName || "",
    //   imageType: currentProduct.imageType || "",
    //   quantity: currentProduct.quantity,
    //   price: currentProduct.price,
    //   discount: currentProduct.discount,
    //   companyName: currentProduct.companyName,
    //   medicineName: currentProduct.medicineName,
    //   minAge: currentProduct.minAge,
    //   maxAge: currentProduct.maxAge,
    //   realMrp: currentProduct.realMrp,
    //   discountMrp: currentProduct.discountMrp,
    //   prodDescription: currentProduct.prodDescription,
    //   comments: currentProduct.comments,
    //   categories: currentProduct.categories.split(","),
    //     })
    //   );

    //   if (currentProduct.image) {
    //     formData.append("imageFile", currentProduct.image);
    //   }

    //   console.log("FormData Entries:");
    //   for (let pair of formData.entries()) {
    //     console.log(pair[0], pair[1]);
    //   }

    //   const url =
    //     modalType === "edit"
    //       ? `http://localhost:8080/admin/update-product/${currentProduct.id}`
    //       : "http://localhost:8080/admin/add-product";

    //   try {
    //     const response = await fetch(url, {
    //       method: modalType === "edit" ? "PUT" : "POST",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: formData,
    //     });

    //     if (response.ok) {
    //       alert(modalType === "edit" ? "Product updated successfully!" : "Product added successfully!");
    //       setShowModal(false); // Close modal after successful submission
    //     } else {
    //       const errorText = await response.text();
    //       console.error("Error Response:", errorText);
    //       alert(`Error: ${errorText}`);
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     alert(`Error: ${error.message || "Failed to connect to the server."}`);
    //   }
    // };

    const handleSaveProduct = async (e) => {
        e.preventDefault();

        const productCatalogueDTO = {
            imageName: currentProduct.imageName || "",
            imageType: currentProduct.imageType || "",
            quantity: currentProduct.quantity,
            price: currentProduct.price,
            discount: currentProduct.discount,
            companyName: currentProduct.companyName,
            medicineName: currentProduct.medicineName,
            minAge: currentProduct.minAge,
            maxAge: currentProduct.maxAge,
            realMrp: currentProduct.realMrp,
            discountMrp: currentProduct.discountMrp,
            prodDescription: currentProduct.prodDescription,
            comments: currentProduct.comments,
            categories: Array.isArray(currentProduct.categories)
                ? currentProduct.categories
                : currentProduct.categories.split(","), // Convert categories to an array
        };

        const data = new FormData();
        data.append(
            "productCatlogueDTO",
            new Blob([JSON.stringify(productCatalogueDTO)], {
                type: "application/json",
            })
        );

        if (currentProduct.image) {
            data.append("imageFile", currentProduct.image); // Append new image file if present
        } else if (modalType === "edit" && currentProduct.imageName) {
            // Add empty image if no new image is uploaded but imageName exists
            data.append("imageFile", new Blob([]), currentProduct.imageName);
        }

        const token = localStorage.getItem("token");

        try {
            const response = await fetch(
                modalType === "add"
                    ? `http://localhost:8080/admin/add-product`
                    : `http://localhost:8080/admin/update-product/${currentProduct.id}`,
                {
                    method: modalType === "add" ? "POST" : "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`, // Don't set Content-Type manually
                    },
                    body: data,
                }
            );

            if (response.ok) {
                setNotification({ message: "Product updated successfully!", type: "success" });
                setShowModal(false); // Close modal after successful submission
            } else {
                const errorData = await response.json();
                setNotification({ message: "Failed to update product.", type: "error" });
            }
        } catch (error) {
            alert("Error occurred: " + error.message);
        }
    };

    const convertHTMLToPlainText = (htmlString) => {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = htmlString;
        return tempElement.textContent || tempElement.innerText || "";
    };

    const convertPlainTextToHTML = (plainText) => {
        return plainText
            .split("\n")
            .map((line) => `<p>${line}</p>`) // Wrap lines in <p> tags
            .join("");
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="w-full bg-gray-100 ">
                <div className="flex bg-gray-200 pl-3 py-2 border-b-4 border-[#5ba4a4]">
                    <div className="w-[65%]" ref={searchRef}>
                        <input
                            type="text"
                            placeholder="Search Products"
                            value={keyword}
                            onChange={handleInputChange}
                            className=" text-lg border border-gray-400 pl-5 rounded-xl w-[80%] h-12 focus:outline-none focus:ring focus:ring-green-300 font-fira"
                        />
                        {loading && <div className="loading-spinner">Loading...</div>}
                        {suggestions.length > 0 && (
                            <ul className="absolute bg-white border border-gray-300 rounded-lg mt-12  w-2/4 shadow-lg z-10 max-h-[65vh] overflow-y-auto">
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
                                        <div className="flex">
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
                                                <div className="font-semibold text-gray-600 font-fira">
                                                    {suggestion.medicineName}
                                                </div>
                                                <div className="text-sm text-gray-500 font-custom">
                                                    {suggestion.companyName}
                                                </div>
                                                <div className="text-sm text-gray-500 font-custom ">
                                                    ₹{suggestion.price}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {/* <div className=" w-[40%] flex ml-40">
                        <div className="ml-14 my-1">
                            <button
                                onClick={handleAddProduct}
                                className="bg-green-500 text-white rounded-lg text-lg hover:bg-green-600 transition-all p-2 font-noto"
                            >
                                Add Product
                            </button>
                        </div>

                        <div className="bg-gray-300 ml-3 rounded-3xl flex flex-row p-2 items-end">
                            <div>
                                <p className="text-lg font-fira px-2 py-1">Ashok</p>
                            </div>
                            <div>
                                <img
                                    src="https://www.w3schools.com/w3images/avatar2.png" // Fallback to placeholder image
                                    alt="Profile"
                                    className="h-8 w-8 rounded-full cursor-pointer border-e-black"
                                />
                            </div>
                        </div>

                    </div> */}
                     <div className="ml-14 my-1 mr-5">
                            <button
                                onClick={handleAddProduct}
                                className="bg-green-500 text-white rounded-lg text-lg hover:bg-green-600 transition-all p-2 font-noto"
                            >
                                Add Product
                            </button>
                        </div>
                    <AdminProfile />
                </div>
                {/* Product List */}
                <div className="flex flex-col p-2 font-fira ">
                    {/* Main Content */}
                    <div className="flex-1 overflow-y-auto max-h-[83vh]">
                        <div className="p-2">
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
                                            <h3 className="font-bold text-lg">
                                                {product.medicineName}
                                            </h3>
                                            <h3 className="font-medium text-sm pt-1">
                                                {product.companyName}
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-3 ">
                                                {product.categories && product.categories.join(", ")}
                                            </p>
                                            <p className="text-sm text-white mt-5">
                                                Price ₹{product.price}/-
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-8 font-noto mr-10">
                                        <button
                                            onClick={() => handleEditProduct(product)}
                                            className=" bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500 transition-all"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => confirmDelete(product.id)}
                                            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-all"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50 font-noto">
                        <div className="bg-white rounded-lg shadow-2xl transform transition-transform scale-95 animate-fade-in w-full max-w-4xl">
                            <h2 className="text-2xl font-bold p-6 text-gray-700">
                                {modalType === "add" ? "Add Product" : "Edit Product"}
                            </h2>
                            <div
                                className="overflow-y-auto max-h-[80vh] px-6 pb-6"
                                style={{
                                    scrollbarWidth: "thin",
                                    scrollbarColor: "#D1D5DB #F3F4F6",
                                }}
                            >
                                <form
                                    onSubmit={handleSaveProduct} // Use a single submission handler
                                    className="grid grid-cols-2 gap-6"
                                >
                                    {/* Medicine Name Field */}
                                    <div>
                                        <label
                                            htmlFor="medicineName"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Medicine Name
                                        </label>
                                        <input
                                            type="text"
                                            id="medicineName"
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

                                    {/* Company Name Field */}
                                    <div>
                                        <label
                                            htmlFor="companyName"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="companyName"
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

                                    {/* Price Field */}
                                    <div>
                                        <label
                                            htmlFor="price"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Price
                                        </label>
                                        <input
                                            type="text"
                                            id="price"
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

                                    {/* Discount Field */}
                                    <div>
                                        <label
                                            htmlFor="discount"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Discount
                                        </label>
                                        <input
                                            type="text"
                                            id="discount"
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

                                    {/* Minimum Age Field */}
                                    <div>
                                        <label
                                            htmlFor="minAge"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Minmium Age
                                        </label>
                                        <input
                                            type="number"
                                            id="minAge"
                                            placeholder="Minimum Age"
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

                                    {/* Maximum Age Field */}
                                    <div>
                                        <label
                                            htmlFor="maxAge"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Maximum Age
                                        </label>
                                        <input
                                            type="number"
                                            id="maxAge"
                                            placeholder="Maximum Age"
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

                                    {/* Real Mrp  Field */}
                                    <div>
                                        <label
                                            htmlFor="realMrp"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Real MRP
                                        </label>
                                        <input
                                            type="number"
                                            id="realMrp"
                                            placeholder="Real Mrp"
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

                                    {/* Discount Mrp  Field */}
                                    <div>
                                        <label
                                            htmlFor="discountMrp"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Discount MRP
                                        </label>
                                        <input
                                            type="number"
                                            id="discountMrp"
                                            placeholder="Discount Mrp"
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

                                    {/* Quantity Field */}
                                    <div>
                                        <label
                                            htmlFor="quantity"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Quantity
                                        </label>
                                        <input
                                            type="number"
                                            id="quantity"
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

                                    {/* Categories Field */}
                                    <div>
                                        <label
                                            htmlFor="categories"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Categories
                                        </label>
                                        <input
                                            type="text"
                                            id="categories"
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

                                    {/* Description Field */}
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="prodDescription"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id="prodDescription"
                                            placeholder="Description"
                                            rows="5"
                                            value={convertHTMLToPlainText(
                                                currentProduct.prodDescription
                                            )}
                                            onChange={(e) =>
                                                setCurrentProduct({
                                                    ...currentProduct,
                                                    prodDescription: e.target.value,
                                                })
                                            }
                                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                        ></textarea>
                                    </div>

                                    {/* Comments Field */}
                                    <div>
                                        <label
                                            htmlFor="comments"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Comments
                                        </label>
                                        <input
                                            type="text"
                                            id="comments"
                                            placeholder="Comments"
                                            value={currentProduct.comments}
                                            onChange={(e) =>
                                                setCurrentProduct({
                                                    ...currentProduct,
                                                    comments: e.target.value,
                                                })
                                            }
                                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                        />
                                    </div>

                                    {/* Image Upload Field */}
                                    <div>
                                        <label
                                            htmlFor="imageFile"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Upload Image
                                        </label>
                                        <input
                                            type="file"
                                            id="imageFile"
                                            onChange={(e) =>
                                                setCurrentProduct({
                                                    ...currentProduct,
                                                    image: e.target.files[0],
                                                })
                                            }
                                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                        />
                                    </div>

                                    <div className="col-span-2 mt-6 flex justify-between">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                                        >
                                            {modalType === "add" ? "Save" : "Update"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                {deleteModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-fira">
                        <div className="bg-white p-6 rounded-lg w-1/3">
                            <h2 className="text-lg text-black mb-4">Are you sure you want to <span className="text-red-600"> delete</span> this product?</h2>
                            <div className="flex justify-between">
                                <button
                                    onClick={handleConfirmDelete}
                                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-all"
                                >
                                    Yes, Delete
                                </button>
                                <button
                                    onClick={handleCancelDelete}
                                    className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {notification && (
                    <Notification
                        message={notification.message}
                        type={notification.type}
                        onClose={() => setNotification(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default AllProducts;
