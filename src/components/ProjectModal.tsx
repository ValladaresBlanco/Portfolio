import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../LanguageContext";
import { ui } from "../data";
import type { Project } from "../types";

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang, t } = useLang();
  const [current, setCurrent] = useState(0);

  const features = project.features[lang] ?? project.features.es;
  const testingItems = project.testing?.items?.[lang] ?? project.testing?.items?.es ?? [];
  const gallery =
    project.images && project.images.length
      ? project.images
      : project.image
      ? [project.image]
      : [];
  const multiple = gallery.length > 1;

  // Reinicia el carrusel al abrir otro proyecto
  useEffect(() => {
    setCurrent(0);
  }, [project.id]);

  // Cerrar con Escape, navegar con flechas + bloquear scroll de fondo
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (gallery.length > 1) {
        if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % gallery.length);
        if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + gallery.length) % gallery.length);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, gallery.length]);

  const go = (dir: number) => setCurrent((c) => (c + dir + gallery.length) % gallery.length);

  return (
    <motion.div
      className="modal-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={t(project.title)}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.985 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="modal__close" onClick={onClose} aria-label={t(ui.projects.close)}>
          <CloseIcon />
        </button>

        {/* Encabezado */}
        <header className="modal__head">
          <span className="modal__category">
            {project.categories.map((c) => t(ui.projects.category[c])).join(" · ")}
            {project.year ? ` · ${project.year}` : ""}
          </span>
          <h2 className="modal__title">{t(project.title)}</h2>
          <p className="modal__lead">{t(project.description)}</p>
        </header>

        {/* Carrusel de imágenes */}
        <div className="modal__carousel">
          <div className={"modal__hero photo-frame" + (gallery.length ? "" : " photo-frame--empty")}>
            {gallery.length ? (
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={gallery[current]}
                  alt={`${t(project.title)} ${current + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>
            ) : (
              <span>{t(ui.projects.shot)}</span>
            )}

            {multiple && (
              <>
                <button className="carousel__nav carousel__nav--prev" onClick={() => go(-1)} aria-label="Imagen anterior">‹</button>
                <button className="carousel__nav carousel__nav--next" onClick={() => go(1)} aria-label="Imagen siguiente">›</button>
                <span className="carousel__count">{current + 1} / {gallery.length}</span>
              </>
            )}
          </div>

          {multiple && (
            <div className="carousel__dots">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  className={"carousel__dot" + (i === current ? " is-active" : "")}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir a la imagen ${i + 1}`}
                />
              ))}
            </div>
          )}

          {project.imageNote && <p className="modal__image-note">{t(project.imageNote)}</p>}
        </div>

        {/* Contenido en dos columnas */}
        <div className="modal__content">
          <div className="modal__main">
            <section className="modal__section">
              <h3 className="modal__section-title">{t(ui.projects.overview)}</h3>
              <p className="modal__text">{t(project.overview || project.description)}</p>
            </section>

            {features.length > 0 && (
              <section className="modal__section">
                <h3 className="modal__section-title">{t(ui.projects.features)}</h3>
                <ul className="modal__features">
                  {features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Tarjeta lateral: tecnologías + enlaces */}
          <aside className="modal__aside">
            <div className="modal__card">
              <h3 className="modal__section-title">{t(ui.projects.tech)}</h3>
              <ul className="tags">
                {project.tags.map((tg) => (
                  <li key={tg}>{tg}</li>
                ))}
              </ul>

              {project.links.length > 0 && (
                <div className="modal__links">
                  {project.links.map((l, i) => (
                    <a key={i} className="btn btn--primary" href={l.url} target="_blank" rel="noopener noreferrer">
                      {t(l.label)} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Apartado de pruebas realizadas */}
        {project.testing && (
          <section className="modal__testing">
            <h3 className="modal__section-title">{t(project.testing.title)}</h3>
            <p className="modal__text">{t(project.testing.description)}</p>

            {testingItems.length > 0 && (
              <ul className="modal__features modal__testing-list">
                {testingItems.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            )}

            {project.testing.codeExample && (
              <pre className="modal__code">
                <code>{project.testing.codeExample}</code>
              </pre>
            )}

            {project.testing.images && project.testing.images.length > 0 && (
              <div className="modal__testing-shots">
                {project.testing.images.map((src, i) => (
                  <div className="modal__testing-shot" key={i}>
                    <img src={src} alt={`${t(project.title)} tests ${i + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </motion.div>
    </motion.div>
  );
}
