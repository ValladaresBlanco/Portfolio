import { motion } from "framer-motion";
import type { ReactNode } from "react";

const variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
} as const;

interface PageProps {
  children: ReactNode;
  className?: string;
}

export default function Page({ children, className = "" }: PageProps) {
  return (
    <motion.div
      className={"page " + className}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
