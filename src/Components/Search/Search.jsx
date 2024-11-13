// src/Components/Search.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

const Search = ({ menuOpen }) => {
    return (
        <div className={`search-bar-container ${menuOpen ? "shift-down" : ""}`}>
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
};

export default Search;
