import React, { useState } from 'react';
import logo2 from '../../Images/logo.png';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import Categories from '../Categories/Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <>
            <header className="header">
                <img src={logo2} alt="Logo" className="h-16 sm:h-32 " />
                <button className="hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <Nav menuOpen={menuOpen} />
            </header>
            <Search />
            <Categories />
        </>
    );
};

export default Header;
