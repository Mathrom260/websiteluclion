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
    <section className="bg-[#151c2e] py-12">
      <div className="mx-auto max-w-6xl px-8">
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
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#2a6fd6]/20 bg-[#1e2840] px-2 py-4 text-center transition-all duration-200 hover:border-[#2a6fd6]/40 hover:bg-[#243050] hover:shadow-[0_0_20px_rgba(42,111,214,0.15)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e2840]">
                <Icon className="h-4 w-4 text-[#7ab0e8]" />
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-[#eef2f8]">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
