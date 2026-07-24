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
            <motion.div className="cert" key={i} variants={fadeUp}>
              <span className="cert__year">{c.year}</span>
              <h3 className="cert__title">{c.title}</h3>
              <p className="cert__issuer">{c.issuer}</p>
              {c.url && (
                <a className="cert__link" href={c.url} target="_blank" rel="noopener noreferrer">
                  {t(ui.certifications.view)} ↗
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
