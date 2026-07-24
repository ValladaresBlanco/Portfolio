import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { Locale, LocalizedText } from "./types";

interface LanguageValue {
  lang: Locale;
  setLang: (lang: Locale) => void;
  toggle: () => void;
  t: (value: LocalizedText | null | undefined) => string;
}

const LanguageContext = createContext<LanguageValue | null>(null);

function getInitialLang(): Locale {
  try {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  return "en"; // idioma predeterminado
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Locale>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("portfolio-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === "es" ? "en" : "es")), []);

  // t(): recibe {es, en} y devuelve el texto en el idioma actual.
  // Si recibe un string normal, lo devuelve tal cual.
  const t = useCallback(
    (value: LocalizedText | null | undefined): string => {
      if (value == null) return "";
      if (typeof value === "string") return value;
      return value[lang] ?? value.es ?? "";
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de <LanguageProvider>");
  return ctx;
}
