// LanguageToggleButton.jsx
import React, { useState } from 'react';

const LanguageToggleButton = ({ toggleLanguage, language }) => {

  return (
    <button
      onClick={toggleLanguage}
      className="w-full max-phone:fit relative max-phone:text-[7vw] px-4 py-2 active:bg-slate-100 hover:scale-105 dark:hover:scale-105 dark:active:scale-100 text-gray-700 font-bold  dark:border-gray-700 border-gray-200 border-2 rounded-md shadow-md dark:text-white dark:hover:bg-slate-700  hover:border-gray-300 hover:border-2 transition duration-300 group"
      >
      {language === 'en' ? 'Cambiar idioma al Español' : 'Switch language to English'}
    </button>
  );
};

export default LanguageToggleButton;
