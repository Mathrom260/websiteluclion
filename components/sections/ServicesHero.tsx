import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';
import { servicesHeroImage } from '@/lib/content';

export function ServicesHero() {
  return (
    <section className="relative isolate flex min-h-[38rem] flex-col overflow-hidden bg-ink text-paper">
      <Image
        src={servicesHeroImage.src}
        alt={servicesHeroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_50%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-ink from-0% via-ink/80 via-38% to-ink/10 to-80%"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-ink/60 to-transparent"
      />

      <Container className="relative flex flex-1 flex-col justify-center pt-36 pb-16 md:pt-44">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="max-w-[46rem] lg:col-span-8">
            <p className="text-[0.8125rem] tracking-[0.3em] text-accent-deep uppercase">
              Nos services
            </p>
            <h1 className="mt-5 text-[clamp(2.4rem,3.6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
              <span className="block font-light">Des solutions électriques</span>
              <span className="block font-medium text-accent">pour chaque projet.</span>
            </h1>
            <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-paper/85 md:text-xl">
              De la conception à la mise en service, nous vous accompagnons avec des solutions
              fiables, durables et conformes aux normes en vigueur.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="hidden lg:col-span-2 lg:col-start-11 lg:block">
            <p className="border-t border-line pt-4 text-[1.0625rem] leading-relaxed text-paper/90">
              Expertise.
              <br />
              Confiance.
              <br />
              Durabilité.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
