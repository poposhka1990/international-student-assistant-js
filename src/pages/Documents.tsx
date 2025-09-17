import React from 'react';
import { Fingerprint, FileText, CreditCard, Home, Shield, UserCheck, UserPlus } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import { useLanguage } from '../context/LanguageContext';
import registrationImage from '../img/registration.jpg';

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
      ru: 'Документ учета въезда в Россию',
      en: 'Russia entry first document'
    }
  },
  {
    id: 'registration',
    title: { ru: 'Регистрация', en: 'Registration' },
    icon: Home,
    color: 'orange',
    description: { 
      ru: 'Временная регистрация в России',
      en: 'Temporary registration in Russia'
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

        <section id="registration" className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            {language === 'ru' ? 'Временная регистрация 📝' : 'Temporary Registration 📝'}
          </h2>

          <img
              src={registrationImage}
              alt="..."
              className="w-full h-auto rounded-lg mb-6 object-cover
                  md:w-1/4 md:float-right md:ml-6"
          />

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {language === 'ru'
              ? 'Если вы приехали учиться в Россию, важно оформить временную регистрацию (миграционный учет по месту пребывания). Это обязательный документ, который подтверждает ваш адрес в России.'
              : 'If you come to study in Russia, it is important to obtain temporary registration (migration registration at the place of stay). This is a mandatory document confirming your address in Russia.'}
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            {language === 'ru' ? '📌 Сроки' : '📌 Deadlines'}
          </h3>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
            <li>
              {language === 'ru'
                ? 'Иностранные студенты (вне зависимости от курса), проживающие в общежитии, должны предоставить документы в течение 3 рабочих дней после приезда в Петрозаводск.'
                : 'Foreign students (regardless of year of study) living in dormitories must submit documents within 3 working days after arrival in Petrozavodsk.'}
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            {language === 'ru' ? '📍 Где оформить' : '📍 Where to Apply'}
          </h3>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
            <li>
              {language === 'ru'
                ? 'Если вы проживаете в общежитии, то регистрацию оформляет университет.'
                : 'If you live in a dormitory, the university arranges your registration.'}
            </li>
            <li>
              {language === 'ru'
                ? 'Если вы живёте в квартире у частного лица, регистрацией занимается ваш арендодатель.'
                : 'If you live in a private apartment, your landlord is responsible for your registration.'}
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            {language === 'ru' ? '📄 Необходимые документы' : '📄 Required Documents'}
          </h3>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
            <li>{language === 'ru' ? 'Паспорт с визой (или документ, подтверждающий безвизовый въезд).' : 'Passport with visa (or document confirming visa-free entry).'}</li>
            <li>{language === 'ru' ? 'Миграционная карта (выдают при въезде в Россию).' : 'Migration card (issued upon entry into Russia).'}</li>
            <li>
              {language === 'ru'
                ? 'Чек об оплате государственной пошлины. Оплачивать в банке по реквизитам 500 рублей для студентов с учебными визами, РВП, РВПО или ВНЖ, 1500 рублей – для всех остальных.'
                : 'Receipt of state fee payment. Pay at the bank: 500 rubles for students with study visas, RVP, RVPO or residence permit, 1500 rubles for all others.'}
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            {language === 'ru' ? '💡 Когда оформляется новая регистрация' : '💡 When a New Registration is Required'}
          </h3>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
            <li>{language === 'ru' ? 'При КАЖДОМ въезде в Россию (и получении миграционной карты).' : 'Upon EACH entry into Russia (and receipt of a migration card).'}</li>
            <li>{language === 'ru' ? 'При получении нового миграционного документа в России (новая учебная виза, РВП, РВПО, ВНЖ, дубликат миграционной карты).' : 'When obtaining a new migration document in Russia (new study visa, RVP, RVPO, residence permit, duplicate migration card).'}</li>
            <li>{language === 'ru' ? 'Если вы меняете адрес в Петрозаводске, включая новую КОМНАТУ в общежитии.' : 'If you change your address in Petrozavodsk, including a new room in the dormitory.'}</li>
            <li>{language === 'ru' ? 'После стационарного лечения в больнице и возвращении в общежитие или квартиру из больницы.' : 'After inpatient treatment and returning to a dormitory or apartment from the hospital.'}</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 font-semibold">
            {language === 'ru'
              ? '‼️ Оформление регистрации начинается ПОСЛЕ ТОГО, как вы приносите чек об оплате госпошлины. Поэтому просим соблюдать сроки, указанные выше, чтобы не допустить нарушений миграционного законодательства.'
              : '‼️ Registration starts AFTER you bring the receipt of the state fee payment. Please observe the deadlines mentioned above to avoid violations of migration law.'}
          </p>
        </section>

        {documents.map((doc) => (
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