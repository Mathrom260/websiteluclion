'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin, Clock } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'Certifié VCA*', sub: 'depuis 2011' },
  { icon: Award, label: 'Agréé RGIE', sub: 'Art. 104' },
  { icon: Clock, label: '+30 ans', sub: "d'expérience terrain" },
  { icon: MapPin, label: 'Belgique', sub: 'Wallonie · Bruxelles · Flandre' },
];

export function TrustBar() {
  return (
    <section className="border-y border-[rgba(255,255,255,0.06)] bg-[#0d1118] py-10">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {items.map(({ icon: Icon, label, sub }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <Icon className="h-5 w-5 text-[#5a90d0]" />
              <span className="text-sm font-semibold text-[#eef2f8]">
                {label}
              </span>
              <span className="text-xs text-[#7a8a9a]">{sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
