'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Users, MapPin } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'Expérience terrain confirmée' },
  { icon: Zap, label: 'Industriel & tertiaire' },
  { icon: Users, label: 'Interlocuteur unique' },
  { icon: MapPin, label: 'Belgique' },
];

export function TrustBar() {
  return (
    <section className="bg-[#0d1118] py-12">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-4 gap-6"
        >
          {items.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/6 bg-[#0d1118] px-2 py-4 text-center transition-all duration-200 hover:border-[#1a5fb0]/40 hover:bg-[#111827] hover:shadow-[0_0_20px_rgba(26,95,176,0.15)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0d1a2e]">
                <Icon className="h-4 w-4 text-[#5a90d0]" />
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-[#eef2f8]">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
