import React from "react";

const ContactUs = () => {
  return (
    <div>
      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gray-50 px-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Information Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900">
              Contact Us
            </h2>
            <p className="text-lg mb-4 text-gray-600">
              We'd love to hear from you! Reach out with any questions or inquiries.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Our Office Location</h3>
                <p className="text-gray-600 mt-2">
                  123 RealEstate Ave, Suite 101, City, State, 12345
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600 mt-2">+1 (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600 mt-2">contact@realestate.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://www.facebook.com"
                    className="text-gray-600 hover:text-teal-500"
                  >
                    <i className="fab fa-facebook text-2xl"></i>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    className="text-gray-600 hover:text-teal-500"
                  >
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="text-gray-600 hover:text-teal-500"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900">
              Get In Touch
            </h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-teal-700 text-white rounded-lg text-lg font-semibold hover:bg-teal-800 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-gray-50 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900">
            Our Location on Google Maps
          </h2>
          <div className="w-full h-96 mb-6">
            <iframe
              title="Real Estate Location"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.715024381123!2d144.96316031531612!3d-37.81361167975165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d45e6bcce1f%3A0x4059bc87cf58a70!2sFederation+Square!5e0!3m2!1sen!2sus!4v1516118576123"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
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

export default ContactUs;
