// components/Home.jsx
import React from "react";
import "animate.css"; // Import for animations

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-400 to-teal-600 py-24 sm:py-32 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Find Your Dream Home with RealEstate
          </h1>
          <p className="text-lg sm:text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Discover a wide range of properties with ease and make your dream home a reality with our expert guidance.
          </p>
          <a
            href="#services"
            className="bg-teal-700 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-teal-800 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Why Choose RealEstate Section */}
      <section className="py-16 sm:py-20 bg-gray-50 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900">
            Why Choose RealEstate?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expert Agents</h3>
              <p className="text-lg text-gray-600">
                Our team of experienced real estate agents is here to ensure you get the best deals and options.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wide Range of Properties</h3>
              <p className="text-lg text-gray-600">
                From affordable homes to luxurious estates, we have properties to suit every need and budget.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fast Transactions</h3>
              <p className="text-lg text-gray-600">
                We streamline the process to ensure quick and efficient transactions, so you can move into your new home faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Premium Properties Section */}
      <section id="services" className="py-16 sm:py-20 bg-white px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900">
            Our Premium Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Property+1"
                alt="Property 1"
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-4 text-gray-800">Luxury Villa</h3>
              <p className="text-lg text-gray-600">A stunning villa with an ocean view, ideal for peaceful living.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="https://via.placeholder.com/800x400/33C1FF/FFFFFF?text=Property+2"
                alt="Property 2"
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-4 text-gray-800">Modern Apartment</h3>
              <p className="text-lg text-gray-600">Spacious apartments located in the city's heart, with all amenities.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="https://via.placeholder.com/800x400/FFC300/FFFFFF?text=Property+3"
                alt="Property 3"
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-4 text-gray-800">Beachfront House</h3>
              <p className="text-lg text-gray-600">A beautiful beachfront property offering serene views and luxury living.</p>
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

export default Home;
