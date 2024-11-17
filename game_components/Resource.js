import React from 'react';

const Resource = () => {
  return (
    <div className="mx-auto p-10 border-t border-b border-gray-300" id="resource">
      <h2 className="text-2xl font-extrabold mb-6">SPrunki Resources</h2>
      <p className="lg:text-lg text-base-content/80 leading-relaxed mb-8">
        Enhance your Sprunki experience with these helpful tools and guides!
      </p>

      <h3 className="text-xl font-extrabold mb-4">Incredibox Website</h3>
      <p className="text-base-content/80 leading-relaxed mb-6">
        Incredibox - Access the original game, get updates, and explore content that inspires Sprunki.
      </p>

      <h3 className="text-xl font-extrabold mb-4">Sprunki Game</h3>
      <p className="text-base-content/80 leading-relaxed mb-6">
        Play Incredibox Sprunki - Create unique music mixes with Sprunki characters in this fan-made adaptation.
      </p>

      <h3 className="text-xl font-extrabold mb-4">Tutorial Videos</h3>
      <p className="text-base-content/80 leading-relaxed mb-6">
        Search for &quot;Incredibox tutorials&quot; on YouTube to find comprehensive guides on creating music, which can be applied to Sprunki gameplay.
      </p>

      <h3 className="text-xl font-extrabold mb-4">Community Guides</h3>
      <p className="text-base-content/80 leading-relaxed mb-6">
        Explore user-created content on platforms like Reddit and Discord for tips, tricks, and advanced techniques specific to Sprunki.
      </p>

      <h3 className="text-xl font-extrabold mb-4">Inspiration Sources</h3>
      <ul className="list-disc list-inside text-base-content/80 leading-relaxed mb-6">
        <li className="mb-4">
          Green Cove Springs Special Events - Example of local music festivals that could inspire your Sprunki mixes.
        </li>
        <li className="mb-4">
          Carderock Community Events - Another source for community gatherings that might feature unique sounds and musical styles.
        </li>
      </ul>
    </div>
  );
};

export default Resource;