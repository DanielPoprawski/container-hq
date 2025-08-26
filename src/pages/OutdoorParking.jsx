export default function OutdoorParking() {
        return (
                <div className="container mx-auto py-32 px-4">
                        <h1 className="text-4xl font-bold text-center mb-8">Outdoor Vehicle Storage</h1>
                        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                                Secure outdoor parking solutions for cars, boats, RVs, and trailers with both covered and uncovered options to meet your storage needs.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                {/* Uncovered Parking */}
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                        <div className="bg-red-600 text-white p-6 text-center">
                                                <h2 className="text-2xl font-bold">Uncovered Parking</h2>
                                                <p className="mt-2">Open-air storage for vehicles of all sizes</p>
                                        </div>
                                        <div className="p-8">
                                                <div className="mb-6">
                                                        <h3 className="text-xl font-semibold mb-4">Perfect for:</h3>
                                                        <ul className="list-disc pl-6 space-y-2">
                                                                <li>Cars and motorcycles</li>
                                                                <li>Boats and jet skis</li>
                                                                <li>RVs and travel trailers</li>
                                                                <li>Work trailers and equipment</li>
                                                        </ul>
                                                </div>
                                                
                                                <div className="mb-6">
                                                        <h3 className="text-xl font-semibold mb-4">Pricing:</h3>
                                                        <div className="space-y-3">
                                                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                                                        <span>Up to 20ft</span>
                                                                        <span className="font-bold text-red-600">$125/month</span>
                                                                </div>
                                                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                                                        <span>Up to 30ft</span>
                                                                        <span className="font-bold text-red-600">$180/month</span>
                                                                </div>
                                                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                                                        <span>Up to 40ft</span>
                                                                        <span className="font-bold text-red-600">$200/month</span>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div className="mb-6">
                                                        <h3 className="text-xl font-semibold mb-4">Features:</h3>
                                                        <ul className="list-disc pl-6 space-y-2">
                                                                <li>24/7 security monitoring</li>
                                                                <li>Gated access with keypad entry</li>
                                                                <li>Well-maintained gravel surfaces</li>
                                                                <li>Easy access for oversized vehicles</li>
                                                                <li>No long-term contracts required</li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>

                                {/* Covered Parking */}
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                        <div className="bg-red-600 text-white p-6 text-center">
                                                <h2 className="text-2xl font-bold">Covered Parking</h2>
                                                <p className="mt-2">Weather protection for your valuable assets</p>
                                        </div>
                                        <div className="p-8">
                                                <div className="mb-6">
                                                        <h3 className="text-xl font-semibold mb-4">Perfect for:</h3>
                                                        <ul className="list-disc pl-6 space-y-2">
                                                                <li>Classic and luxury cars</li>
                                                                <li>Boats requiring weather protection</li>
                                                                <li>RVs and motorhomes</li>
                                                                <li>Seasonal storage needs</li>
                                                        </ul>
                                                </div>
                                                
                                                <div className="mb-6">
                                                        <h3 className="text-xl font-semibold mb-4">Pricing:</h3>
                                                        <div className="space-y-3">
                                                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                                                        <span>Up to 20ft</span>
                                                                        <span className="font-bold text-red-600">$150/month</span>
                                                                </div>
                                                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                                                        <span>Up to 30ft</span>
                                                                        <span className="font-bold text-red-600">$200/month</span>
                                                                </div>
                                                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                                                        <span>Up to 40ft</span>
                                                                        <span className="font-bold text-red-600">$400/month</span>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div className="mb-6">
                                                        <h3 className="text-xl font-semibold mb-4">Features:</h3>
                                                        <ul className="list-disc pl-6 space-y-2">
                                                                <li>Protection from sun, rain, and weather</li>
                                                                <li>Covered structure with open sides</li>
                                                                <li>24/7 security monitoring</li>
                                                                <li>Gated access with keypad entry</li>
                                                                <li>Concrete flooring</li>
                                                                <li>Easy drive-through access</li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-12">
                                <h3 className="text-2xl font-bold mb-4">Ready to Store Your Vehicle?</h3>
                                <p className="text-lg text-gray-600 mb-6">
                                        Contact us today to reserve your parking space or schedule a visit to our facility.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                        <a 
                                                href="tel:9413018319"
                                                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                                        >
                                                Call (941) 301-8319
                                        </a>
                                        <a 
                                                href="mailto:info@container-hq.com"
                                                className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
                                        >
                                                Email Us
                                        </a>
                                </div>
                        </div>
                </div>
        );
}