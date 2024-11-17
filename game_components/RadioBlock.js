'use client'

import React, { useState } from 'react';

const RadioBlock = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-4 border rounded shadow-md"> 
      <h2 className="text-xl font-bold mb-4">How many types of Sprunki games have you played?</h2>
      <div className="flex flex-col space-y-2">
        <label className="flex items-center">
          <input
            type="radio"
            value="1"
            checked={selectedOption === '1'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          1
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="2"
            checked={selectedOption === '2'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          2
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="3"
            checked={selectedOption === '3'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          3
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="4"
            checked={selectedOption === '4'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          4
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="5"
            checked={selectedOption === '5'}
            onChange={handleOptionChange}
            className="mr-2"
          />
          5
        </label>
      </div>
    </div>
  );
};

export default RadioBlock;