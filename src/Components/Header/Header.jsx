import React, { useState } from 'react';
import logo2 from '../../Images/logo.png';
import Nav from '../Nav/Nav';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header bg-gradient-to-r from-blue-500 to-green-500">
        <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
          {/* Logo */}
          <div className="logo-container">
            <img
              src={logo2}
              alt="Logo"
              className="logo transition-transform transform hover:scale-105 logo-animation"
            />
          </div>

          {/* Hamburger Icon */}
          <button
            className="hamburger text-white text-3xl lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Navigation */}
          <Nav menuOpen={menuOpen} className="hidden lg:flex space-x-8 text-white" />

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
              menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleMenu}
          >
            <Nav menuOpen={menuOpen} className="bg-white h-full w-3/4 p-6 absolute top-0 right-0 z-50" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

