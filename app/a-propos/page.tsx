import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageIntro } from '@/components/sections/PageIntro';
import { AboutStory } from '@/components/sections/AboutStory';
import { Values } from '@/components/sections/Values';
import { Timeline } from '@/components/sections/Timeline';
import { Credentials } from '@/components/sections/Credentials';
import { Sectors } from '@/components/sections/Sectors';
import { CtaFinal } from '@/components/sections/CtaFinal';
import { aboutFacts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Luc Lion SA, électricien industriel et tertiaire à Jemeppe-sur-Sambre depuis 1972 : deux générations, agréation marchés publics classe 4, certifications constructeur, personnel VCA.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="À propos"
          title="Une entreprise familiale,"
          highlight="depuis 1972."
          lead="Fondée par Luc Lion et développée avec son fils Michaël, la société installe, rénove et entretient les installations électriques de l'industrie et du tertiaire depuis Jemeppe-sur-Sambre."
          aside={
            <dl className="divide-y divide-line-soft border-y border-line-soft">
              {aboutFacts.map(({ value, label }) => (
                <div key={label} className="flex items-baseline justify-between gap-4 py-4">
                  <dt className="text-[0.9375rem] text-paper-muted">{label}</dt>
                  <dd className="text-[1.375rem] font-light tracking-[-0.02em] text-paper">{value}</dd>
                </div>
              ))}
            </dl>
          }
        />
        <AboutStory />
        <Values />
        <Timeline />
        <Credentials />
        <Sectors />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
