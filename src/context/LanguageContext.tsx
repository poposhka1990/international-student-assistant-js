import React, { createContext, useContext, useState } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navigation
    'nav.services': 'Сервисы',
    'nav.documents': 'Документы',
    'nav.checklist': 'Памятка студента',
    'nav.faq': 'FAQ',

    // Home Page
    'home.title': 'Помощник иностранного студента',
    'home.subtitle': 'Добро пожаловать в систему поддержки иностранных студентов Петрозаводского государственного университета*',
    'home.visa': 'Помогает узнать дату подачи документов на продление визы и необходимость замены паспорта',
    'home.services': 'Сервисы',
    'home.services.desc': 'Доступ к основным сервисам для иностранных студентов',
    'home.documents': 'Документы',
    'home.documents.desc': 'Информация о необходимых миграционных документах',
    'home.guide': 'Памятка студента',
    'home.guide.desc': 'Важная информация для иностранных студентов',
    'home.faq': 'FAQ',
    'home.faq.desc': 'Ответы на часто задаваемые вопросы',
    'home.social': 'Присоединяйтесь к нам в соцсетях',
    'home.vk': 'VK Группа',
    'home.telegram': 'Telegram Канал',

    // Visa Calculator Page
    'visa.title': 'Визовый калькулятор',
    'visa.subtitle': 'Помогает узнать дату подачи документов на продление визы и необходимость замены паспорта',

    // Documents Page
    'documents.title': 'Основные миграционные документы',
    
    // FAQ Page
    'faq.contact.title': 'Задайте нам любой вопрос',
    'faq.contact.description': 'Если вы не нашли ответ на свой вопрос, отправьте его нам напрямую',
    'faq.contact.subject': 'Тема письма',
    'faq.contact.subject.placeholder': 'Введите тему вашего вопроса',
    'faq.contact.message': 'Ваш вопрос',
    'faq.contact.message.placeholder': 'Опишите ваш вопрос подробно',
    'faq.contact.send': 'Отправить вопрос',
    
    // Footer
    'footer.navigation': 'Навигация',
    'footer.home': 'Главная',
    'footer.services': 'Сервисы',
    'footer.visa': 'Визовый калькулятор',
    'footer.documents': 'Документы',
    'footer.guide': 'Памятка студента',
    'footer.social': 'Социальные сети',
    'footer.contacts': 'Контакты',
    'footer.department': 'Регистрационно-визовый отдел ПетрГУ',
    'footer.address': 'ул. Анохина, 20, каб. 409',
    'footer.number' : 'Рабочий телефон: 8(8142)71-96-34',
    'footer.mail' : 'Эл. почта: rvo@petrsu.ru',
    'footer.disclaimer': '* Данный сайт предназначен для использования ИСКЛЮЧИТЕЛЬНО иностранными студентами ПетрГУ.',
    'footer.copyright': 'Регистрационно-визовый отдел ПетрГУ ©'
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.documents': 'Documents',
    'nav.checklist': 'Student instructions',
    'nav.faq': 'FAQ',

    // Home Page
    'home.title': 'International Student Assistant',
    'home.subtitle': 'Welcome to the support system for international students of Petrozavodsk State University*',
    'home.visa': 'Helps to calculate the deadline for study visa applying and the neccesity to change your passport',
    'home.services': 'Services',
    'home.services.desc': 'Access to essential international student services',
    'home.documents': 'Documents',
    'home.documents.desc': 'Information about required migration documents',
    'home.guide': 'Student Instructions',
    'home.guide.desc': 'Important information for international students',
    'home.faq': 'FAQ',
    'home.faq.desc': 'Answers to frequently asked questions',
    'home.social': 'Join Us on Social Media',
    'home.vk': 'VK Community',
    'home.telegram': 'Telegram Channel',

    // Visa Calculator Page
    'visa.title': 'Visa Calculator',
    'visa.subtitle': 'Helps to calculate the deadline for study visa applying and the neccesity to change your passport',

    // Documents Page
    'documents.title': 'Essential Migration Documents',
    
    // FAQ Page
    'faq.contact.title': 'Ask Us Any Question',
    'faq.contact.description': 'If you haven\'t found an answer to your question, send it to us directly',
    'faq.contact.subject': 'Email Subject',
    'faq.contact.subject.placeholder': 'Enter your question subject',
    'faq.contact.message': 'Your Question',
    'faq.contact.message.placeholder': 'Describe your question in detail',
    'faq.contact.send': 'Send Question',
    
    // Footer
    'footer.navigation': 'Navigation',
    'footer.home': 'Home',
    'footer.services': 'Services',
    'footer.visa': 'Visa Calculator',
    'footer.documents': 'Documents',
    'footer.guide': 'Student Guide',
    'footer.social': 'Social Media',
    'footer.contacts': 'Contacts',
    'footer.department': 'PetrSU Registration and Visa Department',
    'footer.address': '20 Anokhina St., office 409',
    'footer.number' : 'Work Phone: 8(8142)71-96-34',
    'footer.mail' : 'Email: rvo@petrsu.ru',
    'footer.disclaimer': '* This website is intended for use EXCLUSIVELY by PetrSU international students.',
    'footer.copyright': 'PetrSU Registration and Visa Department ©'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}