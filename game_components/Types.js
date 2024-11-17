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
          gameName="游戏1"
          gameIntro="这是游戏1的介绍。"
          feature1="特点1"
          feature2="特点2"
          feature3="特点3"
          tag1="标签1"
          tag2="标签2"
          tag3="标签3"
        />
        <SmallTypes
          gameName="游戏2"
          gameIntro="这是游戏2的介绍。"
          feature1="特点1"
          feature2="特点2"
          feature3="特点3"
          tag1="标签1"
          tag2="标签2"
          tag3="标签3"
        />
        <SmallTypes
          gameName="游戏3"
          gameIntro="这是游戏3的介绍。"
          feature1="特点1"
          feature2="特点2"
          feature3="特点3"
          tag1="标签1"
          tag2="标签2"
          tag3="标签3"
        />
      </div>
    </div>
  );
};

export default Types;