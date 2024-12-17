import React from 'react';
import Reason from "../TrustedPharmacy/Reason.png";
const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-8 lg:px-16 font-custom">
  {/* <div className="trusted-pharmacy-container ml-5 mr-5  ">
                <img
                    src={BgPharma}
                    alt="Trusted Pharmacy"
                    style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                    className="trusted-pharmacy-image "
                />
                <span className="trusted-pharmacy-text font-custom font-semibold">
                    INDIA’S MOST TRUSTED ONLINE PHARMACY
                </span>
            </div> */}
    
      <section className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="max-w-lg mb-8 md:mb-0 text-center px-4  py-5 md:text-left">
          <h1 className="text-5xl font-extrabold text-bgBlue mb-10 ">Welcome to <pre className=" font-custom">Shri Samarth</pre> Pharmaceuticals</h1>
          <p className="text-lg text-gray-700 text-justify">
            We provide high-quality healthcare solutions delivered right to your doorstep. With a focus on reliability, trust, and care, we're here to make your health journey easier and more accessible. 
          </p>
          <p  className="text-lg text-gray-700 text-justify">
            At Sai Samartha Pharmacy, we believe in improving lives through accessible and affordable healthcare. Our comprehensive range includes prescription medications, over-the-counter products, wellness essentials, and specialized health solutions.</p>
        </div>
        <div className="w-auto md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
      
                        <img
                            src={Reason}
                            alt="Trusted Pharmacy"
                            style={{ height: '60%', width: '100%', objectFit: 'cover' }}
                            className="trusted-pharmacy-image m-10 p-4 rounded-xl "
                        />
                    </div>
        {/* </div> */}
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-white py-12 px-3 mb-16 shadow-lg rounded-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to provide you with authentic medications, health supplements, and wellness products, all while delivering exceptional service and care. We aim to empower you on your health journey by providing easy access to the healthcare products you need.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section - Interactive with Icons */}
      <section className="bg-gray-100 py-12 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Individual Card */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-green-600 mb-4">✔</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Authentic Products</h3>
              <p className="text-gray-700">We partner with trusted suppliers to ensure you get only the best and safest products.</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-green-600 mb-4">🚚</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-700">Get your prescriptions and wellness products delivered to your door quickly and securely.</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-green-600 mb-4">💬</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Expert Guidance</h3>
              <p className="text-gray-700">Our team of qualified pharmacists is here to answer your questions and provide expert advice.</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl text-green-600 mb-4">🔒</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Privacy & Security</h3>
              <p className="text-gray-700">We prioritize your privacy and ensure all your personal and medical information is kept safe and secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section with Icons */}
      <section className="py-12 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Offerings</h2>
          <div className="flex  justify-center gap-12">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-80">
              <div className="text-4xl text-blue-600 mb-4">💊</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Prescription Medications</h3>
              <p className="text-gray-700">We offer a wide range of prescription medications that are easy to order and refill.</p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-80">
              <div className="text-4xl text-blue-600 mb-4">💅</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Personal Care</h3>
              <p className="text-gray-700">Explore our wide variety of skincare, beauty, and hygiene products from trusted brands.</p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-80">
              <div className="text-4xl text-blue-600 mb-4">🌱</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Health Supplements</h3>
              <p className="text-gray-700">From vitamins to herbal remedies, we provide the supplements that support your well-being.</p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-80">
              <div className="text-4xl text-blue-600 mb-4">📋</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Lab Tests</h3>
              <p className="text-gray-700">Easily book lab tests online and get your results delivered directly to your inbox.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold  text-bgBlue mb-6">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <p className="text-lg text-gray-700 mb-4">"Sai Samartha Pharmacy has made my health journey so much easier. The delivery is fast, and I always find what I need. Highly recommended!"</p>
              <p className="font-semibold text-gray-800">Jane D.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <p className="text-lg text-gray-700 mb-4">"I trust Sai Samartha Pharmacy for all my medications. The prices are reasonable, and the customer support is always helpful!"</p>
              <p className="font-semibold text-gray-800">John M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold  text-bgBlue mb-4">Your Health is Our Priority</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          At Sai Samartha Pharmacy, we believe that health is wealth. Let us help you take care of your health needs with trust, convenience, and expert guidance.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700">Get Started</button>
      </section>

    </div>
  );
};

export default AboutUs;
