import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = ({ menuOpen }) => {
    const [keyword, setKeyword] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1); // Track highlighted suggestion
    const navigate = useNavigate();
    const searchRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSuggestions([]); // Clear the suggestions
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    // Debounced API call to reduce request frequency

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (keyword) {
                fetchSuggestions(keyword);
            } else {
                setSuggestions([]);        // Clear suggestions when input is empty
            }
        }, 300);                           // 300ms delay for debounce

        return () => clearTimeout(debounceTimer);
    }, [keyword]);


    const fetchSuggestions = async (searchKeyword) => {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Authentication token not found.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:8080/product/keyword?keyword=${searchKeyword}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`, // Include the JWT token
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch product suggestions');
            }

            const data = await response.json();
            setSuggestions(data); // Assuming data is an array of product objects
        } catch (error) {
            console.error('Error fetching suggestions:', error);
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
        setKeyword('');                       // Clear the search input
        setSuggestions([]);                   // Clear the suggestions
    };


    const handleMouseEnter = (index) => {
        setHighlightedIndex(index);           // Set the hovered suggestion index
    };


    const handleMouseLeave = () => {
        setHighlightedIndex(-1);              // Reset the highlighted index
    };



    return (
        <div
            className={`search-bar-container ${menuOpen ? 'shift-down' : ''}`} ref={searchRef} >
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={keyword}
                onChange={handleInputChange}
            />
            <button className="search-button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
            {loading && <div className="loading-spinner">Loading...</div>}
            {suggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-2/4 shadow-lg z-10">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={suggestion.id}
                            className={`px-4 py-2 cursor-pointer ${highlightedIndex === index ? 'bg-gray-200' : 'hover:bg-gray-100'
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

                                    <div className="font-semibold text-gray-800 font-noto">{suggestion.medicineName}</div>
                                    <div className="text-sm text-gray-500 font-noto">{suggestion.companyName}</div>
                                    <div className="text-sm text-gray-500 font-noto ">₹{suggestion.price}</div>
                                </div>
                                <div className="ml-5">
                                    <div className="text-sm text-gray-500 font-noto ">{suggestion.comments}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;