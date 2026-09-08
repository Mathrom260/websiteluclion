import { Container } from '@/components/layout/Container';
import { Reveal, RevealItem } from '@/components/motion/Reveal';
import { values } from '@/lib/content';

export function Values() {
  return (
    <section className="bg-ink-2 py-[4.5rem] text-paper md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[0.8125rem] tracking-[0.3em] text-paper-dim uppercase">Notre vocation</p>
            <h2 className="mt-4 text-[clamp(1.9rem,2.75vw,3rem)] leading-[1.1] font-normal tracking-[-0.02em]">
              Ce qui nous guide depuis le premier chantier.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-paper-muted">
              Le sérieux et le souci du travail bien fait restent, avant tout, les points forts de
              la société.
            </p>
          </Reveal>

          <ul className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:gap-x-8">
            {values.map(({ title, text }, i) => (
              <RevealItem key={title} delay={i * 0.08} className="border-l border-line-soft pl-7">
                <span aria-hidden className="block text-[0.9375rem] tracking-[0.1em] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-[1.25rem] leading-snug font-medium">{title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-paper-muted">{text}</p>
              </RevealItem>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
