import Image from 'next/image';
import { Reveal, RevealItem } from '@/components/motion/Reveal';
import { certifications, complianceImage } from '@/lib/content';

export function Compliance() {
  return (
    <section className="grid bg-ink-2 text-paper lg:grid-cols-[57fr_43fr]">
      {/* Contenu — marge gauche alignée sur le conteneur */}
      <div className="px-6 py-14 md:px-10 lg:py-16 lg:pr-16 lg:pl-[max(2.5rem,calc((100vw-93.125rem)/2+2.5rem))]">
        <Reveal>
          <p className="text-[0.8125rem] tracking-[0.3em] text-paper-dim uppercase">
            Sécurité et conformité
          </p>
          <h2 className="mt-4 max-w-[22ch] text-[clamp(1.75rem,2.2vw,2.45rem)] leading-[1.15] font-normal tracking-[-0.02em]">
            <span className="lg:block">La technique ne laisse </span>
            <span className="lg:block">pas de place à l&apos;approximation.</span>
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-line-soft">
          {certifications.map(({ icon: Icon, title, description, note }, i) => (
            <RevealItem
              key={title}
              delay={i * 0.1}
              className="flex flex-col sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <Icon className="size-7 text-accent" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-5 text-[1.125rem] leading-snug font-medium">{title}</h3>
              <p className="mt-2 max-w-[34ch] text-[0.9375rem] leading-relaxed text-paper-muted">
                {description}
              </p>
              {note ? <p className="mt-3 text-[0.9375rem] leading-relaxed">{note}</p> : null}
              <span aria-hidden className="mt-5 h-0.5 w-8 bg-accent" />
            </RevealItem>
          ))}
        </ul>
      </div>

      {/* Photo — se fond dans le bleu nuit sur son bord gauche */}
      <div className="relative min-h-[18rem] lg:min-h-0">
        {complianceImage ? (
          <Image
            src={complianceImage.src}
            alt={complianceImage.alt}
            fill
            sizes="(min-width: 1024px) 43vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div aria-hidden className="absolute inset-0 bg-ink-soft" />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-r from-ink-2 from-0% via-ink-2/30 via-35% to-transparent to-70%"
        />
        <Reveal className="absolute right-6 bottom-8 max-w-[18rem] text-[0.9375rem] leading-snug md:right-10">
          Des installations sûres,
          <br />
          pour durer dans le temps.
        </Reveal>
      </div>
    </section>
  );
}
