import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import type { Service } from '@/lib/content';
import { cn } from '@/lib/utils';

type ServiceSectionProps = {
  service: Service;
  /** Position dans la liste (0-based) : numéro affiché et alternance photo / texte. */
  index: number;
};

const containerPadLeft = 'lg:pl-[max(2.5rem,calc((100vw-93.125rem)/2+2.5rem))]';
const containerPadRight = 'lg:pr-[max(2.5rem,calc((100vw-93.125rem)/2+2.5rem))]';

/**
 * Une section par service, ancrée sur son slug (menu Services, footer, formulaire).
 * Texte à gauche pour les indices pairs, photo à gauche pour les impairs.
 */
export function ServiceSection({ service, index }: ServiceSectionProps) {
  const { slug, label, description, features, image } = service;
  const photoLeft = index % 2 === 1;
  const number = String(index + 1).padStart(2, '0');

  return (
    <section
      id={slug}
      aria-labelledby={`${slug}-title`}
      className={cn('grid text-paper lg:grid-cols-2', photoLeft ? 'bg-ink-2' : 'bg-ink')}
    >
      {/* Photo — pleine hauteur sur desktop, bandeau 16/10 sur mobile */}
      <div
        className={cn(
          'relative aspect-[16/10] lg:aspect-auto lg:min-h-[40rem]',
          photoLeft ? 'lg:order-1' : 'lg:order-2',
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        {/* Fondu vers le fond de section, côté texte. */}
        <div
          aria-hidden
          className={cn(
            'absolute inset-0 max-lg:hidden',
            photoLeft
              ? 'bg-linear-to-l from-ink-2 from-0% via-ink-2/30 via-14% to-transparent to-40%'
              : 'bg-linear-to-r from-ink from-0% via-ink/30 via-14% to-transparent to-40%',
          )}
        />
        <div
          aria-hidden
          className={cn(
            'absolute inset-0 bg-linear-to-b from-transparent from-60% lg:hidden',
            photoLeft ? 'to-ink-2' : 'to-ink',
          )}
        />
      </div>

      {/* Contenu — aligné sur la marge du conteneur côté extérieur */}
      <div
        className={cn(
          'flex items-center px-6 py-14 md:px-10 lg:py-24',
          photoLeft ? cn('lg:order-2 lg:pl-20', containerPadRight) : cn('lg:order-1 lg:pr-20', containerPadLeft),
        )}
      >
        <Reveal className="max-w-[36rem]">
          <p className="flex items-center gap-4 text-[0.9375rem] tracking-[0.1em] text-accent">
            <span>{number}</span>
            <span aria-hidden className="h-px w-24 bg-accent/50" />
          </p>
          <h2
            id={`${slug}-title`}
            className="mt-8 max-w-[14ch] text-[clamp(2rem,3vw,3.25rem)] leading-[1.05] font-light tracking-[-0.02em]"
          >
            {label}
          </h2>
          <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-relaxed text-paper-muted md:text-lg">
            {description}
          </p>
          <ul className="mt-10 flex flex-wrap gap-x-12 gap-y-7">
            {features.map(({ icon: Icon, label: featureLabel }) => (
              <li key={featureLabel} className="flex flex-col gap-3">
                <Icon className="size-7 text-accent" strokeWidth={1.5} aria-hidden />
                <span className="text-[0.9375rem] text-paper/85">{featureLabel}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
