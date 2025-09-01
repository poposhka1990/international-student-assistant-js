import React from 'react';
import { MapPin, Shield, Fingerprint, Building2, ClipboardCheck, FileCheck, Home, LogOut, ExternalLink } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { useLanguage } from '../context/LanguageContext';
import AnimatedCard from '../components/AnimatedCard';

const services = [
  {
    id: 'arrival',
    title: { ru: 'Я приехал(а)!', en: 'I arrived!' },
    description: { 
      ru: 'Сообщи о возвращении в Россию на учебу',
      en: 'Report your return to Russia for studies'
    },
    fullDescription: {
      ru: 'Сообщи о своем прибытии в Россию для постановки на миграционный учёт. Для своевременной регистрации документы необходимо присылать в течение 2 дней с момента въезда в Россию. Дата въезда указана на вашей миграционной карте.',
      en: 'Report your arrival in Russia for migration registration. For timely registration, documents must be submitted within 2 days of entering Russia. The entry date is indicated on your migration card.'
    },
    icon: MapPin,
    formUrl: 'https://forms.yandex.ru/cloud/654c8c0ceb614603ad7613e9/',
    color: 'blue'
  },
  {
    id: 'insurance',
    title: { ru: 'Страховка', en: 'Insurance' },
    description: { 
      ru: 'Оставь заявку на оформление новой страховки',
      en: 'Submit a request for new insurance'
    },
    fullDescription: {
      ru: 'Оставь заявку на оформление новой страховки. Медицинская страховка является обязательной для всех иностранных студентов, обучающихся в России. Она покрывает основные медицинские услуги и экстренную помощь.',
      en: 'Submit a request for new insurance coverage. Medical insurance is mandatory for all international students studying in Russia. It covers basic medical services and emergency care.'
    },
    icon: Shield,
    formUrl: 'https://forms.yandex.ru/cloud/654c8c2ac417f303b68a9ce9/',
    color: 'red'
  },
  {
    id: 'medical-pass',
    title: { ru: 'Зеленая карта', en: 'Green Card' },
    description: { 
      ru: 'Подтверди, что дактилоскопия пройдена',
      en: 'Confirm that fingerprinting is completed'
    },
    fullDescription: {
      ru: 'Подтверди, что ежегодная медицинская комиссия и дактилоскопия пройдены. Медицинская комиссия проходится 1 раз в год в БСМП (ул. Кирова, 40). После прохождения комиссии вы получаете три заключения врача и подходите в миграционную службу.',
      en: 'Confirm that annual medical examination and fingerprinting are completed. Medical examination is done once a year at BSMP (40 Kirova St.). After the examination, you receive three medical conclusions and visit the migration service.'
    },
    icon: Fingerprint,
    formUrl: 'https://forms.yandex.ru/cloud/6568487c3e9d082b27d8f8e8/',
    color: 'green'
  },
  {
    id: 'dormitory',
    title: { ru: 'Общежитие', en: 'Dormitory' },
    description: { 
      ru: 'Отправь заявку на заселение в общежитие',
      en: 'Submit a request for dormitory accommodation'
    },
    fullDescription: {
      ru: 'Отправь заявку на регистрацию после заселения в общежитие. После заселения необходимо обязательно сообщить новый номер комнаты. Через 3-5 рабочих дней вы должны забрать новую регистрацию.',
      en: 'Submit a registration request after moving into the dormitory. After moving in, you must report your new room number. You should receive your new registration within 3-5 working days.'
    },
    icon: Building2,
    formUrl: 'https://forms.yandex.ru/cloud/664c5b485d2a06e2607c0443/',
    color: 'orange'
  },
  {
    id: 'test',
    title: { ru: 'Тест', en: 'Test' },
    description: { 
      ru: 'Проверь свои знания миграционных законов',
      en: 'Test your knowledge of migration laws'
    },
    fullDescription: {
      ru: 'Проверь свои знания миграционных законов России для иностранных студентов. В тесте 12 вопросов. Если вы ответите не на все из них, то ваша оценка будет неправильной.',
      en: 'Test your knowledge of Russian migration laws for international students. The test has 12 questions. If you don\'t answer all of them, your score will be incorrect.'
    },
    icon: ClipboardCheck,
    formUrl: 'https://forms.yandex.ru/cloud/654ce969505690062d91995e/',
    color: 'purple'
  },
  {
    id: 'certificate',
    title: { ru: 'Справка', en: 'Certificate' },
    description: { 
      ru: 'Закажи необходимую справку об обучении',
      en: 'Request a necessary study certificate'
    },
    fullDescription: {
      ru: 'Закажи необходимую справку об обучении. Справка может потребоваться для различных целей, включая подтверждение статуса студента для визовых и других официальных процедур.',
      en: 'Request a necessary certificate of study. The certificate may be required for various purposes, including confirmation of student status for visa and other official procedures.'
    },
    icon: FileCheck,
    formUrl: 'https://forms.yandex.ru/cloud/654c8ef3c417f304428a9cf0/',
    color: 'teal'
  },
  {
    id: 'new-document',
    title: { ru: 'Документ', en: 'Document' },
    description: { 
      ru: 'Пришли скан, если получил новый документ',
      en: 'Send a scan if you received a new document'
    },
    fullDescription: {
      ru: 'Пришли скан, если получил новый документ. Это необходимо для обновления ваших данных в системе университета и обеспечения соответствия миграционным требованиям.',
      en: 'Send a scan if you received a new document. This is necessary to update your information in the university system and ensure compliance with migration requirements.'
    },
    icon: Home,
    formUrl: 'https://forms.yandex.ru/cloud/66a89c6bf47e730487662756/',
    color: 'pink'
  },
  {
    id: 'departure',
    title: { ru: 'Еду домой', en: 'Going Home' },
    description: { 
      ru: 'Проинформируй о своем отъезде домой',
      en: 'Inform about your departure home'
    },
    fullDescription: {
      ru: 'Проинформируй о своем отъезде домой. Это важно для правильного учета вашего миграционного статуса и соблюдения требований российского законодательства.',
      en: 'Inform about your departure home. This is important for proper accounting of your migration status and compliance with Russian legislation requirements.'
    },
    icon: LogOut,
    formUrl: 'https://forms.yandex.ru/cloud/654c8d7773cee703f92afc45/',
    color: 'indigo'
  }
];

