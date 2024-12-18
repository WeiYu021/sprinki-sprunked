'use client'

import React, { useState } from 'react';
// import { useTranslation } from '../app/i18n/client'

const RadioBlock = () => {
  // const { t } = useTranslation(lng, 'components')
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

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
  );
};

export default RadioBlock;