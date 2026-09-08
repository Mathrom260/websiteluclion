import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageIntro } from '@/components/sections/PageIntro';
import { ContactPanel } from '@/components/sections/ContactPanel';
import { LocationBand } from '@/components/sections/LocationBand';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Un chantier à planifier ? Contactez Luc Lion SA, électricien industriel et tertiaire à Jemeppe-sur-Sambre : 071/78 80 16, info@luclion.be. Réponse rapide, sans engagement.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          eyebrow="Contact"
          title="Un chantier à planifier ?"
          highlight="Parlons-en."
          lead="Décrivez-nous votre projet : type de site, nature des travaux, contraintes. Un responsable vous recontacte rapidement pour l'étudier avec vous."
        />
        <ContactPanel />
        <LocationBand />
      </main>
      <Footer />
    </>
  );
}
