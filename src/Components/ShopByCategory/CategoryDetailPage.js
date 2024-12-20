import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddToCartButton from '../Button/AddToCart'; // Assuming this button is a separate component
import { MyContext } from '../MyContext';
import { categoriesData } from './categoriesData'; // Mock categories data

const CategoryDetailPage = () => {
    const { categoryName } = useParams(); // Get category name from URL
    const [category, setCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceFilter, setPriceFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(MyContext); // Use the addToCart function from context
    const [notification, setNotification] = useState(''); // Notification state

    useEffect(() => {
        const foundCategory = categoriesData.find(
            (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
        );

        if (foundCategory) {
            setCategory(foundCategory);
        }

        setLoading(false);
    }, [categoryName]);

    // Function to show notification
    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification(null); // Hide notification after 3 seconds
        }, 3000);
    };

    // Handle adding item to cart
    const handleAddToCart = (product) => {
        addToCart(product); // Add item to the global cart using the context
        showNotification('Product added to cart successfully');
    };

    // Filter products based on search term and price filter
    const filterProducts = () => {
        let filteredProducts = category?.products || [];

        // Filter by search term
        if (searchTerm) {
            filteredProducts = filteredProducts.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by price
        if (priceFilter === 'low') {
            filteredProducts = filteredProducts.filter((product) => parseFloat(product.price.replace('$', '')) < 20);
        } else if (priceFilter === 'medium') {
            filteredProducts = filteredProducts.filter((product) => {
                const price = parseFloat(product.price.replace('$', ''));
                return price >= 20 && price < 50;
            });
        } else if (priceFilter === 'high') {
            filteredProducts = filteredProducts.filter((product) => parseFloat(product.price.replace('$', '')) >= 50);
        }

        return filteredProducts;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!category) {
        return <div>Category not found.</div>;
    }

    return (
        <div className="flex">
            {/* Left-side Category Navigation */}
            <aside className="w-1/6 bg-gray-100 p-4 font-merriWeather">
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
                    {filterProducts().length > 0 ? (
                        filterProducts().map((product) => (
                            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
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
                                    <AddToCartButton
                                        text="Add to Cart"
                                        onClick={() => handleAddToCart(product)} // Add the item to the cart
                                    />
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
