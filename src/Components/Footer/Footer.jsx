import React, { useState } from "react";
import { Link } from "react-router-dom";

import Call from "../Footer/Call.svg";
import facebook from "../Footer/facebook.svg";
import Instagram from "../Footer/Instagram.svg";
import Linkedin from "../Footer/Linkedin.svg";
import twitter from "../Footer/Twitter.svg";
import WhatsApp from "../Footer/WhatsApp.svg";
import YouTube from "../Footer/Youtube.svg";
import "./Footer.css"; // Assuming you will create a separate CSS file for the footer

const Footer = () => {
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);

  const toggleChatPopup = () => {
    setIsChatPopupOpen(!isChatPopupOpen);
  };

  return (
    <footer className="footer font-fira bg-[#eef4ff] ">
      <div className="footer-container ">
        {/* Company Section */}
        <div className="footer-section ">
          <h3 className="font-bold  hover:underline hover:text-2xl text-blue-500 ">
            COMPANY
          </h3>
          <ul>
            <li className="hover:font-bold">
              <Link to="/about">About Pharmaceutical</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/contact">Customer Speak</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/news">In the News</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/careers">Career</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className="footer-section">
          <h3 className="font-bold  hover:underline hover:text-2xl text-blue-500">
            OUR POLICIES
          </h3>
          <ul>
            <li className="hover:font-bold">
              <Link to="/terms">Terms and Conditions</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/fees-policy">Fees and Payments Policies</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/shipping-policy">Shipping and Delivery Policies</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/return">Return, Refund and Cancellation Policies</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/editorial-policy">Editorial Policies</Link>
            </li>
          </ul>
        </div>

        {/* Shopping Section */}
        <div className="footer-section">
          <h3 className=" hover:underline hover:text-2xl text-blue-500 ">
            SHOPPING
          </h3>
          <ul>
            <li className="hover:font-bold">
              <a href="#">Browse by A-Z</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Browse by Manufacturers</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Health Articles</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Offers / Coupons</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Popular Categories Section */}
        <div className="footer-section">
          <h3 className=" hover:underline hover:text-2xl text-blue-500">
            POPULAR CATEGORIES
          </h3>
          <ul>
            <li className="hover:font-bold">
              <a href="#">Fitness</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Devices</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Personal Care</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Ayurveda</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Homeopathy</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Treatments</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Sexual Wellness</a>
            </li>
            <li className="hover:font-bold">
              <a href="#">Surgicals</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3 className="hover:underline hover:text-2xl text-blue-500 ">
            SOCIAL
          </h3>
          <ul>
            <li>
              <a href="#">Patients Alike</a>
            </li>
            <li className="flex flex-row">
              <img
                src={facebook}
                alt="Facebook"
                style={{ height: "10%", width: "10%" }}
                className="mr-2"
              />
              <a href="https://facebook.com" className="hover:font-bold">
                Facebook
              </a>
            </li>

            <li className="flex flex-row">
              <img
                src={twitter}
                alt="Twitter"
                style={{ height: "10%", width: "10%" }}
                className="mr-2"
              />
              <a href="https://twitter.com" className="hover:font-bold">
                Twitter
              </a>
            </li>

            <li className="flex flex-row">
              <img
                src={Linkedin}
                alt="LinkedIn"
                style={{ height: "10%", width: "10%" }}
                className="mr-2"
              />
              <a href="https://linkedin.com" className="hover:font-bold">
                LinkedIn
              </a>
            </li>

            <li className="flex flex-row">
              <img
                src={YouTube}
                alt="YouTube"
                style={{ height: "10%", width: "10%" }}
                className="mr-2"
              />
              <a href="https://youtube.com" className="hover:font-bold">
                YouTube
              </a>
            </li>

            <li className="flex flex-row">
              <img
                src={Instagram}
                alt="Instagram"
                style={{ height: "10%", width: "10%" }}
                className="mr-2"
              />
              <a href="https://instagram.com" className="hover:font-bold">
                Instagram
              </a>
            </li>
            <li className="flex flex-row">
              <img
                src={WhatsApp}
                alt="WhatsApp"
                style={{ height: "10%", width: "10%" }}
                className="mr-2 cursor-pointer"
                onClick={toggleChatPopup} // Toggle the popup on click
              />
              <span
                className="hover:font-bold cursor-pointer"
                onClick={toggleChatPopup}
              >
                WhatsApp
              </span>
            </li>
            <li className="flex flex-row ">
              <img
                src={Call}
                alt="Call"
                style={{ height: "10%", width: "10%" }}
                className="mr-2 bg-slate-300 rounded-md"
              />
              <a href="tel:+919876543210" className="hover:font-bold">
                Call Now
              </a>
            </li>
          </ul>
        </div>  
      </div>
      {/* Our Payment Partners Section */}
      <div className="payment-partners">
        <h2 className="payment-partners-title">Our Payment Partners</h2>

        <div className="payment-logos">
          <a
            href="https://pay.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="payment-icon"
          >
            <i
              className="fab fa-google-pay"
              style={{ fontSize: "48px", color: "#4285F4" }}
            ></i>
            <span className="tooltip">Google Pay</span>
          </a>
          <a
            href="https://www.phonepe.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="payment-icon"
          >
            <i
              className="fab fa-cc-mastercard"
              style={{ fontSize: "48px", color: "#2196F3" }}
            ></i>
            <span className="tooltip">PhonePe</span>
          </a>
          <a
            href="https://paytm.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="payment-icon"
          >
            <i
              className="fab fa-cc-visa"
              style={{ fontSize: "48px", color: "#00B2A9" }}
            ></i>
            <span className="tooltip">Paytm</span>
          </a>
          <a
            href="https://www.getsimpl.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="payment-icon"
          >
            <i
              className="fas fa-credit-card"
              style={{ fontSize: "48px", color: "#00C4CC" }}
            ></i>
            <span className="tooltip ">Simpl</span>
          </a>
          <a
            href="https://www.visa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="payment-icon"
          >
            <i
              className="fab fa-cc-visa"
              style={{ fontSize: "48px", color: "#1A1F71" }}
            ></i>
            <span className="tooltip">Visa</span>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright flex flex-row justify-between">
        <p className="text-left ml-5 ">
          &copy; {new Date().getFullYear()} Shri Samarth Pharmaceuticals. All
          rights reserved.
        </p>
        <p className="text-right mr-5 text-sm">
          Created by <a href="https://sinfolix.com/"  target="_blank" className="text-blue-500"> Sinfolix Technologies</a>
        </p>
      </div>
      {isChatPopupOpen && (
        <div className="fixed bottom-20 right-4 bg-white p-4 rounded-lg shadow-lg w-64 z-50">
          <p className="text-sm text-gray-700">
            Hi! 👋 Need help? Chat with us on{" "}
            <a
              href="https://wa.me/919876543210?text=Hi%20there!%20I%20need%20help."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 font-bold hover:underline"
            >
              WhatsApp
            </a>
            .
          </p>
          <button
            onClick={toggleChatPopup}
            className="mt-2 text-red-500 text-sm hover:underline"
          >
            Close
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
