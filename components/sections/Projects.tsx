import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Reveal, RevealItem } from '@/components/motion/Reveal';
import { sectors } from '@/lib/content';

export function Projects() {
  return (
    <section className="bg-light py-[4.5rem] text-light-ink md:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-6">
            <p className="text-[0.8125rem] tracking-[0.3em] text-paper-dim uppercase">
              Des projets concrets
            </p>
            <h2 className="mt-4 text-[clamp(1.9rem,2.75vw,3rem)] leading-[1.1] font-normal tracking-[-0.02em]">
              <span className="lg:block">Ils nous font confiance </span>
              <span className="lg:block">sur le terrain.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="text-[1.0625rem] leading-relaxed text-light-ink/80 md:text-[1.125rem]">
              Depuis plus de 30 ans, nous accompagnons des entreprises de différents secteurs
              dans la réalisation de leurs projets électriques. Des environnements exigeants,
              des solutions sur mesure.
            </p>
            <Link
              href="/realisations"
              className="group mt-6 inline-flex items-center gap-2.5 text-[1rem] font-medium transition-colors hover:text-paper-dim"
            >
              Voir toutes nos réalisations
              <ArrowRight
                className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map(({ label, href, image }, i) => (
            <RevealItem key={label} delay={i * 0.08}>
              <Link href={href} className="group block">
                <div className="relative aspect-[2.1/1] overflow-hidden rounded-md bg-light-ink/8">
                  {image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]"
                    />
                  ) : null}
                </div>
                <div className="mt-4 flex items-center justify-between text-[1rem] font-medium">
                  <span>{label}</span>
                  <ArrowRight
                    className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
              </Link>
            </RevealItem>
          ))}
        </ul>
      </Container>
    </section>
  );
}
