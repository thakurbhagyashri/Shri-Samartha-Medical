import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-10 min-h-screen font-roboto">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          Privacy Policy
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">At Sinfolix</h2>
          <p className="text-gray-700 leading-7">
            At Sinfolix, we understand the importance of your privacy and are committed to protecting it. This privacy policy explains how we collect, use, and disclose your personal information when you use our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Collection and Use</h2>
          <p className="text-gray-700 leading-7">
            We may collect personal information such as your name, email address, phone number, and other relevant information when you use our services. This information is used to provide you with the services you have requested and to improve our services. We may also use this information to communicate with you about our services and to send you relevant information about our company.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing and Disclosure</h2>
          <p className="text-gray-700 leading-7">
            We do not sell or rent your personal information to third parties. However, we may share your information with our trusted partners who assist us in providing our services to you. We may also disclose your information when required by law or to protect our legal rights.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
          <p className="text-gray-700 leading-7">
            We take appropriate measures to ensure the security of your personal information. We have implemented reasonable technical, administrative, and physical measures to protect your information from unauthorized access, use, or disclosure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h2>
          <p className="text-gray-700 leading-7">
            We may use cookies to improve your experience on our website. Cookies are small files that are stored on your computer’s hard drive that allow us to recognize you when you return to our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-7">
            We reserve the right to modify this privacy policy at any time. Any changes will be effective immediately upon posting on our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-7">
            If you have any questions or concerns about this privacy policy, please contact us at:
          </p>
          <div className="mt-6 space-y-2">
            <p className="flex items-center text-gray-700">
              <span className="mr-2 text-indigo-600">&#9993;</span>
              <strong>Email:</strong> privacy@sinfolix.com
            </p>
          </div>
        </section>

        <footer className="border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            Last Updated: <span className="font-medium">December 9, 2024</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
