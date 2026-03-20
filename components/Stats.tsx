'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const useCountUp = (end: number, duration: number, started: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);
  return count;
};

const parentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function StatItem({
  prefix,
  suffix,
  end,
  duration,
  label,
  started,
  isStatic,
  staticValue,
}: {
  prefix?: string;
  suffix?: string;
  end: number;
  duration: number;
  label: string;
  started: boolean;
  isStatic?: boolean;
  staticValue?: string;
}) {
  const count = useCountUp(end, duration, started && !isStatic);

  return (
    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center">
      <span className="text-5xl font-black tabular-nums text-[#eef2f8]">
        {isStatic ? staticValue : `${prefix ?? ''}${count}${suffix ?? ''}`}
      </span>
      <span className="mt-2 text-sm text-[#7a8a9a]">{label}</span>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="border-y border-white/6 bg-[#090c10] py-20">
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={parentVariants}
        className="mx-auto grid max-w-4xl grid-cols-4 gap-6 px-6"
      >
        <StatItem prefix="+" end={30} duration={900} label="ans d'expérience" started={inView} />
        <StatItem prefix="+" end={500} duration={1200} label="projets réalisés" started={inView} />
        <StatItem end={0} duration={0} label="Certifié & agréé" started={inView} isStatic staticValue="RGIE" />
        <StatItem end={3} duration={600} label="régions couvertes" started={inView} />
      </motion.div>
    </section>
  );
}
