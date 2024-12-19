import React from 'react';

const AboutUs = () => {
  return (
    <div className="font-sans">
      {/* About Us Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-400 to-teal-600 py-32 sm:py-40 px-6 text-white text-center rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url("https://via.placeholder.com/1600x900")' }}></div> {/* Hero Background Image */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 animate__animated animate__fadeIn animate__delay-1s hover:text-teal-200 transition-all duration-500 ease-in-out transform hover:scale-110">
            About RealEstate
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s text-gray-200">
            Discover our journey, mission, and the passionate team that works tirelessly to help you find your dream property. Let's create a new chapter together!
          </p>
          <a
            href="#mission"
            className="inline-block bg-white text-teal-600 py-3 px-8 text-2xl font-semibold rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:bg-teal-500 hover:text-white"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="py-16 sm:py-20 bg-gray-50 px-6 transform transition duration-500 hover:scale-105 hover:bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900 animate__animated animate__fadeIn animate__delay-1s hover:text-teal-600 transition duration-300">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-2s">
            At RealEstate, we aim to redefine the real estate experience by providing transparent, efficient, and personalized services that help you find your dream property.
          </p>
          <div className="text-lg sm:text-xl text-gray-600 animate__animated animate__fadeIn animate__delay-3s">
            We are committed to making the process of buying, selling, or renting homes a seamless and enjoyable experience for everyone involved.
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 sm:py-20 bg-white px-6 transform transition duration-500 hover:scale-105 hover:bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900 animate__animated animate__fadeIn animate__delay-1s hover:text-teal-600 transition duration-300">
            Our Vision
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Our vision is to become the most trusted and innovative real estate platform, where customers can find their perfect home with confidence and ease.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 animate__animated animate__fadeIn animate__delay-3s">
            By leveraging cutting-edge technology, we aim to deliver a modern and user-friendly experience.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-20 bg-gray-100 px-6 transform transition duration-500 hover:scale-105 hover:bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900 animate__animated animate__fadeIn animate__delay-1s hover:text-teal-600 transition duration-300">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:scale-110 transform transition duration-300 hover:shadow-2xl hover:bg-teal-50">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Integrity</h3>
              <p className="text-lg text-gray-600">
                We build trust through honesty, transparency, and fairness in all our transactions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:scale-110 transform transition duration-300 hover:shadow-2xl hover:bg-teal-50">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-lg text-gray-600">
                We embrace the latest technology to improve our services and deliver the best possible experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:scale-110 transform transition duration-300 hover:shadow-2xl hover:bg-teal-50">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer Focus</h3>
              <p className="text-lg text-gray-600">
                We put our clients' needs first, providing tailored solutions and exceptional customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 sm:py-20 bg-white px-6 transform transition duration-500 hover:scale-105 hover:bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900 animate__animated animate__fadeIn animate__delay-1s hover:text-teal-600 transition duration-300">
            Meet Our Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Our team consists of dedicated professionals with diverse skills and a shared passion for real estate.
          </p>
          <div className="flex justify-center flex-wrap gap-8">
            <div className="text-center w-1/3 sm:w-1/4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-lg text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center w-1/3 sm:w-1/4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-lg text-gray-600">Head of Sales</p>
            </div>
            <div className="text-center w-1/3 sm:w-1/4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl"
              />
              <h3 className="text-xl font-semibold text-gray-800">David Brown</h3>
              <p className="text-lg text-gray-600">Lead Agent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-10 text-center text-white">
        <div className="container mx-auto">
          <div className="flex justify-center items-center space-x-8 mb-6">
            <div className="text-3xl font-semibold">RealEstate</div>
          </div>
          <div className="flex justify-center space-x-12 mb-6">
            <a href="#about" className="hover:text-teal-400 text-lg font-medium transition duration-300">About Us</a>
            <a href="#services" className="hover:text-teal-400 text-lg font-medium transition duration-300">Services</a>
            <a href="#contact" className="hover:text-teal-400 text-lg font-medium transition duration-300">Contact Us</a>
            <a href="#privacy" className="hover:text-teal-400 text-lg font-medium transition duration-300">Privacy Policy</a>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.facebook.com" className="text-2xl hover:text-teal-400 transform transition duration-300">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.twitter.com" className="text-2xl hover:text-teal-400 transform transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" className="text-2xl hover:text-teal-400 transform transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="text-sm text-gray-400">© 2024 RealEstate. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
