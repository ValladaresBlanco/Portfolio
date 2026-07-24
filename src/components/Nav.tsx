import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../LanguageContext";
import { useTheme } from "../ThemeContext";
import { profile, ui } from "../data";
import type { Localized } from "../types";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

interface NavItem {
  to: string;
  label: Localized;
  end?: boolean;
}

const links: NavItem[] = [
  { to: "/", label: ui.nav.home, end: true },
  { to: "/sobre-mi", label: ui.nav.about },
  { to: "/proyectos", label: ui.nav.projects },
  { to: "/cv", label: ui.nav.resume },
  { to: "/certificaciones", label: ui.nav.certifications },
  { to: "/contacto", label: ui.nav.contact },
];

export default function Nav() {
  const { lang, toggle, t } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Cambio de tema con transición suave de color en toda la página
  const handleThemeToggle = () => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      toggleTheme();
      return;
    }
    const root = document.documentElement;
    root.classList.add("theme-anim");
    toggleTheme();
    window.setTimeout(() => root.classList.remove("theme-anim"), 600);
  };
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Cierra el menú móvil al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Barra sólida al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    "nav__link" + (isActive ? " is-active" : "");

  return (
    <>
      <motion.header
        className={"nav" + (scrolled ? " is-scrolled" : "")}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to="/" className="nav__logo" aria-label="Inicio">
          {profile.initials}
        </Link>

        <nav className="nav__links" aria-label="Navegación principal">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {t(l.label)}
            </NavLink>
          ))}
        </nav>

        <div className="nav__controls">
          <button
            className="theme-toggle"
            onClick={handleThemeToggle}
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "flex" }}
              >
                {theme === "dark" ? <MoonIcon /> : <SunIcon />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button className="lang-toggle" onClick={toggle} aria-label="Cambiar idioma">
            <span className={"lang-toggle__opt" + (lang === "es" ? " is-active" : "")}>ES</span>
            <span className="lang-toggle__sep">/</span>
            <span className={"lang-toggle__opt" + (lang === "en" ? " is-active" : "")}>EN</span>
          </button>

          <button
            className={"hamburger" + (menuOpen ? " is-open" : "")}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <NavLink to={l.to} end={l.end} className={linkClass} onClick={() => setMenuOpen(false)}>
                  {t(l.label)}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
