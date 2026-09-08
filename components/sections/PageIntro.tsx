import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/motion/Reveal';

type PageIntroProps = {
  eyebrow: string;
  /** Première ligne du titre (blanc). */
  title: string;
  /** Seconde ligne du titre (accent). */
  highlight?: string;
  lead?: string;
  /** Contenu optionnel en colonne droite (faits clés, repères…). */
  aside?: React.ReactNode;
};

/** En-tête de page intérieure : le header absolu se pose dessus, comme sur le hero. */
export function PageIntro({ eyebrow, title, highlight, lead, aside }: PageIntroProps) {
  return (
    <section className="bg-ink pt-36 pb-14 text-paper md:pt-44 md:pb-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="max-w-[46rem] lg:col-span-8">
            <p className="text-[0.8125rem] tracking-[0.3em] text-accent-deep uppercase">{eyebrow}</p>
            <h1 className="mt-5 text-[clamp(2.4rem,3.6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
              <span className="block font-light">{title}</span>
              {highlight ? <span className="block font-medium text-accent">{highlight}</span> : null}
            </h1>
            {lead ? (
              <p className="mt-6 max-w-[40rem] text-lg leading-relaxed text-paper/85 md:text-xl">
                {lead}
              </p>
            ) : null}
          </Reveal>
          {aside ? (
            <Reveal delay={0.15} className="lg:col-span-3 lg:col-start-10">
              {aside}
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
