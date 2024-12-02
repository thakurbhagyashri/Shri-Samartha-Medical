import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Contact Us</h1>

        {/* Company Details */}
        <div className="text-lg text-gray-700 mb-8">
          <p><strong>Company Name:</strong> Shri Samarth Pharmaceuticals</p>
          <p><strong>Address:</strong> 123 Pharma Street, Medic City, Healthville, 56789</p>
          <p><strong>Email:</strong> info@shrisamarth.com</p>
          <p><strong>Phone:</strong> +91-9876543210</p>
        </div>

        {/* Reach Us On */}
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Reach Us On</h2>
        <div className="flex justify-around mt-4">
          {/* Call */}
          <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-800">
            <FaPhone size={36} />
          </a>
          {/* Email */}
          <a href="mailto:info@shrisamarth.com" className="text-red-500 hover:text-red-700">
            <FaEnvelope size={36} />
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
            <FaWhatsapp size={36} />
          </a>
        </div>

        {/* Social Media Links */}
        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">Follow Us</h2>
        <div className="flex justify-around">
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebook size={36} />
          </a>
          {/* Twitter */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={36} />
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin size={36} />
          </a>
        </div>

        {/* Location Section */}
        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">Our Location</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509906!2d-122.42112398468165!3d37.77492967975815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d15b36eb%3A0x9e69c7f7c8abf8c7!2s123%20Pharma%20Street%2C%20San%20Francisco%2C%20CA%2094133%2C%20USA!5e0!3m2!1sen!2sin!4v1677149679677!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
