import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  {t('footer.services')}
                </Link>
              </li>
              <li>
                <Link to="/documents" className="hover:text-white transition-colors">
                  {t('footer.documents')}
                </Link>
              </li>
              <li>
                <Link to="/student-guide" className="hover:text-white transition-colors">
                  {t('footer.guide')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  {t('nav.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.social')}</h3>
            <div className="space-y-2">
              <a 
                href="https://vk.com/club223524127" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                VKontakte
              </a>
              <a 
                href="https://t.me/petrsu_international" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contacts')}</h3>
            <p className="text-sm">
              {t('footer.department')}
              <br />
              {t('footer.address')}
              <br />
              <a href={`tel:+78142719634`}>
                {t('footer.number')}
              </a>
              <br />
              <a href={`mailto:rvo@petrsu.ru`}>
                {t('footer.mail')}
              </a>
            </p>
          </div>
        </div>

        <div className="text-center text-sm border-t border-gray-700 pt-8">
          <p className="mb-2">{t('footer.disclaimer')}</p>
          <p>
            {t('footer.copyright')} 2023-{new Date().getFullYear()} | {' '}
            <a 
              href="https://github.com/poposhka1990" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {language === 'ru' ? 'Разработчик' : 'Developer'}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;