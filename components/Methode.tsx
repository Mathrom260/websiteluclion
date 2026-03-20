'use client';

import { motion } from 'framer-motion';
import { Search, FileText, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 'analyse',
    num: '01',
    icon: Search,
    title: 'Analyse',
    description:
      'Nous étudions votre site, vos contraintes et vos objectifs avant toute intervention.',
  },
  {
    id: 'proposition',
    num: '02',
    icon: FileText,
    title: 'Proposition',
    description:
      'Vous recevez une offre claire, détaillée et adaptée à votre situation réelle.',
  },
  {
    id: 'realisation',
    num: '03',
    icon: Zap,
    title: 'Réalisation',
    description:
      'Nos techniciens interviennent avec rigueur, dans le respect des délais et des normes.',
  },
  {
    id: 'controle',
    num: '04',
    icon: CheckCircle,
    title: 'Contrôle',
    description:
      'Chaque installation est vérifiée et réceptionnée avant remise au client.',
  },
];

const parentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export function Methode() {
  return (
    <section className="bg-[#0d1118] py-24 text-[#eef2f8]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Comment nous intervenons
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#7a8a9a] sm:text-lg">
            Une approche structurée pour chaque projet, quelle que soit sa
            complexité.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={parentVariants}
          className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connecteur horizontal desktop */}
          <div
            aria-hidden
            className="absolute top-11 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] hidden border-t border-dashed border-white/10 lg:block"
          />

          {steps.map(({ id, num, icon: Icon, title, description }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="relative flex flex-col gap-4 rounded-xl border border-white/6 bg-[#090c10] p-6 transition-all duration-200 hover:border-[#1a5fb0]/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0d1a2e]">
                <Icon className="h-5 w-5 text-[#5a90d0]" />
              </div>
              <div>
                <p className="font-mono text-xs font-semibold tracking-widest text-[#5a90d0]">
                  {num} · {title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#7a8a9a]">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
