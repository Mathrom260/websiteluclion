import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServicesHero } from '@/components/sections/ServicesHero';
import { ServiceSection } from '@/components/sections/ServiceSection';
import { CtaFinal } from '@/components/sections/CtaFinal';
import { services } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Installations électriques, électricité tertiaire, tableaux, mise en conformité RGIE, câblage et maintenance : les six domaines d’intervention de Luc Lion SA en Belgique.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        {services.map((service, index) => (
          <ServiceSection key={service.slug} service={service} index={index} />
        ))}
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
