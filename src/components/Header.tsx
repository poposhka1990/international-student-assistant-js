import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="./src/img/logo.png" 
              alt="ПетрГУ"
              className="h-8"
            />
            <h1 className="hidden md:block text-xl font-semibold dark:text-gray-100 text-gray-900">
              {t('home.title')}
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="dark:text-gray-300 text-gray-700 hover:text-gray-900 dark:hover:text-white">
              {t('nav.services')}
            </Link>
            <Link to="/documents" className="dark:text-gray-300 text-gray-700 hover:text-gray-900 dark:hover:text-white">
              {t('nav.documents')}
            </Link>
            <Link to="/student-guide" className="dark:text-gray-300 text-gray-700 hover:text-gray-900 dark:hover:text-white">
              {t('nav.checklist')}
            </Link>
            <Link to="/faq" className="dark:text-gray-300 text-gray-700 hover:text-gray-900 dark:hover:text-white">
              {t('nav.faq')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/#visa-calculator"
              className="p-2 rounded-lg dark:text-gray-300 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title={t('home.visa')}
            >
              <Calendar className="h-5 w-5" />
            </Link>
            
            <LanguageSwitch />
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg dark:text-gray-300 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button 
              className="md:hidden p-2 dark:text-gray-300 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 text-gray-700 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link
                to="/documents"
                className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 text-gray-700 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.documents')}
              </Link>
              <Link
                to="/student-guide"
                className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 text-gray-700 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.checklist')}
              </Link>
              <Link
                to="/faq"
                className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 text-gray-700 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.faq')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;