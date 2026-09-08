import { Container } from '@/components/layout/Container';
import { Reveal, RevealItem } from '@/components/motion/Reveal';
import { milestones } from '@/lib/content';

/** Frise : horizontale sur grand écran (filet en haut), verticale en dessous (filet à gauche). */
export function Timeline() {
  return (
    <section className="bg-ink py-[4.5rem] text-paper md:py-24">
      <Container>
        <Reveal className="max-w-[40rem]">
          <p className="text-[0.8125rem] tracking-[0.3em] text-paper-dim uppercase">Historique</p>
          <h2 className="mt-4 text-[clamp(1.9rem,2.75vw,3rem)] leading-[1.1] font-normal tracking-[-0.02em]">
            Plus de cinquante ans, deux générations.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-12 max-lg:border-l max-lg:border-line-soft md:grid-cols-2 lg:grid-cols-6 lg:gap-x-6">
          {milestones.map(({ year, title, text }, i) => (
            <RevealItem
              key={year}
              delay={i * 0.07}
              className="relative max-lg:pl-8 lg:border-t lg:border-line-soft lg:pt-8"
            >
              <span
                aria-hidden
                className="absolute size-[11px] rounded-full border border-accent bg-ink ring-4 ring-accent/15 max-lg:top-2 max-lg:-left-[6px] lg:-top-[6px] lg:left-0"
              />
              <p className="text-[clamp(1.6rem,2vw,2.1rem)] leading-none font-light tracking-[-0.02em] text-paper">
                {year}
              </p>
              <h3 className="mt-4 text-[1.0625rem] leading-snug font-medium">{title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-paper-muted">{text}</p>
            </RevealItem>
          ))}
        </ol>
      </Container>
    </section>
  );
}
