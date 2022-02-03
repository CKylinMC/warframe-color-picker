import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "locales/en/translation.json";
import ru from "locales/ru/translation.json";
import zh_CN from "locales/zh_CN/translation.json";


const resources = {
  en: {translation: en},
  ru: {translation: ru},
  "zh-CN": {translation: zh_CN}
}

i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    defaultNS: "translation",
    ns: "translation",
    resources,
    interpolation: {
      escapeValue: false,
    }
  }).catch(e => console.log(e))

export default i18n;
