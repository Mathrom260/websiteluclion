import { Container } from '@/components/layout/Container';
import { Reveal, RevealItem } from '@/components/motion/Reveal';
import { approvals, caoSoftware, certificationGroups } from '@/lib/content';

export function Credentials() {
  return (
    <section className="bg-ink-2 py-[4.5rem] text-paper md:py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Agréations marchés publics */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[0.8125rem] tracking-[0.3em] text-paper-dim uppercase">Agréations</p>
              <h2 className="mt-4 text-[clamp(1.9rem,2.75vw,3rem)] leading-[1.1] font-normal tracking-[-0.02em]">
                Agréé pour les marchés publics.
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-paper-muted">
                Entrepreneur de travaux agréé, dans les classes et sous-catégories suivantes.
              </p>
            </Reveal>
            <ul className="mt-10 divide-y divide-line-soft border-y border-line-soft">
              {approvals.map(({ classe, category, scope }, i) => (
                <RevealItem key={category} delay={i * 0.06} className="grid gap-2 py-5 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                  <p className="text-[1.0625rem] font-medium text-accent">
                    {classe} <span className="text-paper-dim">·</span> {category}
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-paper/85">{scope}</p>
                </RevealItem>
              ))}
            </ul>
          </div>

          {/* Certifications techniques */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="text-[0.8125rem] tracking-[0.3em] text-paper-dim uppercase">Certifications</p>
              <h2 className="mt-4 text-[clamp(1.9rem,2.75vw,3rem)] leading-[1.1] font-normal tracking-[-0.02em]">
                Des qualifications constructeur, pas seulement des promesses.
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-10 sm:grid-cols-2">
              {certificationGroups.map(({ title, items }, i) => (
                <RevealItem key={title} delay={i * 0.06} className="border-l border-line-soft pl-6">
                  <h3 className="text-[1.0625rem] font-medium">{title}</h3>
                  <ul className="mt-3 space-y-2 text-[0.9375rem] leading-relaxed text-paper-muted">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </ul>
            <Reveal delay={0.2} className="mt-12 border-t border-line-soft pt-6">
              <p className="text-[0.8125rem] tracking-[0.2em] text-paper-dim uppercase">Bureau d’études</p>
              <p className="mt-2 text-[0.9375rem] text-paper/85">{caoSoftware.join(' · ')}</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
