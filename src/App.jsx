import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Star, BadgeCheck } from "lucide-react";

export default function App() {
      const [activeSection, setActiveSection] = useState("home");
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: "",
            message: "",
            serviceType: "uncovered-parking",
      });

      const handleScroll = (sectionId) => {
            setActiveSection(sectionId);
            setIsMenuOpen(false);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
      };

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value,
            });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            alert("Thank you for your inquiry! We will get back to you shortly.");
            setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                  serviceType: "uncovered-parking",
            });
      };

      return (
            <>
                  <Header
                        activeSection={activeSection}
                        handleScroll={handleScroll}
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                  />

                  <section
                        id="home"
                        className="bg-cover bg-center py-32"
                        style={{
                              backgroundImage:
                                    'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/api/placeholder/1200/600")',
                        }}
                  >
                        <div className="container mx-auto px-4 text-center text-white">
                              <img
                                    src="public/blacklogo.svg"
                                    alt="Container HQ Logo"
                                    className="mx-auto mb-6 max-w-sm"
                              />
                              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Automotive and Self Storage Solutions in Sarasota
                              </h2>
                              <p className="text-xl max-w-2xl mx-auto mb-8">
                                    Secure vehicle storage, RV/boat parking, storage units, and more. Your one-stop
                                    storage solution in Sarasota.
                              </p>
                              <div className="flex flex-wrap justify-center gap-4">
                                    <button
                                          onClick={() => handleScroll("services")}
                                          className="bg-red-600 text-white font-bold px-6 py-3 rounded-md hover:bg-red-700 transition"
                                    >
                                          View Services
                                    </button>
                                    <button
                                          onClick={() => handleScroll("contact")}
                                          className="bg-gray-800 text-white font-bold px-6 py-3 rounded-md hover:bg-gray-700 transition"
                                    >
                                          Get a Quote
                                    </button>
                              </div>
                        </div>
                  </section>
                  {/* Services Section */}
                  <section id="services" className="py-20 bg-gray-100">
                        <div className="container mx-auto px-4">
                              <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-red-600 after:mx-auto after:mt-4">
                                    Our Services
                              </h2>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                                          <i className="fas fa-car-side text-4xl text-red-600 mb-4"></i>
                                          <h3 className="text-xl font-bold mb-3">Indoor Car Storage</h3>
                                          <p className="mb-4">
                                                Premium indoor vehicle storage with comprehensive care for your
                                                automobile.
                                          </p>
                                          <ul className="list-disc pl-5 mb-4">
                                                <li>Battery trickle charging</li>
                                                <li>Tire pressure monitoring</li>
                                                <li>Car cover included</li>
                                                <li>Optional car wash services</li>
                                                <li>Airport shuttle service (coming soon)</li>
                                          </ul>
                                          <p className="font-bold">$225/month</p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                                          <i className="fas fa-trailer text-4xl text-red-600 mb-4"></i>
                                          <h3 className="text-xl font-bold mb-3">Uncovered Parking</h3>
                                          <p className="mb-4">
                                                Secure outdoor parking for boats, trailers, RVs, and other vehicles.
                                          </p>
                                          <ul className="list-disc pl-5 mb-4">
                                                <li>Up to 20ft - $125/month</li>
                                                <li>Up to 30ft - $180/month</li>
                                                <li>Up to 40ft - $200/month</li>
                                          </ul>
                                          <p>
                                                Perfect for cars, boats, trailers, and RVs that don't require covered
                                                protection.
                                          </p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                                          <i className="fas fa-caravan text-4xl text-red-600 mb-4"></i>
                                          <h3 className="text-xl font-bold mb-3">Covered Parking</h3>
                                          <p className="mb-4">
                                                Protect your vehicle from the elements with our covered parking options.
                                          </p>
                                          <ul className="list-disc pl-5 mb-4">
                                                <li>Up to 20ft - $150/month</li>
                                                <li>Up to 30ft - $200/month</li>
                                                <li>Up to 40ft - $400/month</li>
                                          </ul>
                                          <p>
                                                Ideal for protecting boats, RVs, and vehicles from Florida's sun, rain,
                                                and weather.
                                          </p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                                          <i className="fas fa-box text-4xl text-red-600 mb-4"></i>
                                          <h3 className="text-xl font-bold mb-3">Storage Units</h3>
                                          <p className="mb-4">
                                                Spacious 8x20 storage units for personal belongings, business inventory,
                                                and more.
                                          </p>
                                          <p className="font-bold mb-4">$200/month</p>
                                          <p>
                                                Our storage units are clean, secure, and easily accessible when you need
                                                your items.
                                          </p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                                          <i className="fas fa-building text-4xl text-red-600 mb-4"></i>
                                          <h3 className="text-xl font-bold mb-3">Office Space Rentals</h3>
                                          <p className="mb-4">Professional office space available for rent.</p>
                                          <p className="font-bold">Call for availability and pricing</p>
                                          <p>
                                                Perfect for small businesses, remote workers, or anyone needing
                                                professional workspace.
                                          </p>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                                          <i className="fas fa-hand-sparkles text-4xl text-red-600 mb-4"></i>
                                          <h3 className="text-xl font-bold mb-3">Car Wash Services</h3>
                                          <p className="mb-4">
                                                Keep your vehicle looking its best with our professional car wash
                                                services.
                                          </p>
                                          <p className="font-bold">Call for packages and pricing</p>
                                          <p>Available as an add-on service for our indoor car storage customers.</p>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* About Section */}
                  <section id="about" className="py-20">
                        <div className="container mx-auto px-4">
                              <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-red-600 after:mx-auto after:mt-4">
                                    About Container HQ
                              </h2>

                              <div>
                                    <h3 className="text-2xl font-bold mb-4">
                                          Sarasota's Premier Automotive and Self Storage Provider
                                    </h3>
                                    <p className="mb-4">
                                          Container HQ Automotive and Self Storage offers comprehensive storage
                                          solutions for vehicles, boats, RVs, and personal belongings in Sarasota. Our
                                          secure facility provides a range of options to meet your specific storage
                                          needs.
                                    </p>
                                    <p className="mb-4">
                                          We specialize in indoor car storage with premium care services, covered and
                                          uncovered parking for boats and RVs, storage units, and even office space
                                          rentals.
                                    </p>
                                    <ul className="list-disc pl-5 mb-4">
                                          <li>Conveniently located in Sarasota</li>
                                          <li>Flexible monthly rental options</li>
                                          <li>Competitive pricing</li>
                                          <li>Airport shuttle service for indoor customers (coming soon)</li>
                                    </ul>
                              </div>
                        </div>
                  </section>
                  {/* Testimonials */}
                  <section className="py-16 bg-gray-100">
                        <div className="container mx-auto px-4">
                              <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-red-600 after:mx-auto after:mt-4">
                                    What Our Customers Say
                              </h2>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* First Testimonial */}
                                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                                          <div className="flex items-center mb-4">
                                                <div className="text-yellow-500 mr-2 flex">
                                                      <Star />
                                                      <Star />
                                                      <Star />
                                                      <Star />
                                                      <Star />
                                                </div>
                                                <span>5.0</span>
                                          </div>
                                          <p className="italic mb-4">
                                                "I have been a customer of Container HQ for 2 and a half years now.
                                                Every time I go in with a problem John always solves my issues. They are
                                                always willing to help. Couldn’t be more pleased with my experience. I
                                                recommend anyone and everyone to go store their car here. Great service
                                                and never an issue with getting information"
                                          </p>
                                          <div className="font-bold">- Keagan Libera</div>
                                    </div>

                                    {/* Second Testimonial */}
                                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                                          <div className="flex items-center mb-4">
                                                <div className="text-yellow-500 mr-2 flex">
                                                      <Star />
                                                      <Star />
                                                      <Star />
                                                      <Star />
                                                      <Star />
                                                </div>
                                                <span>5.0</span>
                                          </div>
                                          <p className="italic mb-4">
                                                "Container HQ stored our car during the hurricane and did a great job…
                                                plus when my daughter had a problem they went beyond normal service to
                                                help save her car and store it. We were very fortunate to fine them.
                                                Thank you for your help."
                                          </p>
                                          <div className="font-bold">- Arleen Klein</div>
                                    </div>

                                    {/* Third Testimonial */}
                                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                                          <div className="flex items-center mb-4">
                                                <div className="text-yellow-500 mr-2 flex">
                                                      <Star />
                                                      <Star />
                                                      <Star />
                                                      <Star />
                                                      <Star />
                                                </div>
                                                <span>5.0</span>
                                          </div>
                                          <p className="italic mb-4">
                                                "I have stored my Lamborghini Murcielago here since they have opened.
                                                Haven’t touch it for several month. I was able to pay for a wash and wax
                                                and picked it up clean and ready to go. The young gentleman at this
                                                indoor storage facility take good care of their customers cars. Clean
                                                and Safe Indoor vehicle storage facility with plenty of airflow! Highly
                                                recommend. Rates are very reasonable!"
                                          </p>
                                          <div className="font-bold">- Peter from Real Estate</div>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* Pricing Section */}
                  <section id="pricing" className="py-20">
                        <div className="container mx-auto px-4">
                              <h2 className="text-3xl font-bold text-center mb-4 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-red-600 after:mx-auto after:mt-4">
                                    Storage Options & Pricing
                              </h2>
                              <p className="text-center max-w-2xl mx-auto mb-12">
                                    We offer competitive rates for all your storage needs with flexible month-to-month
                                    agreements.
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                          <div className="bg-red-600 text-white p-4 text-center">
                                                <h3 className="text-xl font-bold">Uncovered</h3>
                                          </div>
                                          <div className="p-6">
                                                <p className="text-center text-3xl font-bold text-gray-800 mb-4">
                                                      From $125<span className="text-sm font-normal">/month</span>
                                                </p>
                                                <ul className="mb-6">
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Up to 20ft - $125/month
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Up to 30ft - $180/month
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Up to 40ft - $200/month
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Ideal for single cars/small trailers
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Perfect for most trailers/boats/RVs
                                                      </li>
                                                </ul>
                                                <button
                                                      onClick={() => handleScroll("contact")}
                                                      className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition"
                                                >
                                                      Reserve Now
                                                </button>
                                          </div>
                                    </div>

                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                          <div className="bg-red-600 text-white p-4 text-center">
                                                <h3 className="text-xl font-bold">Covered</h3>
                                          </div>
                                          <div className="p-6">
                                                <p className="text-center text-3xl font-bold text-gray-800 mb-4">
                                                      From $150<span className="text-sm font-normal">/month</span>
                                                </p>
                                                <ul className="mb-6">
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Up to 20ft - $150/month
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Up to 30ft - $200/month
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Up to 40ft - $400/month
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Weather protection
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Secure access
                                                      </li>
                                                </ul>
                                                <button
                                                      onClick={() => handleScroll("contact")}
                                                      className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition"
                                                >
                                                      Reserve Now
                                                </button>
                                          </div>
                                    </div>

                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                          <div className="bg-red-600 text-white p-4 text-center">
                                                <h3 className="text-xl font-bold">Storage Units</h3>
                                          </div>
                                          <div className="p-6">
                                                <p className="text-center text-3xl font-bold text-gray-800 mb-4">
                                                      From $200<span className="text-sm font-normal">/month</span>
                                                </p>
                                                <ul className="mb-6">
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Storage Units (8x20) - $200/month
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Indoor Car Parking - $225/month
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Battery trickle charging
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Tire pressure monitoring
                                                      </li>
                                                      <li className="mb-2 flex items-center">
                                                            <BadgeCheck
                                                                  color="white"
                                                                  fill="rgb(4,197,94)"
                                                                  className="mr-2"
                                                            />
                                                            Car wash services available*
                                                      </li>
                                                </ul>
                                                <button
                                                      onClick={() => handleScroll("contact")}
                                                      className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition"
                                                >
                                                      Reserve Now
                                                </button>
                                                <p className="text-xs text-gray-500 mt-3">
                                                      *Additional fees apply. Call for packages.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* Contact Section */}
                  <section id="contact" className="py-20 bg-gray-100">
                        <div className="container mx-auto px-4">
                              <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-red-600 after:mx-auto after:mt-4">
                                    Contact Us
                              </h2>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                    <div>
                                          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                                          <p className="mb-6">
                                                Have questions about our storage options or services? Fill out the form
                                                and we'll get back to you as soon as possible. You can also call us
                                                directly or visit our facility.
                                          </p>

                                          <div className="mb-6">
                                                <h4 className="font-bold mb-2">Location</h4>
                                                <p>1605 W University Pkwy, Sarasota, FL 34243</p>
                                          </div>

                                          <div className="mb-6">
                                                <h4 className="font-bold mb-2">Office Hours</h4>
                                                <p>Monday-Friday: 9am-5pm</p>
                                                <p>Saturday: 10am-2pm</p>
                                                <p>Sunday: Closed</p>
                                          </div>

                                          <div className="mb-6">
                                                <h4 className="font-bold mb-2">Contact Info</h4>
                                                <p>
                                                      <i className="fas fa-phone-alt text-red-600 mr-2"></i> (941)
                                                      301-8319
                                                </p>
                                                <p>
                                                      <i className="fas fa-envelope text-red-600 mr-2"></i>{" "}
                                                      info@container-hq.com
                                                </p>
                                          </div>
                                          <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.4617567318555!2d-82.5389967664092!3d27.389550737475215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c33fb642592f79%3A0x54b4b9d9113fc9d0!2s1605%20W%20University%20Pkwy%2C%20Sarasota%2C%20FL%2034243!5e1!3m2!1sen!2sus!4v1741732206596!5m2!1sen!2sus"
                                                width="600"
                                                height="400"
                                                className="rounded-lg shadow-lg"
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                          />
                                    </div>
                                    <div className="w-full">
                                          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
                                                <div className="mb-4">
                                                      <label htmlFor="name" className="block font-bold mb-2">
                                                            Name
                                                      </label>
                                                      <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                                                      />
                                                </div>

                                                <div className="mb-4">
                                                      <label htmlFor="email" className="block font-bold mb-2">
                                                            Email
                                                      </label>
                                                      <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                                                      />
                                                </div>

                                                <div className="mb-4">
                                                      <label htmlFor="phone" className="block font-bold mb-2">
                                                            Phone
                                                      </label>
                                                      <input
                                                            type="tel"
                                                            id="phone"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                                                      />
                                                </div>

                                                <div className="mb-4">
                                                      <label htmlFor="serviceType" className="block font-bold mb-2">
                                                            Interested In
                                                      </label>
                                                      <select
                                                            id="serviceType"
                                                            name="serviceType"
                                                            value={formData.serviceType}
                                                            onChange={handleChange}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                                                      >
                                                            <option value="uncovered-parking">Uncovered Parking</option>
                                                            <option value="covered-parking">Covered Parking</option>
                                                            <option value="storage-unit">Storage Unit (8x20)</option>
                                                            <option value="indoor-car">Indoor Car Storage</option>
                                                            <option value="office-space">Office Space Rental</option>
                                                            <option value="other">Other</option>
                                                      </select>
                                                </div>

                                                <div className="mb-4">
                                                      <label htmlFor="message" className="block font-bold mb-2">
                                                            Message
                                                      </label>
                                                      <textarea
                                                            id="message"
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            rows="4"
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 resize-y"
                                                      ></textarea>
                                                </div>

                                                <button
                                                      type="submit"
                                                      className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-md hover:bg-red-700 transition"
                                                >
                                                      Send Inquiry
                                                </button>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </section>
                  <Footer />
            </>
      );
}
