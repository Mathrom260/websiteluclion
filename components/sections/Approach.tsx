import { Container } from '@/components/layout/Container';
import { Reveal, RevealItem } from '@/components/motion/Reveal';
import { approachItems } from '@/lib/content';

export function Approach() {
  return (
    <section className="bg-ink-2 py-[4.5rem] text-paper md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-[46rem] text-center">
          <p className="text-[0.8125rem] tracking-[0.3em] text-paper-dim uppercase">
            Pour des infrastructures performantes
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,2.75vw,3rem)] leading-[1.1] font-normal tracking-[-0.02em]">
            Une approche fiable et structurée.
          </h2>
          <p className="mt-4 text-[1.125rem] leading-relaxed text-paper-muted md:text-[1.25rem]">
            Une organisation pensée pour répondre aux contraintes réelles du terrain.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-y-0">
          {approachItems.map(({ icon: Icon, title, description }, i) => (
            <RevealItem
              key={title}
              delay={i * 0.08}
              className="border-l border-line-soft pr-4 pl-7"
            >
              <Icon className="size-6 text-accent" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-5 text-[1.375rem] leading-snug font-medium">{title}</h3>
              <p className="mt-2 max-w-[28ch] text-[1.0625rem] leading-relaxed text-paper-muted">
                {description}
              </p>
            </RevealItem>
          ))}
        </ul>
      </Container>
    </section>
  );
}
