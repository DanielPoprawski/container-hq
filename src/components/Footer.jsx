import React from "react";

const Footer = () => {
      return (
            <footer className="bg-gray-800 text-white py-8">
                  <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <div>
                                    <h3 className="text-xl font-bold mb-4">Container HQ</h3>
                                    <p className="mb-2">Automotive and Self Storage</p>
                                    <p className="mb-2">1605 W University Pkwy</p>
                                    <p>Sarasota, FL 34243</p>
                              </div>
                              <div>
                                    <h3 className="text-xl font-bold mb-4">Hours</h3>
                                    <p className="mb-2">Monday-Friday: 9am-5pm</p>
                                    <p className="mb-2">Saturday: 10am-2pm</p>
                                    <p>Sunday: Closed</p>
                              </div>
                              <div>
                                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                                    <p className="mb-2">Phone: (941) 301-8319</p>
                                    <p className="mb-2">Email: info@container-hq.com</p>
                                    <div className="flex space-x-4 mt-4">
                                          <a href="#" className="text-white hover:text-red-600">
                                                <i className="fab fa-facebook-f"></i>
                                          </a>
                                          <a href="#" className="text-white hover:text-red-600">
                                                <i className="fab fa-instagram"></i>
                                          </a>
                                          <a href="#" className="text-white hover:text-red-600">
                                                <i className="fab fa-google"></i>
                                          </a>
                                    </div>
                              </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                              <p>
                                    &copy; {new Date().getFullYear()} Container HQ Automotive and Self Storage. All
                                    rights reserved.
                              </p>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
