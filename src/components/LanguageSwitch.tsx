import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg dark:text-gray-300 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Switch language"
    >
      <span className="font-medium">{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitch;