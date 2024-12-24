import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reason from "../TrustedPharmacy/Reason.png";
const AboutUs = () => {
  const navigate = useNavigate();
  const handletoHomePage = ()=>{
    navigate("/")
  }
  return (
    
    <div className="font-merriWeather">
    {/* Hero Section with Background Image and Text Over Image */}
    <section
      className="relative py-24 sm:py-32 px-6 sm:px-12 text-center text-white"
      style={{
        backgroundImage: `url(${Reason})`, // Your background image here
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur effect for background */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg"></div>
  
      {/* Content on top of the blurred background */}
      <div className="relative z-10">
        {/* Text over Image */}
        <div className="text-center px-6 py-12 sm:py-20">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-shadow-md">
            Welcome to Shri Samarth Pharmaceuticals
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-shadow-md">
            We provide trusted healthcare solutions with a focus on quality, care, and reliability. Your health, our priority.
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-100 mb-4 leading-relaxed">
              At Shri Samarth Pharmaceuticals, we aim to make healthcare accessible and affordable for all. With a wide range of{" "}
              <strong>trusted</strong> medications and <strong>wellness products</strong>, we are committed to ensuring your well-being
              with the highest quality service.
            </p>
            <p className="text-lg text-gray-100 mb-4 leading-relaxed">
              We believe that healthcare should not just be a service, but a <strong>partnership</strong> with the people we serve. We
              are your <strong>reliable</strong> partner in health, offering quality and convenience at every step.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#about"
              className="bg-teal-600 text-white text-lg font-medium px-8 py-4 rounded-full shadow-lg hover:bg-teal-700 hover:shadow-xl transform transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
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
            <div className="flex flex-col items-center bg-[#f3f4f6] p-8 rounded-lg shadow-lg w-80">
              <div className="text-4xl text-blue-600 mb-4">💊</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Prescription Medications</h3>
              <p className="text-gray-700">We offer a wide range of prescription medications that are easy to order and refill.</p>
            </div>

            <div className="flex flex-col items-center bg-[#f3f4f6] p-8 rounded-lg shadow-lg w-80">
              <div className="text-4xl text-blue-600 mb-4">💅</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Personal Care</h3>
              <p className="text-gray-700">Explore our wide variety of skincare, beauty, and hygiene products from trusted brands.</p>
            </div>

            <div className="flex flex-col items-center bg-[#f3f4f6] p-8 rounded-lg shadow-lg w-80">
              <div className="text-4xl text-blue-600 mb-4">🌱</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">Health Supplements</h3>
              <p className="text-gray-700">From vitamins to herbal remedies, we provide the supplements that support your well-being.</p>
            </div>

            <div className="flex flex-col items-center bg-[#f3f4f6] p-8 rounded-lg shadow-lg w-80">
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
              <p className="text-lg text-gray-700 mb-4 font-fira italic">"Shri Samartha Pharmaceuticals has made my health journey so much easier. The delivery is fast, and I always find what I need. Highly recommended!"</p>
              <p className="font-semibold text-[#257abd]">Jane D.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <p className="text-lg text-gray-700 mb-4">"I trust Shri Samartha Pharmaceuticals for all my medications. The prices are reasonable, and the customer support is always helpful!"</p>
              <p className="font-semibold text-[#257abd]">John M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold  text-bgBlue mb-4">Your Health is Our Priority</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          At Shri Samartha Pharmaceuticals, we believe that health is wealth. Let us help you take care of your health needs with trust, convenience, and expert guidance.
        </p>
        <button onClick={handletoHomePage} className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700">Get Started</button>
      </section>

    </div>
  );
};

export default AboutUs;
