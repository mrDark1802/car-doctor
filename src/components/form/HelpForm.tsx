import React, { useState } from 'react';

const HelpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [issue, setIssue] = useState('');
  const [location, setLocation] = useState('');
  const [fetchingLocation, setFetchingLocation] = useState(false);
  const [locationStatus, setLocationStatus] = useState('');

  const handleSubmit = () => {
    const phoneNumber = '7018614030';
    const message = `🚨 *Help Needed!*\n\n👤 *Name:* ${name}\n⚠️ *Issue:* ${issue}\n📍 *Location:* ${location}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const fetchCurrentLocation = () => {
    setFetchingLocation(true);
    setLocationStatus('Fetching your location...');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const mapsLink = `https://maps.google.com/?q=${latitude},${longitude}`;
        setLocation(mapsLink);
        setLocationStatus('Location fetched successfully!');
        setFetchingLocation(false);
      },
      (err) => {
        console.log("err::::::::::", err);
        setLocationStatus('Unable to fetch location. Please allow permission.');
        setFetchingLocation(false);
      }
    );
  };

  const isFormComplete = name.trim() && issue.trim() && location.trim();

  return (
    <section className="max-w-xl mx-auto p-8 bg-gradient-to-tr from-white to-gray-50 border border-gray-200 rounded-3xl shadow-xl mt-12 hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">🚗 Need Immediate Help?</h2>
      <p className="mb-6 text-center text-gray-600 text-lg">
        Fill the form and we’ll reach you in <span className="text-green-600 font-bold">15 minutes</span>!
      </p>

      <div className="space-y-5">
        <input
          type="text"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 shadow-sm placeholder-gray-400"
        />

        <textarea
          placeholder="Describe the issue (e.g., flat tire, engine issue)"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 shadow-sm placeholder-gray-400 h-28 resize-none"
        />

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your Location (Google Maps link or address)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 shadow-sm placeholder-gray-400"
          />

          <button
            type="button"
            onClick={fetchCurrentLocation}
            className="text-sm text-green-600 hover:underline flex items-center gap-1"
          >
            {fetchingLocation ? 'Getting current location...' : '📍 Use my current location'}
          </button>

          {locationStatus && (
            <p className="text-sm text-gray-500 italic transition-opacity duration-300">{locationStatus}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isFormComplete}
          className={`w-full py-4 rounded-xl font-semibold text-white flex justify-center items-center gap-2 transition-all duration-300 transform ${
            isFormComplete
              ? 'bg-green-600 hover:bg-green-700 hover:-translate-y-1 hover:shadow-lg'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          Send to WhatsApp
        </button>
      </div>
    </section>
  );
};

export default HelpForm;
