import React, { useState } from 'react';
import Link from 'next/link';
import { languages } from '@/app/i18n/settings';

const languageNames = {
  en: 'English',
  zh: '中文'
};

const LanguageBase = ({ t, lng, second }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 dark:text-gray-300">
        {t('selectLanguage')}
      </span>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-white/10 hover:bg-white/20 transition-colors border border-gray-200 dark:border-gray-700"
          aria-label="Select language"
        >
          <span>{t('languageName')}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div 
            className="absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 min-w-[120px]"
            onBlur={() => setIsOpen(false)}
          >
            <div className="py-1">
              {languages
                .filter((l) => lng !== l)
                .map((l) => (
                  <Link
                    key={l}
                    href={second ? `/${l}/${second}` : `/${l}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-center"
                  >
                    {languageNames[l]}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageBase;