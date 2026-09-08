import { Container } from '@/components/layout/Container';
import { Reveal, RevealItem } from '@/components/motion/Reveal';
import { sectorFamilies } from '@/lib/content';

export function Sectors() {
  return (
    <section className="bg-light py-[4.5rem] text-light-ink md:py-24">
      <Container>
        <Reveal className="max-w-[40rem]">
          <p className="text-[0.8125rem] tracking-[0.3em] text-paper-dim uppercase">Secteurs d’activité</p>
          <h2 className="mt-4 text-[clamp(1.9rem,2.75vw,3rem)] leading-[1.1] font-normal tracking-[-0.02em]">
            Des environnements exigeants, dans quinze secteurs.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {sectorFamilies.map(({ title, sectors }, i) => (
            <RevealItem key={title} delay={i * 0.06} className="border-l border-light-ink/10 pl-6">
              <h3 className="text-[0.8125rem] tracking-[0.2em] text-paper-dim uppercase">{title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <li
                    key={sector}
                    className="rounded-full border border-light-ink/15 px-3.5 py-1.5 text-[0.9375rem] text-light-ink/85"
                  >
                    {sector}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </ul>
      </Container>
    </section>
  );
}
