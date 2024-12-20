import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoriesData } from './categoriesData'; // Mock categories data

const CategoryPage = () => {
  const [categories] = useState(categoriesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  // Filter categories based on search term and price filter
  const filterCategories = () => {
    let filteredCategories = categories;

    // Filter by search term
    if (searchTerm) {
      filteredCategories = filteredCategories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredCategories;
  };

  return (
    <div className="flex">
      {/* Left-side Category Navigation */}
      <div className="w-1/6 bg-gray-100 p-4">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="mb-2">
              <Link
                to={`/category/${category.name}`}  // Redirect to Category Detail Page
                className="text-lg text-gray-800 hover:text-blue-500"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 p-6">
        <h2 className="text-3xl font-semibold mb-8">All Categories</h2>

        {/* Search and Filter Bar */}
        <div className="mb-6 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for categories"
            className="px-4 py-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-md"
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
          {filterCategories().map((category) => (
            <div key={category.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Link to={`/category/${category.name}`} className="block p-4">
                  <div className="h-40 w-full mb-4 bg-gray-200 rounded-lg">
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
