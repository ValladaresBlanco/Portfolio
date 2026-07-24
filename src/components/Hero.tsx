import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "../LanguageContext";
import { profile, ui } from "../data";
import { ease } from "../anim";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="inicio">
      <motion.div className="hero__inner" variants={container} initial="hidden" animate="show">
        <motion.p className="hero__eyebrow" variants={item}>
          {t(profile.role)}
        </motion.p>

        <h1 className="hero__name">
          <motion.span className="hero__name-line" variants={item}>
            {profile.name}
          </motion.span>
          <motion.span className="hero__name-accent" variants={item}>
            {profile.lastName}
          </motion.span>
        </h1>

        <motion.div className="hero__meta" variants={item}>
          <span>{t(profile.location)}</span>
          <span className="hero__meta-dot" />
          <span>{t(ui.hero.available)}</span>
        </motion.div>

        <motion.div className="hero__actions" variants={item}>
          <Link to="/proyectos" className="btn btn--primary">
            {t(ui.hero.viewProjects)}
          </Link>
          <Link to="/contacto" className="btn btn--cta">
            {t(ui.hero.getInTouch)}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
