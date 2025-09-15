import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, GraduationCap, HelpCircle, Calendar, AlertCircle, RefreshCw } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { format, addMonths, differenceInMonths, subMonths, subWeeks } from 'date-fns';
import { ru, enUS } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const VisaCalculator = () => {
  const { t, language } = useLanguage();
  const [visaExpiryDate, setVisaExpiryDate] = useState<Date | null>(null);
  const [passportExpiryDate, setPassportExpiryDate] = useState<Date | null>(null);
  const [calculationResult, setCalculationResult] = useState<string | null>(null);
  const [calculationError, setCalculationError] = useState<string | null>(null);
  const [calendarLink, setCalendarLink] = useState<string | null>(null);
  
  const formatDisplayDate = (date: Date): string => {
    if (language === 'ru') {
      const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
      ];
      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    } else {
      return format(date, 'd MMMM yyyy', { locale: enUS });
    }
  };

  const generateCalendarLink = (date: Date) => {
    const eventTitle = encodeURIComponent('Крайний срок подачи документов на визу / Visa Apply Deadline');
    const startDate = format(date, "yyyyMMdd");
    const endDate = format(date, "yyyyMMdd");
    const details = encodeURIComponent(language === 'ru' 
      ? 'На этой неделе у вас крайний срок подачи документов на визу'
      : 'This week is the deadline for applying visa documents');
    
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDate}/${endDate}&details=${details}`;
  };

  const calculateVisaDeadline = () => {
    setCalculationError(null);
    setCalendarLink(null);
    
    if (!visaExpiryDate || !passportExpiryDate) {
      setCalculationError(language === 'ru' 
        ? 'Пожалуйста, выберите обе даты' 
        : 'Please select both dates');
      setCalculationResult(null);
      return;
    }
    
    const diffMonths = differenceInMonths(passportExpiryDate, visaExpiryDate);
    
    if (diffMonths >= 19) {
      const deadlineEnd = subMonths(visaExpiryDate, 1);
      const deadlineStart = subWeeks(deadlineEnd, 1);
      
      const calendarLinkText = language === 'ru'
        ? `\n\nДобавить напоминание в календарь`
        : `\n\nAdd reminder to calendar`;
      
      const resultRu = `Вам не нужно менять паспорт. Срок подачи документов на студенческую визу: с ${formatDisplayDate(deadlineStart)} по ${formatDisplayDate(deadlineEnd)}.${calendarLinkText}`;
      const resultEn = `You don't need to reissue a new passport. Your deadline for applying for a student visa is from ${formatDisplayDate(deadlineStart)} to ${formatDisplayDate(deadlineEnd)}.${calendarLinkText}`;
      
      setCalculationResult(language === 'ru' ? resultRu : resultEn);
      setCalendarLink(generateCalendarLink(deadlineStart));
    } else {
      const deadlineEnd = subMonths(visaExpiryDate, 2);
      const deadlineStart = subWeeks(deadlineEnd, 1);
      
      const calendarLinkText = language === 'ru'
        ? `\n\nДобавить напоминание в календарь`
        : `\n\nAdd reminder to calendar`;
      
      const resultRu = `Вам необходимо поменять паспорт. Если вы делаете это в России, срок подачи документов на студенческую визу: с ${formatDisplayDate(deadlineStart)} по ${formatDisplayDate(deadlineEnd)}. Если вы делаете это в своей стране, вам нужно будет запросить у нас новое приглашение.${calendarLinkText}`;
      const resultEn = `You need to change your passport. If you do so in Russia, your deadline for applying for a student visa is from ${formatDisplayDate(deadlineStart)} to ${formatDisplayDate(deadlineEnd)}. If you do so in your home country, you will need to ask us for a new invitation.${calendarLinkText}`;
      
      setCalculationResult(language === 'ru' ? resultRu : resultEn);
      setCalendarLink(generateCalendarLink(deadlineStart));
    }
  };
  
  const resetCalculator = () => {
    setVisaExpiryDate(null);
    setPassportExpiryDate(null);
    setCalculationResult(null);
    setCalculationError(null);
    setCalendarLink(null);
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

        {/* Visa Calculator */}
        <motion.section 
          variants={itemVariants}
          id="visa-calculator" 
          className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 scroll-mt-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Calendar className="w-6 h-6 mr-2" />
            {language === 'ru' ? 'Визовый калькулятор' : 'Visa Calculator'}
          </h2>
          
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl">
            {t('home.visa')}
          </p>
          <br />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {language === 'ru' ? 'Дата окончания вашей визы' : 'Your visa expiry date'}
                </label>
                <DatePicker
                  selected={visaExpiryDate}
                  onChange={(date) => setVisaExpiryDate(date)}
                  dateFormat="dd.MM.yyyy"
                  locale={language === 'ru' ? ru : enUS}
                  placeholderText={language === 'ru' ? 'Выберите дату' : 'Select date'}
                  className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  minDate={new Date()}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {language === 'ru' ? 'Дата окончания вашего паспорта' : 'Your passport expiry date'}
                </label>
                <DatePicker
                  selected={passportExpiryDate}
                  onChange={(date) => setPassportExpiryDate(date)}
                  dateFormat="dd.MM.yyyy"
                  locale={language === 'ru' ? ru : enUS}
                  placeholderText={language === 'ru' ? 'Выберите дату' : 'Select date'}
                  className="w-full px-4 py-2 rounded-md border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  minDate={new Date()}
                />
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={calculateVisaDeadline}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  {language === 'ru' ? 'Рассчитать' : 'Calculate'}
                </button>
                
                <button
                  onClick={resetCalculator}
                  className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
                >
                  <RefreshCw className="h-4 w-4 mr-1" />
                  {language === 'ru' ? 'Сбросить' : 'Reset'}
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                {language === 'ru' ? 'Результат' : 'Result'}
              </h3>
              
              {calculationError && (
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 text-red-700 dark:text-red-300">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    {calculationError}
                  </div>
                </div>
              )}
              
              {calculationResult && (
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {calculationResult}
                  </p>
                  {calendarLink && (
                    <a
                      href={calendarLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      {language === 'ru' ? 'Google Calendar' : 'Google Calendar'}
                    </a>
                  )}
                </div>
              )}
              
              {!calculationResult && !calculationError && (
                <p className="text-gray-500 dark:text-gray-400 italic">
                  {language === 'ru' 
                    ? 'Выберите даты окончания визы и паспорта для расчета' 
                    : 'Select visa and passport expiry dates to calculate'}
                </p>
              )}
            </div>
          </div>
        </motion.section>
    </div>
  );
};

export default VisaCalculator;