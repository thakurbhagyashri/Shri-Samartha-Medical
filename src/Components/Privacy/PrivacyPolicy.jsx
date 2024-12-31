import React from "react";
import { FaCookieBite, FaEnvelope, FaLock, FaShieldAlt, FaUserSecret } from "react-icons/fa";
import './privacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 font-merriWeather min-h-screen p-12">
      {/* Header Section */}
      <header className="text-center mb-16 font-merriWeather">
        <h1 className=" parivacy-policy ">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          Understand how we protect your privacy and handle your personal data.
        </p>
      </header>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section 1: Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <FaShieldAlt className="text-[#069b9b] text-4xl" />
            <h2 className="text-3xl font-semibold text-gray-800">At Sinfolix</h2>
          </div>
          <p className="text-lg text-gray-700 leading-7">
            At Sinfolix, we understand the importance of your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our services.
          </p>
        </div>

        {/* Section 2: Information Collection */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <FaUserSecret className="text-[#069b9b] text-4xl" />
            <h2 className="text-3xl font-semibold text-gray-800">Information Collection and Use</h2>
          </div>
          <p className="text-lg text-gray-700 leading-7">
            We may collect personal information such as your name, email address, and phone number when you use our services. This helps us provide a personalized experience and improve our services.
          </p>
        </div>

        {/* Section 3: Information Sharing */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <FaLock className="text-[#069b9b] text-4xl" />
            <h2 className="text-3xl font-semibold text-gray-800">Information Sharing and Disclosure</h2>
          </div>
          <p className="text-lg text-gray-700 leading-7">
            We do not sell or rent your personal information to third parties. We may share your information with trusted partners who help us provide our services or when required by law.
          </p>
        </div>

        {/* Section 4: Data Security */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <FaShieldAlt className="text-[#069b9b] text-4xl" />
            <h2 className="text-3xl font-semibold text-gray-800">Data Security</h2>
          </div>
          <p className="text-lg text-gray-700 leading-7">
            We implement security measures to protect your personal information. These include encryption, firewalls, and secure storage to prevent unauthorized access and use.
          </p>
        </div>

        {/* Section 5: Cookies */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <FaCookieBite className="text-[#069b9b] text-4xl" />
            <h2 className="text-3xl font-semibold text-gray-800">Cookies Policy</h2>
          </div>
          <p className="text-lg text-gray-700 leading-7">
            We use cookies to improve your experience. These cookies store information about your preferences, which help us personalize your visits to our website.
          </p>
        </div>

        {/* Section 6: Changes to Privacy Policy */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <FaLock className="text-[#069b9b] text-4xl" />
            <h2 className="text-3xl font-semibold text-gray-800">Changes to This Privacy Policy</h2>
          </div>
          <p className="text-lg text-gray-700 leading-7">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </div>

        {/* Section 7: Contact Us */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center space-x-4 mb-6">
            <FaEnvelope className="text-[#069b9b] text-4xl" />
            <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
          </div>
          <p className="text-lg text-gray-700 leading-7">
            If you have any questions or concerns about this privacy policy, please feel free to contact us at the following email:
          </p>
          <div className="mt-6 space-y-2">
            <p className="flex items-center text-gray-700">
              <span className="mr-2 text-[#069b9b]">&#9993;</span>
              <strong>Email:</strong> <a href="mailto:privacy@sinfolix.com" className="text-[#069b9b] hover:underline">privacy@sinfolix.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 py-8 border-t border-gray-200">
        <p className="text-sm">
          &copy; 2024 Sinfolix. All rights reserved. | Last Updated: December 9, 2024
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;