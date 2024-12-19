// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    setIsHamburgerClicked(!isHamburgerClicked);
  };

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-lg z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Container */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-4xl font-extrabold text-sky-500 hover:text-orange-500 transition duration-300"
          >
            Real<span className="text-orange-500">Estate</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["Home", "About Us", "Projects", "Services", "Contact Us"].map(
            (item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-black hover:text-orange-500 transition duration-300"
                >
                  {item}
                  {/* Underline Animation */}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transform origin-left transition-all duration-300"></span>
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={handleHamburgerClick}
          className="md:hidden text-black focus:outline-none relative"
        >
          <div
            className={`w-8 h-1 bg-black mb-2 transition-all duration-300 transform ${
              isHamburgerClicked ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-black mb-2 transition-all duration-300 transform ${
              isHamburgerClicked ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-black mb-2 transition-all duration-300 transform ${
              isHamburgerClicked ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu (Opens from below navbar) */}
      <div
        className={`md:hidden w-full bg-white z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "block mt-6" : "hidden"
        }`}
      >
        {/* Mobile Menu Content */}
        <ul className="p-4 space-y-6 text-lg font-medium">
          {["Home", "About Us", "Projects", "Services", "Contact Us"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-black block hover:text-orange-500 transition duration-300"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
