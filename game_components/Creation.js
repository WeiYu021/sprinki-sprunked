import React from 'react';

const Lore = () => {
  return (
    <div className="mx-auto p-10 border-t border-b border-gray-300" id="creation">
      <h2 className="text-2xl font-extrabold mb-6">Sprunki Creations</h2>
      <p className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
        Explore the boundless creativity of the Sprunki community and unleash your own artistic potential!
      </p>

      <h3 className="text-xl font-extrabold mb-4">Music Mixes</h3>
      <ul className="text-base-content/80 leading-relaxed mb-6 list-disc list-inside">
        <li className="mb-4">Community Compositions: Discover unique tracks created by fellow Sprunki enthusiasts on YouTube and SoundCloud.</li>
        <li className="mb-4">Share Your Mixes: Create and share your own musical masterpieces directly from the game or on social media platforms.</li>
        <li className="mb-4">Mix Challenges: Participate in community events and themed challenges to showcase your skills and get inspired.</li>
      </ul>

      <h3 className="text-xl font-extrabold mb-4">Fan Art</h3>
      <ul className="text-base-content/80 leading-relaxed mb-6 list-disc list-inside">
        <li className="mb-4">Visual Interpretations: Explore stunning artworks that bring Sprunki characters to life in various styles and mediums.</li>
        <li className="mb-4">Art Contests: Join DeviantArt or follow #SprunkinArt on social media to participate in fan art contests.</li>
        <li className="mb-4">Showcase Your Art: Share your Sprunki-inspired creations using hashtags like #SprunkinFanArt to connect with the community.</li>
      </ul>

      <h3 className="text-xl font-extrabold mb-4">Character Creation</h3>
      <ul className="text-base-content/80 leading-relaxed mb-6 list-disc list-inside">
        <li className="mb-4">Design Your Sprunki: Use online tools or your preferred art software to create your own unique Sprunki character.</li>
        <li className="mb-4">Contribute to the Universe: Share your character designs and see them come to life in others&apos; mixes and stories.</li>
        <li className="mb-4">Character Galleries: Submit your creations to community-run character showcases and galleries.</li>
      </ul>

      <h3 className="text-xl font-extrabold mb-4">Resources for Creators</h3>
      <ul className="text-base-content/80 leading-relaxed mb-6 list-disc list-inside">
        <li className="mb-4">Tutorials: Check out our tutorial section for guides on music mixing, digital art, and character design.</li>
        <li className="mb-4">Community Forums: Join discussions and share your work on the Incredibox subreddit or our Discord server.</li>
        <li className="mb-4">Collaboration Corner: Find fellow creators to collaborate on Sprunki-inspired projects in our collaboration forum.</li>
      </ul>

      <p className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
        Whether you&apos;re a musician, artist, or designer, there&apos;s a place for you in the vibrant world of Sprunki! Share your creations and become part of our growing community of creators.
      </p>
    </div>
  );
};

export default Lore;