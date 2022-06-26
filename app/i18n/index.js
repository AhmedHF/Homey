import i18n from 'i18next';
import {I18nManager} from 'react-native';
import {initReactI18next} from 'react-i18next';
import languages from './locales';

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default i18n.use(initReactI18next).init({
  resources: languages,
  lng: I18nManager.isRTL ? 'ar' : 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const ChangeLanguageToArabic = () => {
  i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
    I18nManager.forceRTL(i18n.language === 'ar');
  });
};
