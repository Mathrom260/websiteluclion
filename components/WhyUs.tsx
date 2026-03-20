'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Users, Clock, Zap } from 'lucide-react';

const items = [
  {
    id: 'expertise',
    icon: ShieldCheck,
    title: 'Expertise technique',
    description:
      'Des compétences adaptées aux installations industrielles et tertiaires, avec une maîtrise des normes en vigueur.',
  },
  {
    id: 'suivi',
    icon: Users,
    title: 'Organisation claire',
    description:
      "Un responsable dédié par chantier, une communication directe et un suivi rigoureux à chaque étape.",
  },
  {
    id: 'reactivite',
    icon: Clock,
    title: 'Réactivité',
    description:
      "Des équipes disponibles rapidement, avec une approche structurée qui limite les imprévus.",
  },
  {
    id: 'durabilite',
    icon: Zap,
    title: 'Vision long terme',
    description:
      "Des installations fiables et durables, conçues pour résister aux exigences de votre activité.",
  },
];

const parentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function WhyUs() {
  return (
    <section id="pourquoi" className="bg-[#243050] py-24 text-[#eef2f8]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-black text-[#eef2f8] md:text-4xl">
            Une approche fiable et structurée
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-base text-[#8a9ab8] sm:text-lg">
            Une organisation pensée pour répondre aux contraintes réelles du terrain.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={parentVariants}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {items.map(({ id, icon: Icon, title, description }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="border-l-2 border-[#2a6fd6] pl-8"
            >
              <Icon className="mb-4 h-6 w-6 text-[#7ab0e8]" />
              <p className="mb-2 text-base font-semibold text-[#eef2f8]">
                {title}
              </p>
              <p className="text-sm leading-relaxed text-[#8a9ab8]">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
