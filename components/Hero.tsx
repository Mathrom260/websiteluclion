'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      id="hero"
      className="relative flex min-h-0 flex-col items-center justify-center overflow-hidden bg-[#090c10] px-6 pt-16 pb-12 text-center"
    >
      {/* Background parallax */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        {/* Grid technique */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(90,144,208,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(90,144,208,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          }}
        />

        {/* Glow principal animé */}
        <div
          className="absolute"
          style={{
            width: '600px',
            height: '300px',
            borderRadius: '9999px',
            background: 'radial-gradient(ellipse at center, rgba(26,95,176,0.18) 0%, transparent 70%)',
            left: '50%',
            top: '50%',
            animation: 'glowPulse 6s ease-in-out infinite',
          }}
        />

        {/* Second glow décalé */}
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '200px',
            borderRadius: '9999px',
            background: 'radial-gradient(ellipse at center, rgba(90,144,208,0.08) 0%, transparent 70%)',
            left: '50%',
            top: '50%',
            animation: 'glowDrift 8s ease-in-out infinite',
          }}
        />
      </motion.div>

      {/* Contenu — fixe, pas de parallax */}
      <div className="relative z-10 mx-auto w-full max-w-4xl space-y-8 text-center">
        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#5a90d0]/30 bg-[#0d1a2e] px-4 py-1.5"
        >
          <ShieldCheck className="h-3.5 w-3.5 animate-pulse text-[#5a90d0] opacity-70" />
          <span className="text-xs font-medium tracking-wide text-[#5a90d0]">
            Spécialiste des installations électriques professionnelles
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="text-4xl font-black leading-[1.1] tracking-tight text-[#eef2f8] md:text-5xl"
        >
          <span className="block">Installations électriques fiables</span>
          <span className="block">
            pour bâtiments industriels et{' '}
            <span className="bg-linear-to-r from-[#5a90d0] to-[#1a5fb0] bg-clip-text text-transparent">
              tertiaires
            </span>
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="mx-auto max-w-2xl text-base leading-relaxed text-[#7a8a9a] md:text-lg"
        >
          Nous accompagnons entreprises, promoteurs et gestionnaires de sites dans leurs projets électriques : installations, rénovations et mises en conformité, avec une exigence forte sur la sécurité, les délais et la fiabilité.
        </motion.p>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.35 }}
          className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href="/contact"
            className="shimmer-btn relative overflow-hidden rounded-xl bg-[#1a5fb0] px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[#1650a0] hover:shadow-[0_0_20px_rgba(26,95,176,0.4)]"
          >
            Demander un devis
          </Link>
          <Link
            href="/expertise"
            className="rounded-xl border border-[rgba(255,255,255,0.12)] bg-transparent px-8 py-3 text-sm text-[#c8d8f0] transition-all duration-200 hover:scale-[1.02] hover:bg-white/10 hover:shadow-[0_0_12px_rgba(90,144,208,0.15)]"
          >
            Découvrir nos services
          </Link>
        </motion.div>

        {/* Micro-copy */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.45 }}
          className="mt-3 text-center text-xs text-[#7a8a9a]"
        >
          Réponse rapide — analyse professionnelle de votre besoin
        </motion.p>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 1;   transform: translate(-50%, -52%) scale(1.08); }
        }
        @keyframes glowDrift {
          0%, 100% { opacity: 0.4; transform: translate(-30%, -60%) scale(1); }
          50%       { opacity: 0.7; transform: translate(-35%, -65%) scale(1.05); }
        }
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
