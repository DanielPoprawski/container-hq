import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const navigate = useNavigate();

      const handleHomeScroll = (sectionId) => {
            navigate('/');
            setTimeout(() => {
                  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
            setIsMenuOpen(false);
      };

      return (
            <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
                  <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center py-4">
                              <Link to="/" className="flex items-center">
                                    <img
                                          src="/coloredlogo.png"
                                          alt="Container HQ Logo"
                                          className="h-12 w-auto mr-3"
                                    />
                                    <div>
                                          <h1 className="text-xl font-bold text-red-600">Container HQ</h1>
                                          <p className="text-sm text-gray-600">Automotive & Self Storage</p>
                                    </div>
                              </Link>

                              {/* Desktop Navigation */}
                              <nav className="hidden md:flex space-x-8">
                                    <Link to="/" className="font-semibold transition hover:text-red-600">Home</Link>
                                    <button
                                          onClick={() => handleHomeScroll("about")}
                                          className="font-semibold transition hover:text-red-600"
                                    >
                                          About
                                    </button>
                                    <Link className="font-semibold transition hover:text-red-600" to="/services">Services</Link>
                                    <button
                                          onClick={() => handleHomeScroll("pricing")}
                                          className="font-semibold transition hover:text-red-600"
                                    >
                                          Pricing
                                    </button>
                                    <button
                                          onClick={() => handleHomeScroll("contact")}
                                          className="font-semibold transition hover:text-red-600"
                                    >
                                          Contact
                                    </button>
                              </nav>

                              {/* Phone Number - Desktop */}
                              <div className="hidden md:flex items-center">
                                    <a href="tel:9413018319" className="flex items-center text-red-600 font-bold text-lg hover:text-red-700 transition">
                                          <i className="fas fa-phone-alt mr-2"></i>
                                          (941) 301-8319
                                    </a>
                              </div>

                              {/* Mobile menu button */}
                              <div className="md:hidden">
                                    <button
                                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                                          className="text-gray-500 hover:text-red-600 focus:outline-none focus:text-red-600"
                                    >
                                          <svg
                                                className="h-6 w-6 fill-current"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                          >
                                                {isMenuOpen ? (
                                                      <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                                      />
                                                ) : (
                                                      <path
                                                            fillRule="evenodd"
                                                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                                      />
                                                )}
                                          </svg>
                                    </button>
                              </div>
                        </div>
                  </div>

                  {/* Mobile menu */}
                  <div className={`md:hidden bg-white ${isMenuOpen ? "block" : "hidden"} shadow-md`}>
                        <nav className="container mx-auto px-4 py-3">
                              <ul>
                                    <li>
                                          <Link
                                                to="/"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block py-3 font-semibold hover:text-red-600 transition"
                                          >
                                                Home
                                          </Link>
                                    </li>
                                    <li>
                                          <button
                                                onClick={() => handleHomeScroll("about")}
                                                className="block py-3 font-semibold hover:text-red-600 transition w-full text-left"
                                          >
                                                About
                                          </button>
                                    </li>
                                    <li>
                                          <Link
                                                to="/services"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block py-3 font-semibold hover:text-red-600 transition"
                                          >
                                                Services
                                          </Link>
                                    </li>
                                    <li>
                                          <button
                                                onClick={() => handleHomeScroll("pricing")}
                                                className="block py-3 font-semibold hover:text-red-600 transition w-full text-left"
                                          >
                                                Pricing
                                          </button>
                                    </li>
                                    <li>
                                          <button
                                                onClick={() => handleHomeScroll("contact")}
                                                className="block py-3 font-semibold hover:text-red-600 transition w-full text-left"
                                          >
                                                Contact
                                          </button>
                                    </li>
                                    <li className="py-3 border-t border-gray-200">
                                          <a href="tel:9413018319" className="flex items-center text-red-600 font-bold text-lg">
                                                <i className="fas fa-phone-alt mr-2"></i>
                                                (941) 301-8319
                                          </a>
                                    </li>
                              </ul>
                        </nav>
                  </div>
            </header>
      );
};

export default Header;
