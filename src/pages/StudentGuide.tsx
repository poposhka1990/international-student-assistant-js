import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const sections = [
  { 
    id: 'arrival', 
    title: { 
      ru: 'Первичный въезд на территорию РФ',
      en: 'Initial Entry to Russia'
    },
    content: {
      ru: 'Фактическая цель въезда иностранного гражданина в Российскую Федерацию и цель его пребывания в Российской Федерации должны соответствовать. У студента цель пребывания – «учёба». Если в миграционной карте указана цель «работа», то постановку на миграционный учёт и продление визы осуществляет работодатель.',
      en: 'The actual purpose of entry of a foreign citizen into the Russian Federation and the purpose of their stay in the Russian Federation must correspond. For a student, the purpose of stay is "study". If the migration card indicates the purpose as "work", then the employer handles migration registration and visa extension.'
    }
  },
  { 
    id: 'registration', 
    title: { 
      ru: 'Миграционный учет',
      en: 'Migration Registration'
    },
    content: {
      ru: 'Иностранные граждане после прибытия в Петрозаводск обязаны встать на миграционный учет в течение 7-ми рабочих дней со дня прибытия. Для постановки на учет необходимо в течение 2 рабочих дней обратиться в регистрационно-визовый отдел ПетрГУ (улица Анохина, дом 20, каб. 409).',
      en: 'Foreign citizens must register for migration within 7 working days of arrival in Petrozavodsk. For registration, you need to contact the PetrSU Registration and Visa Department (20 Anokhina Street, office 409) within 2 working days.'
    }
  },
  { 
    id: 'extension', 
    title: { 
      ru: 'Продление срока временного пребывания',
      en: 'Extension of Temporary Stay'
    },
    content: {
      ru: 'Продление срока временного пребывания осуществляется путем продления визы или миграционного учета.',
      en: 'Extension of temporary stay is carried out by extending the visa or migration registration.'
    }
  },
  { 
    id: 'departure', 
    title: { 
      ru: 'Обязанность покинуть пределы РФ',
      en: 'Obligation to Leave Russia'
    },
    content: {
      ru: 'При завершении или прекращении обучения иностранный гражданин обязан покинуть пределы РФ в течение 7 дней.',
      en: 'Upon completion or termination of studies, a foreign citizen must leave Russia within 7 days.'
    }
  },
  { 
    id: 'insurance', 
    title: { 
      ru: 'Медицинское страхование',
      en: 'Medical Insurance'
    },
    content: {
      ru: 'Иностранные граждане обязаны иметь действующий полис медицинского страхования.',
      en: 'Foreign citizens must have a valid medical insurance policy.'
    }
  },
  { 
    id: 'medical', 
    title: { 
      ru: 'Медицинское освидетельствование',
      en: 'Medical Examination'
    },
    content: {
      ru: 'Иностранные граждане обязаны проходить ежегодное медицинское освидетельствование.',
      en: 'Foreign citizens must undergo annual medical examination.'
    }
  },
  { 
    id: 'work', 
    title: { 
      ru: 'Трудовая деятельность',
      en: 'Employment'
    },
    content: {
      ru: 'Иностранные студенты имеют право работать без получения разрешения на работу в свободное от учебы время.',
      en: 'International students have the right to work without obtaining a work permit during their free time from studies.'
    }
  },
  { 
    id: 'responsibility', 
    title: { 
      ru: 'Ответственность',
      en: 'Responsibility'
    },
    content: {
      ru: 'За нарушение законодательства Российской Федерации иностранный гражданин может быть привлечен к административной и (или) уголовной ответственности. Основания наступления административной ответственности определены в Кодексе административных правонарушений Российской Федерации, уголовной – в Уголовном Кодексе Российской Федерации.',
      en: 'For violation of the legislation of the Russian Federation, a foreign citizen may be subject to administrative and/or criminal liability. The grounds for administrative liability are defined in the Code of Administrative Offenses of the Russian Federation, criminal liability - in the Criminal Code of the Russian Federation.'
    }
  }
];

const StudentGuide = () => {
  const { language } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 dark:text-white text-gray-900">
        {language === 'ru' ? 'Памятка иностранного студента' : 'International Student Guide'}
      </h1>

      {/* Quick Navigation */}
      <nav className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 dark:text-white text-gray-900">
          {language === 'ru' ? 'Быстрая навигация' : 'Quick Navigation'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-left cursor-pointer px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 text-gray-700"
            >
              {section.title[language]}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Sections */}
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">
              {section.title[language]}
            </h2>
            <p className="dark:text-gray-300 text-gray-700">
              {section.content[language]}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default StudentGuide;