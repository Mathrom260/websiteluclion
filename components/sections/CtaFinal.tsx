import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';
import { ctaImage } from '@/lib/content';

export function CtaFinal() {
  return (
    <section className="relative isolate flex min-h-[27rem] items-center overflow-hidden bg-ink text-paper">
      {ctaImage ? (
        <Image
          src={ctaImage.src}
          alt={ctaImage.alt}
          fill
          sizes="100vw"
          className="object-cover object-[65%_50%]"
        />
      ) : (
        <div aria-hidden className="absolute inset-0 bg-ink-soft" />
      )}
      {/* Voile desktop : opaque sur le tiers gauche pour le texte, transparent sur le bâtiment. */}
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-linear-to-r from-ink from-0% via-ink/85 via-32% to-ink/0 to-68% lg:block"
      />
      {/* Voile mobile : la photo est recadrée trop serré pour cohabiter avec le texte. */}
      <div aria-hidden className="absolute inset-0 bg-ink/85 lg:hidden" />

      <Container className="relative py-16">
        <Reveal className="max-w-[40rem]">
          <h2 className="text-[clamp(2rem,3vw,3.25rem)] leading-[1.08] tracking-[-0.02em]">
            <span className="block font-normal">Un projet électrique ?</span>
            <span className="block font-medium text-accent">Parlons-en.</span>
          </h2>
          <p className="mt-5 max-w-[36rem] text-[1.125rem] leading-relaxed text-paper/90">
            Notre équipe est à votre écoute pour étudier votre projet et vous proposer une
            solution sur mesure.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link
              href="/contact"
              className="group inline-flex h-[3.625rem] items-center gap-3 rounded-full bg-paper px-8 text-[1.0625rem] font-medium text-ink transition-colors duration-200 hover:bg-accent"
            >
              Demander un devis
              <ArrowRight
                className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 py-2 text-[1.0625rem] font-medium text-paper transition-colors duration-200 hover:text-accent"
            >
              Nous contacter
              <ArrowRight
                className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
