import { motion } from "framer-motion";
import { useLang } from "../LanguageContext";
import { certifications, ui } from "../data";
import { fadeUp, stagger } from "../anim";
import SectionHead from "./SectionHead";

export default function Certifications() {
  const { t } = useLang();

  return (
    <section className="certs-section" id="certificaciones">
      <SectionHead num="04" title={t(ui.sections.certifications)} />

      {certifications.length === 0 ? (
        <p className="certs__empty">{t(ui.certifications.empty)}</p>
      ) : (
        <motion.div
          className="certs"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {certifications.map((c, i) => (
            <motion.article className={`cert${c.image ? " cert--badge" : ""}`} key={i} variants={fadeUp}>
              {c.image && (
                <a
                  className="cert__badge"
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${c.title} · ${t(ui.certifications.view)}`}
                >
                  <img src={c.image} alt={`${c.title} — ${c.issuer}`} loading="lazy" />
                </a>
              )}

              <div className="cert__body">
                <div className="cert__meta">
                  <span className="cert__year">
                    {c.date ? `${t(ui.certifications.issued)} · ${t(c.date)}` : c.year}
                  </span>
                  {c.url && <span className="cert__verified">{t(ui.certifications.verified)}</span>}
                </div>
                <h3 className="cert__title">{c.title}</h3>
                <p className="cert__issuer">{c.issuer}</p>
                {c.desc && <p className="cert__desc">{t(c.desc)}</p>}
                {c.skills && (
                  <ul className="cert__skills">
                    {c.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
                {c.url && (
                  <a className="cert__link" href={c.url} target="_blank" rel="noopener noreferrer">
                    {t(ui.certifications.view)} ↗
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
    </section>
  );
}
