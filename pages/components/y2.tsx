import React from 'react';

const CrowdAuth: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Crowd Authentication
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            vestibulum magna, eget fermentum justo.
          </p>
        </div>
        <div className="px-4 py-3 bg-gray-100 sm:px-6">
          <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Authenticate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrowdAuth;
