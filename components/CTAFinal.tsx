'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTAFinal() {
  return (
    <section className="border-y border-white/6 bg-[#090c10] py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <h2 className="mb-4 text-3xl font-black text-[#eef2f8] md:text-4xl">
            Vous avez un besoin électrique ?
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#7a8a9a]">
            Décrivez votre situation. Nous revenons vers vous rapidement avec
            une réponse claire et adaptée.
          </p>
          <div className="flex flex-col items-center">
            <Link
              href="/contact"
              className="rounded-lg bg-[#1a5fb0] px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[#1a5fb0]/90 hover:shadow-[0_0_20px_rgba(26,95,176,0.4)]"
            >
              Échanger sur votre besoin
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
