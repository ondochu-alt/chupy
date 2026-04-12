"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { Locale, TranslationDict } from "@/lib/i18n/types";
import { ko } from "@/lib/i18n/ko";
import { en } from "@/lib/i18n/en";

const dict: Record<Locale, TranslationDict> = { ko, en };

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationDict;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "ko",
  setLocale: () => {},
  t: ko,
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && saved in dict) setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dict[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
