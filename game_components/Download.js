import React from 'react';

const Download = () => {
  return (
    <div className="p-10 bg-white mx-auto border-t border-b border-gray-300" id="download">
      <h2 className="text-2xl font-extrabold mb-4">Download Sprunki Incredibox</h2>
      <p className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">Get started with Sprunki Incredibox today! Choose your preferred platform:</p>
      <div className="space-y-4">
        <div>
          <a href="#" className="text-blue-500 hover:underline">Sprunki Incredibox Website</a>
        </div>
        <div>
          <a href="#" className="text-blue-500 hover:underline">Sprunki Incredibox on App Store</a>
        </div>
        <div>
          <a href="#" className="text-blue-500 hover:underline">Sprunki Incredibox on Google Play Store</a>
        </div>
        <div>
          <a href="#" className="text-blue-500 hover:underline">Sprunki Incredibox APK Download</a>
        </div>
        <div>
          <a href="#" className="text-blue-500 hover:underline">Sprunki Incredibox on Itch.io</a>
        </div>
      </div>
    </div>
  );
};

export default Download;