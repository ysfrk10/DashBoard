import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext({});

export function LanguageProvider({ children }) {
  // جلب اللغة المحفوظة
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  // تغيير اتجاه الصفحة تلقائياً
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
