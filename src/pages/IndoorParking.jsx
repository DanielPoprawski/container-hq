export default function IndoorParking() {
        return (
          <div className="container mx-auto py-32 px-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-4">Indoor Parking</h1>
            <h2 className="text-2xl font-bold mb-3">Renovating your Garage?</h2>
            
            <p className="text-lg mb-4">
              Taking an extended vacation? Going home for the season?
            </p>
            
            <p className="text-lg mb-4">
              Our indoor car storage service provides security and peace of mind for your vehicle at a competitive price and an even better location. Our indoor package includes:

              {/* Slider wrapped around full screen */}
              
            </p>
            
            <ul className="list-disc pl-6 mb-6 text-lg">
              <li className="mb-2">A dedicated parking space in a climate regulated and 24/7 monitored garage</li>
              <li className="mb-2">Battery charging</li>
              <li className="mb-2">Car cover</li>
            </ul>
            
            <p className="text-xl font-semibold mb-2">All for just $225 a month!</p>
            <p className="text-lg font-bold mb-6">NO Additional fees or deposits!!</p>
            
            <div className="bg-red-600 text-white p-4 rounded-lg mb-6 shadow-md">
              <p className="text-2xl font-semibold text-center">Airport shuttle coming soon!</p>
            </div>
            
            <p className="text-lg italic"> Wash services available on request, inquire for details</p>
          </div>
        );
      }