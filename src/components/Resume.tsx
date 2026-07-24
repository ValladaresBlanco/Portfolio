import { motion } from "framer-motion";
import { useLang } from "../LanguageContext";
import { timeline, profile, ui } from "../data";
import { fadeUp, stagger } from "../anim";
import SectionHead from "./SectionHead";

export default function Resume() {
  const { t } = useLang();

  return (
    <section className="cv" id="cv">
      <SectionHead num="03" title={t(ui.sections.resume)} />

      <div className="cv__grid">
        <motion.div
          className="timeline"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {timeline.map((item, i) => (
            <motion.div className="timeline__item" key={i} variants={fadeUp}>
              <span className="timeline__date">{t(item.date)}</span>
              <h3 className="timeline__role">{t(item.role)}</h3>
              <p className="timeline__place">{item.place}</p>
              <p className="timeline__desc">{t(item.desc)}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="cv__download"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p>{t(ui.resume.prompt)}</p>
          <motion.a
            href={profile.cvUrl}
            className="btn btn--primary"
            download
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            {t(ui.resume.download)}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
