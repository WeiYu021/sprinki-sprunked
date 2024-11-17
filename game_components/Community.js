import React from 'react';

const Community = () => {
  return (
    <div className="mx-auto p-10 border-t border-b border-gray-300" id="community">
      <h2 className="text-2xl font-extrabold mb-6">Join the Sprunki Community</h2>
      <p className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
        Connect with fellow Sprunki enthusiasts and share your musical journey!
      </p>

      <h3 className="text-xl font-extrabold mb-4">Online Forums</h3>
      <p className="text-base-content/80 leading-relaxed mb-6">
        Join discussions on Reddit and Discord servers dedicated to Incredibox and Sprunki. Share your mixes, get feedback, and collaborate with other creators.
      </p>

      <h3 className="text-xl font-extrabold mb-4">Social Media</h3>
      <p className="text-base-content/80 leading-relaxed mb-6">
        Follow Incredibox accounts on platforms like Twitter and Instagram for the latest updates and community highlights.
      </p>

      <h3 className="text-xl font-extrabold mb-4">Local Events</h3>
      <p className="text-base-content/80 leading-relaxed mb-6">
        While not specifically Sprunki-related, check out community events platforms for music and tech gatherings in your area:
      </p>
      <ul className="list-disc list-inside text-base-content/80 leading-relaxed mb-6">
        <li className="mb-4">All Community Events - Find local festivals and gatherings that might inspire your Sprunki creations.</li>
        <li className="mb-4">City of Xenia Community Events - An example of local event listings that might feature music-related activities.</li>
      </ul>

      <h3 className="text-xl font-extrabold mb-4">Virtual Meetups</h3>
      <p className="text-base-content/80 leading-relaxed mb-6">
        Organize or participate in online Sprunki jam sessions or mix-sharing events through platforms like Discord or Zoom.
      </p>
    </div>
  );
};

export default Community;