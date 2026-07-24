import { motion } from "framer-motion";
import { useLang } from "../LanguageContext";
import { about, profile, ui } from "../data";
import { fadeUp, stagger } from "../anim";
import SectionHead from "./SectionHead";

export default function About() {
  const { lang, t } = useLang();
  const paragraphs = about.paragraphs[lang] ?? about.paragraphs.es;
  const learningItems = about.learning.items[lang] ?? about.learning.items.es;
  const interestItems = about.interests.items[lang] ?? about.interests.items.es;

  return (
    <section className="about" id="sobre-mi">
      <SectionHead num="01" title={t(ui.sections.about)} />

      {/* Intro: foto + texto + motivación */}
      <motion.div
        className="about__grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="about__photo" variants={fadeUp}>
          {profile.photo ? (
            <div className="photo-frame">
              <img src={profile.photo} alt={profile.name} />
            </div>
          ) : (
            <div className="photo-frame photo-frame--empty">
              <span>{t(ui.about.photo)}</span>
            </div>
          )}
        </motion.div>

        <motion.div className="about__text" variants={fadeUp}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="about__motivation">
            <h3 className="about__block-title">{t(about.motivation.title)}</h3>
            <p>{t(about.motivation.text)}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Estadísticas */}
      <motion.div
        className="about__stats"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {about.stats.map((s, i) => (
          <motion.div className="stat" key={i} variants={fadeUp}>
            <span className="stat__value">{s.value}</span>
            <span className="stat__label">{t(s.label)}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Aprendiendo ahora + Áreas de interés */}
      <motion.div
        className="about__panels"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className="panel" variants={fadeUp}>
          <h3 className="about__block-title">{t(about.learning.title)}</h3>
          <ul className="tags">
            {learningItems.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="panel" variants={fadeUp}>
          <h3 className="about__block-title">{t(about.interests.title)}</h3>
          <p className="panel__subtitle">{t(about.interests.subtitle)}</p>
          <ul className="interest-list">
            {interestItems.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Habilidades técnicas por categoría */}
      <div className="about__skills">
        <motion.div
          className="about__skills-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h3 className="about__skills-title">{t(about.skills.title)}</h3>
          <p className="about__skills-subtitle">{t(about.skills.subtitle)}</p>
        </motion.div>

        <motion.div
          className="skill-groups"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {about.skills.groups.map((g, i) => (
            <motion.div className="skill-group" key={i} variants={fadeUp}>
              <h4 className="skill-group__name">{t(g.name)}</h4>
              <ul className="tags">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
