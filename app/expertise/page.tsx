import Link from 'next/link';
import { ShieldCheck, Award } from 'lucide-react';
import { NavBar } from '@/components/NavBar';
import { Expertise } from '@/components/Expertise';
import { Methode } from '@/components/Methode';
import { Footer } from '@/components/Footer';

const certifications = [
  {
    id: 'vca',
    icon: ShieldCheck,
    title: 'Certifié VCA*',
    description:
      "La certification VCA* garantit que nos équipes interviennent selon les normes de sécurité les plus strictes. Pour vous, c'est la certitude d'une intervention sans risque, sur tout type de site.",
  },
  {
    id: 'rgie',
    icon: Award,
    title: 'Agréé RGIE Art.104',
    description:
      "L'agrément RGIE Art.104 certifie la conformité totale de nos installations avec la réglementation électrique belge. Une garantie légale et technique sur chaque chantier.",
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-[#090c10] text-[#eef2f8]">
      <NavBar />

      {/* Header de page */}
      <section className="bg-[#090c10] px-6 pt-24 pb-12 text-center md:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="text-4xl font-black leading-tight text-center text-[#eef2f8] md:text-5xl">
            <span className="block">Notre expertise au service de</span>
            <span className="block">
              vos installations{' '}
              <span className="bg-linear-to-r from-[#5a90d0] to-[#1a5fb0] bg-clip-text text-transparent">
                électriques
              </span>
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#7a8a9a] md:text-lg">
            Installations, mises en conformité et maintenance — réalisées par
            des techniciens certifiés VCA* et agréés RGIE.
          </p>
        </div>
      </section>

      {/* Séparateur */}
      <div className="mx-auto max-w-6xl border-b border-white/6" />

      {/* Cards expertise */}
      <Expertise />

      {/* Méthode */}
      <Methode />

      {/* Certifications */}
      <section className="bg-[#0d1118] pt-24 pb-24">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mb-12 space-y-3 text-center">
            <h2 className="text-2xl font-extrabold text-[#eef2f8] sm:text-3xl">
              Certifications &amp; conformité
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-[#7a8a9a]">
              Nos accréditations ne sont pas que des labels — elles garantissent
              la sécurité et la conformité de chaque intervention.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certifications.map(({ id, icon: Icon, title, description }) => (
              <div
                key={id}
                className="flex flex-col gap-3 rounded-xl border border-[#1a5fb0]/20 bg-[#0d1118] p-8 transition-colors duration-200 hover:border-[#1a5fb0]/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1a2e]">
                  <Icon className="h-6 w-6 text-[#5a90d0]" />
                </div>
                <p className="text-lg font-semibold text-[#eef2f8]">{title}</p>
                <p className="text-sm leading-relaxed text-[#7a8a9a]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#090c10] py-24 text-center">
        <div className="mx-auto w-full max-w-2xl px-6 md:px-8">
          <h2 className="mx-auto max-w-2xl text-3xl font-black text-[#eef2f8] md:text-4xl">
            Un projet électrique à réaliser ?
          </h2>
          <p className="mx-auto mt-4 mb-8 max-w-xl text-base text-[#7a8a9a]">
            Contactez-nous. Nous analysons votre besoin et revenons vers vous
            avec une proposition claire et adaptée.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#1a5fb0] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a5fb0]/90"
          >
            Demander un devis
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
