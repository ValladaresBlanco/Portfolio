import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../LanguageContext";
import { projects, ui } from "../data";
import type { Project } from "../types";
import SectionHead from "./SectionHead";
import ProjectModal from "./ProjectModal";

const FILTERS = ["all", "professional", "university", "personal"] as const;
type Filter = (typeof FILTERS)[number];

// Orden de aparición de los proyectos (por id). Los que no estén aquí van al final.
const ORDER = [
  "gps-tracking",
  "erp-cr",
  "hr-management",
  "etai-lab",
  "costa-rica-tourism",
  "skyroute",
  "resource-monitor",
  "the-last-king",
  "distributed-snake",
];
const rank = (id: string) => {
  const i = ORDER.indexOf(id);
  return i === -1 ? ORDER.length : i;
};
const orderedProjects = [...projects].sort((a, b) => rank(a.id) - rank(b.id));

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = orderedProjects.filter((p) => filter === "all" || p.categories.includes(filter));

  return (
    <section className="projects" id="proyectos">
      <SectionHead num="02" title={t(ui.sections.projects)} />

      {/* Filtros */}
      <div className="project-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={"project-filter" + (filter === f ? " is-active" : "")}
            onClick={() => setFilter(f)}
          >
            {t(ui.projects.filters[f])}
          </button>
        ))}
      </div>

      {/* Lista de proyectos */}
      <div className="projects__grid">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              className="project"
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="project__media"
                onClick={() => setSelected(p)}
                role="button"
                tabIndex={0}
                aria-label={`${t(ui.projects.viewDetails)}: ${t(p.title)}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(p);
                  }
                }}
              >
                {p.image ? (
                  <div className="photo-frame">
                    <img src={p.image} alt={t(p.title)} />
                  </div>
                ) : (
                  <div className="photo-frame photo-frame--empty">
                    <span>{t(ui.projects.shot)}</span>
                  </div>
                )}
              </div>

              <div className="project__body">
                <span className="project__category">
                  {p.categories.map((c) => t(ui.projects.category[c])).join(" · ")}
                  {p.year ? ` · ${p.year}` : ""}
                </span>
                <h3 className="project__title">{t(p.title)}</h3>
                <p className="project__desc">{t(p.description)}</p>
                <ul className="tags">
                  {p.tags.slice(0, 4).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <button
                  className="project__more"
                  onClick={() => setSelected(p)}
                  aria-label={`${t(ui.projects.viewDetails)}: ${t(p.title)}`}
                >
                  <span className="project__more-text">{t(ui.projects.viewDetails)}</span>
                  <span className="project__more-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 && <p className="projects__empty">{t(ui.projects.empty)}</p>}

      {/* Modal de detalle */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
