'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Shield, SlidersHorizontal, Zap } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const features = [
  {
    icon: Zap,
    title: 'Expertise B2B',
    text: 'Des solutions adaptées à vos besoins',
  },
  {
    icon: Shield,
    title: 'Qualité et sécurité',
    text: 'Des installations fiables et durables',
  },
  {
    icon: SlidersHorizontal,
    title: "De l'étude à la maintenance",
    text: 'Un accompagnement à chaque étape',
  },
];

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-ink text-paper">
      <Image
        src="/images/hero-luc-lion.webp"
        alt="Technicien Luc Lion devant une rangée d'armoires électriques industrielles"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_50%]"
      />
      {/* Voile : opaque à gauche pour le texte, presque nul à droite pour la photo. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-ink from-0% via-ink/85 via-40% to-ink/0 to-85%"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-ink/60 to-transparent"
      />

      <Container className="relative flex flex-1 flex-col justify-center pt-40 pb-14 md:pt-44">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-[51.25rem]"
        >
          <motion.p
            variants={rise}
            className="text-[0.8125rem] font-normal tracking-[0.22em] text-accent-deep uppercase sm:tracking-[0.3em]"
          >
            Votre partenaire électrique B2B
          </motion.p>

          <motion.h1
            variants={rise}
            className="mt-6 text-[clamp(2.6rem,3.8vw,4.25rem)] leading-[1.02] font-light tracking-[-0.02em] text-paper sm:leading-[0.97]"
          >
            <span className="sm:block">Des installations </span>
            <span className="sm:block">électriques qui font </span>
            <span className="text-accent sm:block">avancer votre entreprise.</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-7 max-w-[40rem] text-lg leading-relaxed text-paper/90 md:text-xl"
          >
            Luc Lion accompagne les entreprises dans leurs installations électriques, de la
            conception à la réalisation et à la maintenance.
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link
              href="/contact"
              className="group inline-flex h-[3.625rem] items-center gap-3 rounded-full bg-paper px-8 text-[1.0625rem] font-medium text-ink transition-colors duration-200 hover:bg-accent"
            >
              Parler de votre projet
              <ArrowRight
                className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>
            <Link
              href="/realisations"
              className="group inline-flex items-center gap-3 py-2 text-[1.0625rem] font-medium text-paper transition-colors duration-200 hover:text-accent"
            >
              Découvrir nos réalisations
              <ArrowRight
                className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-20 flex flex-col gap-y-6 sm:flex-row sm:flex-wrap sm:gap-y-6 sm:divide-x sm:divide-line"
        >
          {features.map(({ icon: Icon, title, text }) => (
            <motion.li
              key={title}
              variants={rise}
              className="flex items-start gap-4 sm:px-6 sm:first:pl-0 sm:last:pr-0"
            >
              <Icon className="mt-0.5 size-9 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
              <div>
                <p className="text-[1.0625rem] font-medium text-paper">{title}</p>
                <p className="mt-1 max-w-[18ch] text-[0.8125rem] leading-relaxed text-paper/70">{text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
