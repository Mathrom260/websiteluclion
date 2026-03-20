'use client';

import { motion } from 'framer-motion';
import { Search, FileText, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 'analyse',
    num: '01',
    icon: Search,
    title: 'Analyse',
    description: 'Étude de votre site, de vos contraintes et de vos objectifs.',
  },
  {
    id: 'proposition',
    num: '02',
    icon: FileText,
    title: 'Proposition',
    description: 'Offre claire et détaillée, adaptée à votre situation réelle.',
  },
  {
    id: 'realisation',
    num: '03',
    icon: Zap,
    title: 'Réalisation',
    description: "Intervention rigoureuse, dans le respect des délais et des normes.",
  },
  {
    id: 'controle',
    num: '04',
    icon: CheckCircle,
    title: 'Contrôle',
    description: 'Vérification complète avant remise au client.',
  },
];

const parentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 } },
};

export function Methode() {
  return (
    <section className="bg-[#1a2035] py-16 text-[#eef2f8]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Comment nous intervenons
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#8a9ab8] sm:text-lg">
            Une approche structurée pour chaque projet, quelle que soit sa complexité.
          </p>
        </div>

        <div className="relative">
          {/* Ligne horizontale animée — desktop uniquement */}
          <motion.div
            aria-hidden
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={lineVariants}
            style={{ originX: 0 }}
            className="absolute top-8 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] hidden h-px border-t border-dashed border-[#2a6fd6]/30 lg:block"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={parentVariants}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map(({ id, num, icon: Icon, title, description }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                className="relative flex flex-col rounded-xl border border-white/6 bg-[#1a2035] p-7 transition-all duration-300 hover:border-[#2a6fd6]/40 hover:shadow-[0_0_20px_rgba(42,111,214,0.08)]"
              >
                {/* Ligne verticale mobile */}
                <div
                  aria-hidden
                  className="absolute top-0 bottom-0 left-5 w-px bg-linear-to-b from-[#2a6fd6]/60 to-transparent lg:hidden"
                />

                <p className="font-mono text-5xl font-black leading-none text-[#7ab0e8]/50">
                  {num}
                </p>

                <div className="mt-4 mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e2840]">
                  <Icon className="h-5 w-5 text-[#7ab0e8]" />
                </div>
                <p className="text-base font-semibold text-[#eef2f8]">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#8a9ab8]">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
