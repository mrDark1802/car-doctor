import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-blue-600 mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Oops! Your Car Took a Wrong Turn
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Looks like this page is off the road. Don’t worry, Car Doctor is here to get you back on track in 15 minutes or less!
        </p>
      </div>

      {/* Illustration or Icon */}
      <div className="mb-8">
        <span className="text-6xl md:text-7xl">🚗💥</span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-800 text-white hover:bg-gray-900 py-3 px-6 rounded-full font-semibold transition duration-300"
        >
          Go Back
        </button>
        <Link to="/">
          <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 py-3 px-6 rounded-full font-semibold transition duration-300">
            Return to Home
          </button>
        </Link>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Need roadside assistance?{' '}
          <Link to="/#help-form" className="text-blue-600 hover:underline font-semibold">
            Get help now
          </Link>
        </p>
      </div>
    </div>
  );
}