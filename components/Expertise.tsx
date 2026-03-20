'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Zap,
  Building2,
  LayoutGrid,
  ShieldCheck,
  Cable,
  Wrench,
} from 'lucide-react';

type ExpertiseCard = {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image?: string;
};

const expertiseItems: ExpertiseCard[] = [
  {
    id: 'installations-electriques',
    icon: Zap,
    title: 'Installations électriques',
    description:
      "Conception et réalisation d'installations haute et basse tension sur sites industriels et tertiaires.",
  },
  {
    id: 'electricite-tertiaire',
    icon: Building2,
    title: 'Électricité tertiaire',
    description:
      'Bureaux, commerces et bâtiments publics. Installations complètes et conformes aux normes en vigueur.',
  },
  {
    id: 'tableaux-electriques',
    icon: LayoutGrid,
    title: 'Tableaux électriques',
    description:
      'Conception, câblage et mise en service de tableaux basse tension sur mesure.',
  },
  {
    id: 'mise-conformite',
    icon: ShieldCheck,
    title: 'Mise en conformité',
    description:
      'Audit et remise aux normes RGIE de vos installations existantes. Conformité garantie.',
  },
  {
    id: 'cablage-infrastructure',
    icon: Cable,
    title: 'Câblage & infrastructure',
    description:
      'Cheminements de câbles, goulottes et chemins de câbles pour tous types de sites.',
  },
  {
    id: 'maintenance-depannage',
    icon: Wrench,
    title: 'Maintenance & dépannage',
    description:
      "Contrats préventifs et interventions curatives rapides sur l'ensemble de vos installations.",
  },
];

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-[#090c10] pt-16 pb-16 text-[#eef2f8]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Domaines d&apos;intervention
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#7a8a9a] sm:text-lg">
            Une couverture complète de vos besoins électriques, du neuf à la
            mise en conformité.
          </p>
        </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={parentVariants}
        className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {expertiseItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.id}
              variants={cardVariants}
              className="flex flex-col gap-4 rounded-xl border border-white/6 bg-[#0d1118] p-8 transition-all duration-200 hover:-translate-y-1 hover:border-[#1a5fb0]/40 hover:shadow-[0_0_24px_rgba(26,95,176,0.12)]"
            >
              {item.image ? (
                <div className="relative h-44 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition hover:opacity-100" />
                </div>
              ) : null}

              <div className="flex shrink-0 items-center justify-center rounded-lg bg-[#0d1a2e] p-2.5">
                <Icon className="h-5 w-5 text-[#5a90d0]" />
              </div>
              <p className="text-[15px] font-semibold text-[#eef2f8]">
                {item.title}
              </p>
              <p className="text-sm leading-relaxed text-[#7a8a9a]">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
      </div>
    </section>
  );
}
