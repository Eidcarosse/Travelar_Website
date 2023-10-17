import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const loadTranslations = async (lang) => {
  return await import(`../Languages/${lang}.json`);
}
i18n
  // Detects user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation : await loadTranslations('en')
      },
      fr : {
        translation : await loadTranslations('fr')
      },
      ger : {
        translation : await loadTranslations('ger')
      },
      ara : {
        translation : await loadTranslations('ara')
      },
      ja : {
        translation : await loadTranslations('ja')
      },
      ru : {
        translation : await loadTranslations('ru')
      },
      ur : {
        translation : await loadTranslations('ur')
      }
    }
  });

export default i18n;