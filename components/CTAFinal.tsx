'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTAFinal() {
  return (
    <section className="border-y border-[rgba(255,255,255,0.06)] bg-[#0d1118] py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
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
              className="rounded-lg bg-[#1a5fb0] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a5fb0]/90"
            >
              Échanger sur votre besoin
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
