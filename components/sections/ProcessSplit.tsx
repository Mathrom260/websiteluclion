import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { processImage, processSteps } from '@/lib/content';

export function ProcessSplit() {
  return (
    <section className="grid bg-ink-2 text-paper lg:grid-cols-2">
      {/* Photo — bord à bord jusqu'au milieu de l'écran */}
      <div className="relative min-h-[24rem] lg:min-h-[45rem]">
        {processImage ? (
          <Image
            src={processImage.src}
            alt={processImage.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div aria-hidden className="absolute inset-0 bg-ink-soft" />
        )}

        <Reveal className="absolute bottom-8 left-6 flex items-stretch md:bottom-10 md:left-10">
          <span className="flex size-[3.25rem] shrink-0 items-center justify-center bg-accent">
            <ArrowUpRight className="size-6 text-ink" strokeWidth={1.75} aria-hidden />
          </span>
          <p className="flex items-center bg-ink/90 px-5 text-[0.875rem] leading-snug">
            Des solutions sur mesure
            <br />
            pour chaque environnement
          </p>
        </Reveal>
      </div>

      {/* Contenu — aligné sur la marge droite du conteneur */}
      <div className="flex items-center px-6 py-16 md:px-10 lg:py-20 lg:pl-20 lg:pr-[max(2.5rem,calc((100vw-93.125rem)/2+2.5rem))]">
        <Reveal className="max-w-[44rem]">
          <p className="text-[0.8125rem] tracking-[0.3em] text-paper-dim uppercase">
            De la conception à la maintenance
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,2.6vw,2.85rem)] leading-[1.12] font-normal tracking-[-0.02em]">
            <span className="lg:block">Un accompagnement </span>
            <span className="lg:block">à chaque étape.</span>
          </h2>
          <p className="mt-5 text-[1.125rem] leading-relaxed text-paper/85">
            Nous intervenons sur l&apos;ensemble du cycle de vie de vos installations
            électriques, en tenant compte de vos contraintes techniques, opérationnelles et
            budgétaires.
          </p>

          <ol className="mt-9">
            {processSteps.map(({ title, description }, i) => (
              <li key={title} className="flex gap-5 pb-7 last:pb-0">
                <div className="flex flex-col items-center">
                  <span
                    aria-hidden
                    className="mt-1.5 size-3 shrink-0 rounded-full border border-accent bg-ink-2 ring-4 ring-accent/15"
                  />
                  {i < processSteps.length - 1 ? (
                    <span aria-hidden className="mt-1.5 w-px flex-1 bg-accent/35" />
                  ) : null}
                </div>
                <div>
                  <h3 className="text-[1.125rem] leading-snug font-medium">{title}</h3>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-paper-muted">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Link
            href="/expertise"
            className="group mt-9 inline-flex items-center gap-2.5 text-[1.0625rem] font-medium text-accent transition-colors hover:text-paper"
          >
            Découvrir nos services
            <ArrowRight
              className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
              strokeWidth={1.75}
              aria-hidden
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
