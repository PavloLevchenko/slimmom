import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { TRANSLATIONS_UA } from './ua/translations';
import { TRANSLATIONS_EN } from './en/translations';
import { TRANSLATIONS_DE } from './de/translations';

const resources = {
  en: {
    translation: TRANSLATIONS_EN,
  },
  de: {
    translation: TRANSLATIONS_DE,
  },
  uk: {
    translation: TRANSLATIONS_UA,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultLocale: 'en',
    debug: false,
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
