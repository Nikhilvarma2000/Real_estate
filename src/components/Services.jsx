import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router

const Services = () => {
  return (
    <div className="font-sans">
      {/* Services Section */}
      <section id="services" className="pt-24 sm:pt-28 py-16 sm:py-20 bg-gray-50 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-gray-900 animate__animated animate__fadeIn animate__delay-1s hover:text-teal-600 transition duration-300">
            Our Real Estate Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-2s">
            We offer a wide range of services to help you find, sell, or invest in real estate with ease and confidence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="relative bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Buying</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Our team of experts will guide you through the process of buying your dream property, whether it's a residential or commercial space.
                </p>
                <Link
                  to="/contact-us"  // Link to Contact Us page
                  className="inline-block bg-teal-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-teal-500 transform transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="relative bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Selling</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Whether you're looking to sell your home, office, or commercial property, we ensure a smooth and profitable transaction.
                </p>
                <Link
                  to="/contact-us"  // Link to Contact Us page
                  className="inline-block bg-teal-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-teal-500 transform transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="relative bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Rental</h3>
                <p className="text-lg text-gray-600 mb-4">
                  We help you find the best rental properties or secure tenants for your rental properties, making the process hassle-free.
                </p>
                <Link
                  to="/contact-us"  // Link to Contact Us page
                  className="inline-block bg-teal-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-teal-500 transform transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="relative bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Real Estate Investment</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Our team provides expert advice on property investment opportunities that align with your financial goals.
                </p>
                <Link
                  to="/contact-us"  // Link to Contact Us page
                  className="inline-block bg-teal-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-teal-500 transform transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="relative bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Valuation</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Get an accurate valuation of your property with our comprehensive market analysis and expert appraisal.
                </p>
                <Link
                  to="/contact-us"  // Link to Contact Us page
                  className="inline-block bg-teal-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-teal-500 transform transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="relative bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Management</h3>
                <p className="text-lg text-gray-600 mb-4">
                  We offer full property management services, including maintenance, tenant relations, and more.
                </p>
                <Link
                  to="/contact-us"  // Link to Contact Us page
                  className="inline-block bg-teal-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-teal-500 transform transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Footer Section with Professional Design */}
       <footer className="bg-gray-900 py-10 text-center text-white">
        <div className="container mx-auto">
          <div className="flex justify-center items-center space-x-8 mb-6">
            {/* Logo and Brand Name */}
            <div className="text-3xl font-semibold">RealEstate</div>
          </div>
          {/* Footer Links */}
          <div className="flex justify-center space-x-12 mb-6">
            <a href="#about" className="hover:text-teal-400 text-lg font-medium">About Us</a>
            <a href="#services" className="hover:text-teal-400 text-lg font-medium">Services</a>
            <a href="#contact" className="hover:text-teal-400 text-lg font-medium">Contact Us</a>
            <a href="#privacy" className="hover:text-teal-400 text-lg font-medium">Privacy Policy</a>
          </div>
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.facebook.com" className="text-2xl hover:text-teal-400">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.twitter.com" className="text-2xl hover:text-teal-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" className="text-2xl hover:text-teal-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          {/* Copyright Info */}
          <p className="text-sm text-gray-400">© 2024 RealEstate. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Services;
