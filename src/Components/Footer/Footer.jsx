import React from 'react';
import { Link } from 'react-router-dom';
import GooglePay from '../../Images/GooglePay.png';
import Paytm from '../../Images/Paytm.png';
import Phonpe from '../../Images/PhonePe.png';
import Simpl from '../../Images/Simpl.png';
import Visa from '../../Images/Visa.png';
import Call from "../Footer/Call.svg";
import facebook from "../Footer/facebook.svg";
import Instagram from "../Footer/Instagram.svg";
import Linkedin from "../Footer/Linkedin.svg";
import twitter from "../Footer/Twitter.svg";
import WhatsApp from "../Footer/WhatsApp.svg";
import YouTube from "../Footer/Youtube.svg";
import './Footer.css'; // Assuming you will create a separate CSS file for the footer

const Footer = () => {
  return (
    <footer className="footer font-custom bg-[#eef4ff]">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-section">
          <h3 className='font-bold'>COMPANY</h3>
          <ul>
            <li><Link to="/about">About Pharmaceutical</Link></li>
            <li><Link to="/contact">Customer Speak</Link></li>
            <li><Link to="/news">In the News</Link></li>
            <li><Link to="/careers">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className="footer-section">
          <h3 className='font-bold'>OUR POLOCIES</h3>
          <ul>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/fees-policy">Fees and Payments Policy</Link></li>
            <li><Link to="/shipping-policy">Shipping and Delivery Policy</Link></li>
            <li><Link to="/return">Return, Refund and Cancellation Policy</Link></li>
            <li><Link to="/editorial-policy">Editorial Policy</Link></li>
          </ul>
        </div>

        {/* Shopping Section */}
        <div className="footer-section">
          <h3>SHOPPING</h3>
          <ul>
            <li><a href="#">Browse by A-Z</a></li>
            <li><a href="#">Browse by Manufacturers</a></li>
            <li><a href="#">Health Articles</a></li>
            <li><a href="#">Offers / Coupons</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Popular Categories Section */}
        <div className="footer-section">
          <h3>POPULAR CATEGORIES</h3>
          <ul>
            <li><a href="#">Fitness</a></li>
            <li><a href="#">Devices</a></li>
            <li><a href="#">Personal Care</a></li>
            <li><a href="#">Ayurveda</a></li>
            <li><a href="#">Homeopathy</a></li>
            <li><a href="#">Treatments</a></li>
            <li><a href="#">Sexual Wellness</a></li>
            <li><a href="#">Surgicals</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>SOCIAL</h3>
          <ul>
            <li><a href="#">Patients Alike</a></li>
            <li className="flex flex-row">
            <img
                            src={facebook}
                            alt="Facebook"
                            style={{ height:"10%", width: "10%" }}
                            className="mr-2"
                        />
              <a href="#">Facebook</a></li>

            <li className="flex flex-row">
            <img
                            src={twitter}
                            alt="Twitter"
                            style={{ height:"10%", width: "10%" }}
                            className="mr-2"
                        />
              <a href="#">Twitter</a></li>


            <li className="flex flex-row">
            <img
                            src={Linkedin}
                            alt="LinkedIn"
                            style={{ height:"10%", width: "10%" }}
                            className="mr-2"
                        />
              <a href="#">LinkedIn</a></li>


            <li className="flex flex-row">
            <img
                            src={YouTube}
                            alt="YouTube"
                            style={{ height:"10%", width: "10%" }}
                            className="mr-2"
                        />
              <a href="#">YouTube</a></li>


            <li className="flex flex-row">
            <img
                            src={Instagram}
                            alt="Instagram"
                            style={{ height:"10%", width: "10%" }}
                            className="mr-2"
                        />
              <a href="#">Instagram</a></li><li className="flex flex-row">

            <img
                            src={WhatsApp}
                            alt="WhatsApp"
                            style={{ height:"10%", width: "10%" }}
                            className="mr-2"
                        />
              <a href="#">WhatsApp</a></li><li className="flex flex-row">

            <img
                            src={Call}
                            alt="Call"
                            style={{ height:"10%", width: "10%" }}
                            className="mr-2 bg-slate-300 rounded-md"
                        />
              <a href="#">Call Now</a></li>
          
          </ul>
        </div>
      </div>

            {/* Our Payment Partners Section */}
        <div className="payment-partners">
            <h2>Our Payment Partners</h2>
            <div className="payment-logos">
            <img src={GooglePay} alt="Google Pay" />
            <img src={Phonpe} alt="PhonePe"/>
            <img src={Paytm} alt="Paytm" /> 
            <img src={Simpl} alt="Simpl" />
            <img src={Visa} alt="Visa" />
            {/* Add more logos as required */}
            </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Shri Samarth Pharmaceuticals. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;