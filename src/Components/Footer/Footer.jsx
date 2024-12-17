import React from 'react';
import { Link } from 'react-router-dom';
import GooglePay from '../../Images/GooglePay.png';
import Paytm from '../../Images/paytm.png';
import Phonpe from '../../Images/phonepe.png';
import Simpl from '../../Images/Simpl.png';
import Visa from '../../Images/Visa.png';
import Call from "../Footer/Call.svg";
import Facebook from "../Footer/facebook.svg";
import Insta from "../Footer/Instagram.svg";
import LinkedIn from "../Footer/Linkedin.svg";
import Twitter from "../Footer/Twitter.svg";
import WhatsApp from "../Footer/WhatsApp.svg";
import Youtube from "../Footer/Youtube.svg";
import './Footer.css'; // Assuming you will create a separate CSS file for the footer

const Footer = () => {

  const phoneNumber = '+1234567890';

  return (
    <footer className="footer font-custom bg-[#eef4ff]">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-section">
          <h3 className='font-bold'>COMPANY</h3>
          <ul  className="space-y-2">
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
          <ul  className="space-y-3">
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/fees-policy">Fees and Payments Policies</Link></li>
            <li><Link to="/shipping-policy">Shipping and Delivery Policies</Link></li>
            <li><Link to="/return">Return, Refund and Cancellation Policies</Link></li>
            <li><Link to="/editorial-policy">Editorial Policies</Link></li>
          </ul>
        </div>

        {/* Shopping Section */}
        <div className="footer-section">
          <h3>SHOPPING</h3>
          <ul className="space-y-2">
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
          <ul className="space-y-2">
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
          <ul className="space-y-3">
            <li><a href="#">Patients Alike</a></li>

            <li className=" flex flex-row">
              <img src={Facebook} alt="Facebook"
                style={{ height: '10%', width: '10%', objectFit: 'cover' }}
              />
              <a href="#" className="ml-2"> Facebook</a>
            </li>

            <li className=" flex flex-row">
              <img src={Twitter} alt="Twitter"
                style={{ height: '10%', width: '10%', objectFit: 'cover' }}
                className="bg-white rounded-sm"
              />
              <a href="#" className="ml-2"> Twitter</a>
            </li>

            <li className=" flex flex-row">
              <img src={LinkedIn} alt="LinkedIn"
                style={{ height: '10%', width: '10%', objectFit: 'cover' }}
              />
              <a href="#" className="ml-2"> LinkedIn</a>
            </li>

            <li className=" flex flex-row">
              <img src={Youtube} alt="YouTube"
                style={{ height: '10%', width: '10%', objectFit: 'cover' }}
              />
              <a href="#" className="ml-2"> YouTube</a>
            </li>

            <li className=" flex flex-row">
              <img src={Insta} alt="Instagram"
                style={{ height: '10%', width: '10%', objectFit: 'cover' }}
              />
              <a href="#" className="ml-2"> Instagram</a>
            </li>

            <li className=" flex flex-row">
              <img src={WhatsApp} alt="WhatsApp"
                style={{ height: '10%', width: '10%', objectFit: 'cover' }}
              />
              <a href="https://api.whatsapp.com/send?phone=9876543210" target="_blank" className="ml-2"> WhatsApp</a>
            </li>

            <li className=" flex flex-row">
            <img src={Call} alt="Call"
                style={{ height: '10%', width: '10%', objectFit: 'cover' }}
                className="bg-white rounded-md"
              />
              <a href={`tel:${phoneNumber}`}  className="ml-2">
              Call Now
            </a>
            </li>
            
            {/* <li><a href="#">Refer & Earn</a></li> */}
          </ul>
        </div>
      </div>

      {/* Our Payment Partners Section */}
      <div className="payment-partners">
        <h2>Our Payment Partners</h2>
        <div className="payment-logos">
          <img src={GooglePay} alt="Google Pay" />
          <img src={Phonpe} alt="PhonePe" />
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