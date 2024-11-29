
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Upload from '../Upload/Upload';
import './Nav.css';


const Nav = () => {
 const navigate = useNavigate();

    const handleLogin = () =>{
      navigate("/login")
    }
    const handleSignup = () =>{
        navigate("/signup")
      }

    
    return (
        <nav className="nav-links">
            <Link to="">Home</Link>
            
            {/* Correctly use Link for the About Us page */}
            <Link to="/about">About Us</Link> {/* This should point to /about route */}

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
            
            <Link to="/contact">Contact Us</Link>

            <Upload />
            <ShoppingCart />

            <div className="flex">
                <button className="hover:font-bold hover:px-[18px] mr-5 px-5" onClick={handleLogin}>Login</button>
                <button className="hover:font-bold hover:px-[18px] mr-5 px-5" onClick={handleSignup}>Sign Up</button>
            </div>
        </nav>
    );
};

export default Nav;

