import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslation from './en/translation.json';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  supportedLngs: ['en'],
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: enTranslation,
    },
  },
});

export default i18n;
