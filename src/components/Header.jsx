import React from "react";
import { Link } from "react-router";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
      return (
            <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
                  <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center py-4">
                              <div className="flex items-center">
                                    <img
                                          src="/public/coloredlogo.png"
                                          alt="Container HQ Logo"
                                          className="h-10 w-auto mr-3"
                                    />
                                    <div>
                                          <h1 className="text-xl font-bold text-red-600">Container HQ</h1>
                                          <p className="text-xs text-gray-600">Automotive & Self Storage</p>
                                    </div>
                              </div>

                              {/* Desktop Navigation */}
                              <nav className="hidden md:flex space-x-6">
                                          <Link to="/" className="font-medium transition hover:text-red-600">Home</Link>
                                    <a
                                          href="#"
                                          onClick={(e) => {
                                                e.preventDefault();
                                          }}
                                          className={`font-medium transition hover:text-red-600 `}
                                    >
                                          About
                                    </a>
                                          <Link className="font-medium transition hover:text-red-600" to="/services">Services</Link>
                                    <a
                                          href="#"
                                          onClick={(e) => {
                                                e.preventDefault();
                                          }}
                                          className={`font-medium transition hover:text-red-600`}
                                    >
                                          Pricing
                                    </a>
                                    <a
                                          href="#"
                                          onClick={(e) => {
                                                e.preventDefault();
                                          }}
                                          className={`font-medium transition hover:text-red-600 `}
                                    >
                                          Contact
                                    </a>
                              </nav>

                              {/* Phone Number - Desktop */}
                              {/* TODO: Link to Google page */}
                              <div className="hidden md:flex items-center">
                                    <a href="tel:9413018319" className="flex items-center text-red-600 font-bold">
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
                                          <a
                                                href="#"
                                                onClick={(e) => {
                                                      e.preventDefault();
                                                }}
                                                className={`block py-2`}
                                          >
                                                Home
                                          </a>
                                    </li>
                                    <li>
                                          <a
                                                href="#"
                                                onClick={(e) => {
                                                      e.preventDefault();
                                                      handleScroll("about");
                                                }}
                                                className={`block py-2 `}
                                          >
                                                About
                                          </a>
                                    </li>
                                    <li>
                                          <a
                                                href="#"
                                                onClick={(e) => {
                                                      e.preventDefault();
                                                      handleScroll("services");
                                                }}
                                                className={`block py-2 `}
                                          >
                                                Services
                                          </a>
                                    </li>
                                    <li>
                                          <a
                                                href="#"
                                                onClick={(e) => {
                                                      e.preventDefault();
                                                      handleScroll("pricing");
                                                }}
                                                className={`block py-2 `}
                                          >
                                                Pricing
                                          </a>
                                    </li>
                                    <li>
                                          <a
                                                href="#"
                                                onClick={(e) => {
                                                      e.preventDefault();
                                                      handleScroll("contact");
                                                }}
                                                className={`block py-2 `}
                                          >
                                                Contact
                                          </a>
                                    </li>
                                    <li className="py-2">
                                          <a href="tel:9413018319" className="flex items-center text-red-600 font-bold">
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
