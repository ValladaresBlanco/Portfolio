import { motion } from "framer-motion";
import { fadeUp } from "../anim";

interface SectionHeadProps {
  num: string;
  title: string;
}

export default function SectionHead({ num, title }: SectionHeadProps) {
  return (
    <motion.div
      className="section-head"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <span className="section-head__num">{num}</span>
      <h2 className="section-head__title">{title}</h2>
    </motion.div>
  );
}
