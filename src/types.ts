/* ============================================================
   Tipos del dominio del portafolio
   ============================================================ */

export type Locale = "es" | "en";

/** Texto bilingüe */
export interface Localized {
  es: string;
  en: string;
}

/** Un valor traducible: texto fijo o bilingüe */
export type LocalizedText = string | Localized;

/** Lista bilingüe (ej. párrafos, características) */
export interface LocalizedList {
  es: string[];
  en: string[];
}

export interface Social {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  lastName: string;
  initials: string;
  role: Localized;
  tagline: Localized;
  email: string;
  location: Localized;
  socials: Social[];
  cvUrl: string;
  photo: string;
}

export type ProjectCategory = "professional" | "university" | "personal";

export interface ProjectLink {
  label: Localized;
  url: string;
}

export interface Project {
  id: string;
  categories: ProjectCategory[]; // puede pertenecer a varias (ej. profesional y universitario)
  year: string;
  title: Localized;
  description: Localized;
  overview: Localized;
  features: LocalizedList;
  tags: string[];
  image: string;
  images: string[];
  imageNote?: Localized; // nota bajo la imagen (ej. proyecto privado / ilustrativo)
  testing?: ProjectTesting; // apartado opcional de pruebas realizadas
  links: ProjectLink[];
}

export interface ProjectTesting {
  title: Localized;
  description: Localized;
  items?: LocalizedList; // desglose de tipos de prueba
  codeExample?: string; // fragmento de un test real (mismo en ambos idiomas)
  images?: string[]; // capturas (tests pasando / cobertura)
}

export interface TimelineItem {
  date: Localized;
  role: Localized;
  place: string;
  desc: Localized;
}

export interface Stat {
  value: string;
  label: Localized;
}

export interface SkillGroup {
  name: Localized;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface About {
  paragraphs: LocalizedList;
  motivation: { title: Localized; text: Localized };
  stats: Stat[];
  learning: { title: Localized; items: LocalizedList };
  interests: { title: Localized; subtitle: Localized; items: LocalizedList };
  skills: { title: Localized; subtitle: Localized; groups: SkillGroup[] };
}
