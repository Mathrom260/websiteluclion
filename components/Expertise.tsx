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
    id: 'electricite-industrielle',
    icon: Zap,
    title: 'Électricité industrielle',
    description:
      'Installations sur sites de production, usines et entrepôts. Haute et basse tension.',
  },
  {
    id: 'electricite-tertiaire',
    icon: Building2,
    title: 'Électricité tertiaire',
    description:
      'Bureaux, commerces et bâtiments publics. Installations complètes clés en main.',
  },
  {
    id: 'tableaux-electriques',
    icon: LayoutGrid,
    title: 'Tableaux électriques',
    description:
      'Conception, câblage et mise en service de tableaux basse tension sur mesure.',
  },
  {
    id: 'mise-normes-rgie',
    icon: ShieldCheck,
    title: 'Mise aux normes RGIE',
    description:
      'Audit, remise en conformité et certification selon le RGIE Art.104.',
  },
  {
    id: 'infrastructure-cablage',
    icon: Cable,
    title: 'Infrastructure & câblage',
    description:
      'Cheminements de câbles, goulottes et chemins de câbles industriels.',
  },
  {
    id: 'maintenance-depannage',
    icon: Wrench,
    title: 'Maintenance & dépannage',
    description:
      'Interventions rapides, contrats de maintenance préventive et curative.',
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
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-[#090c10] py-24 text-[#eef2f8]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ce que nous réalisons
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#7a8a9a] sm:text-lg">
            De l&apos;installation neuve à la mise aux normes, nous intervenons
            sur l&apos;ensemble de vos besoins électriques.
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
              className="flex flex-col gap-4 rounded-xl border border-white/6 bg-[#0d1118] p-8 transition-colors duration-200 hover:-translate-y-1 hover:border-[#1a5fb0]/40 hover:shadow-[0_20px_40px_rgba(10,20,35,0.45)]"
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

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0d1a2e]">
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
