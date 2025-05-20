export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Car Doctor</h3>
              <p className="text-gray-400">
                Your reliable partner for roadside assistance and car repairs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
              <p className="text-gray-400">Email: help@cardoctor.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-gray-400">24/7 Emergency Service</p>
              <p className="text-gray-400">Always available when you need us</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Car Doctor. All rights reserved.</p>
          </div>
        </div>
      </footer>
);