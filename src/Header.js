import React, { useState } from 'react';
import logo2 from './Images/logo.png';
import ScrollImages from './Components/ScrollImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faFileArrowUp, faShoppingCart, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import FeatureBrands from './Components/FeaturedBrand';
import Dealoftheday from './Components/DealoftheDay';
import Cart from './Components/Cart/Cart';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className="header">
                <img src={logo2} alt="Logo" className="h-16 sm:h-20 " />
                <button className="hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <div className="nav-item-with-submenu">
                        <a href="#services">Services <FontAwesomeIcon icon={faAngleDown} /></a>
                        <div className="submenu">
                            <a href="#medicine">Medicine</a>
                            <a href="#wellness">Wellness</a>
                            <a href="#labtest">Lab Test</a>
                            <a href="#beauty">Beauty</a>
                            <a href="#healthcorner">Health Corner</a>
                        </div>
                    </div>
                    <a href="#contact">Contact Us</a>
                    {/* File Upload Option */}
                    <div className="upload">
                        <label htmlFor="file-upload" className="upload-label">
                            <FontAwesomeIcon icon={faFileArrowUp} className="icon" /> Upload
                        </label>
                        <input type="file" id="file-upload" className="file-input" />
                    </div>

                    {/* Cart Icon with Badge */}
                    <div className="cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                        <span className="cart-badge">3</span>
                    </div>
                
                <div className="flex">
                    <button className="hover:font-bold hover:px-[18px] mr-5 px-5">Login</button>
                    <button className="button">Sign Up</button>
                </div>
                </nav>
            </header>  
            <div className={`search-bar-container ${menuOpen ? 'shift-down' : ''}`}>
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="category">
                <a href="#homeopathy">Homeopathy</a>
                <a href="#fitness">Fitness</a>
                <a href="#personal-care">Personal Care</a>
                <a href="#ayurvedic">Ayurvedic</a>
                <a href="#skin-care">Skin Care</a>
                <a href="#senior-care">Senior Care</a>
                <a href="#other">Other</a>
            </div>
            <ScrollImages />
            <FeatureBrands/>
            <h2 className="deal-of-the-day">
                Deal Of The Day
            </h2>
            <Dealoftheday/>
            <h2 className="w-[638px] ml-[36px] font-bold ">
                Shop By Category
            </h2>
            <Cart/>
        </>
    );
};

export default Header;
