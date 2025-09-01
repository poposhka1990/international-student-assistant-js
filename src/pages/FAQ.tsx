import React, { useState } from 'react';
import { Search, Plus, Minus, ChevronRight, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedCard from '../components/AnimatedCard';

interface FAQItem {
  question: { ru: string; en: string };
  answer: { ru: string; en: string };
  keywords: { ru: string[]; en: string[] };
}

interface FAQSection {
  id: string;
  title: { ru: string; en: string };
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    id: 'visa',
    title: {
      ru: 'Визовые и регистрационные вопросы',
      en: 'Visa and Registration Questions'
    },
    items: [
      {
        question: {
          ru: 'Как оформить регистрацию и разрешение на временное проживание?',
          en: 'How do I obtain registration and temporary residence permit?'
        },
        answer: {
          ru: 'В случае если вы проживаете в общежитии ПетрГУ, то оформление регистрации делает университет. Если у вас съёмная квартира, то - хозяин квартиры. Если вы только прибыли в Петрозаводск, то можно заполнить онлайн-форму. Также обратите внимание, что отправка формы не означает автоматическую постановку на миграционный учет. Обязательно свяжитесь с сотрудниками и убедитесь, что ваши документы получены!',
          en: 'If you live in PetrSU dormitory, the university handles the registration. If you rent an apartment, the landlord is responsible. If you have just arrived in Petrozavodsk, you can fill out an online form. Please note that submitting the form does not mean automatic migration registration. Be sure to contact the staff and make sure your documents have been received!'
        },
        keywords: {
          ru: ['регистрация', 'проживание', 'общежитие', 'документы'],
          en: ['registration', 'residence', 'dormitory', 'documents']
        }
      },
      {
        question: {
          ru: 'Какие документы нужны для поступления и как их правильно подать?',
          en: 'What documents are needed for admission and how to submit them correctly?'
        },
        answer: {
          ru: 'Для поступления необходимы: паспорт с нотариально заверенным переводом, документ об образовании с переводом и легализацией, медицинские справки. Подробную информацию можно получить в приемной комиссии.',
          en: 'For admission you need: passport with notarized translation, education document with translation and legalization, medical certificates. Detailed information can be obtained from the admissions office.'
        },
        keywords: {
          ru: ['поступление', 'документы', 'перевод', 'легализация'],
          en: ['admission', 'documents', 'translation', 'legalization']
        }
      }
    ]
  },
  {
    id: 'financial',
    title: {
      ru: 'Финансовые вопросы',
      en: 'Financial Questions'
    },
    items: [
      {
        question: {
          ru: 'Сколько стоит обучение и какие есть стипендии или гранты?',
          en: 'How much does tuition cost and what scholarships or grants are available?'
        },
        answer: {
          ru: 'Стоимость обучения зависит от выбранной программы. Информацию о стипендиях и грантах можно получить в международном отделе университета.',
          en: 'Tuition costs depend on the chosen program. Information about scholarships and grants can be obtained from the university\'s international department.'
        },
        keywords: {
          ru: ['стоимость', 'обучение', 'стипендия', 'грант'],
          en: ['cost', 'tuition', 'scholarship', 'grant']
        }
      }
    ]
  },
  {
    id: 'living',
    title: {
      ru: 'Проживание и быт',
      en: 'Living and Daily Life'
    },
    items: [
      {
        question: {
          ru: 'Где и как найти жильё?',
          en: 'Where and how to find accommodation?'
        },
        answer: {
          ru: 'Университет предоставляет места в общежитии. Также можно найти съемное жилье через агентства недвижимости или специальные сайты.',
          en: 'The university provides dormitory accommodation. You can also find rental housing through real estate agencies or special websites.'
        },
        keywords: {
          ru: ['жилье', 'общежитие', 'аренда'],
          en: ['housing', 'dormitory', 'rent']
        }
      },
      {
        question: {
          ru: 'Как пользоваться общественным транспортом и ориентироваться в городе?',
          en: 'How to use public transport and navigate the city?'
        },
        answer: {
          ru: 'В Петрозаводске есть автобусы и троллейбусы. Можно оплачивать проезд наличными или транспортной картой. Для навигации удобно использовать приложения с картами.',
          en: 'Petrozavodsk has buses and trolleybuses. You can pay for travel with cash or a transport card. Map applications are convenient for navigation.'
        },
        keywords: {
          ru: ['транспорт', 'автобус', 'навигация'],
          en: ['transport', 'bus', 'navigation']
        }
      }
    ]
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const { language, t } = useLanguage();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const toggleQuestion = (sectionId: string, questionIndex: number) => {
    const key = `${sectionId}-${questionIndex}`;
    setExpandedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const filteredSections = faqData.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.question[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keywords[language].some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(section => section.items.length > 0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rvo@petrsu.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        FAQ
      </h1>

      {/* Quick Navigation */}
      <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          {language === 'ru' ? 'Быстрая навигация' : 'Quick Navigation'}
        </h2>
        <div className="flex flex-wrap gap-2">
          {faqData.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-200"
            >
              <ChevronRight className="h-4 w-4 mr-2" />
              {section.title[language]}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact-form')}
            className="flex items-center px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors text-blue-700 dark:text-blue-300"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            {t('faq.contact.title')}
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder={language === 'ru' ? 'Поиск по вопросам...' : 'Search questions...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="space-y-8">
        {filteredSections.map((section, sectionIndex) => (
          <AnimatedCard key={section.id} index={sectionIndex}>
            <section 
              id={section.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 scroll-mt-20"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {section.title[language]}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const isExpanded = expandedQuestions.has(`${section.id}-${itemIndex}`);
                  return (
                    <div 
                      key={itemIndex}
                      className="border dark:border-gray-700 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(section.id, itemIndex)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {item.question[language]}
                        </span>
                        {isExpanded ? (
                          <Minus className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {isExpanded && (
                        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t dark:border-gray-700">
                          <p className="text-gray-600 dark:text-gray-300">
                            {item.answer[language]}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </AnimatedCard>
        ))}

        {/* Contact Form */}
        <AnimatedCard>
          <section id="contact-form" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('faq.contact.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('faq.contact.description')}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('faq.contact.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={t('faq.contact.subject.placeholder')}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('faq.contact.message')}
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('faq.contact.message.placeholder')}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="h-5 w-5 mr-2" />
                {t('faq.contact.send')}
              </button>
            </form>
          </section>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default FAQ;