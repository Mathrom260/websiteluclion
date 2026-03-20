'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Users, MapPin } from 'lucide-react';

const listItems = [
  { icon: CheckCircle, text: 'Certification VCA* maintenue depuis 2011' },
  { icon: ShieldCheck, text: 'Agrément RGIE Art.104 sur chaque chantier' },
  { icon: Users, text: 'Un responsable dédié par projet' },
  { icon: MapPin, text: 'Interventions sur toute la Belgique' },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Asymmetric() {
  return (
    <section className="bg-[#0d1118] py-24">
      <div className="mx-auto w-full px-8 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Colonne gauche */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-block rounded-full border border-[#5a90d0]/20 bg-[#0d1a2e] px-4 py-1.5 text-xs text-[#5a90d0]">
              Pourquoi nous choisir
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight text-[#eef2f8] md:text-4xl">
              Une entreprise fiable, des installations qui durent.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#7a8a9a]">
              Depuis plus de 30 ans, nous intervenons sur des sites industriels et tertiaires en Belgique. Chaque chantier est traité avec la même exigence : conformité, sécurité, durabilité.
            </p>
            <Link
              href="/expertise"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#5a90d0] transition-all hover:gap-3"
            >
              Découvrir nos services →
            </Link>
          </motion.div>

          {/* Colonne droite */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="rounded-2xl border border-white/6 bg-[#090c10] p-8"
          >
            {listItems.map(({ icon: Icon, text }, i) => (
              <div key={text}>
                <div className="flex items-start gap-3 py-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#5a90d0]" />
                  <span className="text-sm text-[#eef2f8]">{text}</span>
                </div>
                {i < listItems.length - 1 && (
                  <div className="border-b border-white/[0.04]" />
                )}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
