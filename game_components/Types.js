import React from 'react';
import RadioBlock from '@/game_components/RadioBlock';

const SmallTypes = ({ gameName, gameIntro, feature1, feature2, feature3, tag1, tag2, tag3 }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">{gameName}</h3>
      <p className="text-gray-700 mb-4">{gameIntro}</p>

      <ul className="list-disc list-inside mb-4">
        <li>{feature1}</li>
        <li>{feature2}</li>
        <li>{feature3}</li>
      </ul>
      <div className="flex space-x-2">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">{tag1}</span>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">{tag2}</span>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">{tag3}</span>
      </div>
    </div>
  );
};

const Types = ({ title, description }) => {
  return (
    <div className="container mx-auto p-8 border-t border-b border-gray-300" id="types">
      <h2 className="text-2xl font-extrabold mb-4">{title}</h2>
      <p className="text-lg opacity-80 mb-4">{description}</p>
      <RadioBlock />
      <div className="mt-8 space-y-4">
        <SmallTypes
          gameName="Sprunki Sprunked"
          gameIntro="Embark on a musical adventure with The New Sprunki Sprunked, a game that lets you create original tracks by combining beats, sounds, and characters in a vibrant and interactive world.。"
          feature1="Easy Drag-and-Drop Controls: Intuitive gameplay that allows you to focus on the music, not the mechanics."
          feature2="Endless Musical Possibilities: With a variety of characters and sounds, every choice leads to a new and unique beat."
          feature3="Creative and Addictive Gameplay: Dive into a game that stimulates your creativity and keeps you coming back for more."
          tag1="Interactive Music-Making"
          tag2="Vibrant World"
          tag3="Creative Adventure
"
        />
        <SmallTypes
          gameName="Sprunki Sprunked 2.0"
          gameIntro="Dare to step into the enhanced world of Sprunki Sprunked 2.0, where every character and sound has been reimagined with a horror twist. This mod takes the original series to new heights of fear and creativity."
          feature1="Horror-Inspired Characters: Each character has been redesigned with a terrifying touch, making your music as scary as it is catchy."
          feature2="Engaging Atmosphere: The game's chilling visuals and soundscapes pull you into a world of fear, where every beat has a bite."
          feature3="Unlockable Sound Effects: Discover special sound effects by combining characters in unique ways, adding a layer of depth to your musical compositions."
          tag1="Horror Themed"
          tag2="Enhanced Characters"
          tag3="Interactive Music-Making"
        />
        <SmallTypes
          gameName="Sprunked x Sprunki"
          gameIntro="Experience the fusion of two worlds with Sprunked x Sprunki, a mod that blends the dark essence of Sprunked with the playful traits of Sprunki, creating a horror-themed ambiance that's perfect for music lovers with a taste for the macabre."
          feature1="Redesigned Characters: A mix of Sprunked's darkness and Sprunki's playfulness, these characters offer a fresh take on the Incredibox universe."
          feature2="Immersive Atmosphere: Dark visuals and shadowy backgrounds envelop you in a horror-themed environment that enhances your musical experience."
          feature3="Enhanced Sound Effects: Add depth to your compositions with improved sound effects that keep the core gameplay mechanics intact."
          tag1="Dark Essence"
          tag2="Horror Ambiance"
          tag3="Musical Depth"
        />
      </div>
    </div>
  );
};

export default Types;