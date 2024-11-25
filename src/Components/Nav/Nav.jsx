import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Upload from '../Upload/Upload';
import './Nav.css';

const Nav = () => {
    const navigate = useNavigate();
  

    const handlSignupClick = () => {
        navigate('/signup'); // Redirect to the login page
      };
    
    const handleLoginClick = () => {
        navigate('/login'); // Redirect to the login page
      };
    
    return (
        <nav className={`nav-links `}>
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
            <Upload />
            <ShoppingCart />
        
            <div className="flex">
                <button
                onClick={handleLoginClick} 
                className="hover:font-bold hover:px-[18px] mr-5 px-5">Login</button>
                
                <button
                onClick={handlSignupClick} 
                className="hover:font-bold hover:px-[18px] mr-5 px-5">Sign Up</button>
            </div>
            
        </nav>
    );
};

export default Nav;
