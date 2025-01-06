import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-10 min-h-screen font-merriWeather">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          Return & Refund Policy
        </h1>

        <section className="mb-10">
          <p className="text-gray-700 leading-7">
            At Sinfolix, we take great pride in the quality of our services and courses. If you are not completely satisfied with your purchase, we are here to help.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Returns</h2>
          <p className="text-gray-700 leading-7">
            You may be eligible to receive a refund for your purchase if you contact us within 30 days of the date of purchase. Please email us at <strong>[insert email address]</strong> with your request for a return and provide us with a detailed explanation of the reason for the return. We will then review your request and respond to you within <strong>[insert number]</strong> business days with instructions on how to proceed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Refunds</h2>
          <p className="text-gray-700 leading-7">
            If your return is approved, we will process the refund and credit the original method of payment within <strong>[insert number]</strong> business days. Please note that it may take some time for your bank or credit card company to process and post the refund to your account.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Exceptions</h2>
          <p className="text-gray-700 leading-7">
            Please note that certain services and courses may not be eligible for a refund. These include but are not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Services that have already been provided to you in part or in full.</li>
            <li>Courses where you have already completed a significant portion of the content or have already received a certificate of completion.</li>
            <li>Any services or courses that were purchased on a promotional or discounted price.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-7">
            If you have any questions or concerns regarding our return and refund policy, please contact us at <strong>[insert email address]</strong>. We will be happy to assist you in any way we can.
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

export default ReturnPolicy;