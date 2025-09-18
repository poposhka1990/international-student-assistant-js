import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, GraduationCap, HelpCircle, AlertCircle, } from 'lucide-react';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';
import LocationMap from '../components/LocationMap';
import { useLanguage } from '../context/LanguageContext';
import heroImage from '../img/hero.jpg';
import newsImage from '../img/news.jpg';

const Home = () => {
  const { t, language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
          {t('home.subtitle')}
        </p>
      </section>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >

      {/* Quick Links */}
        <motion.section 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <Link to="/services" className="group">
            <div className="h-full p-6 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors flex flex-col">
              <BookOpen className="h-8 w-8 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{t('home.services')}</h2>
              <p className="text-blue-100 mt-auto">{t('home.services.desc')}</p>
            </div>
          </Link>
          
          <Link to="/documents" className="group">
            <div className="h-full p-6 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors flex flex-col">
              <FileText className="h-8 w-8 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{t('home.documents')}</h2>
              <p className="text-green-100 mt-auto">{t('home.documents.desc')}</p>
            </div>
          </Link>
          
          <Link to="/student-guide" className="group">
            <div className="h-full p-6 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors flex flex-col">
              <GraduationCap className="h-8 w-8 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{t('home.guide')}</h2>
              <p className="text-purple-100 mt-auto">{t('home.guide.desc')}</p>
            </div>
          </Link>

          <Link to="/faq" className="group">
            <div className="h-full p-6 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors flex flex-col">
              <HelpCircle className="h-8 w-8 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{t('home.faq')}</h2>
              <p className="text-orange-100 mt-auto">{t('home.faq.desc')}</p>
            </div>
          </Link>
        </motion.section>
      </motion.div>

      <img
        src={heroImage}
        alt="hero-image"
        className="w-full h-auto rounded-lg mb-6 object-cover
        md:w-1/2 md:mx-auto"
      />

              {/* News Section */}
        <motion.section 
          variants={itemVariants}
          className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg shadow-lg p-6 border-l-4 border-red-500"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
            <AlertCircle className="w-6 h-6 mr-2 text-red-500" />
            {language === 'ru' ? 'Важные новости' : 'Important News'}
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {language === 'ru' 
                  ? 'С 1 сентября 2025 года оформление временной регистрации в России стало платной услугой‼️'
                  : 'From September 1, 2025, temporary registration in Russia has become a paid service‼️'
                }
            </h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
          
              <p>
                {language === 'ru'
                  ? 'Оплата будет производиться вами лично в банке или через банковское приложение. Реквизиты для банка и стоимость уточняйте в международном отделе.'
                  : 'Payment will be made personally at the bank or through a banking application. Please check the details for a bank and the price with the international department.'
                }
              </p>
            </div>
          </div>

                    <img
              src={newsImage}
              alt="news-about-registration"
              className="
                      w-full h-auto rounded-lg mb-6 object-cover
                     md:w-1/6 md:max-w-[400px] md:mx-auto md:block
                  "
          />
        </motion.section>

      <LocationMap />

      {/* Social Links */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white text-gray-900">{t('home.social')}</h2>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://vk.com/club223524127" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('home.vk')}
          </a>
          <a 
            href="https://t.me/petrsu_international" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t('home.telegram')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;