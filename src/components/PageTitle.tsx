import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PageTitle = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const getTitle = () => {
      const baseTitle = language === 'ru' ? 'Помощник иностранного студента' : 'International Student Assistant';
      
      switch (location.pathname) {
        case '/':
          return baseTitle;
        case '/services':
          return `${language === 'ru' ? 'Сервисы' : 'Services'} | ${baseTitle}`;
        case '/documents':
          return `${language === 'ru' ? 'Документы' : 'Documents'} | ${baseTitle}`;
        case '/student-guide':
          return `${language === 'ru' ? 'Памятка студента' : 'Student Guide'} | ${baseTitle}`;
        case '/faq':
          return `FAQ | ${baseTitle}`;
        default:
          return baseTitle;
      }
    };

    document.title = getTitle();
  }, [location, language]);

  return null;
};

export default PageTitle;