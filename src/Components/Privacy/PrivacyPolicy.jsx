import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-10 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          Privacy Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-7">
            Welcome to our website! This Privacy Policy outlines how we collect,
            use, and protect your personal information. Please read it carefully
            to understand our practices regarding your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Personal Data:</strong> Information such as your name, email
              address, and phone number that you provide to us directly.
            </li>
            <li>
              <strong>Usage Data:</strong> Details about how you interact with
              our website, including IP address, browser type, and browsing history.
            </li>
            <li>
              <strong>Cookies:</strong> Small files placed on your device to enhance
              your experience.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-7">
            We use the collected data to:
          </p>
          <ul className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
            <li>Provide and improve our services.</li>
            <li>Respond to your inquiries and support requests.</li>
            <li>Send you marketing materials (with your consent).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
          <p className="text-gray-700 leading-7">
            We implement strong security measures to safeguard your information.
            However, no method of electronic transmission or storage is 100%
            secure, so we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Access and update your personal information.</li>
            <li>Request deletion of your data.</li>
            <li>Withdraw consent for data processing.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-7">
            For any questions or concerns, please reach out to us:
          </p>
          <div className="mt-4">
            <p className="flex items-center text-gray-700">
              <span className="mr-2 text-indigo-600">&#9993;</span>
              <strong>Email:</strong> support@yourwebsite.com
            </p>
            <p className="flex items-center text-gray-700">
              <span className="mr-2 text-indigo-600">&#128222;</span>
              <strong>Phone:</strong> +1-800-123-456
            </p>
            <p className="flex items-center text-gray-700">
              <span className="mr-2 text-indigo-600">&#127968;</span>
              <strong>Address:</strong> 123 Main Street, Your City, Your Country
            </p>
          </div>
        </section>

        <footer className="border-t border-gray-200 pt-4">
          <p className="text-center text-sm text-gray-500">
            Last Updated: <span className="font-medium">December 3, 2024</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
