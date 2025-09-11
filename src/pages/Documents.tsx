import React from 'react';
import { Fingerprint, FileText, CreditCard, Home, Shield, UserCheck, UserPlus } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import { useLanguage } from '../context/LanguageContext';

const documents = [
  {
    id: 'passport',
    title: { ru: 'Паспорт', en: 'Passport' },
    icon: FileText,
    color: 'blue',
    description: { 
      ru: 'Основной документ для идентификации',
      en: 'Main identification document'
    }
  },
  {
    id: 'visa',
    title: { ru: 'Учебная виза', en: 'Student Visa' },
    icon: CreditCard,
    color: 'green',
    description: { 
      ru: 'Разрешение на учебу в России',
      en: 'Permission to study in Russia'
    }
  },
  {
    id: 'migration-card',
    title: { ru: 'Миграционная карта', en: 'Migration Card' },
    icon: FileText,
    color: 'purple',
    description: { 
      ru: 'Документ учета въезда',
      en: 'Entry registration document'
    }
  },
  {
    id: 'registration',
    title: { ru: 'Регистрация', en: 'Registration' },
    icon: Home,
    color: 'orange',
    description: { 
      ru: 'Документ о месте проживания',
      en: 'Residence document'
    }
  },
  {
    id: 'insurance',
    title: { ru: 'Страховка', en: 'Insurance' },
    icon: Shield,
    color: 'red',
    description: { 
      ru: 'Медицинское страхование',
      en: 'Medical insurance'
    }
  },
  {
    id: 'medical-pass',
    title: { ru: 'Медицина и дактилоскопия', en: 'Medical & Fingerprinting' },
    icon: Fingerprint,
    color: 'teal',
    description: { 
      ru: 'Обязательные процедуры',
      en: 'Mandatory procedures'
    }
  },
  {
    id: 'student-residence',
    title: { ru: 'РВПО', en: 'RVPO' },
    icon: UserCheck,
    color: 'pink',
    description: { 
      ru: 'Разрешение на временное проживание',
      en: 'Temporary residence permit'
    }
  },
  {
    id: 'residence-permit',
    title: { ru: 'РВП и ВНЖ', en: 'RVP & VNZh' },
    icon: UserPlus,
    color: 'indigo',
    description: { 
      ru: 'Документы для длительного проживания',
      en: 'Long-term residence documents'
    }
  }
];

const colorClasses = {
  blue: 'bg-blue-500 hover:bg-blue-600',
  green: 'bg-green-500 hover:bg-green-600',
  purple: 'bg-purple-500 hover:bg-purple-600',
  orange: 'bg-orange-500 hover:bg-orange-600',
  red: 'bg-red-500 hover:bg-red-600',
  teal: 'bg-teal-500 hover:bg-teal-600',
  pink: 'bg-pink-500 hover:bg-pink-600',
  indigo: 'bg-indigo-500 hover:bg-indigo-600'
};

const Documents = () => {
  const { language, t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        {t('documents.title')}
      </h1>
      <h2 className="text-sm md:text-base text-center font-semibold mb-1 dark:text-white">
          {language === 'ru' 
            ? 'Для полного описания нажмите на карточку'
            : 'Click a service card for full description'}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12">
        {documents.map((doc, index) => (
          <AnimatedCard key={doc.id} index={index}>
            <a href={`#${doc.id}`} className="block h-full">
              <div className={`h-full rounded-xl shadow-lg transition-all p-3 md:p-4 ${colorClasses[doc.color]} text-white flex flex-col`}>
                <div className="flex flex-col items-center text-center h-full">
                  <div className="p-2 bg-white/10 rounded-full mb-2 md:mb-3">
                    <doc.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold mb-1">{doc.title[language]}</h3>
                  <p className="text-xs md:text-sm text-gray-100 mt-auto">{doc.description[language]}</p>
                </div>
              </div>
            </a>
          </AnimatedCard>
        ))}
      </div>

      <div className="space-y-8">
        <section id="passport" className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            {language === 'ru' ? 'Паспорт 🎓' : 'Passport 🎓'}
          </h2>
          
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            {language === 'ru' 
              ? 'Основные требования к паспорту для студентов с учебными визами'
              : 'Main passport requirements for students with study visas'}
          </h3>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {language === 'ru'
              ? <span>Ваш паспорт должен быть действительным <span className="font-semibold text-blue-600 dark:text-blue-400">не менее 18 месяцев (1,5 года) с момента въезда в Россию и не менее 18 месяцев (1,5 года) с начала действия следующей учебной визы.</span></span>
              : <span>Your passport must be valid for <span className="font-semibold text-blue-600 dark:text-blue-400">at least 18 months (1.5 years) from the date of entry to Russia and at least 18 months (1.5 years) from the start date of your next study visa.</span></span>
            }
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            {language === 'ru' ? 'Как это считается? 🤔' : 'How is this calculated? 🤔'}
          </h3>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {language === 'ru'
              ? 'Например, если вам продлевать визу в июне 2024 года (01.06.2024): вы сначала прибавляете один месяц на ее оформление, получается июль 2024 (01.07.2024) и затем прибавляете 18 месяцев. Получается, что в этом случае срок действия паспорта должен истекать не ранее чем в январе 2026 года (01.01.2026).'
              : 'For example, if you need to extend your visa in June 2024 (01.06.2024): first add one month for processing, which gives you July 2024 (01.07.2024), then add 18 months. In this case, your passport should not expire earlier than January 2026 (01.01.2026).'}
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            {language === 'ru' ? 'Где и когда мне нужно получить новый паспорт? 🤔🤔' : 'Where and when should I get a new passport? 🤔🤔'}
          </h3>
          
          <p className="text-gray-700 dark:text-gray-300">
            {language === 'ru'
              ? <span>Паспорт можно поменять в твоей стране (после въезд в Россию по приглашению от ПетрГУ) или в посольстве твоей страны в России (кроме граждан Туркменистана). При замене паспорта в посольстве <span className="font-semibold text-blue-600 dark:text-blue-400">оформление может занимать до 4 месяцев, поэтому это делается заранее до истечения срока действия визы.</span> После этого старая виза восстанавливается в новый паспорт.</span>
              : <span>You can change your passport in your home country (after entering Russia with a PetrSU invitation) or at your country's embassy in Russia (except for citizens of Turkmenistan). When replacing your passport at the embassy, <span className="font-semibold text-blue-600 dark:text-blue-400">processing can take up to 4 months, so this should be done well before your visa expires.</span> After that, the old visa will be restored in the new passport.</span>
            }
          </p>
        </section>

        {documents.slice(1).map((doc) => (
          <section
            key={doc.id}
            id={doc.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {doc.title[language]}
            </h2>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Documents;