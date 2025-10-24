import { useContext } from "react";
import { translations } from "../locales/translations";
import { LanguageContext } from "../contexts/languageContext";
export function useLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);
  function t(key) {
    return translations[language]?.[key] || key;
  }
  const changeLanguage = (newLang) => {
    setLanguage(newLang);
  };
  return { language, changeLanguage, t };
}
