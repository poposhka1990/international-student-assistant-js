import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Navigation } from 'lucide-react';

const LocationMap = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
        <MapPin className="w-6 h-6 mr-2" />
        {language === 'ru' ? 'Как нас найти' : 'How to Find Us'}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.8608563219683!2d34.34735037727611!3d61.78699047310161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46a1ec48c55be5c7%3A0x3d7959566ee77c8f!2z0YPQuy4g0JDQvdC-0YXQuNC90LAsIDIwLCDQn9C10YLRgNC-0LfQsNCy0L7QtNGB0LosINCg0LXRgdC_LiDQmtCw0YDQtdC70LjRjywgMTg1MDM1!5e0!3m2!1sru!2sru!4v1710252016499!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PetrSU Location Map"
              className="w-full h-full min-h-[300px]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              {language === 'ru' ? 'Адрес' : 'Address'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'ru' 
                ? 'ул. Анохина, 20, каб. 409, Петрозаводск, Республика Карелия, 185035'
                : '20 Anokhina St., office 409, Petrozavodsk, Republic of Karelia, 185035'}
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              {language === 'ru' ? 'Как добраться' : 'How to Get Here'}
            </h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>
                {language === 'ru'
                  ? 'От ж/д вокзала: пешком 500 метров вниз по проспекту Ленина '
                  : 'From railway station: 500 meters down Lenina Prospect'}
              </p>
              <p>
                {language === 'ru'
                  ? 'Для подходящего транспорта используйте приложение 2GIS'
                  : 'For appropriate public transport use 2GIS app'}
              </p>
              <p className="flex items-center">
                <Navigation className="w-4 h-4 mr-2" />
                {language === 'ru'
                  ? 'Остановка: "Государственный университет"'
                  : 'Stop: "State University"'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;