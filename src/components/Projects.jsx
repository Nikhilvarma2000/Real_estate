import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewDetails = (projectId) => {
    if (selectedProject === projectId) {
      setSelectedProject(null); // Close the details if the same project is clicked again
    } else {
      setSelectedProject(projectId); // Open the details of the selected project
    }
  };

  return (
    <div className="font-sans">
      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-gray-50 px-6 pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-gray-900 animate__animated animate__fadeIn animate__delay-1s hover:text-teal-600 transition duration-300">
            Our Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-2s">
            We take pride in every project we undertake, and we are excited to showcase some of our best work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="relative bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 hover:shadow-xl">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 1"
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-t-lg"></div>
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Modern Office Building</h3>
                <p className="text-lg text-gray-600 mb-4">
                  A state-of-the-art office building designed with modern architecture and sustainable features.
                </p>
                <button
                  onClick={() => handleViewDetails(1)}
                  className="inline-block bg-teal-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-teal-500 transform transition-all duration-300 hover:scale-105"
                >
                  View Details
                </button>
                {selectedProject === 1 && (
                  <div className="mt-6 text-gray-800">
                    {/* Overview Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mb-3">Project Overview</h4>
                    <p className="text-lg">
                      The Modern Office Building is designed with cutting-edge architecture, prioritizing both aesthetics and sustainability. The building houses multiple corporate offices and offers modern amenities for businesses to thrive.
                    </p>

                    {/* Challenges Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Challenges Faced</h4>
                    <p className="text-lg">
                      One of the main challenges was ensuring the building's energy efficiency while maintaining modern aesthetics. Integrating renewable energy sources and sustainable building materials posed design constraints.
                    </p>

                    {/* Solution Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Solution Provided</h4>
                    <p className="text-lg">
                      Our team incorporated energy-efficient designs, including solar panels on the rooftop, advanced insulation, and smart building technologies to optimize energy consumption.
                    </p>

                    {/* Outcome Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Project Outcome</h4>
                    <p className="text-lg">
                      The building now operates at 30% less energy consumption compared to traditional office buildings. It has received accolades for its sustainable design and is home to several top-tier businesses.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 hover:shadow-xl">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 2"
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-t-lg"></div>
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Luxury Residential Complex</h3>
                <p className="text-lg text-gray-600 mb-4">
                  A luxurious residential complex with spacious apartments and world-class amenities.
                </p>
                <button
                  onClick={() => handleViewDetails(2)}
                  className="inline-block bg-teal-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-teal-500 transform transition-all duration-300 hover:scale-105"
                >
                  View Details
                </button>
                {selectedProject === 2 && (
                  <div className="mt-6 text-gray-800">
                    {/* Overview Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mb-3">Project Overview</h4>
                    <p className="text-lg">
                      This luxury residential complex offers an exclusive living experience with top-of-the-line amenities such as a private swimming pool, gym, and 24/7 concierge service.
                    </p>

                    {/* Challenges Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Challenges Faced</h4>
                    <p className="text-lg">
                      A challenge was balancing the luxury features with energy-efficient solutions while keeping construction costs in line with the budget. Ensuring the highest standards of luxury and comfort while maintaining ecological sustainability was also a challenge.
                    </p>

                    {/* Solution Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Solution Provided</h4>
                    <p className="text-lg">
                      We incorporated eco-friendly materials, efficient lighting systems, and smart-home technology to ensure residents enjoy luxury without compromising on sustainability.
                    </p>

                    {/* Outcome Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Project Outcome</h4>
                    <p className="text-lg">
                      The residential complex has become a benchmark for luxury living, offering all residents an unparalleled living experience while being energy-efficient and environmentally conscious.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-500 hover:shadow-xl">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 3"
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-t-lg"></div>
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Urban Park Development</h3>
                <p className="text-lg text-gray-600 mb-4">
                  A community-focused urban park that blends nature with modern design for a refreshing escape.
                </p>
                <button
                  onClick={() => handleViewDetails(3)}
                  className="inline-block bg-teal-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-teal-500 transform transition-all duration-300 hover:scale-105"
                >
                  View Details
                </button>
                {selectedProject === 3 && (
                  <div className="mt-6 text-gray-800">
                    {/* Overview Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mb-3">Project Overview</h4>
                    <p className="text-lg">
                      The Urban Park Development aims to provide a serene green space in the heart of the city, offering walking paths, recreational zones, and public art installations to foster community engagement.
                    </p>

                    {/* Challenges Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Challenges Faced</h4>
                    <p className="text-lg">
                      The main challenge was transforming a previously industrial site into a park while preserving local biodiversity and ensuring the space was accessible to the public.
                    </p>

                    {/* Solution Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Solution Provided</h4>
                    <p className="text-lg">
                      We designed pathways that integrated the natural landscape, employed sustainable landscaping practices, and ensured that public art installations enhanced the park's aesthetic appeal.
                    </p>

                    {/* Outcome Section */}
                    <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Project Outcome</h4>
                    <p className="text-lg">
                      The park has become a hub for local activities, fostering community engagement, physical well-being, and environmental awareness among residents and visitors.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Add more projects similarly */}
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

export default Projects;
