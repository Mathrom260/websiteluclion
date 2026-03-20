'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Users, Clock } from 'lucide-react';

const items = [
  {
    id: 'expertise',
    icon: ShieldCheck,
    title: 'Expertise certifiée',
    description:
      'Certifié VCA* depuis 2011, agréé RGIE Art.104. Nos techniciens interviennent en conformité totale sur chaque chantier, industriel comme tertiaire.',
  },
  {
    id: 'interlocuteur',
    icon: Users,
    title: 'Interlocuteur unique',
    description:
      "Un chef de chantier dédié du premier contact jusqu'à la réception des travaux. Vous savez toujours qui appeler.",
  },
  {
    id: 'reactivite',
    icon: Clock,
    title: 'Réactivité terrain',
    description:
      'Réponse sous 48h garantie. Intervention rapide sur site pour les urgences. Basés en Belgique, nous connaissons vos contraintes.',
  },
];

const parentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function WhyUs() {
  return (
    <section id="pourquoi" className="bg-[#0d1118] py-24 text-[#eef2f8]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mb-14 space-y-4 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Pourquoi choisir Luc Lion
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#7a8a9a] sm:text-lg">
            Trois raisons pour lesquelles les responsables techniques nous font
            confiance.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={parentVariants}
          className="grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {items.map(({ id, icon: Icon, title, description }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="border-l-2 border-[#1a5fb0] pl-6"
            >
              <Icon className="mb-4 h-6 w-6 text-[#5a90d0]" />
              <p className="mb-2 text-base font-semibold text-[#eef2f8]">
                {title}
              </p>
              <p className="text-sm leading-relaxed text-[#7a8a9a]">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
