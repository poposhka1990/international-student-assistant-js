import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const sections = [
  { 
    id: 'intro', 
    title: { 
      ru: 'Общие положения',
      en: 'General Provisions'
    },
    content: {
      ru: 'Все иностранные граждане, прибывшие в Российскую Федерацию на обучение, обязаны соблюдать законодательство Российской Федерации.',
      en: 'All foreign citizens arriving in the Russian Federation for study are obliged to comply with the legislation of the Russian Federation.'
    }
  },
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
      ru: 'Иностранные граждане и лица без гражданства, прибывшие в ПетрГУ на обучение (далее – иностранные обучающиеся), после прибытия в Петрозаводск обязаны встать на миграционный учет в течение 7 рабочих дней со дня прибытия в место пребывания. Для постановки на учет по месту пребывания (в общежитии ПетрГУ) необходимо в течение 2 рабочих дней с даты прибытия обратиться в регистрационно-визовый отдел ПетрГУ (улица Анохина, дом 20, каб. 409, вход через Главный корпус) и предоставить паспорт с учебной визой (при наличии) и миграционную карту с указанной целью въезда и отметкой о пересечении границы. Результатом постановки на миграционный учет является получение иностранным обучающимся отрывной части бланка уведомления о прибытии иностранного гражданина в место пребывания. В случае самовольного убытия из места временного пребывания (общежития), длительного отсутствия иностранный обучающийся будет снят с миграционного учета. При временных выездах из Петрозаводска в другой регион РФ на срок более 7 рабочих дней иностранный гражданин обязан вставать на миграционный учет по новому месту временного пребывания. После возвращения в Петрозаводск иностранный гражданин в течение 2 рабочих дней обязан вновь встать на миграционный учет по месту временного пребывания/проживания, предоставив соответствующие документы.',
      en: 'Foreign citizens and stateless persons arriving to PetrSU for study must register for migration within 7 working days of arrival at the place of stay. To register at the place of stay (in the PetrSU dormitory), you must within 2 working days from the date of arrival contact the PetrSU Registration and Visa Department (20 Anokhina Street, office 409, entrance through the Main Building) and provide a passport with a study visa (if available) and a migration card with the stated purpose of entry and border crossing mark. The result of registration is receiving a detachable part of the notification form of arrival. Unauthorized departure from the place of stay or long absence leads to removal from migration registration. When temporarily leaving Petrozavodsk to another region for more than 7 working days, you must register at the new place of stay. After returning to Petrozavodsk, you must re-register within 2 working days providing the necessary documents.'
    }
  },
  { 
    id: 'extension', 
    title: { 
      ru: 'Продление срока временного пребывания',
      en: 'Extension of Temporary Stay'
    },
    content: {
      ru: 'Иностранные граждане, прибывшие в ПетрГУ для обучения, должны своевременно продлевать срок своего временного пребывания / проживания.Срок пребывания определяется сроком действия визы (или миграционной карты в случае безвизового въезда). При подаче документов на продление учебной визы паспорт должен быть действителен не менее 1,5 года с даты начала действия новой визы. Необходимо предоставить документы в регистрационно-визовый отдел не менее чем за 1,5 месяца (30 рабочих дней) до окончания срока предыдущей визы: оригинал паспорта, оригинал миграционной карты, оригинал регистрации (уведомления о прибытии), фото 3х4 (на белом фоне), страховой полис, квитанцию об оплате госпошлины. Решение о выдаче визы и продлении пребывания принимает УВМ МВД по РК. В выдаче визы и продлении может быть отказано (например, при наличии 2 и более административных правонарушений). Несвоевременное обращение в регистрационно-визовый отдел – причина отказа в приёме документов, после чего иностранный гражданин обязан покинуть РФ. При получении РВП или ВНЖ необходимо в течение 2 рабочих дней сообщить об этом в регистрационно-визовый отдел ПетрГУ.',
      en: 'Foreign citizens arriving to PetrSU must timely extend their temporary stay/residence. The stay period is determined by the visa validity (or migration card for visa-free entry). When applying for visa extension, the passport must be valid for at least 1.5 years from the start date of the new visa. You must submit documents at least 1.5 months (30 working days) before the previous visa expires: original passport, original migration card, original registration (notification of arrival), a 3x4 photo (white background), insurance policy, receipt of state duty payment. The decision to issue a visa and extend the stay is made by the Ministry of Internal Affairs. Extension may be refused (for example, if there are 2 or more administrative offenses). Late application results in refusal, and the foreign citizen must leave Russia. Upon obtaining a temporary residence permit (RVP) or residence permit (VNZh), you must notify the PetrSU Registration and Visa Department within 2 working days.'
    }
  },
  { 
    id: 'citizenship',
    title: { 
      ru: 'Наличие гражданства РФ',
      en: 'Possession of Russian Citizenship'
    },
    content: {
      ru: 'Иностранный гражданин, прибывший на обучение в ПетрГУ, имеющий также гражданство Российской Федерации, рассматривается Российской Федерацией только как гражданин Российской Федерации. Иностранный гражданин обязан уведомить регистрационно-визовый отдел, управление международной деятельности и дирекцию своего института ПетрГУ о наличии у него гражданства РФ.',
      en: 'A foreign citizen arriving to PetrSU who also holds Russian citizenship is considered only as a Russian citizen. He/she must notify the Registration and Visa Department, the International Affairs Office and his/her institute administration of PetrSU about the presence of Russian citizenship.'
    }
  },
  { 
    id: 'departure', 
    title: { 
      ru: 'Обязанность покинуть пределы РФ',
      en: 'Obligation to Leave Russia'
    },
    content: {
      ru: 'Иностранный гражданин, прибывший на обучение в ПетрГУ, обязан покинуть территорию РФ, если изменились условия или перестали существовать обстоятельства, при которых ему был разрешен въезд (отчисление, завершение обучения, уведомление о неразрешении въезда и др.).',
      en: 'A foreign citizen studying at PetrSU must leave Russia if the conditions for his/her entry have changed or ceased to exist (expulsion, completion of studies, notification of entry ban, etc.).'
    }
  },
  { 
    id: 'insurance', 
    title: { 
      ru: 'Медицинское страхование',
      en: 'Medical Insurance'
    },
    content: {
      ru: 'Иностранный гражданин, прибывший на обучение в ПетрГУ, обязан иметь полис медицинского страхования. Полис должен обеспечивать амбулаторную помощь, помощь при внезапном заболевании, транспортировку (репатриацию) на Родину.',
      en: 'A foreign citizen studying at PetrSU must have a medical insurance policy covering outpatient care, emergency treatment, and repatriation.'
    }
  },
  { 
    id: 'medical', 
    title: {
      ru: 'Медицинское освидетельствование, дактилоскопия и фотографирование',
      en: 'Medical Examination, Fingerprinting and Photographing'
    },
    content: {
      ru: 'Согласно ФЗ № 274, для законного нахождения на территории РФ более 90 суток иностранные граждане обязаны пройти медицинское освидетельствование, обязательную государственную дактилоскопическую регистрацию и фотографирование. На прохождение этих процедур предоставляется 90 дней (если цель въезда – учёба) и 30 дней (если цель въезда – работа). Медосвидетельствование проходит ежегодно. В случае не предоставления документов срок временного пребывания будет сокращён, и иностранный гражданин обязан покинуть РФ.',
      en: 'According to Federal Law No. 274, foreign citizens staying in Russia for more than 90 days must undergo medical examination, mandatory state fingerprinting and photographing. You have 90 days (if study) and 30 days (if work) to complete these procedures. Medical examination is annual. Failure to provide documents leads to shortening of stay and obligation to leave Russia.'
    }
  },
  { 
    id: 'work', 
    title: { 
      ru: 'Трудовая деятельность',
      en: 'Employment'
    },
    content: {
      ru: 'Иностранные граждане, обучающиеся в образовательных организациях высшего образования на очной форме по программе с госаккредитацией, имеют право работать в свободное от учебы время без оформления разрешения на работу.',
      en: 'Foreign citizens enrolled full-time in accredited higher education programs have the right to work during their free time without a work permit.'
    }
  },
  { 
    id: 'responsibility', 
    title: { 
      ru: 'Ответственность',
      en: 'Responsibility'
    },
    content: {
      ru: 'За нарушение законодательства Российской Федерации иностранный гражданин может быть привлечен к административной и (или) уголовной ответственности. Основания определены в КоАП РФ и УК РФ.',
      en: 'For violation of Russian legislation, a foreign citizen may be subject to administrative and/or criminal liability as defined in the Code of Administrative Offenses and the Criminal Code of the Russian Federation.'
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