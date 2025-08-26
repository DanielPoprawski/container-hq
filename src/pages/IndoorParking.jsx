import ImageSlider from '../components/ImageSlider';
import { Car, Shield, Battery, Shirt, Wrench } from 'lucide-react';

export default function IndoorParking() {
        const indoorImages = [
                {
                        src: "/api/placeholder/800/600",
                        alt: "Indoor parking garage overview",
                        caption: "Climate-Controlled Garage",
                        description: "Spacious indoor facility with dedicated parking spaces"
                },
                {
                        src: "/api/placeholder/800/600", 
                        alt: "Cars parked in climate controlled environment",
                        caption: "Premium Vehicle Storage",
                        description: "Your car stays protected from weather and elements"
                },
                {
                        src: "/api/placeholder/800/600",
                        alt: "Security monitoring system",
                        caption: "24/7 Security Monitoring",
                        description: "Advanced security systems keep your vehicle safe"
                },
                {
                        src: "/api/placeholder/800/600",
                        alt: "Battery charging station",
                        caption: "Battery Maintenance",
                        description: "Trickle charging keeps your battery in perfect condition"
                },
                {
                        src: "/api/placeholder/800/600",
                        alt: "Car covers and protection",
                        caption: "Premium Car Covers",
                        description: "High-quality covers provide additional protection"
                }
        ];

        return (
                <div className="min-h-screen">
                        {/* Hero Section with Slider */}
                        <div className="relative">
                                <ImageSlider images={indoorImages} />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                        <div className="text-center text-white px-4">
                                                <h1 className="text-4xl md:text-6xl font-bold mb-4">Indoor Car Storage</h1>
                                                <p className="text-xl md:text-2xl max-w-3xl">Premium climate-controlled storage for your prized vehicles</p>
                                        </div>
                                </div>
                        </div>

                        {/* Content Section */}
                        <div className="container mx-auto py-16 px-4 max-w-6xl">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                        {/* Left Column - Text Content */}
                                        <div>
                                                <h2 className="text-3xl font-bold mb-6">Perfect for Every Occasion</h2>
                                                
                                                <div className="space-y-4 mb-8">
                                                        <div className="flex items-start space-x-3">
                                                                <Car className="w-6 h-6 text-red-600 mt-1" />
                                                                <div>
                                                                        <h3 className="font-semibold">Renovating your garage?</h3>
                                                                        <p className="text-gray-600">Keep your car safe while you upgrade your home</p>
                                                                </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                                <Shield className="w-6 h-6 text-red-600 mt-1" />
                                                                <div>
                                                                        <h3 className="font-semibold">Taking an extended vacation?</h3>
                                                                        <p className="text-gray-600">Travel with peace of mind knowing your vehicle is secure</p>
                                                                </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                                <Shirt className="w-6 h-6 text-red-600 mt-1" />
                                                                <div>
                                                                        <h3 className="font-semibold">Going home for the season?</h3>
                                                                        <p className="text-gray-600">Seasonal storage with all the amenities your car needs</p>
                                                                </div>
                                                        </div>
                                                </div>

                                                <p className="text-lg mb-8 leading-relaxed">
                                                        Our indoor car storage service provides security and peace of mind for your vehicle at a competitive price and an even better location. Every storage package is designed to keep your car in perfect condition.
                                                </p>
                                        </div>

                                        {/* Right Column - Features & Pricing */}
                                        <div className="bg-white rounded-lg shadow-lg p-8">
                                                <h3 className="text-2xl font-bold mb-6 text-center">What's Included</h3>
                                                
                                                <ul className="space-y-4 mb-8">
                                                        <li className="flex items-center space-x-3">
                                                                <Shield className="w-5 h-5 text-green-600" />
                                                                <span>Dedicated parking space in climate-regulated garage</span>
                                                        </li>
                                                        <li className="flex items-center space-x-3">
                                                                <Shield className="w-5 h-5 text-green-600" />
                                                                <span>24/7 security monitoring and surveillance</span>
                                                        </li>
                                                        <li className="flex items-center space-x-3">
                                                                <Battery className="w-5 h-5 text-green-600" />
                                                                <span>Battery trickle charging to maintain charge</span>
                                                        </li>
                                                        <li className="flex items-center space-x-3">
                                                                <Shirt className="w-5 h-5 text-green-600" />
                                                                <span>Premium car cover protection</span>
                                                        </li>
                                                        <li className="flex items-center space-x-3">
                                                                <Wrench className="w-5 h-5 text-green-600" />
                                                                <span>Tire pressure monitoring</span>
                                                        </li>
                                                </ul>

                                                <div className="text-center border-t pt-6">
                                                        <div className="text-4xl font-bold text-red-600 mb-2">$225</div>
                                                        <div className="text-lg text-gray-600 mb-4">per month</div>
                                                        <p className="text-green-600 font-semibold mb-6">NO Additional fees or deposits!</p>
                                                        
                                                        <div className="space-y-3">
                                                                <a 
                                                                        href="tel:9413018319"
                                                                        className="block w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition text-center"
                                                                >
                                                                        Reserve Your Space
                                                                </a>
                                                                <a 
                                                                        href="mailto:info@container-hq.com"
                                                                        className="block w-full border border-red-600 text-red-600 py-3 px-6 rounded-lg font-semibold hover:bg-red-50 transition text-center"
                                                                >
                                                                        Get More Info
                                                                </a>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                {/* Additional Services */}
                                <div className="mt-16">
                                        <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg text-center mb-8">
                                                <h3 className="text-3xl font-bold mb-4">Coming Soon!</h3>
                                                <p className="text-xl">Airport shuttle service for added convenience</p>
                                        </div>

                                        <div className="bg-gray-50 p-8 rounded-lg text-center">
                                                <h4 className="text-xl font-semibold mb-4">Additional Services Available</h4>
                                                <p className="text-lg">Professional car wash and detailing services available upon request.</p>
                                                <p className="text-gray-600 mt-2">Contact us for pricing and packages.</p>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}