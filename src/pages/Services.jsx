import { Navigate } from "react-router"

export default function Services() {
        return <><section id="services" className="py-20 bg-gray-100">
        <div className="mx-auto px-16">
              <h2 className="text-3xl font-bold text-center my-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-red-600 after:mx-auto after:mt-4">
                    Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
                          <h3 className="text-3xl font-bold mb-3 text-center after:block after:w-[80%] after:h-0.5 after:bg-gray-300 after:my-2 after:mx-auto">Indoor Car Storage</h3>
                          <img src="https://placehold.co/600x400.png"/>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1" onClick={Navigate('/services/outdoor-parking')}>
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
  </section></>
}