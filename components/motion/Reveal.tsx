'use client';

import { motion, type Variants } from 'framer-motion';

/**
 * Apparition au scroll, une seule fois : opacité 0 → 1, 20px → 0, 650ms.
 * Discrète par choix — pas d'effet spectaculaire (DESIGN.md).
 */
const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const viewport = { once: true, amount: 0.25 } as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Décalage en secondes, pour cascader une liste. */
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.li>
  );
}
