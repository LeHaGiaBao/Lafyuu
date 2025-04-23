import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as resources from './resources';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  supportedLngs: ['en'],
  compatibilityJSON: 'v3',
  resources,
});

const translate = (res: any | string | string[]) => i18n.t(res) as any;

export default translate;
