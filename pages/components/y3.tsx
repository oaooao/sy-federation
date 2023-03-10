import React from 'react';

const CrowdAuthActivityDetail = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-lg font-semibold mb-4">Crowd Authentication Activity Detail</h2>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor odio non pharetra euismod. Sed laoreet rutrum felis, et pharetra velit efficitur quis.</p>
        <ul className="list-disc pl-8">
          <li>Activity Date: March 10, 2023</li>
          <li>Location: New York, NY</li>
          <li>Attendees: 50</li>
        </ul>
      </div>
    </div>
  );
};

export default CrowdAuthActivityDetail;
