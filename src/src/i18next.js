import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "@assets/locales/en.json";
import ua from "@assets/locales/ua.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "uk"],
    fallbackLng: ["en", "uk"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources: {
      en: {
        translation: en,
      },
      uk: {
        translation: ua,
      },
    },
  });

export default i18n;
