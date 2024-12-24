import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-10 min-h-screen font-roboto">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          Terms & Conditions
        </h1>

        <section className="mb-10">
          <p className="text-gray-700 leading-7">
            Welcome to Sinfolix! This page outlines our terms and conditions. By accessing our website, you agree to comply with these terms and conditions. If you do not agree with our terms and conditions, please do not use our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Use of Website</h2>
          <p className="text-gray-700 leading-7">
            Our website provides information about our services, training programs, and courses. You may use our website for personal and non-commercial purposes only. We reserve the right to terminate your use of our website if you violate our terms and conditions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 leading-7">
            All content on our website, including text, graphics, logos, images, and software, is the property of Sinfolix or its respective owners. You may not use or reproduce any of our content without our prior written consent.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">User Content</h2>
          <p className="text-gray-700 leading-7">
            If you submit any content to our website, including comments, feedback, or reviews, you grant Sinfolix a non-exclusive, worldwide, royalty-free, perpetual, and irrevocable right to use, reproduce, modify, adapt, publish, translate, and distribute your content in any media.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer of Warranties</h2>
          <p className="text-gray-700 leading-7">
            Our website is provided on an “as is” and “as available” basis without any warranties or representations, express or implied. Sinfolix does not warrant that our website will be uninterrupted or error-free, and we are not responsible for any loss or damage arising from the use of our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 leading-7">
            Sinfolix will not be liable for any damages arising from the use of our website, including but not limited to direct, indirect, incidental, punitive, and consequential damages. Our total liability for any claim relating to our website will not exceed the amount paid by you, if any, for accessing our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Governing Law</h2>
          <p className="text-gray-700 leading-7">
            These terms and conditions will be governed by and construed in accordance with the laws of the jurisdiction in which Sinfolix operates. Any dispute arising from these terms and conditions will be resolved through arbitration.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-7">
            Thank you for reading our terms and conditions. If you have any questions or concerns, please contact us at <strong>info@sinfolix.com</strong>.
          </p>
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

export default TermsAndConditions;
