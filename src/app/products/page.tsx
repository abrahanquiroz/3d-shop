import React from "react";

const Products = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-center text-3xl font-semibold text-gray-800 capitalize">
            Premium
          </h2>
          <h3 className="mt-4 text-center text-2xl font-semibold text-gray-600">
            Features:
          </h3>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Access to limited 3D models
            </li>
            <li className="flex items-center">
                <svg
                    className="w-6 h-6 mr-3 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                24/7 customer support
            </li>
            <li className="flex items-center">
                <svg
                    className="w-6 h-6 mr-3 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12" y2="16"></line>
                </svg>
                New models every week
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12" y2="16"></line>
              </svg>
              Monthly newsletter
            </li>
          </ul>
          <div className="mt-8 text-center">
            <span className="text-5xl font-bold text-gray-800">$0</span>
            <span className="text-xl font-medium text-gray-600 ml-2">/month</span>
        </div>
          <div className="mt-8 text-center">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
};

export default Products;
