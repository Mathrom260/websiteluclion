'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';


export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-0 flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-12 text-center"
    >
      {/* Grid technique */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(90,144,208,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(90,144,208,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-100 w-175 blur-[80px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(26,95,176,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl space-y-8 text-center">
        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-[#5a90d0]/30 bg-[#0d1a2e] px-4 py-1.5"
        >
          <ShieldCheck className="h-3.5 w-3.5 animate-pulse text-[#5a90d0] opacity-70" />
          <span className="text-xs font-medium tracking-wide text-[#5a90d0]">
            Électricité industrielle &amp; tertiaire en Belgique
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="text-4xl leading-[1.1] font-black tracking-tight text-[#eef2f8] sm:text-5xl md:text-6xl"
        >
          Votre partenaire électrique
          <br />
          pour bâtiments industriels &amp;{' '}
          <span className="bg-gradient-to-r from-[#5a90d0] to-[#1a5fb0] bg-clip-text text-transparent">
            tertiaires.
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mx-auto max-w-2xl text-base leading-relaxed text-[#7a8a9a] md:text-lg"
        >
          Nous accompagnons entreprises, promoteurs et gestionnaires de sites dans leurs projets électriques : installations, rénovations et mises en conformité, avec une exigence forte sur la sécurité, les délais et la fiabilité.
        </motion.p>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href="/contact"
            className="shimmer-btn relative overflow-hidden rounded-xl bg-[#1a5fb0] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#1650a0]"
          >
            Demander un devis
          </Link>
          <Link
            href="/expertise"
            className="rounded-xl border border-[rgba(255,255,255,0.12)] bg-transparent px-8 py-3 text-sm text-[#c8d8f0] transition hover:bg-white/10"
          >
            Découvrir nos services
          </Link>
        </motion.div>
        <p className="mt-3 text-center text-xs text-[#7a8a9a]">
          Réponse rapide — analyse professionnelle de votre besoin
        </p>
      </div>

      {/* Shimmer keyframe */}
      <style>{`
        .shimmer-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.18),
            transparent
          );
          transform: skewX(-15deg);
          transition: none;
        }
        .shimmer-btn:hover::after {
          animation: shimmer 0.55s ease forwards;
        }
        @keyframes shimmer {
          from { left: -100%; }
          to   { left: 160%; }
        }
      `}</style>
    </section>
  );
}