const Services = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white text-gray-900">
          {language === 'ru' 
            ? 'Сервисы для иностранных студентов ПетрГУ'
            : 'Services for PetrSU International Students'
          }
        </h1>
        <h2 className="text-sm md:text-base text-center font-semibold mb-1 dark:text-white">
          {language === 'ru' 
            ? 'Для доступа к сервису нажмите на карточку'
            : 'Click a service card for access'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              {...service} 
              title={service.title[language]}
              description={service.description[language]}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="space-y-12">
        {services.map((service, index) => (
          <AnimatedCard key={service.id} index={index}>
            <div
              id={service.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 scroll-mt-20 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full mr-4 text-white ${service.color === 'blue' ? 'bg-blue-500' : 
                                                                    service.color === 'red' ? 'bg-red-500' : 
                                                                    service.color === 'green' ? 'bg-green-500' : 
                                                                    service.color === 'orange' ? 'bg-orange-500' : 
                                                                    service.color === 'purple' ? 'bg-purple-500' : 
                                                                    service.color === 'teal' ? 'bg-teal-500' : 
                                                                    service.color === 'pink' ? 'bg-pink-500' : 
                                                                    'bg-indigo-500'}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {service.title[language]}
                </h2>
              </div>
              
              <div className="mb-6">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {service.fullDescription[language]}
                </p>
              </div>
              
              <a 
                href={service.formUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 rounded-lg text-white transition-colors ${
                  service.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' : 
                  service.color === 'red' ? 'bg-red-500 hover:bg-red-600' : 
                  service.color === 'green' ? 'bg-green-500 hover:bg-green-600' : 
                  service.color === 'orange' ? 'bg-orange-500 hover:bg-orange-600' : 
                  service.color === 'purple' ? 'bg-purple-500 hover:bg-purple-600' : 
                  service.color === 'teal' ? 'bg-teal-500 hover:bg-teal-600' : 
                  service.color === 'pink' ? 'bg-pink-500 hover:bg-pink-600' : 
                  'bg-indigo-500 hover:bg-indigo-600'
                }`}
              >
                {language === 'ru' ? 'Заполнить форму' : 'Fill out the form'}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </AnimatedCard>
        ))}
      </section>
    </div>
  );
};

export default Services;