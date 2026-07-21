"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ar";

type LanguageContextValue = {
  language: Language;
  isArabic: boolean;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("drink-run-language");
    if (saved === "ar") setLanguage("ar");
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("drink-run-language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        isArabic: language === "ar",
        toggleLanguage: () => setLanguage((current) => (current === "en" ? "ar" : "en")),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
