import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageIntro } from '@/components/sections/PageIntro';
import { ProjectsShowcase } from '@/components/sections/ProjectsShowcase';
import { Clients } from '@/components/sections/Clients';
import { CtaFinal } from '@/components/sections/CtaFinal';

export const metadata: Metadata = {
  title: 'Réalisations',
  description:
    'Chantiers électriques industriels, tertiaires et logistiques réalisés par Luc Lion SA en Belgique : installations, tableaux, mise en conformité RGIE, maintenance.',
};

const facts = [
  { value: '+30', label: "ans d'expérience" },
  { value: '+500', label: 'projets réalisés' },
  { value: 'RGIE · VCA*', label: 'certifications' },
];

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Nos réalisations"
          title="Des installations qui tiennent"
          highlight="dans le temps."
          lead="Industrie, tertiaire, logistique : une sélection de chantiers qui montrent comment nous travaillons, de l'étude à la mise en service."
          aside={
            <dl className="divide-y divide-line-soft border-y border-line-soft">
              {facts.map(({ value, label }) => (
                <div key={label} className="flex items-baseline justify-between gap-4 py-4">
                  <dt className="text-[0.9375rem] text-paper-muted">{label}</dt>
                  <dd className="text-[1.375rem] font-light tracking-[-0.02em] text-paper">{value}</dd>
                </div>
              ))}
            </dl>
          }
        />
        <ProjectsShowcase />
        <Clients />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
