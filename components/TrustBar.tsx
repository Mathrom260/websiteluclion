'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, ShieldCheck, Users, MapPin } from 'lucide-react';

const items = [
  { icon: Clock, label: '+30 ans', sub: "d'expérience" },
  { icon: Zap, label: 'Industriel & tertiaire', sub: '' },
  { icon: ShieldCheck, label: 'Conformité RGIE', sub: '' },
  { icon: Users, label: 'Interlocuteur unique', sub: 'par projet' },
  { icon: MapPin, label: 'Belgique', sub: '' },
];

export function TrustBar() {
  return (
    <section className="bg-[#090c10] py-12">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5"
        >
          {items.map(({ icon: Icon, label, sub }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/6 bg-[#0d1118] px-4 py-5 text-center transition-all duration-200 hover:border-[#1a5fb0]/40 hover:bg-[#111827] hover:shadow-[0_0_20px_rgba(26,95,176,0.15)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0d1a2e]">
                <Icon className="h-4 w-4 text-[#5a90d0]" />
              </div>
              <span className="text-sm font-semibold text-[#eef2f8]">{label}</span>
              {sub && <span className="text-xs text-[#7a8a9a]">{sub}</span>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
